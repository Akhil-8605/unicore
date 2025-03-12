import { useEffect, useState } from "react";
import { Upload, Pencil, Trash2 } from "lucide-react";
import "./AdminImageGallery.css";
import AdminPortalLayout from "./AdminPortalLayout";
import { IKContext, IKUpload } from "imagekitio-react";
import { ImageGalleryProvider } from "../context";

// Firestore imports (modular v9)
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { firestore } from "../Authentication/firebase"; // Adjust the path as needed

export default function GalleryAdminPage() {
  const [activeTab, setActiveTab] = useState("gallery");
  const [imageGallery, setImageGallery] = useState([]);
  const [editingImage, setEditingImage] = useState(null);
  const [imageUploadedData, setImageUploadedData] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState(null);
  // States for replacement image in the edit modal
  const [replacementPreview, setReplacementPreview] = useState(null);
  const [replacementImageData, setReplacementImageData] = useState(null);

  const urlEndpoint = process.env.REACT_APP_IMAGEKIT_URL_ENDPOINT;
  const publicKey = process.env.REACT_APP_IMAGEKIT_PUBLIC_KEY;

  // Authenticator for ImageKit upload requests
  const authenticator = async () => {
    try {
      const response = await fetch("http://localhost:4000/auth");
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Request failed with status ${response.status}: ${errorText}`);
      }
      const data = await response.json();
      const { signature, expire, token } = data;
      console.log(data);
      return { signature, expire, token };
    } catch (error) {
      throw new Error(`Authentication request failed: ${error.message}`);
    }
  };

  // Fetch images from Firestore when the component mounts
  useEffect(() => {
    async function fetchImages() {
      try {
        const querySnapshot = await getDocs(collection(firestore, "galleryImages"));
        const images = [];
        querySnapshot.forEach((docSnap) => {
          images.push({ id: docSnap.id, ...docSnap.data() });
        });
        setImageGallery(images);
      } catch (error) {
        console.error("Error fetching images from Firestore", error);
      }
    }
    fetchImages();
  }, []);

  // Delete image: remove from Firestore and call backend to delete from ImageKit
  const deleteImage = async (docId, fileId) => {
    try {
      await deleteDoc(doc(firestore, "galleryImages", docId));
    } catch (error) {
      console.error("Error deleting from Firestore", error);
      alert("Error deleting image from database");
      return;
    }
    try {
      await fetch("http://localhost:4000/deleteImage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileId: fileId }),
      });
    } catch (error) {
      console.error("Error deleting from ImageKit", error);
      alert("Error deleting image from ImageKit");
    }
    setImageGallery(imageGallery.filter((img) => img.id !== docId));
  };

  // Open the edit modal with the selected image details
  const handleEdit = (image) => {
    setEditingImage(image);
    setIsDialogOpen(true);
  };

  // Update image details and optionally replace the image file
  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newTitle = formData.get("title");

    let updatedFields = {
      title: newTitle,
    };

    // If a replacement image was uploaded, update the image link and delete the old one from ImageKit
    if (replacementImageData) {
      try {
        await fetch("http://localhost:4000/deleteImage", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fileId: editingImage.fileId }),
        });
      } catch (error) {
        console.error("Error deleting old image from ImageKit", error);
      }
      updatedFields.imageLink = replacementImageData.url;
      updatedFields.fileId = replacementImageData.fileId;
    }

    try {
      const docRef = doc(firestore, "galleryImages", editingImage.id);
      await updateDoc(docRef, updatedFields);
    } catch (error) {
      console.error("Error updating Firestore record", error);
      alert("Error updating image in database");
      return;
    }

    const updatedImage = { ...editingImage, ...updatedFields };
    setImageGallery(imageGallery.map((img) => (img.id === editingImage.id ? updatedImage : img)));
    setIsDialogOpen(false);
    setReplacementPreview(null);
    setReplacementImageData(null);
  };

  // Show a preview when selecting a new image for upload
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Add a new image: upload to ImageKit then store the image link and title in Firestore
  const addImage = async (e) => {
    e.preventDefault();
    if (!imageUploadedData) {
      alert("Network Error");
      return;
    }
    const title = e.target.title.value;
    try {
      const docRef = await addDoc(collection(firestore, "galleryImages"), {
        imageLink: imageUploadedData.url,
        title: title,
        fileId: imageUploadedData.fileId,
      });
      const newImage = {
        id: docRef.id,
        imageLink: imageUploadedData.url,
        title: title,
        fileId: imageUploadedData.fileId,
      };
      setImageGallery([...imageGallery, newImage]);
      alert("Image uploaded successfully!");
      setPreview(null);
      setIsUploading(false);
      setActiveTab("gallery");
    } catch (error) {
      console.error("Error saving to Firestore", error);
      alert("Error saving image to database");
    }
  };

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <AdminPortalLayout />
      <div className="admin-image-container">
        <div className="admin-image-card">
          <div className="admin-image-card-header">
            <h1>Gallery Management</h1>
          </div>
          <div className="admin-image-tabs">
            <button
              className={`admin-image-tab ${activeTab === "gallery" ? "active" : ""}`}
              onClick={() => setActiveTab("gallery")}
            >
              Gallery
            </button>
            <button
              className={`admin-image-tab ${activeTab === "upload" ? "active" : ""}`}
              onClick={() => setActiveTab("upload")}
            >
              Upload New Image
            </button>
          </div>

          {activeTab === "gallery" && (
            <div className="admin-image-gallery-grid">
              {imageGallery.map((image) => (
                <div key={image.id} className="admin-image-gallery-item">
                  <div className="admin-image-image-container">
                    <img src={image.imageLink || "/placeholder.svg"} alt={image.title} />
                    <div className="admin-image-image-overlay">
                      <button
                        className="admin-image-edit-button"
                        onClick={() => handleEdit(image)}
                      >
                        <Pencil />
                      </button>
                      <button
                        className="admin-image-delete-button"
                        onClick={() => deleteImage(image.id, image.fileId)}
                      >
                        <Trash2 />
                      </button>
                    </div>
                  </div>
                  <div className="admin-image-image-info">
                    <h3>{image.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "upload" && (
            <div>
              <ImageGalleryProvider value={{ addImage, deleteImage, imageGallery }}>
                <form onSubmit={addImage} className="admin-image-upload-form" id="form">
                  <div className="admin-image-form-group">
                    <label htmlFor="image">Gallery Image</label>
                    <div className="admin-image-upload-container">
                      <div className="admin-image-preview-container">
                        {preview ? (
                          <img src={preview || "/placeholder.svg"} alt="Preview" />
                        ) : (
                          <div className="admin-image-upload-placeholder">
                            <Upload />
                          </div>
                        )}
                      </div>
                      <IKContext
                        publicKey={publicKey}
                        urlEndpoint={urlEndpoint}
                        authenticator={authenticator}
                      >
                        <p>Upload an image</p>
                        <IKUpload
                          fileName="image-gallery.png"
                          onError={(error) => {
                            console.error("Error uploading image: ", error);
                            alert("Error uploading image: Network Error");
                          }}
                          onSuccess={(data) => {
                            setImageUploadedData(data);
                            console.log("Image uploaded successfully: ", data);
                          }}
                          onChange={handleImageChange}
                        />
                      </IKContext>
                    </div>
                  </div>
                  <div className="admin-image-form-group">
                    <label htmlFor="title">Image Title</label>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      required
                      placeholder="Enter a title for the image"
                    />
                  </div>
                  <button type="submit" className="admin-image-submit-button" disabled={isUploading}>
                    {isUploading ? "Uploading..." : "Upload to Gallery"}
                  </button>
                </form>
              </ImageGalleryProvider>
            </div>
          )}

          {isDialogOpen && editingImage && (
            <div className="admin-image-modal-overlay">
              <div className="admin-image-modal">
                <div className="admin-image-modal-header">
                  <h2>Edit Image Details</h2>
                  <button
                    className="admin-image-close-button"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    ×
                  </button>
                </div>
                <form onSubmit={handleUpdate} className="admin-image-edit-form">
                  <div className="admin-image-form-group" style={{ width: "450px", maxWidth: "90%" }}>
                    <label htmlFor="admin-image-edit-title">Title</label>
                    <input
                      id="edit-title"
                      name="title"
                      type="text"
                      defaultValue={editingImage?.title}
                      required
                    />
                  </div>
                  {/* Replacement image upload section */}
                  <div className="admin-image-form-group" style={{ width: "450px" }}>
                    <label htmlFor="replacement">Replace Image (optional)</label>
                    <div className="admin-image-upload-container">
                      <div style={{ width: "450px", maxWidth: "90%" , margin: "0 auto"}}>
                        {replacementPreview ? (
                          <div className="admin-image-image-container">
                            <img
                              src={replacementPreview || "/placeholder.svg"}
                              alt={editingImage.title}
                            />
                          </div>
                        ) : (
                          <div className="admin-image-upload-placeholder">
                            <Upload />
                          </div>
                        )}
                      </div>
                      <IKContext
                        publicKey={publicKey}
                        urlEndpoint={urlEndpoint}
                        authenticator={authenticator}
                      >
                        <IKUpload
                          fileName="replacement-image.png"
                          onError={(error) => {
                            console.error("Error uploading replacement image: ", error);
                            alert("Error uploading replacement image");
                          }}
                          onSuccess={(data) => {
                            setReplacementImageData(data);
                            console.log("Replacement image uploaded successfully: ", data);
                          }}
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onloadend = () => {
                                setReplacementPreview(reader.result);
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                        />
                      </IKContext>
                    </div>
                  </div>
                  <div className="admin-image-modal-actions">
                    <button
                      type="button"
                      className="admin-image-cancel-button"
                      onClick={() => setIsDialogOpen(false)}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="admin-image-save-button">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

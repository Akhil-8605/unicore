import { useState, useEffect } from "react";
import { Upload, Pencil, Trash2 } from "lucide-react";
import "./AdminImageGallery.css";
import AdminPortalLayout from "./AdminPortalLayout";

// ImageKit API endpoints
const IMAGEKIT_UPLOAD_URL = "https://upload.imagekit.io/api/v1/files/upload";
const IMAGEKIT_LIST_URL = "https://api.imagekit.io/v1/files"; // Listing files (requires auth)
const IMAGEKIT_DELETE_URL = (fileId) => `https://api.imagekit.io/v1/files/${fileId}`;

// Environment variables
const PUBLIC_KEY = process.env.REACT_APP_IMAGEKIT_PUBLIC_KEY;
const UPLOAD_PRESET = process.env.REACT_APP_IMAGEKIT_UPLOAD_PRESET;
const URL_ENDPOINT = process.env.REACT_APP_IMAGEKIT_URL_ENDPOINT;
const PRIVATE_KEY = process.env.REACT_APP_IMAGEKIT_PRIVATE_KEY; 

export default function GalleryAdminPage() {
  const [activeTab, setActiveTab] = useState("gallery");
  const [images, setImages] = useState([]);
  const [editingImage, setEditingImage] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [uploadFile, setUploadFile] = useState(null);
  const [editFile, setEditFile] = useState(null);

  // Fetch images from ImageKit on mount
  useEffect(() => {
    fetchImages();
  }, []);

  // Fetch images using ImageKit List API
  const fetchImages = async () => {
    try {
      const response = await fetch(IMAGEKIT_LIST_URL, {
        headers: {
          Authorization: "Basic " + btoa(PUBLIC_KEY + ":" + PRIVATE_KEY),
        },
      });
      const data = await response.json();
      // The list API returns an array of file objects in data.results
      setImages(data.results || []);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  // Upload a new image via ImageKit
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!uploadFile) {
      alert("Please select an image file to upload.");
      return;
    }
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", uploadFile);
      formData.append("fileName", uploadFile.name);
      formData.append("upload_preset", UPLOAD_PRESET);
      // Append custom metadata (as a JSON string)
      formData.append(
        "customMetadata",
        JSON.stringify({
          title: e.currentTarget.title.value,
          description: e.currentTarget.description.value,
          alt: e.currentTarget.alt.value,
        })
      );

      const response = await fetch(IMAGEKIT_UPLOAD_URL, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error.message);
      }
      alert("Image uploaded successfully!");
      e.currentTarget.reset();
      setPreview(null);
      setUploadFile(null);
      fetchImages();
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  // Delete an image using ImageKit Delete API
  const handleDelete = async (fileId) => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;
    try {
      const response = await fetch(IMAGEKIT_DELETE_URL(fileId), {
        method: "DELETE",
        headers: {
          Authorization: "Basic " + btoa(PUBLIC_KEY + ":" + PRIVATE_KEY),
        },
      });
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error.message);
      }
      fetchImages();
    } catch (error) {
      console.error("Error deleting image:", error);
      alert("Failed to delete image. Please try again.");
    }
  };

  // Open the edit modal with the selected image data
  const handleEdit = (image) => {
    setEditingImage(image);
    setIsDialogOpen(true);
  };

  // Update image by re-uploading with new metadata (since direct metadata update isn’t supported)
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editingImage) return;

    // In this demo, if a new file is provided, we re-upload the image with new metadata and delete the old one.
    if (editFile) {
      try {
        const formData = new FormData();
        formData.append("file", editFile);
        formData.append("fileName", editFile.name);
        formData.append("upload_preset", UPLOAD_PRESET);
        formData.append(
          "customMetadata",
          JSON.stringify({
            title: e.currentTarget.title.value,
            description: e.currentTarget.description.value,
            alt: e.currentTarget.alt.value,
          })
        );

        const response = await fetch(IMAGEKIT_UPLOAD_URL, {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error.message);
        }
        // Delete the old image file
        await handleDelete(editingImage.fileId);
        alert("Image updated successfully!");
        fetchImages();
        setIsDialogOpen(false);
        setEditingImage(null);
        setEditFile(null);
      } catch (error) {
        console.error("Error updating image file:", error);
        alert("Failed to update image file. Please try again.");
      }
    } else {
      // Updating metadata without file replacement isn’t supported via ImageKit’s API directly.
      alert("Updating metadata without file replacement is not supported in this demo.");
    }
  };

  // Handle file selection for new uploads
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Handle file selection for replacing an image in the edit modal
  const handleEditImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setEditFile(file);
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
              Gallery Images
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
              {images.map((image) => (
                <div key={image.fileId || image.id} className="admin-image-gallery-item">
                  <div className="admin-image-image-container">
                    <img
                      src={image.url || "/placeholder.svg"}
                      alt={image.customMetadata?.alt || "Image"}
                    />
                    <div className="admin-image-image-overlay">
                      <button
                        className="admin-image-edit-button"
                        onClick={() => handleEdit(image)}
                      >
                        <Pencil />
                      </button>
                      <button
                        className="admin-image-delete-button"
                        onClick={() => handleDelete(image.fileId)}
                      >
                        <Trash2 />
                      </button>
                    </div>
                  </div>
                  <div className="admin-image-image-info">
                    <h3>{image.customMetadata?.title || "No Title"}</h3>
                    <p>{image.customMetadata?.description || ""}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "upload" && (
            <form onSubmit={handleUpload} className="admin-image-upload-form">
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
                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    required
                    onChange={handleImageChange}
                  />
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

              <div className="admin-image-form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  required
                  placeholder="Describe the image content"
                />
              </div>

              <div className="admin-image-form-group">
                <label htmlFor="alt">Alt Text</label>
                <input
                  id="alt"
                  name="alt"
                  type="text"
                  required
                  placeholder="Provide alternative text for accessibility"
                />
              </div>

              <button
                type="submit"
                className="admin-image-submit-button"
                disabled={isUploading}
              >
                {isUploading ? "Uploading..." : "Upload to Gallery"}
              </button>
            </form>
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
                    &times;
                  </button>
                </div>
                <form onSubmit={handleUpdate} className="admin-image-edit-form">
                  <div className="admin-image-form-group">
                    <label htmlFor="edit-title">Title</label>
                    <input
                      id="edit-title"
                      name="title"
                      type="text"
                      defaultValue={editingImage.customMetadata?.title || ""}
                      required
                    />
                  </div>

                  <div className="admin-image-form-group">
                    <label htmlFor="edit-description">Description</label>
                    <textarea
                      id="edit-description"
                      name="description"
                      defaultValue={editingImage.customMetadata?.description || ""}
                      required
                    />
                  </div>

                  <div className="admin-image-form-group">
                    <label htmlFor="edit-alt">Alt Text</label>
                    <input
                      id="edit-alt"
                      name="alt"
                      type="text"
                      defaultValue={editingImage.customMetadata?.alt || ""}
                      required
                    />
                  </div>

                  <div className="admin-image-form-group">
                    <label htmlFor="edit-image">Replace Image (optional)</label>
                    <input
                      id="edit-image"
                      type="file"
                      accept="image/*"
                      onChange={handleEditImageChange}
                    />
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

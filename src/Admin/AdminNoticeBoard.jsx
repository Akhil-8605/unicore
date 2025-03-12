import { useEffect, useState } from "react";
import { Upload, Trash2 } from "lucide-react";
import "./AdminImageGallery.css"; // Reusing the same styles
import AdminPortalLayout from "./AdminPortalLayout";
import { IKContext, IKUpload } from "imagekitio-react";

// Firestore imports (modular v9)
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { firestore } from "../Authentication/firebase"; // Adjust the path as needed

export default function AdminNoticePage() {
    const [activeTab, setActiveTab] = useState("gallery");
    const [noticeGallery, setNoticeGallery] = useState([]);
    const [imageUploadedData, setImageUploadedData] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [preview, setPreview] = useState(null);

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
            return { signature, expire, token };
        } catch (error) {
            throw new Error(`Authentication request failed: ${error.message}`);
        }
    };

    // Fetch notice images from Firestore when the component mounts
    useEffect(() => {
        async function fetchNotices() {
            try {
                const querySnapshot = await getDocs(collection(firestore, "NoticeboradImages"));
                const images = [];
                querySnapshot.forEach((docSnap) => {
                    images.push({ id: docSnap.id, ...docSnap.data() });
                });
                setNoticeGallery(images);
            } catch (error) {
                console.error("Error fetching notices from Firestore", error);
            }
        }
        fetchNotices();
    }, []);

    // Delete image: remove from Firestore and call backend to delete from ImageKit
    const deleteNotice = async (docId, fileId) => {
        try {
            await deleteDoc(doc(firestore, "NoticeboradImages", docId));
            await fetch("http://localhost:4000/deleteImage", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fileId: fileId }),
            });
            setNoticeGallery(noticeGallery.filter((img) => img.id !== docId));
        } catch (error) {
            console.error("Error deleting notice", error);
            alert("Error deleting notice");
        }
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

    // Add a new notice image: upload to ImageKit then store in Firestore
    const addNotice = async (e) => {
        e.preventDefault();
        if (!imageUploadedData) {
            alert("Network Error");
            return;
        }
        try {
            const docRef = await addDoc(collection(firestore, "NoticeboradImages"), {
                imageLink: imageUploadedData.url,
                fileId: imageUploadedData.fileId,
            });
            const newNotice = {
                id: docRef.id,
                imageLink: imageUploadedData.url,
                fileId: imageUploadedData.fileId,
            };
            setNoticeGallery([...noticeGallery, newNotice]);
            alert("Notice image uploaded successfully!");
            setPreview(null);
            setIsUploading(false);
            setActiveTab("gallery");
        } catch (error) {
            console.error("Error saving to Firestore", error);
            alert("Error saving notice to database");
        }
    };

    return (
        <div style={{ display: "flex", width: "100%" }}>
            <AdminPortalLayout />
            <div className="admin-image-container">
                <div className="admin-image-card">
                    <div className="admin-image-card-header">
                        <h1>Notice Board Management</h1>
                    </div>
                    <div className="admin-image-tabs">
                        <button
                            className={`admin-image-tab ${activeTab === "gallery" ? "active" : ""}`}
                            onClick={() => setActiveTab("gallery")}
                        >
                            Notice Board
                        </button>
                        <button
                            className={`admin-image-tab ${activeTab === "upload" ? "active" : ""}`}
                            onClick={() => setActiveTab("upload")}
                        >
                            Upload New Notice
                        </button>
                    </div>

                    {activeTab === "gallery" && (
                        <div className="admin-image-gallery-grid">
                            {noticeGallery.map((notice) => (
                                <div key={notice.id} className="admin-image-gallery-item">
                                    <div className="admin-image-image-container">
                                        <img src={notice.imageLink || "/placeholder.svg"} alt="Notice" />
                                        <div className="admin-image-image-overlay">
                                            <button
                                                className="admin-image-delete-button"
                                                onClick={() => deleteNotice(notice.id, notice.fileId)}
                                            >
                                                <Trash2 />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "upload" && (
                        <div>
                            <form onSubmit={addNotice} className="admin-image-upload-form" id="form">
                                <div className="admin-image-form-group">
                                    <label htmlFor="image">Notice Image</label>
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
                                                fileName="notice-image.png"
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
                                <button type="submit" className="admin-image-submit-button" disabled={isUploading}>
                                    {isUploading ? "Uploading..." : "Upload to Notice Board"}
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

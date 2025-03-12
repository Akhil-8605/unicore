import { useState, useEffect } from "react";
import "./EventsSectionImages.css";
import loader from "../../Images/loading.gif";

// Firestore imports (modular v9)
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../Authentication/firebase"; // Adjust the path as needed

// Random rotation for notices
const getRandomRotation = () => {
    return Math.random() * 6 - 3; // Between -3 and 3 degrees
};

// Random pin colors
const pinColorsArray = ["#e74c3c", "#3498db", "#f1c40f", "#2ecc71", "#9b59b6"];
const getRandomPinColor = () => {
    return pinColorsArray[Math.floor(Math.random() * pinColorsArray.length)];
};

export default function NoticeBoard() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [rotations, setRotations] = useState([]);
    const [pinPositions, setPinPositions] = useState([]);
    const [pinColors, setPinColors] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    // Fetch notice images from Firestore's "NoticeboradImages" collection
    useEffect(() => {
        async function fetchNotices() {
            try {
                const querySnapshot = await getDocs(collection(firestore, "NoticeboradImages"));
                const imgs = [];
                querySnapshot.forEach((docSnap) => {
                    imgs.push({ id: docSnap.id, ...docSnap.data() });
                });
                setImages(imgs);

                // Generate random rotations and pin positions for each notice
                const newRotations = imgs.map(() => getRandomRotation());
                const newPinPositions = imgs.map(() => ({
                    left: 15 + Math.random() * 70, // Between 15% and 85%
                    top: 5 + Math.random() * 10, // Between 5% and 15%
                }));
                const newPinColors = imgs.map(() => getRandomPinColor());
                setRotations(newRotations);
                setPinPositions(newPinPositions);
                setPinColors(newPinColors);
            } catch (error) {
                console.error("Error fetching notices:", error);
            }
            setIsLoading(false);
        }
        fetchNotices();
    }, []);

    // Close modal when Escape key is pressed
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setSelectedImage(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="events-section-image-spinner">
                    <img src={loader} alt="Loading..." />
                </div>
                <p>Loading Notice Board...</p>
            </div>
        );
    }

    return (
        <div className="events-section-notice-board-container">
            <h2 className="courses-section-courses-title">Notice Board</h2>

            <div className="events-section-notice-board-wrapper">
                {/* Hanging elements */}
                <div className="events-section-hanging-pin"></div>
                <div className="events-section-hanging-string left"></div>
                <div className="events-section-hanging-string right"></div>

                {/* Board */}
                <div className="events-section-notice-board">
                    <div className="events-section-notices-grid">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="events-section-notice-item"
                                onClick={() => setSelectedImage(image)}
                                style={{ transform: `rotate(${rotations[index]}deg)` }}
                            >
                                {/* Pin */}
                                <div
                                    className="events-section-notice-pin"
                                    style={{
                                        left: `${pinPositions[index]?.left || 50}%`,
                                        backgroundColor: pinColors[index],
                                    }}
                                ></div>

                                {/* Notice */}
                                <div className="events-section-notice-paper">
                                    <div className="events-section-notice-image-container">
                                        <img
                                            src={image.imageLink || "/placeholder.svg"}
                                            alt={`Notice ${index + 1}`}
                                            className="events-section-notice-image"
                                        />
                                        {/* Overlay on hover */}
                                        <div className="events-section-notice-overlay">
                                            <div className="events-section-view-button">
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <circle cx="11" cy="11" r="8"></circle>
                                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                                    <line x1="11" y1="8" x2="11" y2="14"></line>
                                                    <line x1="8" y1="11" x2="14" y2="11"></line>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Board shadow */}
            <div className="events-section-board-shadow"></div>

            {/* Modal Overlay */}
            {selectedImage && (
                <div className="events-section-modal-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="events-section-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="events-section-modal-close-button" onClick={() => setSelectedImage(null)}>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <div className="events-section-modal-image-container">
                            <img
                                src={selectedImage.imageLink || "/placeholder.svg"}
                                alt="Selected notice"
                                className="events-section-modal-image"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

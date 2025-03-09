import { useState, useEffect } from "react"
import "./EventsSectionImages.css"
import loader from "../../Images/loading.gif"
const images = [
    {
        url: "https://raw.githubusercontent.com/Akhil-8605/unicore-assets/refs/heads/main/notice1.jpg",
    },
    {
        url: "https://raw.githubusercontent.com/Akhil-8605/unicore-assets/refs/heads/main/notice2.jpg",
    },
    {
        url: "https://raw.githubusercontent.com/Akhil-8605/unicore-assets/refs/heads/main/notice3.jpg",
    },
    {
        url: "https://raw.githubusercontent.com/Akhil-8605/unicore-assets/refs/heads/main/notice4.jpg",
    },
    {
        url: "https://raw.githubusercontent.com/Akhil-8605/unicore-assets/refs/heads/main/notice5.jpg",
    },
    {
        url: "https://raw.githubusercontent.com/Akhil-8605/unicore-assets/refs/heads/main/notice6.jpg",
    },
    {
        url: "https://raw.githubusercontent.com/Akhil-8605/unicore-assets/refs/heads/main/notice7.jpg",
    },
    {
        url: "https://raw.githubusercontent.com/Akhil-8605/unicore-assets/refs/heads/main/notice8.jpg",
    },
    {
        url: "https://raw.githubusercontent.com/Akhil-8605/unicore-assets/refs/heads/main/notice9.jpg",
    },
    {
        url: "https://raw.githubusercontent.com/Akhil-8605/unicore-assets/refs/heads/main/notice10.jpg",
    },
    {
        url: "https://raw.githubusercontent.com/Akhil-8605/unicore-assets/refs/heads/main/notice11.jpg",
    },
    {
        url: "https://raw.githubusercontent.com/Akhil-8605/unicore-assets/refs/heads/main/notice12.jpg",
    },
    {
        url: "https://raw.githubusercontent.com/Akhil-8605/unicore-assets/refs/heads/main/notice13.jpg",
    },
    {
        url: "https://raw.githubusercontent.com/Akhil-8605/unicore-assets/refs/heads/main/notice14.jpg",
    },
    {
        url: "https://raw.githubusercontent.com/Akhil-8605/unicore-assets/refs/heads/main/notice15.jpg",
    },
    {
        url: "https://raw.githubusercontent.com/Akhil-8605/unicore-assets/refs/heads/main/notice16.jpg",
    },
    {
        url: "https://raw.githubusercontent.com/Akhil-8605/unicore-assets/refs/heads/main/notice17.jpg",
    },
    {
        url: "https://raw.githubusercontent.com/Akhil-8605/unicore-assets/refs/heads/main/notice18.jpg",
    },    
]

// Random rotation for notices
const getRandomRotation = () => {
    return Math.random() * 6 - 3 // Between -3 and 3 degrees
}

// Random pin colors
const pinColors = ["#e74c3c", "#3498db", "#f1c40f", "#2ecc71", "#9b59b6"]
const getRandomPinColor = () => {
    return pinColors[Math.floor(Math.random() * pinColors.length)]
}

export default function NoticeBoard() {
    const [selectedImage, setSelectedImage] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [rotations, setRotations] = useState([])
    const [pinPositions, setPinPositions] = useState([])
    const [pinColors, setPinColors] = useState([])

    useEffect(() => {
        // Generate random rotations and pin positions for each notice
        const newRotations = images.map(() => getRandomRotation())
        const newPinPositions = images.map(() => ({
            left: 15 + Math.random() * 70, // Between 15% and 85%
            top: 5 + Math.random() * 10, // Between 5% and 15%
        }))
        const newPinColors = images.map(() => getRandomPinColor())

        setRotations(newRotations)
        setPinPositions(newPinPositions)
        setPinColors(newPinColors)

        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    // Close modal when Escape key is pressed
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setSelectedImage(null)
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [])

    if (isLoading) {
        return (
            <div className="events-section-loading-container">
                <div className="events-section-image-spinner">
                    <img src={loader} alt="" />
                </div>
                <p>Loading Notice Board...</p>
            </div>
        )
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
                                        <img src={image.url || "/placeholder.svg"} alt={`Notice ${index + 1}`} className="events-section-notice-image" />

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
                            <img src={selectedImage.url || "/placeholder.svg"} alt="Selected notice" className="events-section-modal-image" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}


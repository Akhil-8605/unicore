import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ImageGallery.css';
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../Authentication/firebase"; // Adjust the path as needed
import loader from "../../Images/loading.gif"
const ImageGallery = () => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch images from Firestore on mount
    useEffect(() => {
        async function fetchImages() {
            try {
                const querySnapshot = await getDocs(collection(firestore, "galleryImages"));
                const fetchedImages = querySnapshot.docs
                    .map(doc => ({
                        id: doc.id,
                        url: doc.data().imageLink,
                        caption: doc.data().title,
                    }))
                    .reverse(); // Reverse the order so last item comes first
                setImages(fetchedImages);
            } catch (error) {
                console.error("Error fetching images from Firestore:", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchImages();
    }, []);


    // Automatic slider change (only if images are loaded)
    useEffect(() => {
        if (!isLoading && images.length > 0) {
            const timer = setInterval(() => {
                handleNext();
            }, 4000);
            return () => clearInterval(timer);
        }
    }, [images, isLoading]);

    const handlePrevious = () => {
        if (!isTransitioning && images.length > 0) {
            setIsTransitioning(true);
            setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
            setTimeout(() => setIsTransitioning(false), 500);
        }
    };

    const handleNext = () => {
        if (!isTransitioning && images.length > 0) {
            setIsTransitioning(true);
            setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
            setTimeout(() => setIsTransitioning(false), 500);
        }
    };

    const handleTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        if (distance > 50) {
            handleNext();
        } else if (distance < -50) {
            handlePrevious();
        }
    };

    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="events-section-image-spinner">
                    <img src={loader} alt="" />
                </div>
                <p>Loading Images...</p>
            </div>
        )
    }

    if (images.length === 0) {
        return <div className="gallery-container">No images found.</div>;
    }

    return (
        <div className="gallery-container">
            <div
                className="gallery-slide"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="gallery-image"
                    style={{
                        backgroundImage: `url(${images[currentIndex].url})`,
                    }}
                >
                    <div className="gallery-image-overlay">
                        <div className="gallery-caption-container">
                            <h3 className="gallery-caption-title">{images[currentIndex].caption}</h3>
                            <div className="gallery-progress-indicators">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`gallery-progress-dot ${currentIndex === index ? 'active' : 'inactive'}`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    onClick={handlePrevious}
                    className="gallery-nav-button prev"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="gallery-nav-icon" />
                </button>
                <button
                    onClick={handleNext}
                    className="gallery-nav-button next"
                    aria-label="Next image"
                >
                    <ChevronRight className="gallery-nav-icon" />
                </button>
            </div>

            <div className="gallery-thumbnails-container">
                {images.map((image, index) => (
                    <div
                        key={image.id}
                        onClick={() => setCurrentIndex(index)}
                        className={`gallery-thumbnail ${currentIndex === index ? 'active' : 'inactive'}`}
                    >
                        <img
                            src={image.url}
                            alt={image.caption}
                            className="w-full h-full gallery-object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
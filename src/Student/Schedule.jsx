"use client"

import { useState, useEffect } from "react"
import { X, Calendar, ChevronRight, ChevronLeft } from "lucide-react"
import StudentPortalLayout from "./StudentPortalLayout"
import "./Schedule.css"

function Schedules() {
    const [selectedDepartment, setSelectedDepartment] = useState("CO2I")
    const [showModal, setShowModal] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    // Sample timetable data with multiple images per department
    const departments = {
        CO2I: [
            { id: 1, title: "Monday-Wednesday Schedule", src: "https://ik.imagekit.io/akhil8605unicore/co-even-time-table_page-0001.jpg?updatedAt=1741793469572" },
            { id: 2, title: "Thursday-Friday Schedule", src: "/placeholder.svg?height=400&width=600" },
            { id: 3, title: "Weekend Classes", src: "/placeholder.svg?height=400&width=600" },
        ],
        CO4I: [
            { id: 4, title: "Regular Schedule", src: "/placeholder.svg?height=400&width=600" },
            { id: 5, title: "Lab Sessions", src: "/placeholder.svg?height=400&width=600" },
            { id: 6, title: "Special Classes", src: "/placeholder.svg?height=400&width=600" },
        ],
        CO6I: [
            { id: 7, title: "Morning Classes", src: "/placeholder.svg?height=400&width=600" },
            { id: 8, title: "Afternoon Sessions", src: "/placeholder.svg?height=400&width=600" },
            { id: 9, title: "Evening Lectures", src: "/placeholder.svg?height=400&width=600" },
        ],
    }

    // Simulate loading state
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 800)
    }, [selectedDepartment])

    const handleDepartmentChange = (event) => {
        setIsLoading(true)
        setSelectedDepartment(event.target.value)
    }

    const openModal = (image) => {
        setSelectedImage(image)
        setShowModal(true)
        // Prevent scrolling when modal is open
        document.body.style.overflow = "hidden"
    }

    const closeModal = () => {
        setShowModal(false)
        // Re-enable scrolling
        document.body.style.overflow = "auto"

        // Add a small delay before removing the image to allow for animation
        setTimeout(() => {
            setSelectedImage(null)
        }, 300)
    }

    // Scroll the gallery left
    const scrollLeft = () => {
        const gallery = document.querySelector(".student-schedule-schedules-scroll")
        gallery.scrollBy({ left: -300, behavior: "smooth" })
    }

    // Scroll the gallery right
    const scrollRight = () => {
        const gallery = document.querySelector(".student-schedule-schedules-scroll")
        gallery.scrollBy({ left: 300, behavior: "smooth" })
    }

    // Handle keyboard events for modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape" && showModal) {
                closeModal()
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [showModal])

    return (
        <div style={{display: "flex"}}>
            <StudentPortalLayout />
            <main className="student-schedule-schedules-main">
                <div className="student-schedule-schedules-content">
                    <div className="student-schedule-schedules-header">
                        <div className="student-schedule-header-title">
                            <Calendar className="student-schedule-header-icon" />
                            <h1>Class Schedules</h1>
                        </div>
                        <div className="student-schedule-department-selector">
                            <select
                                id="department-select"
                                value={selectedDepartment}
                                onChange={handleDepartmentChange}
                                className="student-schedule-department-select"
                            >
                                <option value="CO2I">CO2I</option>
                                <option value="CO4I">CO4I</option>
                                <option value="CO6I">CO6I</option>
                            </select>
                        </div>
                    </div>

                    <div className="student-schedule-schedules-description">
                        <h2>{selectedDepartment} Department Schedules</h2>
                        <p>
                            View and download the class schedules for {selectedDepartment}. Click on any schedule to view in full
                            screen.
                        </p>
                    </div>

                    <div className="student-schedule-schedules-gallery-container">
                        <button className="student-schedule-gallery-nav-button student-schedule-prev" onClick={scrollLeft} aria-label="Scroll left">
                            <ChevronLeft />
                        </button>

                        <div className="student-schedule-schedules-gallery">
                            {isLoading ? (
                                <div className="student-schedule-loading-container">
                                    <div className="student-schedule-loading-spinner"></div>
                                    <p>Loading schedules...</p>
                                </div>
                            ) : (
                                <div className="student-schedule-schedules-scroll">
                                    {departments[selectedDepartment].map((image) => (
                                        <div
                                            key={image.id}
                                            className="student-schedule-schedule-card"
                                            onClick={() => openModal(image)}
                                            tabIndex={0}
                                            onKeyDown={(e) => e.key === "Enter" && openModal(image)}
                                            role="button"
                                            aria-label={`View ${image.title}`}
                                        >
                                            <div className="student-schedule-card-image-container">
                                                <img
                                                    src={image.src || "/placeholder.svg"}
                                                    alt={`${selectedDepartment} - ${image.title}`}
                                                    className="student-schedule-card-image"
                                                />
                                                <div className="student-schedule-card-overlay">
                                                    <span>View Schedule</span>
                                                </div>
                                            </div>
                                            <div className="student-schedule-schedule-title">
                                                <h3>{image.title}</h3>
                                                <p className="student-schedule-schedule-subtitle">{selectedDepartment}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <button className="student-schedule-gallery-nav-button student-schedule-next" onClick={scrollRight} aria-label="Scroll right">
                            <ChevronRight />
                        </button>
                    </div>
                </div>
            </main>

            {/* Modal Component */}
            {showModal && selectedImage && (
                <div className={`student-schedule-modal-overlay ${showModal ? "student-schedule-active" : ""}`} onClick={closeModal}>
                    <div className="student-schedule-modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="student-schedule-modal-header">
                            <h2>{selectedImage.title}</h2>
                            <button className="student-schedule-modal-close" onClick={closeModal} aria-label="Close modal">
                                <X size={24} />
                            </button>
                        </div>
                        <div className="student-schedule-modal-body">
                            <img
                                src={selectedImage.src || "/placeholder.svg"}
                                alt={`${selectedDepartment} - ${selectedImage.title}`}
                                className="student-schedule-modal-image"
                            />
                        </div>
                        <div className="student-schedule-modal-footer">
                            <p>Department: {selectedDepartment}</p>
                            <button className="student-schedule-download-button">Download Schedule</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Schedules

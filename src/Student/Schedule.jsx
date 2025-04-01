"use client"

import { useState, useEffect } from "react"
import "./Schedule.css"
import StudentPortalLayout from "./StudentPortalLayout"
import loader from "../Images/loading.gif"
import { useAuth } from '../Authentication/AuthProvider'; // Assuming you have a useAuth hook

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Authentication/firebase";
import { Link, useNavigate } from "react-router-dom";

export default function Schedules() {

    const { user } = useAuth(); // Get the current user from the AuthProvider
    const navigate = useNavigate();
    const [userProfile, setUserProfile] = useState(null);
    const [selectedDepartment, setSelectedDepartment] = useState("CO")

    // Fetch profile data from Firestore.
    useEffect(() => {
        const fetchUserProfile = async () => {
            if (!user) {
                navigate("/login");
                return;
            }
            try {
                const profileQuery = query(
                    collection(db, "usersProfile"),
                    where("uid", "==", user.uid)
                );
                const profileSnapshot = await getDocs(profileQuery);
                if (!profileSnapshot.empty) {
                    const profileDoc = profileSnapshot.docs[0];
                    const data = profileDoc.data();
                    if (data.branch === "Computer Engineering") {
                        setSelectedDepartment("CO");
                    }
                    if (data.branch === "Electronics & Telecommunication") {
                        setSelectedDepartment("EJ");
                    }

                    if (data.branch === "Mechanical Engineering") {
                        setSelectedDepartment("MECH");
                    }
                    setUserProfile(data);
                } else {
                    setUserProfile(null);
                }
            } catch (error) {
                console.error("Error fetching user profile:", error);
            }
        };

        fetchUserProfile();
    }, [user, navigate]);

    const [showModal, setShowModal] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const departments = {
        CO: [
            { id: 1, title: "CO2K Timetable", src: "https://ik.imagekit.io/akhil8605unicore/co2k-time-table.png?updatedAt=1742914407022" },
            { id: 2, title: "CO4K Timetable", src: "https://ik.imagekit.io/akhil8605unicore/co4k-time-table.png?updatedAt=1742914504099" },
            { id: 3, title: "CO6I Timetable", src: "https://ik.imagekit.io/akhil8605unicore/co6i-time-table.png?updatedAt=1742914317694" },
        ],
        EJ: [
            { id: 4, title: "EJ2K Timetable", src: "https://ik.imagekit.io/akhil8605unicore/ej2k-time-table.png?updatedAt=1742914689410" },
            { id: 5, title: "EJ4K Timetable", src: "https://ik.imagekit.io/akhil8605unicore/ej4k-time-table.png" },
            { id: 6, title: "EJ6I Timetable", src: "https://ik.imagekit.io/akhil8605unicore/ej6i-time-table.png?updatedAt=1742914833882" },
        ],
        MECH: [
            { id: 7, title: "ME2K (A) Timetable", src: "https://ik.imagekit.io/akhil8605unicore/me2ka-time-table.png" },
            { id: 7, title: "ME2K (B) Timetable", src: "https://ik.imagekit.io/akhil8605unicore/me2kb-time-table.png" },
            { id: 8, title: "ME4K (A) Timetable", src: "https://ik.imagekit.io/akhil8605unicore/me-4ka-time-table.png" },
            { id: 8, title: "ME4K (B) Timetable", src: "https://ik.imagekit.io/akhil8605unicore/me-4kb-time-table.png" },
            { id: 9, title: "CO6I Timetable", src: "https://ik.imagekit.io/akhil8605unicore/me6i-time-table.png" },
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
        if (gallery) {
            gallery.scrollBy({ left: -300, behavior: "smooth" })
        }
    }

    // Scroll the gallery right
    const scrollRight = () => {
        const gallery = document.querySelector(".student-schedule-schedules-scroll")
        if (gallery) {
            gallery.scrollBy({ left: 300, behavior: "smooth" })
        }
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
        <div className="student-schedule-app-container">
            <StudentPortalLayout />
            <main className="student-schedule-main-content">
                <div className="student-schedule-schedules-container">
                    <div className="student-schedule-schedules-header">
                        <div className="student-schedule-header-title">
                            <div className="student-schedule-icon-container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                                    <line x1="16" x2="16" y1="2" y2="6"></line>
                                    <line x1="8" x2="8" y1="2" y2="6"></line>
                                    <line x1="3" x2="21" y1="10" y2="10"></line>
                                </svg>
                            </div>
                            <h1>Class Schedules</h1>
                        </div>

                        <div className="student-schedule-department-selector">
                            <select
                                value={selectedDepartment}
                                onChange={handleDepartmentChange}
                                className="student-schedule-department-select"
                            >
                                <option value="CO">Computer Engineering</option>
                                <option value="EJ">Electronic & Telecommunication</option>
                                <option value="MECH">Mechanical Engineering</option>
                            </select>
                        </div>
                    </div>

                    <div className="student-schedule-schedules-content">
                        <div className="student-schedule-schedules-description">
                            <h2>{selectedDepartment} Department Schedules</h2>
                            <p>
                                View and download the class schedules for {selectedDepartment === 'CO' ? 'Computer Engineering' : selectedDepartment === 'EJ' ? 'Electronics & Telecommunication' : 'Mechanical Engineering'}. Click on any schedule to view in full screen.
                            </p>
                        </div>

                        <div className="student-schedule-schedule-gallery-container">
                            <div className="student-schedule-schedules-gallery">
                                {isLoading ? (
                                    <div className="student-schedule-loading-container">
                                        <img src={loader} alt="" />
                                        <span>Loading schedules...</span>
                                    </div>
                                ) : (
                                    <div className="student-schedule-schedules-scroll">
                                        {departments[selectedDepartment]?.map((image) => (
                                            <div
                                                key={image.id}
                                                className="student-schedule-schedule-card"
                                                onClick={() => openModal(image)}
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
                                                <div className="student-schedule-card-content">
                                                    <h3>{image.title}</h3>
                                                    <p>{selectedDepartment === 'CO' ? 'Computer Engineering' : selectedDepartment === 'EJ' ? 'Electronics & Telecommunication' : 'Mechanical Engineering'}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Modal Component */}
            {showModal && selectedImage && (
                <div
                    className={`student-schedule-modal-overlay ${showModal ? 'active' : ''}`}
                    onClick={closeModal}
                >
                    <div
                        className="student-schedule-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="student-schedule-modal-header">
                            <h2>{selectedImage.title}</h2>
                            <button className="student-schedule-modal-close" onClick={closeModal} aria-label="Close modal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 6 6 18"></path>
                                    <path d="m6 6 12 12"></path>
                                </svg>
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
                            <button className="student-schedule-download-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" x2="12" y1="15" y2="3"></line>
                                </svg>
                                Download Schedule
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

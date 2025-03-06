import React, { useState, useEffect } from "react";
import {
    Plus,
    Search,
    Pencil,
    Trash2,
    Calendar,
    Bell,
    GraduationCap,
    MapPin,
    Clock,
    Sparkles
} from "lucide-react";

import {
    collection,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    onSnapshot,
    getDocs
} from "firebase/firestore";
import { db } from "../Authentication/firebase";

import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

import { toast } from "react-toastify"; // Ensure react-toastify is installed and <ToastContainer/> is in your root

import "./AdminEvents.css";
import AdminPortalLayout from "./AdminPortalLayout";

const EventsAdmin = () => {
    // ----------------------------------------------------------
    // State variables
    // ----------------------------------------------------------
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("all");

    // For add/edit event modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        time: "",
        category: "",
        description: "",
        location: "",
        isHighlight: false,
    });

    // For delete confirmation
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    // For event preview toggle
    const [isPreviewVisible, setPreviewVisible] = useState(false);

    // For notification modal
    const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
    const [notificationFormData, setNotificationFormData] = useState({
        subject: "",
        body: "",
    });

    // ----------------------------------------------------------
    // Fetch events in real-time from Firestore
    // ----------------------------------------------------------
    useEffect(() => {
        const eventsCollection = collection(db, "events");
        const unsubscribe = onSnapshot(eventsCollection, (snapshot) => {
            const eventsData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setEvents(eventsData);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    // ----------------------------------------------------------
    // Utility functions
    // ----------------------------------------------------------
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        }).format(date);
    };

    const isUpcoming = (dateString) => {
        const eventDate = new Date(dateString);
        return eventDate > new Date();
    };

    const getCategoryIcon = (category) => {
        switch (category) {
            case "exam":
                return <GraduationCap className="events-section-category-icon" />;
            case "registration":
                return <Calendar className="events-section-category-icon" />;
            case "announcement":
                return <Bell className="events-section-category-icon" />;
            default:
                return <Calendar className="events-section-category-icon" />;
        }
    };

    // ----------------------------------------------------------
    // Filter logic
    // ----------------------------------------------------------
    const filteredEvents = events.filter((event) => {
        const searchLower = search.toLowerCase();
        return (
            (event.title.toLowerCase().includes(searchLower) ||
                event.date.toLowerCase().includes(searchLower) ||
                event.time.toLowerCase().includes(searchLower) ||
                event.location.toLowerCase().includes(searchLower) ||
                event.description.toLowerCase().includes(searchLower)) &&
            (categoryFilter === "all" || event.category === categoryFilter)
        );
    });

    // ----------------------------------------------------------
    // Add / Edit event logic
    // ----------------------------------------------------------
    const openForm = (event = null) => {
        setIsEdit(!!event);
        setSelectedEvent(event);
        setFormData(
            event || {
                title: "",
                date: "",
                time: "",
                category: "",
                description: "",
                location: "",
                isHighlight: false,
            }
        );
        setIsModalOpen(true);
    };

    const closeForm = () => {
        setIsModalOpen(false);
        setIsEdit(false);
        setSelectedEvent(null);
        setFormData({
            title: "",
            date: "",
            time: "",
            category: "",
            description: "",
            location: "",
            isHighlight: false,
        });
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const eventsCollection = collection(db, "events");

        try {
            if (isEdit && selectedEvent) {
                const eventDocRef = doc(db, "events", selectedEvent.id);
                await updateDoc(eventDocRef, formData);
            } else {
                await addDoc(eventsCollection, formData);
            }
            closeForm();
            toast.success("Event saved successfully!");
        } catch (error) {
            console.error("Error writing document: ", error);
            toast.error("Failed to save the event.");
        }
    };

    // ----------------------------------------------------------
    // Delete event logic
    // ----------------------------------------------------------
    const handleDelete = async () => {
        try {
            const eventDocRef = doc(db, "events", selectedEvent.id);
            await deleteDoc(eventDocRef);
            setIsDeleteOpen(false);
            setSelectedEvent(null);
            toast.success("Event deleted successfully!");
        } catch (error) {
            console.error("Error deleting document: ", error);
            toast.error("Failed to delete the event.");
        }
    };

    // ----------------------------------------------------------
    // Notification modal logic
    // ----------------------------------------------------------
    const openNotificationModal = (event) => {
        setSelectedEvent(event);
        // Pre-fill subject & body
        setNotificationFormData({
            subject: `New Event: ${event.title}`,
            body: `Hello ,
We have an exciting update regarding a new event!

Title: ${event.title}
Category: ${event.category}
Date: ${event.date}
Time: ${event.time}
Location: ${event.location || "N/A"}

For more details and updates, please visit:
https://unicore-8605.web.app#events

Thank you!`,
        });
        setIsNotificationModalOpen(true);
    };

    const closeNotificationModal = () => {
        setIsNotificationModalOpen(false);
        setSelectedEvent(null);
        setNotificationFormData({
            subject: "",
            body: "",
        });
    };

    const handleNotificationChange = (e) => {
        const { name, value } = e.target;
        setNotificationFormData({
            ...notificationFormData,
            [name]: value,
        });
    };

    // ----------------------------------------------------------
    // Send Notification using mailto:
    // ----------------------------------------------------------
    const sendNotification = async () => {
        try {
            // 1. Fetch all user emails from Firestore
            const usersSnapshot = await getDocs(collection(db, "users"));
            // Extract emails (filter out null/undefined)
            const userEmails = usersSnapshot.docs
                .map((doc) => doc.data().email)
                .filter(Boolean);

            if (!userEmails.length) {
                toast.info("No user emails found in the database.");
                return;
            }

            // 2. Build a mailto link with BCC
            const subjectEncoded = encodeURIComponent(notificationFormData.subject);
            const bodyEncoded = encodeURIComponent(notificationFormData.body);
            // BCC list separated by semicolons
            const bccList = userEmails.join(";");

            // mailto:?bcc=...&subject=...&body=...
            const mailtoLink = `mailto:?bcc=${bccList}&subject=${subjectEncoded}&body=${bodyEncoded}`;

            // 3. Open the user’s default mail client
            window.location.href = mailtoLink;

            // 4. Show a toast. Note that actually sending is done in the user’s mail client.
            toast.success("Mail client opened. Please send the email from your mail client.");

            closeNotificationModal();
        } catch (error) {
            console.error("Error preparing mailto link:", error);
            toast.error("Failed to open mail client.");
        }
    };

    // ----------------------------------------------------------
    // JSX
    // ----------------------------------------------------------
    return (
        <div style={{ display: "flex", width: "100%" }}>
            <AdminPortalLayout />
            <div className="admin-events-container">
                <div className="admin-events-header">
                    <h1>Events Management</h1>
                    <button
                        className="admin-events-add-button"
                        onClick={() => openForm()}
                    >
                        <Plus className="admin-events-button-icon" />
                        Add Event
                    </button>
                </div>

                <div className="admin-events-filters">
                    <div className="admin-events-search-container">
                        <Search className="admin-events-search-icon" />
                        <input
                            type="text"
                            placeholder="Search events..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="admin-events-search-input"
                        />
                    </div>
                    <select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        className="admin-events-category-select"
                    >
                        <option value="all">All Categories</option>
                        <option value="event">Event</option>
                        <option value="registration">Registration</option>
                        <option value="announcement">Announcement</option>
                        <option value="exam">Exam</option>
                    </select>
                </div>

                <div className="admin-events-table-container">
                    <table className="admin-events-events-table">
                        <thead>
                            <tr>
                                <th>Sr No.</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Location</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                // Show skeleton rows while loading
                                [1, 2, 3, 4].map((index) => (
                                    <tr key={index}>
                                        <td><Skeleton width={100} /></td>
                                        <td><Skeleton width={80} /></td>
                                        <td><Skeleton width={60} /></td>
                                        <td><Skeleton width={60} /></td>
                                        <td><Skeleton width={80} /></td>
                                        <td><Skeleton width={70} /></td>
                                        <td>
                                            <Skeleton circle={true} height={24} width={24} />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                filteredEvents.map((event, index) => (
                                    <tr key={event.id}>
                                        <td>{index + 1}</td>
                                        <td>{event.title}</td>
                                        <td>
                                            <span className={`admin-events-category-badge ${event.category}`}>
                                                {event.category}
                                            </span>
                                        </td>
                                        <td>{event.date}</td>
                                        <td>{event.time}</td>
                                        <td>{event.location || "-"}</td>
                                        <td>
                                            {event.isHighlight && (
                                                <span className="admin-events-highlight-badge">
                                                    Highlighted
                                                </span>
                                            )}
                                        </td>
                                        <td className="admin-events-actions">
                                            <button
                                                className="admin-events-icon-button"
                                                onClick={() => openForm(event)}
                                            >
                                                <Pencil className="admin-events-button-icon" />
                                            </button>
                                            <button
                                                className="admin-events-icon-button delete"
                                                onClick={() => {
                                                    setSelectedEvent(event);
                                                    setIsDeleteOpen(true);
                                                }}
                                            >
                                                <Trash2 className="admin-events-button-icon" />
                                            </button>
                                            <button
                                                className="admin-events-icon-button notification"
                                                onClick={() => openNotificationModal(event)}
                                            >
                                                <Bell className="admin-events-button-icon" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="admin-events-preview-button-container">
                    <button
                        className={`admin-events-preview-button ${isPreviewVisible ? "active" : ""}`}
                        onClick={() => setPreviewVisible(!isPreviewVisible)}
                    >
                        Preview
                    </button>
                </div>

                {isPreviewVisible && (
                    <div className="events-section-events-grid">
                        {loading ? (
                            // Show skeleton cards while loading
                            [1, 2, 3].map((index) => (
                                <div key={index} className="events-section-event-card">
                                    <div className="events-section-event-header" style={{ display: "flex", alignItems: "center" }}>
                                        <Skeleton circle={true} height={32} width={32} />
                                        <div style={{ marginLeft: "8px" }}>
                                            <Skeleton width={60} />
                                        </div>
                                    </div>
                                    <h3 className="events-section-event-title">
                                        <Skeleton />
                                    </h3>
                                    <p className="events-section-event-description">
                                        <Skeleton count={2} />
                                    </p>
                                    <div className="events-section-event-details" style={{ display: "flex", gap: "8px" }}>
                                        <Skeleton width={80} />
                                        <Skeleton width={80} />
                                    </div>
                                </div>
                            ))
                        ) : (
                            filteredEvents.map((event) => (
                                <div
                                    key={event.id}
                                    className={`events-section-event-card ${event.isHighlight ? "highlight" : ""}`}
                                >
                                    <div className="events-section-event-header">
                                        {getCategoryIcon(event.category)}
                                        <span className="events-section-event-category">
                                            {event.category}
                                        </span>
                                        {isUpcoming(event.date) && (
                                            <span className="events-section-upcoming-badge">
                                                <Sparkles className="events-section-badge-icon" />
                                                Upcoming
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="events-section-event-title">{event.title}</h3>

                                    <p className="events-section-event-description">
                                        {event.description}
                                    </p>

                                    <div className="events-section-event-details">
                                        <div className="events-section-detail-item">
                                            <Calendar className="events-section-detail-icon" />
                                            <span>{formatDate(event.date)}</span>
                                        </div>
                                        <div className="events-section-detail-item">
                                            <Clock className="events-section-detail-icon" />
                                            <span>{event.time}</span>
                                        </div>
                                        {event.location && (
                                            <div className="events-section-detail-item">
                                                <MapPin className="events-section-detail-icon" />
                                                <span>{event.location}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}

                {/* ------------------------------------------------------
            Add/Edit Event Modal
        ------------------------------------------------------ */}
                {isModalOpen && (
                    <div className="admin-events-modal-overlay">
                        <div className="admin-events-modal">
                            <h2>{isEdit ? "Edit Event" : "Add New Event"}</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="admin-events-form-group">
                                    <label>Title</label>
                                    <input
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="admin-events-form-group">
                                    <label>Category</label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select category</option>
                                        <option value="event">Event</option>
                                        <option value="registration">Registration</option>
                                        <option value="announcement">Announcement</option>
                                        <option value="exam">Exam</option>
                                    </select>
                                </div>

                                <div className="admin-events-form-row">
                                    <div className="admin-events-form-group">
                                        <label>Date</label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="admin-events-form-group">
                                        <label>Time</label>
                                        <input
                                            type="time"
                                            name="time"
                                            value={formData.time}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="admin-events-form-group">
                                    <label>Description</label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="admin-events-form-group">
                                    <label>Location (Optional)</label>
                                    <input
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="admin-events-form-group admin-events-checkbox">
                                    <input
                                        type="checkbox"
                                        name="isHighlight"
                                        checked={formData.isHighlight}
                                        onChange={handleChange}
                                    />
                                    <label>Highlight this event</label>
                                </div>

                                <div className="admin-events-modal-actions">
                                    <button
                                        type="button"
                                        className="admin-events-cancel-button"
                                        onClick={closeForm}
                                    >
                                        Cancel
                                    </button>
                                    <button type="submit" className="admin-events-submit-button">
                                        {isEdit ? "Update Event" : "Add Event"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* ------------------------------------------------------
            Delete Confirmation Modal
        ------------------------------------------------------ */}
                {isDeleteOpen && (
                    <div className="admin-events-modal-overlay">
                        <div className="admin-events-modal admin-events-delete-modal">
                            <h2>Delete Event</h2>
                            <p>Are you sure you want to delete "{selectedEvent?.title}"?</p>
                            <div className="admin-events-modal-actions">
                                <button
                                    className="admin-events-cancel-button"
                                    onClick={() => setIsDeleteOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="admin-events-delete-button"
                                    onClick={handleDelete}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* ------------------------------------------------------
            Notification Modal
        ------------------------------------------------------ */}
                {isNotificationModalOpen && (
                    <div className="admin-events-modal-overlay">
                        <div className="admin-events-modal">
                            <h2>Send Notification</h2>

                            <div className="admin-events-form-group">
                                <label>Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={notificationFormData.subject}
                                    onChange={handleNotificationChange}
                                />
                            </div>

                            <div className="admin-events-form-group">
                                <label>Message</label>
                                <textarea
                                    rows={10}
                                    name="body"
                                    value={notificationFormData.body}
                                    onChange={handleNotificationChange}
                                />
                            </div>

                            <div className="admin-events-modal-actions">
                                <button
                                    type="button"
                                    className="admin-events-cancel-button"
                                    onClick={closeNotificationModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="admin-events-submit-button"
                                    onClick={sendNotification}
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default EventsAdmin;

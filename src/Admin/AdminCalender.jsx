import React, { useState, useEffect } from "react";
import { Plus, Search, Pencil, Trash2 } from "lucide-react";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../Authentication/firebase";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { toast } from "react-toastify"; // Make sure <ToastContainer/> is rendered in your app root
import "./AdminEvents.css";
import AdminPortalLayout from "./AdminPortalLayout";

const AdminAcademicCalendar = () => {
  // ----------------------------------------------------------
  // State variables
  // ----------------------------------------------------------
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  // For add/edit event modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    endDate: "",
    type: "",
    description: "",
  });

  // For delete confirmation
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  // ----------------------------------------------------------
  // Fetch events in real-time from Firestore
  // ----------------------------------------------------------
  useEffect(() => {
    const eventsCollection = collection(db, "academicCalenderEvent");
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
  // Filter logic
  // ----------------------------------------------------------
  const filteredEvents = events.filter((event) => {
    const searchLower = search.toLowerCase();
    const matchesSearch =
      event.title.toLowerCase().includes(searchLower) ||
      event.date.toLowerCase().includes(searchLower) ||
      (event.endDate && event.endDate.toLowerCase().includes(searchLower)) ||
      event.description.toLowerCase().includes(searchLower) ||
      event.type.toLowerCase().includes(searchLower);
    const matchesFilter = typeFilter === "all" || event.type === typeFilter;
    return matchesSearch && matchesFilter;
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
        endDate: "",
        type: "",
        description: "",
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
      endDate: "",
      type: "",
      description: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eventsCollection = collection(db, "academicCalenderEvent");
    try {
      if (isEdit && selectedEvent) {
        const eventDocRef = doc(db, "academicCalenderEvent", selectedEvent.id);
        await updateDoc(eventDocRef, formData);
        toast.success("Event updated successfully!");
      } else {
        await addDoc(eventsCollection, formData);
        toast.success("Event added successfully!");
      }
      closeForm();
    } catch (error) {
      console.error("Error saving event: ", error);
      toast.error("Failed to save event.");
    }
  };

  // ----------------------------------------------------------
  // Delete event logic
  // ----------------------------------------------------------
  const handleDelete = async () => {
    try {
      const eventDocRef = doc(db, "academicCalenderEvent", selectedEvent.id);
      await deleteDoc(eventDocRef);
      setIsDeleteOpen(false);
      setSelectedEvent(null);
      toast.success("Event deleted successfully!");
    } catch (error) {
      console.error("Error deleting event: ", error);
      toast.error("Failed to delete event.");
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
          <h1>Academic Calendar Events Management</h1>
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
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="admin-events-category-select"
          >
            <option value="all">All Types</option>
            <option value="lecture">Lecture</option>
            <option value="exam">Exam</option>
            <option value="holiday">Holiday</option>
            <option value="deadline">Deadline</option>
            <option value="event">Event</option>
          </select>
        </div>

        <div className="admin-events-table-container">
          <table className="admin-events-events-table">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Title</th>
                <th>Type</th>
                <th>Date</th>
                <th>End Date</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                [1, 2, 3, 4].map((index) => (
                  <tr key={index}>
                    <td>
                      <Skeleton width={50} />
                    </td>
                    <td>
                      <Skeleton width={100} />
                    </td>
                    <td>
                      <Skeleton width={80} />
                    </td>
                    <td>
                      <Skeleton width={80} />
                    </td>
                    <td>
                      <Skeleton width={80} />
                    </td>
                    <td>
                      <Skeleton width={150} />
                    </td>
                    <td>
                      <Skeleton width={100} />
                    </td>
                  </tr>
                ))
              ) : (
                filteredEvents.map((event, index) => (
                  <tr key={event.id}>
                    <td>{index + 1}</td>
                    <td>{event.title}</td>
                    <td>{event.type}</td>
                    <td>{event.date}</td>
                    <td>{event.endDate || "-"}</td>
                    <td style={{width: "325px"}}>{event.description}</td>
                    <td >
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
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

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
                  <label>Type</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select type</option>
                    <option value="lecture">Lecture</option>
                    <option value="exam">Exam</option>
                    <option value="holiday">Holiday</option>
                    <option value="deadline">Deadline</option>
                    <option value="event">Event</option>
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
                    <label>End Date (Optional)</label>
                    <input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleChange}
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
      </div>
    </div>
  );
};

export default AdminAcademicCalendar;

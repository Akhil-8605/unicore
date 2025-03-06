// AdminUpcomingExams.jsx
import React, { useState, useEffect } from "react";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  Calendar,
  Clock,
  BookOpen,
  MapPin,
  X,
  FileText,
  AlertCircle,
} from "lucide-react";
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
import AdminPortalLayout from "./AdminPortalLayout";

const AdminUpcomingExams = () => {
  // States for CRUD operations (table, form, delete)
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedExam, setSelectedExam] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    date: "",
    time: "",
    duration: "",
    status: "Upcoming",
    venue: "",
    instructions: "",
  });
  // State for preview view
  const [isPreviewVisible, setPreviewVisible] = useState(false);
  // State for showing exam details modal
  const [detailsExam, setDetailsExam] = useState(null);

  // Real-time listener for the "upcomingExams" collection
  useEffect(() => {
    const examsCollection = collection(db, "upcomingExams");
    const unsubscribe = onSnapshot(examsCollection, (snapshot) => {
      const examsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setExams(examsData);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Filter exams based on search (checks name, code, or date)
  const filteredExams = exams.filter((exam) => {
    return (
      exam.name.toLowerCase().includes(search.toLowerCase()) ||
      exam.code.toLowerCase().includes(search.toLowerCase()) ||
      exam.date.toLowerCase().includes(search.toLowerCase())
    );
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // On form submission, split the instructions (each line becomes an array element)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const examsCollection = collection(db, "upcomingExams");
    const instructionsArray = formData.instructions
      .split("\n")
      .filter((line) => line.trim() !== "");
    const examData = { ...formData, instructions: instructionsArray };

    try {
      if (isEdit) {
        const examDocRef = doc(db, "upcomingExams", selectedExam.id);
        await updateDoc(examDocRef, examData);
      } else {
        await addDoc(examsCollection, examData);
      }
      closeForm();
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  // Delete an exam document
  const handleDelete = async () => {
    try {
      const examDocRef = doc(db, "upcomingExams", selectedExam.id);
      await deleteDoc(examDocRef);
      setIsDeleteOpen(false);
      setSelectedExam(null);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  const openForm = (exam = null) => {
    setIsEdit(!!exam);
    setSelectedExam(exam);
    setFormData(
      exam || {
        name: "",
        code: "",
        date: "",
        time: "",
        duration: "",
        status: "Upcoming",
        venue: "",
        instructions: "",
      }
    );
    setIsModalOpen(true);
  };

  const closeForm = () => {
    setIsModalOpen(false);
    setIsEdit(false);
    setFormData({
      name: "",
      code: "",
      date: "",
      time: "",
      duration: "",
      status: "Upcoming",
      venue: "",
      instructions: "",
    });
  };

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <AdminPortalLayout />
      <div className="admin-events-container">
        <div className="admin-events-header">
          <h1>Upcoming Exams Management</h1>
          <button
            className="admin-events-add-button"
            onClick={() => openForm()}
          >
            <Plus className="admin-events-button-icon" />
            Add Exam
          </button>
        </div>

        <div className="admin-events-filters">
          <div className="admin-events-search-container">
            <Search className="admin-events-search-icon" />
            <input
              type="text"
              placeholder="Search exams..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="admin-events-search-input"
            />
          </div>
        </div>

        <div className="admin-events-table-container">
          <table className="admin-events-events-table">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Name</th>
                <th>Code</th>
                <th>Date</th>
                <th>Time</th>
                <th>Duration</th>
                <th>Venue</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading
                ? [1, 2, 3, 4].map((index) => (
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
                        <Skeleton width={70} />
                      </td>
                      <td>
                        <Skeleton width={70} />
                      </td>
                      <td>
                        <Skeleton width={100} />
                      </td>
                      <td>
                        <Skeleton width={70} />
                      </td>
                      <td>
                        <Skeleton width={100} />
                      </td>
                    </tr>
                  ))
                : filteredExams.map((exam, index) => (
                    <tr key={exam.id}>
                      <td>{index + 1}</td>
                      <td>{exam.name}</td>
                      <td>{exam.code}</td>
                      <td>{exam.date}</td>
                      <td>{exam.time}</td>
                      <td>{exam.duration}</td>
                      <td>{exam.venue || "-"}</td>
                      <td>{exam.status}</td>
                      <td className="admin-events-actions">
                        <button
                          className="admin-events-icon-button"
                          onClick={() => openForm(exam)}
                        >
                          <Pencil className="admin-events-button-icon" />
                        </button>
                        <button
                          className="admin-events-icon-button delete"
                          onClick={() => {
                            setSelectedExam(exam);
                            setIsDeleteOpen(true);
                          }}
                        >
                          <Trash2 className="admin-events-button-icon" />
                        </button>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>

        <div className="admin-events-preview-button-container">
          <button
            className={`admin-events-preview-button ${
              isPreviewVisible ? "active" : ""
            }`}
            onClick={() => setPreviewVisible(!isPreviewVisible)}
          >
            Preview
          </button>
        </div>

        {isPreviewVisible && (
          <div className="events-section-events-grid">
            {loading
              ? [1, 2, 3].map((index) => (
                  <div key={index} className="exam-portal-exam-card">
                    <div className="exam-portal-exam-card-header">
                      <Skeleton circle={true} height={32} width={32} />
                      <div style={{ marginLeft: "8px" }}>
                        <Skeleton width={60} />
                      </div>
                    </div>
                    <h3>
                      <Skeleton />
                    </h3>
                    <p className="exam-portal-exam-code">
                      <Skeleton count={1} />
                    </p>
                    <div className="exam-portal-exam-details">
                      <p>
                        <Skeleton width={80} />
                      </p>
                      <p>
                        <Skeleton width={80} />
                      </p>
                    </div>
                    <button className="exam-portal-exam-action-button">
                      <Skeleton width={100} />
                    </button>
                  </div>
                ))
              : filteredExams.map((exam) => (
                  <div key={exam.id} className="exam-portal-exam-card">
                    <div className="exam-portal-exam-card-header">
                      <BookOpen className="exam-portal-subject-icon" />
                      <div className="exam-portal-exam-status">
                        {exam.status}
                      </div>
                    </div>
                    <h3>{exam.name}</h3>
                    <p className="exam-portal-exam-code">{exam.code}</p>
                    <div className="exam-portal-exam-details">
                      <p>
                        <Calendar className="exam-portal-icon" /> {exam.date}
                      </p>
                      <p>
                        <Clock className="exam-portal-icon" /> {exam.time} (
                        {exam.duration})
                      </p>
                    </div>
                    <button
                      className="exam-portal-exam-action-button"
                      onClick={() => setDetailsExam(exam)}
                    >
                      View Details
                    </button>
                  </div>
                ))}
          </div>
        )}

        {isModalOpen && (
          <div className="admin-events-modal-overlay">
            <div className="admin-events-modal">
              <h2>{isEdit ? "Edit Exam" : "Add New Exam"}</h2>
              <form onSubmit={handleSubmit}>
                <div className="admin-events-form-group">
                  <label>Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="admin-events-form-group">
                  <label>Code</label>
                  <input
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    required
                  />
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
                  <label>Duration</label>
                  <input
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="admin-events-form-group">
                  <label>Status</label>
                  <input
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="admin-events-form-group">
                  <label>Venue</label>
                  <input
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                  />
                </div>
                <div className="admin-events-form-group">
                  <label>
                    Instructions (Enter each instruction on a new line)
                  </label>
                  <textarea
                    name="instructions"
                    value={formData.instructions}
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
                    {isEdit ? "Update Exam" : "Add Exam"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {isDeleteOpen && (
          <div className="admin-events-modal-overlay">
            <div className="admin-events-modal admin-events-delete-modal">
              <h2>Delete Exam</h2>
              <p>
                Are you sure you want to delete "{selectedExam?.name}"?
              </p>
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

        {detailsExam && (
          <div className="exam-portal-modal-overlay">
            <div className="exam-portal-modal-content">
              <button
                className="exam-portal-modal-close"
                onClick={() => setDetailsExam(null)}
              >
                <X size={24} />
              </button>
              <h2 className="exam-portal-modal-title">{detailsExam.name}</h2>
              <p className="exam-portal-exam-code">{detailsExam.code}</p>
              <div className="exam-portal-exam-info">
                <div className="exam-portal-info-item">
                  <Calendar className="exam-portal-info-icon" />
                  <span>{detailsExam.date}</span>
                </div>
                <div className="exam-portal-info-item">
                  <Clock className="exam-portal-info-icon" />
                  <span>
                    {detailsExam.time} ({detailsExam.duration})
                  </span>
                </div>
                {detailsExam.venue && (
                  <div className="exam-portal-info-item">
                    <MapPin className="exam-portal-info-icon" />
                    <span>{detailsExam.venue}</span>
                  </div>
                )}
              </div>
              <div className="exam-portal-exam-status-large">
                {detailsExam.status}
              </div>
              {detailsExam.instructions && (
                <div className="exam-portal-exam-instructions">
                  <h3>
                    <FileText className="exam-portal-section-icon" />
                    Exam Instructions
                  </h3>
                  <ul>
                    {detailsExam.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="exam-portal-exam-notice">
                <AlertCircle className="exam-portal-notice-icon" />
                <p>
                  Please arrive at least 30 minutes before the exam start time.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminUpcomingExams;

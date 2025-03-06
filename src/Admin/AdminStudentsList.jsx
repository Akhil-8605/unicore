import { useEffect, useState } from "react"
import { collection, getDocs, doc, deleteDoc, query, where } from "firebase/firestore"
import { db } from "../Authentication/firebase"
import "./AdminStudentList.css"
import AdminPortalLayout from "./AdminPortalLayout"
import { Users2, BarChart3, User, Mail, Phone, MapPin, BookOpen, Award, Clock, LogOut } from "lucide-react"
import { PiStudentDuotone, PiStudentFill } from "react-icons/pi";
import Akhil from "../Images/PersonDummy.png"

export default function AdminPage() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [branchFilter, setBranchFilter] = useState("All")
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [selectedStudentProfile, setSelectedStudentProfile] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"))
        const studentList = querySnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((user) => user.role === "student")
        setStudents(studentList)
        setLoading(false)
      } catch (err) {
        setError("Failed to fetch students data.")
        setLoading(false)
      }
    }
    fetchStudents()
  }, [])

  const handleViewStudent = async (student) => {
    setSelectedStudent(student)
    try {
      const profileQuery = query(
        collection(db, "usersProfile"),
        where("uid", "==", student.uid)
      )
      const profileSnapshot = await getDocs(profileQuery)
      if (!profileSnapshot.empty) {
        const profileDoc = profileSnapshot.docs[0]
        setSelectedStudentProfile({ id: profileDoc.id, ...profileDoc.data() })
      } else {
        setSelectedStudentProfile(null)
      }
    } catch (error) {
      console.error("Error fetching student profile:", error)
      setSelectedStudentProfile(null)
    }
    setIsModalOpen(true)
  }

  const handleDeleteStudent = (student) => {
    setSelectedStudent(student)
    setIsDeleteOpen(true)
  }

  const confirmDeleteStudent = async () => {
    if (selectedStudent) {
      try {
        // Delete the student from the "users" collection
        await deleteDoc(doc(db, "users", selectedStudent.id))

        // Query for the student's profile document in "usersProfile"
        const profileQuery = query(
          collection(db, "usersProfile"),
          where("uid", "==", selectedStudent.uid)
        )
        const profileSnapshot = await getDocs(profileQuery)

        // Delete each matching profile document (if any)
        const deletePromises = profileSnapshot.docs.map((profileDoc) =>
          deleteDoc(doc(db, "usersProfile", profileDoc.id))
        )
        await Promise.all(deletePromises)

        // Update the state to remove the student from the list
        setStudents(students.filter((s) => s.id !== selectedStudent.id))
        setIsDeleteOpen(false)
      } catch (err) {
        alert("Failed to delete student.")
      }
    }
  }


  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.displayName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.uid?.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesBranch = branchFilter === "All" || student.branch === branchFilter

    return matchesSearch && matchesBranch
  })

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <AdminPortalLayout />
      <main className="admin-students-main-content">
        <header className="admin-students-header">
          <h2>Student Management</h2>
          <form className="admin-students-search-form">
            <input
              type="search"
              placeholder="Search students..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="admin-students-search-input"
            />
            <select
              value={branchFilter}
              onChange={(e) => setBranchFilter(e.target.value)}
              className="admin-students-role-filter"
            >
              <option value="All">All Branches</option>
              <option value="Computer Engineering">Computer Engineering</option>
              <option value="Electronics & Telecommunication">Electronics & Telecommunication</option>
              <option value="Mechanical Engineering">Mechanical Engineering</option>
            </select>
          </form>
        </header>
        <div className="admin-students-card-container">
          <div className="admin-students-card">
            <h1 className="admin-students-card-title">
              <span>Total Students</span> <Users2 />
            </h1>
            <p className="admin-students-card-value">
              {/* {students.length} */}
              {filteredStudents.length}
            </p>
          </div>
          <div className="admin-students-card">
            <h1 className="admin-students-card-title">
              <span>Total Active Students</span> <BarChart3 />
            </h1>
            <p className="admin-students-card-value">
              {/* {students.filter((s) => s.role === "student").length} */}
              {filteredStudents.length}
            </p>
          </div>
        </div>
        <div className="admin-events-table-container">
          {error && <div className="admin-students-error-message">{error}</div>}
          {loading ? (
            <div className="admin-students-loading-skeleton">
              <div className="admin-students-loading-item"></div>
              <div className="admin-students-loading-item"></div>
              <div className="admin-students-loading-item"></div>
            </div>
          ) : (
            <table className="admin-events-events-table">
              <thead>
                <tr>
                  <th>Sr No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Branch</th>
                  <th>UID</th>
                  <th className="admin-students-text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student, index) => (
                    <tr key={student.id}>
                      <td>{index + 1}</td>
                      <td>{student.displayName}</td>
                      <td>{student.email}</td>
                      <td>
                        <span
                          className={`admin-students-badge ${student.role === "student"
                            ? "admin-students-badge-default"
                            : "admin-students-badge-secondary"
                            }`}
                        >
                          {student.role}
                        </span>
                      </td>
                      <td>{student.branch}</td>
                      <td>{student.uid}</td>
                      <td className="admin-students-text-right">
                        <div className="admin-students-dropdown">
                          <button className="admin-students-button">Actions</button>
                          <div className="admin-students-dropdown-content">
                            <a onClick={() => handleViewStudent(student)}>View Details</a>
                            <a onClick={() => handleDeleteStudent(student)} style={{ color: "red" }}>
                              Delete Student
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} style={{ textAlign: "center" }}>
                      No students found.
                    </td>
                  </tr>
                )}
                
              </tbody>
            </table>
          )}
        </div>
      </main>

      {isModalOpen && (
        <div
          className="admin-events-modal-overlay"
          onClick={() => {
            setIsModalOpen(false)
            setSelectedStudentProfile(null)
          }}
        >
          <div className="admin-events-modal profile-modal" onClick={(e) => e.stopPropagation()}>
            {selectedStudentProfile ? (
              <div className="profile-page-profile-content">
                {/* Profile Header */}
                <div className="profile-page-profile-header">
                  <PiStudentDuotone
                    className="profile-page-profile-avatar" color="#007bff" />
                  <div className="profile-page-profile-info">
                    <h2 className="profile-page-profile-name">
                      {selectedStudentProfile.displayName || "No Name"}
                    </h2>
                    <p className="profile-page-profile-role">{selectedStudentProfile.branch} Student</p>
                    <div className="profile-page-profile-stats">
                      {selectedStudentProfile.stats &&
                        Object.entries(selectedStudentProfile.stats).map(([key, value]) => (
                          <div key={key} className="profile-page-profile-stat">
                            {key === "enorollment" && <BookOpen className="profile-page-profile-stat-icon" />}
                            {key === "certificates" && <Award className="profile-page-profile-stat-icon" />}
                            {key === "attendance" && <Clock className="profile-page-profile-stat-icon" />}
                            <div>
                              <span className="profile-page-profile-stat-value">{value}</span>
                              <span className="profile-page-profile-stat-label"> {key}</span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Academic Information Section */}
                <div className="profile-page-section">
                  <h3 className="profile-page-section-title">
                    <BookOpen className="profile-page-profile-stat-icon" />
                    Academic Information
                  </h3>
                  <div className="profile-page-grid">
                    {selectedStudentProfile.academicInfo &&
                      Object.entries(selectedStudentProfile.academicInfo).map(([key, value]) => (
                        <div key={key} className="profile-page-profile-field">
                          <div className="profile-page-profile-field-label">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </div>
                          <div className="profile-page-profile-field-value">{value}</div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Stats Section */}
                <div className="profile-page-section">
                  <h3 className="profile-page-section-title">
                    <BookOpen className="profile-page-profile-stat-icon" />
                    Stats
                  </h3>
                  <div className="profile-page-grid">
                    {selectedStudentProfile.stats &&
                      Object.entries(selectedStudentProfile.stats).map(([key, value]) => (
                        <div key={key} className="profile-page-profile-field">
                          <div className="profile-page-profile-field-label">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </div>
                          <div className="profile-page-profile-field-value">{value}</div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Contact Information Section */}
                <div className="profile-page-section">
                  <h3 className="profile-page-section-title">
                    <User className="profile-page-profile-stat-icon" />
                    Contact Information
                  </h3>
                  <div className="profile-page-grid">
                    <div className="profile-page-profile-field">
                      <div className="profile-page-profile-field-label">Email</div>
                      <div className="profile-page-profile-field-value profile-page-contact-info">
                        <Mail className="profile-page-contact-icon" />
                        {selectedStudentProfile.contactInfo?.email}
                      </div>
                    </div>
                    <div className="profile-page-profile-field">
                      <div className="profile-page-profile-field-label">Phone</div>
                      <div className="profile-page-profile-field-value profile-page-contact-info">
                        <Phone className="profile-page-contact-icon" />
                        {selectedStudentProfile.contactInfo?.phone}
                      </div>
                    </div>
                    <div className="profile-page-profile-field">
                      <div className="profile-page-profile-field-label">Address</div>
                      <div className="profile-page-profile-field-value profile-page-contact-info">
                        <MapPin className="profile-page-contact-icon" />
                        {selectedStudentProfile.contactInfo?.address}
                      </div>
                    </div>
                    <div className="profile-page-profile-field">
                      <div className="profile-page-profile-field-label">Emergency Contact</div>
                      <div className="profile-page-profile-field-value">
                        <div>{selectedStudentProfile.contactInfo?.emergency?.name}</div>
                        <div className="profile-page-profile-stat-label">
                          {selectedStudentProfile.contactInfo?.emergency?.relation} • {selectedStudentProfile.contactInfo?.emergency?.phone}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="profile-page-btn profile-page-btn-outline"
                  onClick={() => {
                    setIsModalOpen(false)
                    setSelectedStudentProfile(null)
                  }}
                >
                  <LogOut className="profile-page-btn-icon" />
                  Close
                </button>
              </div>
            ) : (
              <div style={{ padding: "2rem" }}>Profile data not found.</div>
            )}
          </div>
        </div>
      )}

      {isDeleteOpen && selectedStudent && (
        <div className="admin-events-modal-overlay">
          <div className="admin-events-modal admin-events-delete-modal">
            <h2>Delete Student</h2>
            <p>
              Are you sure you want to delete "{selectedStudent.displayName}"?
            </p>
            <div className="admin-events-modal-actions">
              <button
                className="admin-events-cancel-button"
                onClick={() => setIsDeleteOpen(false)}
              >
                Cancel
              </button>
              <button className="admin-events-delete-button" onClick={confirmDeleteStudent}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where, updateDoc, doc } from "firebase/firestore";
import { db } from "../Authentication/firebase";
import { useAuth } from "../Authentication/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Phone, MapPin, BookOpen, Award, Clock, LogOut, Edit, User2 } from "lucide-react";
import { PiStudentDuotone, PiStudentFill } from "react-icons/pi";
import StudentPortalLayout from "./StudentPortalLayout";
import "./Profile.css";
import "../Components/ConformationModelOverlay.css";
import LoaderLogo from "../Images/loading.gif";
import Akhil from "../Images/PersonDummy.png";

function ProfilePage() {
  const { user } = useAuth();
  const [userProfile, setUserProfile] = useState(null);
  const [editProfileData, setEditProfileData] = useState(null);
  const [profileDocId, setProfileDocId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const navigate = useNavigate();

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
          setUserProfile(data);
          setEditProfileData(data); // Initialize editing state.
          setProfileDocId(profileDoc.id);
        } else {
          setUserProfile(null);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [user, navigate]);

  if (loading) {
    return (
      <div className="auth-page-overlay">
        <img src={LoaderLogo} alt="Loading" />
      </div>
    );
  }

  if (!userProfile) {
    return (
      <div className="profile-page-loading">
        <div className="confirmation-modal-overlay">
          <div className="confirmation-modal-content">
            <p className="confirmation-modal-message">
              Profile not found. Please logout and login again to set your profile.
            </p>
            <a href="/login">
              <button className="confirmation-modal-ok">OK</button>
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Generic handler to update nested fields.
  const handleInputChange = (path, value) => {
    // For nested objects, the path will be dot-separated, e.g., "academicInfo.department"
    const keys = path.split(".");
    setEditProfileData(prev => {
      let updated = { ...prev };
      let obj = updated;
      for (let i = 0; i < keys.length - 1; i++) {
        obj[keys[i]] = { ...obj[keys[i]] };
        obj = obj[keys[i]];
      }
      obj[keys[keys.length - 1]] = value;
      return updated;
    });
  };

  // Save the entire profile data to Firestore.
  const handleSaveChanges = async () => {
    if (!profileDocId) return;
    try {
      await updateDoc(doc(db, "usersProfile", profileDocId), editProfileData);
      setUserProfile(editProfileData);
      setShowEditModal(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="profile-page-profile-container">
      <StudentPortalLayout />
      <div className="profile-page-profile-content">
        {/* Profile Header */}
        <div className="profile-page-profile-header">
          <PiStudentDuotone
            className="profile-page-profile-avatar" color="#007bff" />
          <div className="profile-page-profile-info">
            <h2 className="profile-page-profile-name">{userProfile.displayName || "No Name"}</h2>
            <p className="profile-page-profile-role">{userProfile.branch} Student</p>
            <div className="profile-page-profile-stats">
              {userProfile.stats &&
                Object.entries(userProfile.stats).map(([key, value]) => (
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
            <button
              className="profile-page-btn profile-page-btn-primary"
              onClick={() => setShowEditModal(true)}
            >
              <Edit className="profile-page-btn-icon" />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Academic Information Section */}
        <div className="profile-page-section">
          <h3 className="profile-page-section-title">
            <BookOpen className="profile-page-profile-stat-icon" />
            Academic Information
          </h3>
          <div className="profile-page-grid">
            {userProfile.academicInfo &&
              Object.entries(userProfile.academicInfo).map(([key, value]) => (
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
            {userProfile.stats &&
              Object.entries(userProfile.stats).map(([key, value]) => (
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
                {userProfile.contactInfo.email}
              </div>
            </div>
            <div className="profile-page-profile-field">
              <div className="profile-page-profile-field-label">Phone</div>
              <div className="profile-page-profile-field-value profile-page-contact-info">
                <Phone className="profile-page-contact-icon" />
                {userProfile.contactInfo.phone}
              </div>
            </div>
            <div className="profile-page-profile-field">
              <div className="profile-page-profile-field-label">Address</div>
              <div className="profile-page-profile-field-value profile-page-contact-info">
                <MapPin className="profile-page-contact-icon" />
                {userProfile.contactInfo.address}
              </div>
            </div>
            <div className="profile-page-profile-field">
              <div className="profile-page-profile-field-label">Emergency Contact</div>
              <div className="profile-page-profile-field-value">
                <div>{userProfile.contactInfo.emergency.name}</div>
                <div className="profile-page-profile-stat-label">
                  {userProfile.contactInfo.emergency.relation} • {userProfile.contactInfo.emergency.phone}
                </div>
              </div>
            </div>
          </div>
          <Link to="/">
            <button className="profile-page-btn profile-page-btn-outline" style={{ marginTop: "2rem" }}>
              <LogOut className="profile-page-btn-icon" />
              Logout
            </button>
          </Link>
        </div>
      </div>

      {/* Modal Overlay for Editing All Profile Fields */}
      {showEditModal && (
        <div className="library-page-modal-overlay">
          <div className="library-page-modal admin-modal">
            <h3>Edit Profile</h3>
            {/* Personal Information */}
            <div className="modal-section">
              <h4>Personal Information</h4>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  value={editProfileData.displayName === "none" ? "" : editProfileData.displayName}
                  onChange={(e) => handleInputChange("displayName", e.target.value)}
                  className="profile-page-input-edit"
                />
              </div>
              <div>
                <label>Branch:</label>
                <input
                  type="text"
                  value={editProfileData.branch === "none" ? "" : editProfileData.branch}
                  onChange={(e) => handleInputChange("branch", e.target.value)}
                  className="profile-page-input-edit"
                />
              </div>
            </div>
            {/* Academic Information */}
            <div className="modal-section">
              <h4>Academic Information</h4>
              {editProfileData.academicInfo &&
                Object.entries(editProfileData.academicInfo).map(([key, value]) => (
                  <div key={key}>
                    <label>{key.replace(/([A-Z])/g, " $1").trim()}:</label>
                    <input
                      type="text"
                      value={value == "none" ? "" : value}
                      onChange={(e) => handleInputChange(`academicInfo.${key}`, e.target.value)}
                      className="profile-page-input-edit"
                    />
                  </div>
                ))}
            </div>
            {/* Stats */}
            <div className="modal-section">
              <h4>Stats</h4>
              {editProfileData.stats &&
                Object.entries(editProfileData.stats).map(([key, value]) => (
                  <div key={key}>
                    <label>{key.replace(/([A-Z])/g, " $1").trim()}:</label>
                    <input
                      type="text"
                      value={value === "none" ? "" : value}
                      onChange={(e) => handleInputChange(`stats.${key}`, e.target.value)}
                      className="profile-page-input-edit"
                    />
                  </div>
                ))}
            </div>
            {/* Contact Information */}
            <div className="modal-section">
              <h4>Contact Information</h4>
              {editProfileData.contactInfo && (
                <>
                  <div>
                    <label>Email:</label>
                    <input
                      type="text"
                      value={editProfileData.contactInfo.email}
                      onChange={(e) => handleInputChange("contactInfo.email", e.target.value)}
                      className="profile-page-input-edit"
                      disabled
                      title="you cannot change email becouse your email is being used..."
                    />
                  </div>
                  <div>
                    <label>Phone:</label>
                    <input
                      type="text"
                      value={editProfileData.contactInfo.phone === "none" ? "" : editProfileData.contactInfo.phone}
                      onChange={(e) => handleInputChange("contactInfo.phone", e.target.value)}
                      className="profile-page-input-edit"
                    />
                  </div>
                  <div>
                    <label>Address:</label>
                    <input
                      type="text"
                      value={editProfileData.contactInfo.address === "none" ? "" : editProfileData.contactInfo.address}
                      onChange={(e) => handleInputChange("contactInfo.address", e.target.value)}
                      className="profile-page-input-edit"
                    />
                  </div>
                  <div>
                    <label>Emergency Name:</label>
                    <input
                      type="text"
                      value={editProfileData.contactInfo.emergency.name === "none" ? "" : editProfileData.contactInfo.emergency.name}
                      onChange={(e) => handleInputChange("contactInfo.emergency.name", e.target.value)}
                      className="profile-page-input-edit"
                    />
                  </div>
                  <div>
                    <label>Emergency Relation:</label>
                    <input
                      type="text"
                      value={editProfileData.contactInfo.emergency.relation === "none" ? "" : editProfileData.contactInfo.emergency.relation}
                      onChange={(e) => handleInputChange("contactInfo.emergency.relation", e.target.value)}
                      className="profile-page-input-edit"
                    />
                  </div>
                  <div>
                    <label>Emergency Phone:</label>
                    <input
                      type="text"
                      value={editProfileData.contactInfo.emergency.phone === "none" ? "" : editProfileData.contactInfo.emergency.phone}
                      onChange={(e) => handleInputChange("contactInfo.emergency.phone", e.target.value)}
                      className="profile-page-input-edit"
                    />
                  </div>
                </>
              )}
            </div>
            <div className="profile-page-edit-buttons">
              <button className="profile-page-btn profile-page-btn-primary" onClick={handleSaveChanges}>
                Save Changes
              </button>
              <button className="profile-page-btn profile-page-btn-outline" onClick={() => setShowEditModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;

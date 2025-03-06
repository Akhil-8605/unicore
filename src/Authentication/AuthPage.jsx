import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { auth, provider, signInWithPopup } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  doc
} from "firebase/firestore";
import "./AuthPage.css";
import GoogleLogo from "../Images/google logo.png";
import Logo from "../Images/loading.gif";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  // State for current user uid
  const [currentUserUid, setCurrentUserUid] = useState(null);

  // Modal for error messages
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // Branch selection modal state (for students only)
  const [showBranchModal, setShowBranchModal] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [profileDocId, setProfileDocId] = useState("");

  // Loader state
  const [loading, setLoading] = useState(false);

  // Assign role based on email (default is "student")
  const assignRoleBasedOnEmail = (user) => {
    let role = "student";
    if (user.email === "admin@gmail.com") {
      role = "admin";
    }
    return role;
  };

  // Create basic user document in "users" collection including branch
  const createUserDoc = async (user, role, branch = "none") => {
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || "",
      role: role,
      branch: branch,
    };
    await addDoc(collection(db, "users"), userData);
  };

  // Create detailed user profile document in "usersProfile" collection (only for students) including branch
  const createUserProfileDoc = async (user, role, branch = "none") => {
    if (role === "admin") return null; // Do not create profile for admins
    const userProfileData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      role: role,
      branch: branch, // Fixed: use branch parameter instead of user.branch
      phone: "none",
      address: "none",
      semester: "none",
      joinDate: "none",
      stats: {
        enorollment: "none",
        certificates: "none",
        attendance: "none"
      },
      academicInfo: {
        major: "none",
        minor: "none",
        advisor: "none",
        expectedGraduation: "none",
        department: branch,
      },
      contactInfo: {
        gender: "none",
        dob: "none",
        personal: "none",
        email: user.email,
        phone: "none",
        address: "none",
        emergency: {
          name: "none",
          relation: "none",
          phone: "none"
        }
      }
    };
    const docRef = await addDoc(collection(db, "usersProfile"), userProfileData);
    return docRef.id;
  };

  // Create documents in both collections if they do not already exist.
  // For admins, only the "users" document is created.
  const createUserDocuments = async (user, role) => {
    // Check and create in "users" collection
    const usersQuery = query(collection(db, "users"), where("uid", "==", user.uid));
    const usersSnapshot = await getDocs(usersQuery);
    if (usersSnapshot.empty) {
      await createUserDoc(user, role);
    }
    if (role === "admin") return null;
    // For students: check and create in "usersProfile" collection
    const profileQuery = query(collection(db, "usersProfile"), where("uid", "==", user.uid));
    const profileSnapshot = await getDocs(profileQuery);
    let profileId = "";
    if (profileSnapshot.empty) {
      profileId = await createUserProfileDoc(user, role);
    } else {
      profileId = profileSnapshot.docs[0].id;
    }
    return profileId;
  };

  // Update branch in the "users" collection document
  const updateUserBranchInUsers = async (uid, branch) => {
    const usersQuery = query(collection(db, "users"), where("uid", "==", uid));
    const usersSnapshot = await getDocs(usersQuery);
    if (!usersSnapshot.empty) {
      const userDocId = usersSnapshot.docs[0].id;
      await updateDoc(doc(db, "users", userDocId), { branch: branch });
    }
  };

  // After authentication, if the user is a student, check if branch is set.
  // For admins, skip branch selection.
  const checkBranchAndNavigate = async (uid, role) => {
    if (role === "admin") {
      navigate("/");
      return;
    }
    const profileQuery = query(collection(db, "usersProfile"), where("uid", "==", uid));
    const profileSnapshot = await getDocs(profileQuery);
    if (!profileSnapshot.empty) {
      const profileData = profileSnapshot.docs[0].data();
      if (!profileData.branch || profileData.branch === "" || profileData.branch === "none") {
        setProfileDocId(profileSnapshot.docs[0].id);
        setShowBranchModal(true);
        return;
      }
    }
    navigate("/");
  };

  // Handle email/password authentication (login or sign-up)
  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (isLogin) {
        // Log in existing user
        const userCredential = await signInWithEmailAndPassword(auth, username, password);
        const user = userCredential.user;
        const role = assignRoleBasedOnEmail(user);
        setCurrentUserUid(user.uid);
        login({ email: user.email, uid: user.uid, displayName: user.displayName, role });
        await checkBranchAndNavigate(user.uid, role);
      } else {
        // Sign up new user
        const userCredential = await createUserWithEmailAndPassword(auth, username, password);
        const user = userCredential.user;
        const role = assignRoleBasedOnEmail(user);
        setCurrentUserUid(user.uid);
        await createUserDocuments(user, role);
        login({ email: user.email, uid: user.uid, displayName: user.displayName, role });
        await checkBranchAndNavigate(user.uid, role);
      }
    } catch (error) {
      setModalMessage(error.message);
      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  // Handle Google sign-in
  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const role =
        user.email === "akhileshadam186@gmail.com" ||
        user.email === "onkarsakv99@gmail.com"
          ? "admin"
          : "student";
      setCurrentUserUid(user.uid);
      await createUserDocuments(user, role);
      login({ email: user.email, uid: user.uid, displayName: user.displayName, role });
      if (role === "admin") {
        navigate("/");
      } else {
        const profileQuery = query(collection(db, "usersProfile"), where("uid", "==", user.uid));
        const profileSnapshot = await getDocs(profileQuery);
        if (!profileSnapshot.empty) {
          const profileData = profileSnapshot.docs[0].data();
          if (!profileData.branch || profileData.branch === "" || profileData.branch === "none") {
            setProfileDocId(profileSnapshot.docs[0].id);
            setShowBranchModal(true);
            return;
          }
        }
        navigate("/");
      }
    } catch (error) {
      setModalMessage("Google sign-in failed: " + error.message);
      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  // Update branch in both the user's profile and users collection
  const handleBranchSelect = async () => {
    if (!selectedBranch) return;
    try {
      setLoading(true);
      // Update branch in usersProfile
      if (profileDocId) {
        const profileDocRef = doc(db, "usersProfile", profileDocId);
        await updateDoc(profileDocRef, { branch: selectedBranch });
      }
      // Update branch in users collection
      if (currentUserUid) {
        await updateUserBranchInUsers(currentUserUid, selectedBranch);
      }
      setShowBranchModal(false);
      navigate("/");
    } catch (error) {
      setModalMessage(error.message);
      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setModalMessage("");
  };

  return (
    <div className={`auth-page ${isLogin ? "login-view" : "signup-view"}`}>
      {/* Loader Overlay */}
      {loading && (
        <div className="auth-page-overlay">
          <img src={Logo} alt="Loading" />
        </div>
      )}

      {/* Error Modal */}
      {showModal && (
        <div className="auth-page-overlay">
          <div className="auth-page-modal">
            <p>{modalMessage}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      {/* Branch Selection Modal (students only) */}
      {showBranchModal && (
        <div className="auth-page-overlay">
          <div className="auth-page-modal-branch-modal">
            <h2>Select Your Branch</h2>
            <select value={selectedBranch} onChange={(e) => setSelectedBranch(e.target.value)}>
              <option value="">-- Select Branch --</option>
              <option value="Computer Engineering">Computer Engineering</option>
              <option value="Electronics & Telecommunication">
                Electronics & Telecommunication
              </option>
              <option value="Mechanical Engineering">Mechanical Engineering</option>
            </select>
            <button onClick={handleBranchSelect}>Confirm</button>
          </div>
        </div>
      )}

      <div className="auth-page-auth-container">
        <div className="auth-page-image-section">
          <div className="auth-page-quote">
            {isLogin ? (
              <>
                <p className="auth-page-quote-title">A WISE QUOTE</p>
                <h1 className="auth-page-quote-text">Keep Pushing Forward</h1>
                <p className="auth-page-quote-subtitle">
                  Log in to continue your journey and stay on track for success.
                </p>
              </>
            ) : (
              <>
                <p className="auth-page-quote-title">A WISE QUOTE</p>
                <h1 className="auth-page-quote-text">A New Beginning</h1>
                <p className="auth-page-quote-subtitle">
                  Sign up now to start your academic journey with us.
                </p>
              </>
            )}
          </div>
        </div>

        <div className={`auth-page-form-section ${isLogin ? "right" : "left"}`}>
          <div className="auth-page-form-content">
            <h1 className="auth-page-form-title">
              {isLogin ? "Welcome Back" : "Create an Account"}
            </h1>
            <p className="auth-page-form-subtitle">
              {isLogin
                ? "Enter your username and password to access your account"
                : "Sign up to start your journey with us"}
            </p>
            <form onSubmit={handleAuth}>
              <div className="auth-page-input-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="auth-page-input-group">
                <label>Password</label>
                <div style={{ position: "relative" }}>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span
                    className="toggle-password"
                    title="Click to hide password"
                    onClick={(e) => {
                      const input = e.target.previousSibling;
                      if (input.type === "password") {
                        input.type = "text";
                        e.target.innerText = "🙈";
                      } else {
                        input.type = "password";
                        e.target.innerText = "👀";
                      }
                    }}
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "0px",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                    }}
                  >
                    👀
                  </span>
                </div>
              </div>

              {!isLogin && (
                <div className="auth-page-input-group">
                  <label>Confirm Password</label>
                  <div style={{ position: "relative" }}>
                    <input
                      type="password"
                      placeholder="Confirm your password"
                      required
                    />
                    <span
                      className="toggle-password"
                      title="Click to hide password"
                      onClick={(e) => {
                        const input = e.target.previousSibling;
                        if (input.type === "password") {
                          input.type = "text";
                          e.target.innerText = "🙈";
                        } else {
                          input.type = "password";
                          e.target.innerText = "👀";
                        }
                      }}
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: "0px",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    >
                      👀
                    </span>
                  </div>
                </div>
              )}

              <button type="submit" className="auth-page-primary-btn">
                {isLogin ? "Log In" : "Sign Up"}
              </button>

              <div className="auth-page-divider">OR</div>

              <button
                type="button"
                className="auth-page-google-btn"
                onClick={handleGoogleLogin}
              >
                {isLogin ? "Sign In with " : "Sign Up with "}
                <img
                  src={GoogleLogo}
                  alt="Google"
                  className="auth-page-google-icon"
                />
              </button>
            </form>

            <p className="auth-page-switch-auth">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <span onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Sign Up" : "Log In"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
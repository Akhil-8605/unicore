import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/homepage";
import AuthPage from "./Authentication/AuthPage";
import ContactPage from "./Pages/contactpage";
import LibraryPage from "./Pages/LibraryPage";
import AdminLibrary from "./Admin/AdminLibrary";
import AcademicCalendar from "./Pages/AcademicCalendarPage";
import Admissions from "./Pages/AdmissionsPage";
import Academics from "./Pages/academics/AcademicsPage";
import QuestionPapers from "./Pages/academics/QuestionPapersPage";
import ClassTestResults from "./Pages/academics/ClassTestResultsPage";
import PrivateRoute from "./Authentication/PrivateRoute";
import { AuthProvider } from "./Authentication/AuthProvider";
import Dashboard from "./Student/Dashboard";
import DepartmentsPage from "./Pages/DepartmentsPage";
import StudentLibraryPage from "./Student/LibraryPage";
import ProfilePage from "./Student/Profile";
import AttendancePage from "./Student/Attendance";
import ExamPortalPage from "./Student/Exams";
import CertificatesPage from "./Student/Certificates";
import Assignments from "./Student/Assignments";
import Schedules from "./Student/Schedule";
import Error from "./Authentication/Error";
import AdminImageGallery from "./Admin/AdminImageGallery";
import AdminEvents from "./Admin/AdminEvents";
import AdminStudentsList from "./Admin/AdminStudentsList";
import AdminLibraryRequest from "./Admin/AdminRequestedBooks";
import AdminUpcomingExams from "./Admin/AdminUpcomingExams.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import AdminCalender from "./Admin/AdminCalender.jsx";
import ComputerPage from "./Pages/courses/ComputerEngg.jsx";
import ElectronicsPage from "./Pages/courses/ElectronicsPage.jsx";
import MechanicalPage from "./Pages/courses/MechanicalEnggPage.jsx";
import EmailServicesPage from "./Pages/EmailServicesPage.jsx";

import loader from "./Images/loading.gif";

function App() {

  useEffect(() => {
    const threshold = 15;

    const handleMouseMove = (event) => {
      if (window.innerWidth - event.clientX <= threshold) {
        document.documentElement.classList.add("show-scrollbar");
      } else {
        document.documentElement.classList.remove("show-scrollbar");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      const handleLoad = () => setLoading(false);
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="image-spinner">
          <img src={loader} alt="Loading" />
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/academic-calendar" element={<AcademicCalendar />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/question-papers" element={<QuestionPapers />} />
          <Route path="/class-test-results" element={<ClassTestResults />} />
          <Route path="/departments" element={<DepartmentsPage />} />
          <Route path="/computer" element={<ComputerPage />} />
          <Route path="/electronics" element={<ElectronicsPage />} />
          <Route path="/mechanical" element={<MechanicalPage />} />
          <Route path="/email-services" element={<EmailServicesPage />} />
          <Route path="*" element={<Error />} />

          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin" element={<AdminImageGallery />} />
            <Route path="/admin/library" element={<AdminLibrary />} />
            <Route
              path="/admin/books-request"
              element={<AdminLibraryRequest />}
            />
            <Route path="/admin/events" element={<AdminEvents />} />
            <Route path="/admin/students" element={<AdminStudentsList />} />
            <Route path="/admin/exams" element={<AdminUpcomingExams />} />
            <Route
              path="/admin/academic-calender"
              element={<AdminCalender />}
            />
          </Route>

          <Route element={<PrivateRoute allowedRoles={["student"]} />}>
            <Route path="/student-portal" element={<Dashboard />} />
            <Route path="/student-portal/schedule" element={<Schedules />} />
            <Route
              path="/student-portal/library"
              element={<StudentLibraryPage />}
            />
            <Route path="/student-portal/profile" element={<ProfilePage />} />
            <Route
              path="/student-portal/attendance"
              element={<AttendancePage />}
            />
            <Route path="/student-portal/exams" element={<ExamPortalPage />} />
            <Route
              path="/student-portal/certificates"
              element={<CertificatesPage />}
            />
            <Route
              path="/student-portal/assignments"
              element={<Assignments />}
            />
          </Route>

          <Route
            element={<PrivateRoute allowedRoles={["student", "admin"]} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

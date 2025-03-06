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
import SamplePage from "./Pages/Sample";
import Error from "./Authentication/Error";
import AdminImageGallery from "./Admin/AdminImageGallery";
import AdminEvents from "./Admin/AdminEvents";
import AdminStudentsList from "./Admin/AdminStudentsList";
import AdminLibraryRequest from "./Admin/AdminRequestedBooks";
import AdminUpcomingExams from "./Admin/AdminUpcomingExams.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import AdminCalender from "./Admin/AdminCalender.jsx";
import ComputerEnggPage from "./Pages/courses/ComputerEngg.jsx";
import ElectronicsPage from "./Pages/courses/ElectronicsEnggPage.jsx";
import MechanicalPage from "./Pages/courses/MechanicalEnggPage.jsx";
function App() {
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
          <Route
            path="/academics/question-papers"
            element={<QuestionPapers />}
          />
          <Route
            path="/academics/class-test-results"
            element={<ClassTestResults />}
          />
          <Route path="/departments" element={<DepartmentsPage />} />
          <Route path="/computerengineering" element={<ComputerEnggPage/>}/>
          <Route path="/electronicsengineering" element={<ElectronicsPage/>}/>
          <Route path="/mechanicalengineering" element={<MechanicalPage/>}/>

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
            <Route path="/admin/academic-calender" element={<AdminCalender/>} />
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
          ></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

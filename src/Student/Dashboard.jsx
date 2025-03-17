"use client"

import {
  BookOpen,
  Calendar,
  Clock,
  ChevronRight,
  Award,
  FileText,
  Book,
  TrendingUp,
  AlertCircle,
  BookMarked,
  ArrowUpRight,
  Users,
  GraduationCap,
  ArrowRight,
  Sparkle,
  MapPin,
  Bell,
  LayoutDashboard,
  Library,
  User,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import StudentPortalLayout from "./StudentPortalLayout";
import { useAuth } from "../Authentication/AuthProvider";
import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../Authentication/firebase";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function DashboardPage() {
  const { user } = useAuth();

  // State for events fetched from Firestore.
  const [fetchedEvents, setFetchedEvents] = useState([]);
  const [loadingEvents, setLoadingEvents] = useState(true);

  // State for books fetched from Firestore.
  const [books, setBooks] = useState([]);
  const [loadingBooks, setLoadingBooks] = useState(true);

  // State for upcoming exams fetched from Firestore.
  const [exams, setExams] = useState([]);
  const [loadingExams, setLoadingExams] = useState(true);

  useEffect(() => {
    // Fetch events from Firestore
    const eventsCollection = collection(db, "events");
    const unsubscribeEvents = onSnapshot(
      eventsCollection,
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setFetchedEvents(data);
        setLoadingEvents(false);
      },
      (error) => {
        console.error("Error fetching events:", error);
        setLoadingEvents(false);
      }
    );
    return () => unsubscribeEvents();
  }, []);

  useEffect(() => {
    // Fetch books from Firestore and add a random progress value for each book.
    const booksCollection = collection(db, "books");
    const unsubscribeBooks = onSnapshot(
      booksCollection,
      (snapshot) => {
        const booksData = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            progress: Math.floor(Math.random() * 100) // Random progress between 0 and 99%
          };
        });
        setBooks(booksData);
        setLoadingBooks(false);
      },
      (error) => {
        console.error("Error fetching books:", error);
        setLoadingBooks(false);
      }
    );
    return () => unsubscribeBooks();
  }, []);

  useEffect(() => {
    // Fetch upcoming exams from Firestore.
    // Each exam document should include: name, code, date, time, duration, status, venue, and instructions (array of strings).
    const examsCollection = collection(db, "upcomingExams");
    const unsubscribeExams = onSnapshot(
      examsCollection,
      (snapshot) => {
        const examsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setExams(examsData);
        setLoadingExams(false);
      },
      (error) => {
        console.error("Error fetching upcoming exams:", error);
        setLoadingExams(false);
      }
    );
    return () => unsubscribeExams();
  }, []);

  // Helper functions
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

  // Filter only upcoming events and display only the first 3.
  const upcomingEventsFromDB = fetchedEvents.filter((event) => isUpcoming(event.date));
  const displayEvents = upcomingEventsFromDB.slice(0, 3);

  return (
    <div style={{ display: "flex" }}>
      <StudentPortalLayout />
      <div style={{ width: "90%" }}>
        <div className="content-header">
          <div className="welcome-message">
            <div>
              <h2>Welcome back, {user.displayName}</h2>
              <p>Here's what's happening with your academic progress</p>
            </div>
          </div>
        </div>

        <div className="dashboard-grid">
          {/* Upcoming Exams Section */}
          <div className="card exams-section">
            <div className="card-header">
              <h2 className="card-title">Upcoming Exams</h2>
              <Link to="/student-portal/exams" className="see-all">
                See All <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="exams-list">
              {loadingExams ? (
                // Render skeleton cards while loading exams.
                [1, 2, 3].map((_, index) => (
                  <div key={index} className="assignment-item">
                    <Skeleton height={25} width={150} />
                    <Skeleton count={2} />
                  </div>
                ))
              ) : (
                exams.map((exam, index) => (
                  <div key={index} className="assignment-item">
                    <div className="assignment-info">
                      <h3>{exam.name}</h3>
                      <p style={{ display: "flex", gap: "5px" }}>
                        <span>{exam.code}</span>
                        <span>•</span>
                        <span>{exam.time}</span>
                      </p>
                      <span className="due-date">{exam.date}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Upcoming Events Section */}
          <div className="card upcoming-events">
            <div className="card-header">
              <h2 className="card-title">Upcoming Events</h2>
              <Calendar className="card-icon" />
            </div>
            <div className="events-section-events-grid">
              {loadingEvents ? (
                [1, 2, 3].map((_, index) => (
                  <div key={index} className="events-section-event-card">
                    <Skeleton height={25} width={80} />
                    <Skeleton count={2} />
                  </div>
                ))
              ) : (
                displayEvents.length === 0 ? (
                  <div className="no-events-message">No Events Available...</div>
                ) : (
                  displayEvents.map((event) => (
                    <div
                      key={event.id}
                      className={`events-section-event-card ${event.isHighlight ? "highlight" : ""}`}
                    >
                      <div className="events-section-event-header">
                        {getCategoryIcon(event.category)}
                        <span className="events-section-event-category">{event.category}</span>
                        {isUpcoming(event.date) && (
                          <span className="events-section-upcoming-badge">
                            <Sparkle className="events-section-badge-icon" />
                            Upcoming
                          </span>
                        )}
                      </div>
                      <h3 className="events-section-event-title">{event.title}</h3>
                      <p className="events-section-event-description">{event.description}</p>
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
                )
              )}
            </div>
          </div>

          {/* Books Section with Horizontal Scroll */}
          <div className="card books-section" style={{ marginBottom: "-2rem" }}>
            <div className="card-header">
              <h2 className="card-title">Currently Reading</h2>
              <a href="/student-portal/library" className="see-all">
                See All <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div
              className="books-grid"
              style={{
                display: "flex",
                overflowX: "auto",
                gap: "16px",
                paddingBottom: "8px"
              }}
            >
              {loadingBooks ? (
                [1, 2, 3].map((_, index) => (
                  <div key={index} className="book-card" style={{ minWidth: "200px" }}>
                    <Skeleton height={120} width={90} />
                    <Skeleton height={20} width={150} style={{ marginTop: "8px" }} />
                    <Skeleton height={16} width={100} />
                  </div>
                ))
              ) : (
                books.map((book) => (
                  <div key={book.id} className="book-card" style={{ minWidth: "300px", marginTop: "1rem" }}>
                    <div className="library-page-book-cover-placeholder">
                      {book.cover ? (
                        <img src={book.cover} alt={book.title} style={{ height: "120px", width: "90px", objectFit: "cover" }} />
                      ) : (
                        <BookOpen size={32} />
                      )}
                    </div>
                    <div className="book-info">
                      <h3>{book.title}</h3>
                      <p>{book.author}</p>
                      <div className="book-progress">
                        <div className="progress-bar">
                          <div className="progress-value" style={{ width: `${book.progress}%` }} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Quick Actions Section */}
          <div className="card quick-actions">
            <div className="card-header">
              <h2 className="card-title">Quick Actions</h2>
              <TrendingUp className="card-icon" />
            </div>
            <div className="actions-grid">
              {[
                { name: "Schedule", href: "/student-portal/schedule", icon: Calendar, description: "Manage your academic schedule" },
                {
                  name: "Library Resources", href: "/student-portal/library", icon: Library, description: 'Access digital library and research materials',
                },
                {
                  name: "Exam Portal", href: "/student-portal/exams", icon: BookOpen, description: 'Access digital library and research materials',
                },
                {
                  name: 'Email Services',
                  icon: Mail,
                  description: 'Access university email and communications',
                  href: '/email-services'
                },
                { name: "Profile", href: "/student-portal/profile", icon: User, description: "Edit and view your profile" },
              ].map((item, index) => (
                <a key={index} href={item.href} className="quick-access-quick-link-card">
                  <div className="quick-access-quick-link-icon">
                    <item.icon className="action-icon" />
                  </div>
                  <div className="quick-access-quick-link-content">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                  <ChevronRight className="quick-access-arrow-icon" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

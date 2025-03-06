// AdminRequestedBooks.jsx
import React, { useState, useEffect } from "react";
import { Search, Book, BookOpen } from "lucide-react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  updateDoc,
  doc,
  deleteDoc
} from "firebase/firestore";
import { db } from "../Authentication/firebase"; // Adjust path as needed
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import AdminPortalLayout from "./AdminPortalLayout";
// Optionally, you can remove the CSS import if you want everything inline
// import "./AdminEvents.css";

const AdminRequestedBooks = () => {
  // State variables
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  // State to track which request's status overlay is active (by id)
  const [activeStatusOverlay, setActiveStatusOverlay] = useState(null);

  // Inline style objects for the overlay and status option buttons
  const overlayStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    background: "#fff",
    border: "1px solid #ccc",
    padding: "10px",
    zIndex: 10,
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
    width: "150px"
  };

  const statusButtonStyle = {
    display: "block",
    width: "100%",
    margin: "3px 0",
    padding: "5px",
    fontSize: "12px",
    background: "#f5f5f5",
    border: "none",
    cursor: "pointer",
    textAlign: "left"
  };

  const removeButtonStyle = {
    ...statusButtonStyle,
    color: "red"
  };

  // Real-time listener to fetch requested books from Firestore
  useEffect(() => {
    const requestsCollection = collection(db, "booksRequest");
    const q = query(requestsCollection, orderBy("requestDate", "desc"));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const requestsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setRequests(requestsData);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching requested books:", error);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  // Filter requests based on the search query.
  // Searches in title, author, id, publishedYear, userName, userEmail, and status.
  const filteredRequests = requests.filter((request) => {
    return (
      request.title.toLowerCase().includes(search.toLowerCase()) ||
      request.author.toLowerCase().includes(search.toLowerCase()) ||
      request.id.toLowerCase().includes(search.toLowerCase()) ||
      request.publishedYear.toString().toLowerCase().includes(search.toLowerCase()) ||
      request.userName.toLowerCase().includes(search.toLowerCase()) ||
      request.userEmail.toLowerCase().includes(search.toLowerCase()) ||
      request.status.toLowerCase().includes(search.toLowerCase())
    );
  });

  // Helper function to format the request date.
  const formatDate = (date) => {
    if (date && date.toDate) {
      return date.toDate().toLocaleString();
    } else if (date) {
      return new Date(date).toLocaleString();
    }
    return "";
  };

  // Function to update the status of a request
  const handleStatusChange = async (requestId, newStatus) => {
    try {
      const requestDocRef = doc(db, "booksRequest", requestId);
      await updateDoc(requestDocRef, { status: newStatus });
      setActiveStatusOverlay(null);
    } catch (error) {
      console.error("Error updating request status: ", error);
    }
  };

  // Function to delete (remove) a request
  const handleRemoveRequest = async (requestId) => {
    try {
      await deleteDoc(doc(db, "booksRequest", requestId));
      setActiveStatusOverlay(null);
    } catch (error) {
      console.error("Error removing request: ", error);
    }
  };

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <AdminPortalLayout />
      <div
        className="admin-events-container"
        style={{ padding: "20px" }}
      >
        <div
          className="admin-events-header"
          style={{ marginBottom: "20px" }}
        >
          <h1>Requested Books</h1>
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
        </div>

        <div className="admin-events-table-container">
          <table
            className="admin-events-events-table"
            style={{ width: "100%", borderCollapse: "collapse" }}
          >
            <thead>
              <tr>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Sr No.
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Request ID
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Student Name
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Student Email
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Request Date
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Status
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Book
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                // Show skeleton rows while loading
                [1, 2, 3, 4].map((index) => (
                  <tr key={index}>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <Skeleton width={30} />
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <Skeleton width={150} />
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <Skeleton width={100} />
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <Skeleton width={120} />
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <Skeleton width={150} />
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <Skeleton width={80} />
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <Skeleton width={200} />
                    </td>
                  </tr>
                ))
              ) : (
                filteredRequests.map((request, index) => (
                  <tr key={request.id}>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {index + 1}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {request.id}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {request.userName}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {request.userEmail}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {formatDate(request.requestDate)}
                    </td>
                    <td
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        position: "relative",
                        cursor: "pointer"
                      }}
                      onClick={() =>
                        setActiveStatusOverlay(
                          activeStatusOverlay === request.id ? null : request.id
                        )
                      }
                    >
                      {request.status}
                      {activeStatusOverlay === request.id && (
                        <div
                          style={overlayStyle}
                          onMouseLeave={() => setActiveStatusOverlay(null)}
                        >
                          <h4
                            style={{
                              margin: "0 0 5px 0",
                              fontSize: "14px",
                              textAlign: "center"
                            }}
                          >
                            Set Status
                          </h4>
                          <button
                            style={statusButtonStyle}
                            onClick={() =>
                              handleStatusChange(request.id, "accepted")
                            }
                          >
                            Accepted
                          </button>
                          <button
                            style={statusButtonStyle}
                            onClick={() =>
                              handleStatusChange(request.id, "declined")
                            }
                          >
                            Declined
                          </button>
                          <button
                            style={statusButtonStyle}
                            onClick={() =>
                              handleStatusChange(request.id, "pending")
                            }
                          >
                            Pending
                          </button>
                          <button
                            style={removeButtonStyle}
                            onClick={() => handleRemoveRequest(request.id)}
                          >
                            Remove
                          </button>
                        </div>
                      )}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <div
                        className="library-page-book-card"
                        style={{
                          display: "flex",
                          alignItems: "flex-start"
                        }}
                      >
                        <div className="library-page-book-info">
                          <h3
                            style={{ margin: "0", fontSize: "16px" }}
                          >
                            {request.title}
                          </h3>
                          <p
                            style={{ margin: "0", fontSize: "14px" }}
                            className="library-page-book-author"
                          >
                            by {request.author}
                          </p>
                          <div className="library-page-book-meta">
                            <span
                              style={{ fontSize: "12px" }}
                              className="library-page-book-year"
                            >
                              {request.publishedYear}
                            </span>
                          </div>
                          <div className="library-page-book-details">
                            <span
                              style={{ fontSize: "12px" }}
                              className="library-page-book-price"
                            >
                              Price: ₹{Number(request.price).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminRequestedBooks;

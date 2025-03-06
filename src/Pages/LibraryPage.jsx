import React, { useState } from 'react';
import { Search, SlidersHorizontal, BookOpen, X, Check, ShoppingCart } from 'lucide-react';
import './LibraryPage.css';
import MainHeader from '../Components/MainHeader.jsx';
import { useFirebaseBooks } from '../Admin/useFirebaseBooks.js';
// Import Firestore functions and your configured db
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../Authentication/firebase';
// Import the auth hook to get logged-in user data
import { useAuth } from '../Authentication/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer.jsx';

const StudentLibrary = () => {

    const navigate = useNavigate();

    // Get books from Firestore via your custom hook
    const { books } = useFirebaseBooks();
    // Get logged-in user data from the auth provider
    const { user } = useAuth();

    const [searchTerm, setSearchTerm] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [requests, setRequests] = useState([]);
    const [showRequestModal, setShowRequestModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    // Optionally handle the case where the user is not yet loaded
    // if (!user) {
    //     return <div>Loading user data...</div>;
    // }

    // Derive unique categories from the fetched books
    const categories = Array.from(new Set(books.map((book) => book.category)));

    const handlePurchaseRequest = (book) => {
        setSelectedBook(book);
        setShowRequestModal(true);
    };

    const submitRequest = async () => {
        if (selectedBook) {
            // Build a new request object using the selected book details and logged-in user data
            const newRequest = {
                bookId: selectedBook.id,
                title: selectedBook.title,
                author: selectedBook.author,
                price: selectedBook.price,
                publishedYear: selectedBook.publishedYear,
                requestDate: new Date(), // current date and time
                userId: user.uid,         // logged-in user's id
                userName: user.displayName,     // logged-in user's name
                userEmail: user.email,   // logged-in user's email
                status: 'pending',
            };

            try {
                // Add the request to the "booksRequest" collection (Firestore creates it automatically if needed)
                const docRef = await addDoc(collection(db, 'booksRequest'), newRequest);
                console.log('Request submitted with ID:', docRef.id);

                // Optionally update local state with the new request
                setRequests([...requests, newRequest]);
                setShowRequestModal(false);
                setSelectedBook(null);
            } catch (error) {
                console.error('Error adding document:', error);
            }
        }
    };

    const filteredBooks = books.filter((book) => {
        const matchesSearch =
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.categories.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.publishedYear.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.price.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.copies.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.available.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const hasExistingRequest = (bookId) => {
        return requests.some((request) => request.bookId === bookId);
    };

    return (
        <div>
            {/* <MainHeader /> */}
            <div className="library-page">
                <div className="library-page-library-container">
                    <div className="library-page-library-header">
                        <div className="library-page-header-content">
                            <h1 className="library-page-text-[#007bff]">University Library</h1>
                            <p>Search and request books from our collection</p>
                        </div>
                    </div>

                    <div className="library-page-library-controls">
                        <div className="library-page-search-bar">
                            <Search size={18} className="library-page-search-icon" />
                            <input
                                type="text"
                                placeholder="Search by title, author, category, published year..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <button
                            className={`library-page-btn-filter ${showFilters ? 'active' : ''}`}
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            <SlidersHorizontal size={18} />
                            Filters
                        </button>
                    </div>

                    {showFilters && (
                        <div className="library-page-filter-section">
                            <div className="library-page-filter-group">
                                <label>Category:</label>
                                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                                    <option value="all">All Categories</option>
                                    {categories.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    )}

                    <div className="library-page-books-grid">
                        {filteredBooks.map((book) => (
                            <div key={book.id} className="library-page-book-card">
                                <div className="library-page-book-cover">
                                    {book.coverImage ? (
                                        <img src={book.coverImage} alt={book.title} />
                                    ) : (
                                        <div className="library-page-book-cover-placeholder">
                                            <BookOpen size={32} />
                                        </div>
                                    )}
                                </div>
                                <div className="library-page-book-info">
                                    <h3>{book.title}</h3>
                                    <p className="library-page-book-author">by {book.author}</p>
                                    <div className="library-page-book-meta">
                                        <span className="library-page-book-category">{book.category}</span>
                                        <span className="library-page-book-year">{book.publishedYear}</span>
                                    </div>
                                    <div className="library-page-book-details">
                                        <span className="library-page-book-price">
                                            Price: ₹{Number(book.price).toFixed(2)}
                                        </span>
                                    </div>
                                    <div className="library-page-book-availability">
                                        <span className={`library-page-status ${book.available > 0 ? 'available' : 'unavailable'}`}>
                                            {book.available > 0 ? <Check size={14} /> : <X size={14} />}
                                            {book.available} of {book.copies} available
                                        </span>
                                    </div>
                                    <p className="library-page-book-description">{book.description}</p>
                                </div>
                                <div className="library-page-book-actions student">
                                    <button
                                        onClick={() => navigate(`/student-portal/library`)}
                                        className={`library-page-btn-request `}
                                    >
                                        <ShoppingCart size={16} />
                                        {hasExistingRequest(book.id) ? 'Requested' : 'Request Purchase'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredBooks.length === 0 && (
                        <div className="library-page-no-results">
                            <BookOpen size={48} />
                            <p>No books found matching your search criteria.</p>
                        </div>
                    )}

                    {showRequestModal && selectedBook && (
                        <div className="library-page-modal-overlay" onClick={() => setShowRequestModal(false)}>
                            <div className="library-page-modal" onClick={(e) => e.stopPropagation()}>
                                <div className="library-page-modal-header">
                                    <h2>Confirm Purchase Request</h2>
                                    <button className="library-page-btn-close" onClick={() => setShowRequestModal(false)}>
                                        <X size={20} />
                                    </button>
                                </div>
                                <div className="library-page-modal-content">
                                    <p>Are you sure you want to request the purchase of:</p>
                                    <div className="library-page-request-details">
                                        <h3>{selectedBook.title}</h3>
                                        <p>by {selectedBook.author}</p>
                                        <p className="library-page-price">Price: ₹{Number(selectedBook.price).toFixed(2)}</p>
                                    </div>
                                    <div className="library-page-form-actions">
                                        <button className="library-page-btn-secondary" onClick={() => setShowRequestModal(false)}>
                                            Cancel
                                        </button>
                                        <button className="library-page-btn-primary" onClick={submitRequest}>
                                            Confirm Request
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default StudentLibrary;
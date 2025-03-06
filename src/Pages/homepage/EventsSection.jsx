import { useState, useEffect } from 'react';
import { Calendar, Bell, GraduationCap, MapPin, Clock, Sparkles } from 'lucide-react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../Authentication/firebase'; // Ensure this path is correct based on your project structure
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './EventsSection.css';

import { FaRegCalendarAlt } from 'react-icons/fa';

export default function EventsSection() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch events from Firestore in real time
    useEffect(() => {
        const eventsCollection = collection(db, 'events');
        const unsubscribe = onSnapshot(
            eventsCollection,
            (snapshot) => {
                const eventsData = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setEvents(eventsData);
                setLoading(false);
            },
            (error) => {
                console.error("Error fetching events:", error);
                setLoading(false);
            }
        );
        return () => unsubscribe();
    }, []);

    // Filter events by the active category and update when events or category change
    useEffect(() => {
        setFilteredEvents(
            activeCategory === 'all'
                ? events
                : events.filter(event => event.category === activeCategory)
        );
    }, [activeCategory, events]);

    // Returns the appropriate icon based on event category.
    const getCategoryIcon = (category) => {
        switch (category) {
            case 'exam':
                return <GraduationCap className="events-section-category-icon" />;
            case 'registration':
                return <Calendar className="events-section-category-icon" />;
            case 'announcement':
                return <Bell className="events-section-category-icon" />;
            default:
                return <Calendar className="events-section-category-icon" />;
        }
    };

    // Format the date string into a more friendly format.
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        }).format(date);
    };

    // Determines if an event date is in the future.
    const isUpcoming = (dateString) => {
        const eventDate = new Date(dateString);
        return eventDate > new Date();
    };

    // Live clock: updates every second.
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Render skeleton UI while loading
    if (loading) {
        return (
            <section className="events-section" id="events">
                <div className="events-section-events-container">
                    <div className="events-section-events-header">
                        <div className="events-section-header-content">
                            <h2>Upcoming Events</h2>
                            <p className="events-section-header-subtitle">
                                Stay updated with the latest university activities
                            </p>
                        </div>
                        <div className="events-section-live-time">
                            <Clock className="events-section-time-icon" />
                            <Skeleton width={60} />
                        </div>
                    </div>
                    <div className="skeleton-grid">
                        {[...Array(5)].map((_, index) => (
                            <div key={index} className="skeleton-event-card">
                                <div className="skeleton-event-header" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Skeleton circle={true} height={32} width={32} />
                                    <Skeleton width={80} />
                                </div>
                                <h3 className="events-section-event-title">
                                    <Skeleton width="80%" />
                                </h3>
                                <p className="events-section-event-description">
                                    <Skeleton count={2} />
                                </p>
                                <div className="events-section-event-details" style={{ display: 'flex', gap: '8px' }}>
                                    <Skeleton width={60} />
                                    <Skeleton width={60} />
                                    <Skeleton width={60} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    // Render actual events once data has loaded
    return (
        <section className="events-section" id="events">
            <div className="events-section-events-container">
                <div className="events-section-events-header">
                    <div className="events-section-header-content">
                        <h2>Upcoming Events</h2>
                        <p className="events-section-header-subtitle">
                            Stay updated with the latest university activities
                        </p>
                    </div>
                    <div className="events-section-live-time">
                        <Clock className="events-section-time-icon" />
                        {currentTime}
                    </div>
                </div>

                <div className="events-section-category-filters">
                    <button
                        className={`events-section-category-btn ${activeCategory === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('all')}
                    >
                        <Sparkles className="events-section-filter-icon" />
                        All Events
                    </button>
                    <button
                        className={`events-section-category-btn ${activeCategory === 'registration' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('registration')}
                    >
                        <Calendar className="events-section-filter-icon" />
                        Registration
                    </button>
                    <button
                        className={`events-section-category-btn ${activeCategory === 'exam' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('exam')}
                    >
                        <GraduationCap className="events-section-filter-icon" />
                        Exams
                    </button>
                    <button
                        className={`events-section-category-btn ${activeCategory === 'event' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('event')}
                    >
                        <Calendar className="events-section-filter-icon" />
                        Events
                    </button>
                    <button
                        className={`events-section-category-btn ${activeCategory === 'announcement' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('announcement')}
                    >
                        <Bell className="events-section-filter-icon" />
                        Announcements
                    </button>
                </div>


                {filteredEvents.length === 0 ? (
                    <div>
                        <div
                            style={{
                                backgroundColor: '#ffffff',
                                padding: '40px 30px',
                                borderRadius: '10px',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                justifyContent: 'center',
                                textAlign: 'center',
                                maxWidth: '400px',
                                width: '300px',
                                margin: '0 auto',
                            }}
                        >
                            <FaRegCalendarAlt
                                style={{
                                    fontSize: '60px',
                                    color: '#007bff',
                                    marginBottom: '20px',
                                }}
                            />
                            <h2
                                style={{
                                    margin: '0 0 10px',
                                    fontSize: '24px',
                                    color: '#333',
                                }}
                            >
                                No Events Available
                            </h2>
                            <p
                                style={{
                                    margin: 0,
                                    fontSize: '16px',
                                    color: '#666',
                                }}
                            >
                                Please check back later for upcoming events.
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="events-section-events-grid">
                        {filteredEvents.map((event) => (
                            <div
                                key={event.id}
                                className={`events-section-event-card ${event.isHighlight ? 'highlight' : ''}`}
                            >
                                <div className="events-section-event-header">
                                    {getCategoryIcon(event.category)}
                                    <span className="events-section-event-category">{event.category}</span>
                                    {isUpcoming(event.date) && (
                                        <span className="events-section-upcoming-badge">
                                            <Sparkles className="events-section-badge-icon" />
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
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

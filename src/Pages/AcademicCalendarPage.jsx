import React, { useState, useEffect } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek, isSameDay, isSameMonth, parseISO, addDays, subDays, addWeeks, subWeeks, addMonths, subMonths } from 'date-fns';
import './AcademicCalendarPage.css';
import MainHeader from "../Components/MainHeader";
import Footer from '../Components/Footer';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../Authentication/firebase';

const eventTypes = {
    lecture: { label: 'Lecture', color: '#3498db' },
    exam: { label: 'Exam', color: '#e74c3c' },
    holiday: { label: 'Holiday', color: '#2ecc71' },
    deadline: { label: 'Deadline', color: '#f39c12' },
    event: { label: 'Event', color: '#9b59b6' }
};

export default function AcademicCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [view, setView] = useState('month');
    const [filteredTypes, setFilteredTypes] = useState([]);
    const [events, setEvents] = useState([]);

    // Fetch events from Firestore in real time
    useEffect(() => {
        const eventsCollection = collection(db, "academicCalenderEvent");
        const unsubscribe = onSnapshot(eventsCollection, (snapshot) => {
            const fetchedEvents = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setEvents(fetchedEvents);
        });
        return () => unsubscribe();
    }, []);

    // Date functions for month view
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
    const startDayOfWeek = monthStart.getDay(); // 0 for Sunday, 1 for Monday, etc.

    // Add blank spaces for days before the start of the month
    const blanks = Array(startDayOfWeek).fill(null);

    // Date functions for week view
    const weekStart = startOfWeek(currentDate, { weekStartsOn: 0 });
    const weekEnd = endOfWeek(currentDate, { weekStartsOn: 0 });
    const daysInWeek = eachDayOfInterval({ start: weekStart, end: weekEnd });

    // Date function for day view
    const daysInDay = [currentDate];

    // Filter events by event types if any filter is applied
    const filteredEvents = events.filter(event =>
        filteredTypes.length === 0 || filteredTypes.includes(event.type)
    );

    // Get events for a specific date (accounts for events spanning multiple days)
    const getEventsForDate = (date) => {
        return filteredEvents.filter(event => {
            const eventDate = parseISO(event.date);
            const eventEndDate = event.endDate ? parseISO(event.endDate) : eventDate;
            return date >= eventDate && date <= eventEndDate;
        });
    };

    // Navigation functions for month, week, and day views
    const handlePreviousMonth = () => setCurrentDate(prev => subMonths(prev, 1));
    const handleNextMonth = () => setCurrentDate(prev => addMonths(prev, 1));
    const handlePreviousWeek = () => setCurrentDate(prev => subWeeks(prev, 1));
    const handleNextWeek = () => setCurrentDate(prev => addWeeks(prev, 1));
    const handlePreviousDay = () => setCurrentDate(prev => subDays(prev, 1));
    const handleNextDay = () => setCurrentDate(prev => addDays(prev, 1));

    const toggleEventType = (type) => {
        setFilteredTypes(prev =>
            prev.includes(type)
                ? prev.filter(t => t !== type)
                : [...prev, type]
        );
    };

    const handleEventClick = (event, e) => {
        e.stopPropagation();
        setSelectedEvent(event);
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
        const eventsForDay = getEventsForDate(date);
        if (eventsForDay.length > 0) {
            setSelectedEvent(eventsForDay[0]);
        } else {
            setSelectedEvent(null);
        }
    };

    return (
        <>
            <MainHeader />
            <div className="academic-calendar-container" style={{ paddingTop: '125px' }}>
                <div className="academic-calendar-header">
                    <div className="academic-calendar-title">
                        <h1>Academic Calendar</h1>
                        <p>{format(currentDate, 'MMMM yyyy')}</p>
                    </div>

                    <div className="academic-calendar-controls">
                        <select
                            value={view}
                            onChange={(e) => setView(e.target.value)}
                            className="academic-calendar-view-select"
                        >
                            <option value="month">Month View</option>
                            <option value="week">Week View</option>
                            {/* <option value="day">Day View</option> */}
                        </select>

                        <div className="academic-calendar-navigation">
                            <button
                                onClick={view === 'month' ? handlePreviousMonth : view === 'week' ? handlePreviousWeek : handlePreviousDay}
                                className="academic-calendar-nav-button"
                            >
                                &lt;
                            </button>
                            <button onClick={() => setCurrentDate(new Date())} className="academic-calendar-nav-button">
                                Today
                            </button>
                            <button
                                onClick={view === 'month' ? handleNextMonth : view === 'week' ? handleNextWeek : handleNextDay}
                                className="academic-calendar-nav-button"
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>

                <div className="academic-calendar-filters">
                    <div className="academic-calendar-filter-header">
                        <span>Filter Events</span>
                    </div>
                    <div className="academic-calendar-filter-badges">
                        {Object.entries(eventTypes).map(([type, { label, color }]) => (
                            <button
                                key={type}
                                className={`academic-calendar-filter-badge ${filteredTypes.includes(type) ? 'active' : ''}`}
                                onClick={() => toggleEventType(type)}
                                style={{ backgroundColor: color }}
                            >
                                <span className="academic-calendar-badge-dot"></span>
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="academic-calendar-grid">
                    <div className="academic-calendar-days">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                            <div key={day} className="academic-calendar-day-header">
                                {day}
                            </div>
                        ))}
                    </div>

                    <div className="academic-calendar-dates">
                        {view === 'month' && (
                            <>
                                {blanks.map((_, index) => (
                                    <div key={index} className="academic-calendar-date blank-date"></div>
                                ))}
                                {daysInMonth.map((date) => {
                                    const dayEvents = getEventsForDate(date);
                                    const isSelected = selectedDate && isSameDay(date, selectedDate);
                                    const isToday = isSameDay(date, new Date());

                                    return (
                                        <div
                                            key={date.toString()}
                                            className={`academic-calendar-date ${!isSameMonth(date, currentDate) ? 'other-month' : ''} ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
                                            onClick={() => handleDateClick(date)}
                                        >
                                            <span className="academic-calendar-date-number">{format(date, 'd')}</span>
                                            {dayEvents.length > 0 && (
                                                <div className="academic-calendar-event-indicators">
                                                    {dayEvents.map(event => (
                                                        <button
                                                            key={event.id}
                                                            className="academic-calendar-event-indicator"
                                                            style={{ backgroundColor: eventTypes[event.type].color }}
                                                            onClick={(e) => handleEventClick(event, e)}
                                                        >
                                                            {event.title}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </>
                        )}

                        {view === 'week' && (
                            <>
                                {daysInWeek.map((date) => {
                                    const dayEvents = getEventsForDate(date);
                                    const isSelected = selectedDate && isSameDay(date, selectedDate);
                                    const isToday = isSameDay(date, new Date());

                                    return (
                                        <div
                                            key={date.toString()}
                                            className={`academic-calendar-date ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
                                            onClick={() => handleDateClick(date)}
                                        >
                                            <span className="academic-calendar-date-number">{format(date, 'd')}</span>
                                            {dayEvents.length > 0 && (
                                                <div className="academic-calendar-event-indicators">
                                                    {dayEvents.map(event => (
                                                        <button
                                                            key={event.id}
                                                            className="academic-calendar-event-indicator"
                                                            style={{ backgroundColor: eventTypes[event.type].color }}
                                                            onClick={(e) => handleEventClick(event, e)}
                                                        >
                                                            {event.title}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </>
                        )}

                        {view === 'day' && (
                            <>
                                {daysInDay.map((date) => {
                                    const dayEvents = getEventsForDate(date);
                                    const isSelected = selectedDate && isSameDay(date, selectedDate);
                                    const isToday = isSameDay(date, new Date());

                                    return (
                                        <div
                                            key={date.toString()}
                                            className={`academic-calendar-date ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
                                            onClick={() => handleDateClick(date)}
                                        >
                                            <span className="academic-calendar-date-number">{format(date, 'd')}</span>
                                            {dayEvents.length > 0 && (
                                                <div className="academic-calendar-event-indicators">
                                                    {dayEvents.map(event => (
                                                        <button
                                                            key={event.id}
                                                            className="academic-calendar-event-indicator"
                                                            style={{ backgroundColor: eventTypes[event.type].color }}
                                                            onClick={(e) => handleEventClick(event, e)}
                                                        >
                                                            {event.title}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </>
                        )}
                    </div>
                </div>

                {selectedEvent && (
                    <div className="academic-calendar-event-modal-overlay" onClick={() => setSelectedEvent(null)}>
                        <div className="academic-calendar-event-modal" onClick={(e) => e.stopPropagation()}>
                            <button className="academic-calendar-close-button" onClick={() => setSelectedEvent(null)}>
                                ×
                            </button>
                            <div className="academic-calendar-event-content">
                                <div className="academic-calendar-event-header">
                                    <span className="academic-calendar-event-type-badge" style={{ backgroundColor: eventTypes[selectedEvent.type].color }}>
                                        {eventTypes[selectedEvent.type].label}
                                    </span>
                                    <h2>{selectedEvent.title}</h2>
                                </div>
                                <div className="academic-calendar-event-details">
                                    <div className="academic-calendar-event-date">
                                        <span>
                                            {format(parseISO(selectedEvent.date), 'MMM d, yyyy')}
                                            {selectedEvent.endDate && ` - ${format(parseISO(selectedEvent.endDate), 'MMM d, yyyy')}`}
                                        </span>
                                    </div>
                                    <div className="academic-calendar-event-description">
                                        <p>{selectedEvent.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}

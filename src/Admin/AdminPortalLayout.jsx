import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    BookOpen,
    Calendar,
    ChevronFirst,
    ChevronLast,
    Home,
    LayoutDashboard,
    Library,
    FileText,
    Settings,
    User,
    Clock,
    Award,
    LogOut,
    ChevronLeft,
    Thermometer,
    AlignJustify,
    Book,
    LayoutDashboardIcon,
    Users,
    Image,
    ClipboardList,
    FileTextIcon,
    ClipboardCheck,
    CalendarClock,
    Newspaper,
} from "lucide-react";
import "../Student/StudentPortalLayout.css";

export default function AdminPortalLayout({ children }) {
    const [expanded, setExpanded] = useState(true);
    const location = useLocation(); // Use location to get the current path

    const navigation = {
        main: [
            { name: "Image Gallery", href: "/admin", icon: Image },
            { name: "Academic Calendar", href: "/admin/academic-calender", icon: CalendarClock},
            { name: "Events", href: "/admin/events", icon: Calendar },
            { name: "Notice Board", href: "/admin/noticeboard", icon: Newspaper },
            { name: "Library", href: "/admin/library", icon: Library },
            { name: "Books Request", href: "/admin/books-request", icon: BookOpen },
            { name: "Upcoming Exams", href: "/admin/exams", icon: CalendarClock },
            { name: "Students", href: "/admin/students", icon: Users },
            { name: "Back to Home", href: "/", icon: LogOut },
        ],
    };

    return (
        <div className="portal-sidebar-container">
            <aside className={`portal-sidebar-sidebar ${!expanded ? "collapsed" : ""}`}>
                <div className="portal-sidebar-sidebar-header">
                    <div className="portal-sidebar-logo-container">
                        <User className="portal-sidebar-logo-icon" />
                        <a className="portal-sidebar-logo-text" style={{ margin: 'auto 0', textDecoration: "none" }} href="/">Admin</a>
                        {/* <img src={unicoreLogo} alt="" className="portal-sidebar-logo-img" /> */}
                    </div>
                    <button
                        className="portal-sidebar-toggle-btn"
                        onClick={() => setExpanded((prev) => !prev)}
                        aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
                    >
                        {expanded ? <ChevronLeft /> : <AlignJustify />}
                    </button>
                </div>

                <nav className="portal-sidebar-nav-container">
                    <div className="portal-sidebar-nav-section">
                        {/* <h2 className="portal-sidebar-nav-section-title">Main</h2> */}
                        {navigation.main.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`portal-sidebar-nav-link ${location.pathname === item.href ? "active" : ""}`}
                            >
                                <item.icon className="portal-sidebar-nav-icon" />
                                <span className="portal-sidebar-nav-text">{item.name}</span>
                            </Link>
                        ))}
                    </div>
                </nav>
            </aside>

            <main className={`portal-sidebar-main-content ${!expanded ? "expanded" : ""}`}>{children}</main>
        </div>
    );
}

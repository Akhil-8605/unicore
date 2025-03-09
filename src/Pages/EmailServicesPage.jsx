import "./EmailServicesPage.css"
import { Mail, Bell, Shield, ExternalLink, Calendar, Users, CheckCircle } from "lucide-react"
import emailservicebg from "../Images/email service bg.png"
import Footer from "../Components/Footer"

function EmailPortal() {
    // When clicked, open a new tab searching for the email address in Gmail
    const handleViewEmails = () => {
        window.open("https://mail.google.com/mail/u/0/#search/unicore@gmail.com", "_blank")
    }

    return (
        <>
            <div className="email-services-portal-container">
                <div className="email-services-background-shapes">
                    <div className="email-services-shape email-services-shape-1"></div>
                    <div className="email-services-shape email-services-shape-2"></div>
                    <div className="email-services-shape email-services-shape-3"></div>
                </div>

                <header className="email-services-portal-header">
                    <div className="email-services-logo-container">
                        {/* Logo content can go here */}
                    </div>
                </header>

                <main className="email-services-portal-content">
                    <section className="email-services-welcome-section">
                        <div className="email-services-welcome-content">
                            <h2>
                                Welcome to Your <span className="email-services-highlight">University Email Services</span>
                            </h2>
                            <p className="email-services-welcome-text">
                                Your centralized hub for all academic communications. Stay connected with professors, classmates, and
                                important university announcements through our secure platform.
                            </p>
                            <div className="email-services-welcome-badges">
                                <span className="email-services-badge">
                                    <CheckCircle className="email-services-badge-icon" />
                                    Secure
                                </span>
                                <span className="email-services-badge">
                                    <CheckCircle className="email-services-badge-icon" />
                                    Fast
                                </span>
                                <span className="email-services-badge">
                                    <CheckCircle className="email-services-badge-icon" />
                                    Reliable
                                </span>
                            </div>
                        </div>
                        <div className="email-services-welcome-image">
                            <img src={emailservicebg} alt="Email illustration" />
                        </div>
                    </section>

                    <section className="email-services-email-access-section">
                        <div className="email-services-email-card">
                            <div className="email-services-email-card-content">
                                <div className="email-services-email-card-text">
                                    <h3>Access Your University Emails</h3>
                                    <p>
                                        Click the button below to instantly view all communications from UniCore in your inbox. Stay updated
                                        with the latest announcements, course materials, and important notifications.
                                    </p>
                                    <ul className="email-services-email-features-list">
                                        <li>
                                            <CheckCircle className="email-services-check-icon" /> Secure authentication
                                        </li>
                                        <li>
                                            <CheckCircle className="email-services-check-icon" /> Automatic filtering
                                        </li>
                                        <li>
                                            <CheckCircle className="email-services-check-icon" /> Mobile-friendly interface
                                        </li>
                                    </ul>
                                </div>
                                <div className="email-services-email-action">
                                    <button className="email-services-email-button" onClick={handleViewEmails}>
                                        <Mail className="email-services-button-icon" />
                                        <span>View University Emails</span>
                                        <ExternalLink className="email-services-external-icon" />
                                    </button>
                                </div>
                            </div>
                            <div className="email-services-email-card-decoration">
                                <div className="email-services-decoration-circle"></div>
                                <div className="email-services-decoration-circle"></div>
                                <div className="email-services-decoration-circle"></div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    )
}

export default EmailPortal

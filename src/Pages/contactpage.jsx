import React, { useState } from 'react';
import './contactpage.css';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Message from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        window.location.href = `mailto:unicore.akhil@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <div className="contact-page-container">
            <div className="contact-page-title">
                <h1>Contact Us</h1>
                <p>We would love to hear from you. Reach out to us anytime!</p>
            </div>
            <form className="contact-page-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name"
                    className="input-field"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="input-field"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Your Message"
                    className="input-field textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                <button type="submit" className="submit-button">Send Message</button>
            </form>
            <div className="contact-page-animation">
                <div className="contact-page-circle"></div>
                <div className="contact-page-square"></div>
            </div>
        </div>
    );
};

export default ContactUs;

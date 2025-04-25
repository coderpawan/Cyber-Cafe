import React, { useState } from 'react';
import { app } from '../../firebase';
import { Timestamp } from 'firebase/firestore';
import { getDatabase, set, ref } from 'firebase/database';
import './footer.css';

const db = getDatabase(app);

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await set(ref(db, 'contactForms'), {
        ...formData,
        timestamp: Timestamp.now(),
      });
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>Our Company</h3>
          <p>
            We are dedicated to delivering quality products and services. Our mission is to empower innovation and create value for our clients around the globe.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Organization Name</p>
          <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
          <p>Address: 123 Business Road, Tech City, Country</p>
        </div>

        <div className="footer-section">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="footer-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="footer-input"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="footer-textarea"
            />
            <button type="submit" className="footer-button">Submit</button>
          </form>
          {submitted && <p className="footer-success">Thank you! Your message has been sent.</p>}
        </div>

      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Organization Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

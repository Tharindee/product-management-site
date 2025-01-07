import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="left-wrap">
          <h5 className="footer-title">MyStore</h5>
          <span className="footer-text">Your go-to store for the best products at unbeatable prices.</span>
          <p className="address"><strong>123 Market Street, City, Country</strong></p>
          <p className="phone"><strong>+1 234 567 890</strong></p>
          <p className="email"><strong>support@mystore.com</strong></p>
        </div>

        <div className="middle-wrap">
          <h5 className="footer-title">Quick Links</h5>
          <ul className="footer-links">
            <li><a className="footer-link" href="#home">Home</a></li>
            <li><a className="footer-link" href="#products">Products</a></li>
            <li><a className="footer-link" href="#contact">Contact Us</a></li>
            <li><a className="footer-link" href="#about">About Us</a></li>
            <li><a className="footer-link" href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="right-wrap">
          <h5 className="follow">Follow Us</h5>
          <div className="social-icons">
            <a href="#facebook" className="me-3" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
            <a href="#twitter" className="me-3" aria-label="Twitter"><i className="bi bi-twitter"></i></a>
            <a href="#instagram" className="me-3" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
            <a href="#linkedin" className="me-3" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div className="text-center">
        © 2025 MyStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
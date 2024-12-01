import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
// Import Font Awesome for Social Media Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container py-5">
        <div className="row justify-content-center text-center">
          {/* First Column: Logo and Location */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase">Anrika</h5>
            <p className="text-muted">
              Your one-stop solution for all software needs.
            </p>
            <address>
              <strong>Head Office:</strong>
              <br />
              123 Business Street
              <br />
              New York, NY 10001
              <br />
              United States
            </address>
            <p>
              Email:{" "}
              <a href="mailto:support@anrika.com" className="text-white">
                support@anrika.com
              </a>
            </p>
            <p>Phone: +1 234 567 890</p>
          </div>

          {/* Second Column: Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/blog" className="text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Third Column: Social Media Links */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase">Follow Us</h5>
            <p>Stay connected with us on social media:</p>
            <div className="social-icons d-flex justify-content-center">
              <a href="https://facebook.com" className="text-white me-3">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://twitter.com" className="text-white me-3">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://instagram.com" className="text-white me-3">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://linkedin.com" className="text-white">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom: Powered by Anrika */}
        <div className="text-center mt-4">
          <p className="text-muted">
            Powered by <strong>Anrika</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

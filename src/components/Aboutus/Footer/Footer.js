import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";
import "./Footer.css";
import logo from "../../../media/anrikabluelogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container">
        <div className="row text-center text-md-start footer-container">
          {/* Left: Logo + Contact Info */}
          <div className="col-md-6 mb-4 d-flex logo-container-footer">
            <img src={logo} alt="Anrika Logo" className="footer-logo mb-3" />
          </div>

          {/* Middle: Address + Social Icons */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase">Address</h5>
            <p>Kusunti, Lalitpur, Nepal</p>
            <div className="social-icons d-flex justify-content-center justify-content-md-start gap-3 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>

          {/* Right: Work Enquiries */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase">Work Enquiries</h5>
            <p>
              <a href="mailto:anrikaa777@gmail.com" className="text-white">
                anrikaa777@gmail.com
              </a>
            </p>
            <p className="my-0">+977 9851024256</p>
          </div>
        </div>

        <div className="footer-bottom text-center py-3 px-4">
          <div className="footer-links mb-2">
            {/* <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-80}
              className="text-dark mx-2"
            >
              Home
            </Link> */}
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className="text-dark mx-2"
            >
              About Us
            </Link>
            |
            <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-80}
              className="text-dark mx-2"
            >
              Our Services
            </Link>
            |
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="text-dark mx-2"
            >
              Our Projects
            </Link>
            |
            <Link
              to="faqs"
              smooth={true}
              duration={500}
              offset={-80}
              className="text-dark mx-2"
            >
              FAQs
            </Link>
            |
            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              offset={-80}
              className="text-dark mx-2"
            >
              Testimonials
            </Link>
            |
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="text-dark mx-2"
            >
              Contact Us
            </Link>
          </div>
          <p className="mb-0">
            &copy; {new Date().getFullYear()}{" "}
            <strong>AnrikaTech Pvt. Ltd.</strong> — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

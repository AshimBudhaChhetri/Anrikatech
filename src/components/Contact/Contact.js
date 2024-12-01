import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
// Import Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="container py-5 contact-container">
      <p className="text-center text-muted mb-2 sub-text-contact">
        Have queries or need assistance? We're here to help you!
      </p>
      <h1 className="text-center mb-5">Have some questions?</h1>
      <div className="row gx-5 align-items-stretch">
        {/* Left Section: Cards */}
        <div className="col-lg-6 d-flex">
          <div className="w-100">
            {/* Phone Numbers Card */}
            <div className="card mb-4 shadow-sm text-center">
              <div className="card-body">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="card-icon mb-3"
                  size="3x"
                />
                <h5 className="card-title">Phone Numbers</h5>
                <p>
                  Office: +1 234 567 890
                  <br />
                  Support: +1 987 654 321
                  <br />
                  Sales: +1 555 555 555
                </p>
              </div>
            </div>
            {/* Location Card */}
            <div className="card mb-4 shadow-sm text-center">
              <div className="card-body">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="card-icon mb-3"
                  size="3x"
                />
                <h5 className="card-title">Location</h5>
                <p>
                  123 Business Street, <br />
                  New York, NY 10001, <br />
                  United States
                </p>
              </div>
            </div>
            {/* Email Card */}
            <div className="card mb-4 shadow-sm text-center">
              <div className="card-body">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="card-icon mb-3"
                  size="3x"
                />
                <h5 className="card-title">Email</h5>
                <p>
                  <a href="mailto:support@example.com">support@example.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="col-lg-6 d-flex">
          <div className="w-100">
            <div className="p-4 shadow rounded bg-white">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Your Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="services" className="form-label">
                    Services You're Interested In
                  </label>
                  <select className="form-select" id="services" required>
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app-development">
                      Mobile App Development
                    </option>
                    <option value="seo">SEO Optimization</option>
                    <option value="digital-marketing">Digital Marketing</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="budget" className="form-label">
                    Estimated Budget
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="budget"
                    placeholder="Enter your budget in USD"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Additional Information or Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Type your message here"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// Contact.js
import React, { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent bot (like react-snap) from firing emails
    const isBot =
      navigator.userAgent.includes("Chrome-Lighthouse") ||
      navigator.userAgent.includes("HeadlessChrome");
    if (isBot) return;

    emailjs
      .send(
        "service_oxpfi6f", // ✅ Your EmailJS service ID
        "template_2tpm8ej", // ✅ Your EmailJS template ID
        formData,
        "2Iy3W0B96qjbM94P6" // ✅ Your EmailJS public key
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 4000,
            theme: "colored",
          });
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            budget: "",
            message: "",
          });
        },
        (error) => {
          console.error(error && error.text ? error.text : "Unknown error"); // ✅ Safe for react-snap
          toast.error("❌ Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 5000,
            theme: "colored",
          });
        }
      );
  };

  return (
    <section className="contact-section-wrapper py-5" id="contact">
      <Helmet>
        <meta
          name="description"
          content="Reach out to us for software solutions, mobile app development, SEO, branding, and more. Let's build something great together."
        />
        <meta
          name="keywords"
          content="contact Anrika Tech, web development Nepal, software consultation, tech support Nepal"
        />
        <link rel="canonical" href="https://www.anrikatech.com/#contact" />
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact",
        "url": "https://www.anrikatech.com/#contact",
        "mainEntity": {
          "@type": "Organization",
          "name": "Anrika Tech",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+9779851024256",
            "contactType": "customer support",
            "areaServed": "NP",
            "availableLanguage": ["English", "Nepali"]
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kusunti",
            "addressLocality": "Lalitpur",
            "addressCountry": "NP"
          }
        }
      }
    `}
        </script>
      </Helmet>

      <div className="contact-container container">
        <div className="contact-row row align-items-center">
          {/* Left Content */}
          <motion.div
            className="contact-left col-lg-6 mb-5 mb-lg-0"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.p
              className="contact-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Contact Us
            </motion.p>
            <motion.h2
              className="contact-title mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9 }}
              viewport={{ once: true }}
            >
              Looking for a Reliable Tech Partner?
            </motion.h2>
            <motion.p
              className="contact-desc mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              viewport={{ once: true }}
            >
              We build custom websites, mobile apps, and digital platforms that
              help your business grow. Let’s turn your ideas into
              high-performing digital solutions.
            </motion.p>
            <motion.div
              className="contact-details mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9 }}
              viewport={{ once: true }}
            >
              <div className="contact-phones d-flex align-items-center mb-3 flex-wrap">
                <FaPhoneAlt className="me-2 text-dark fs-5" />
                <span className="fw-semibold me-4">+977 9851024256</span>
                <span className="fw-semibold me-4">+977 9823617508</span>
                <span className="fw-semibold">+977 9869085531</span>
              </div>
              <div className="contact-address d-flex align-items-center mb-3">
                <FaMapMarkerAlt className="me-2 text-dark fs-5" />
                <span className="fw-semibold">Kusunti, Lalitpur, Nepal</span>
              </div>
              <div className="contact-email d-flex align-items-center">
                <FaEnvelope className="me-2 text-dark fs-5" />
                <span className="fw-semibold">contact@anrikatech.com</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            className="contact-right col-lg-6"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="contact-form-wrapper p-4 rounded bg-white shadow-sm"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit}>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Your Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-control"
                      id="phone"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="service" className="form-label">
                      Services You're Interested In
                    </label>
                    <select
                      className="form-select"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app-development">
                        Mobile App Development
                      </option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="seo">SEO</option>
                      <option value="digital-marketing">
                        Digital Marketing
                      </option>
                      <option value="data-analytics">Data Analytics</option>
                      <option value="website-redesign">Website Redesign</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="budget" className="form-label">
                    Estimated Budget (Optional)
                  </label>
                  <input
                    type="number"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="form-control"
                    id="budget"
                    placeholder="E.g. Rs 50000"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Additional Information or Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Type your message here"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="contact-submit-btn btn btn-warning w-100 mt-2 fw-semibold"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;

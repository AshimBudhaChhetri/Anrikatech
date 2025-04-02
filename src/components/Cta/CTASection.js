import React from "react";
import "./CTASection.css";
import { motion } from "framer-motion";
import ctaimg from "../../media/herotest1.png";

const CTASection = () => {
  return (
    <section className="cta-inquiry-section py-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          {/* Image Section */}
          <motion.div
            className="col-lg-6 mb-4 mb-lg-0 text-center"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={ctaimg}
              alt="Illustration"
              className="img-fluid inquiry-img"
            />
            <motion.div
              className="satisfaction-box"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="rate">100%</span>
              <span className="text">Client Satisfaction</span>
            </motion.div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.p
              className="inquiry-label"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              QUICK INQUIRY
            </motion.p>
            <motion.h2
              className="inquiry-title mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9 }}
              viewport={{ once: true }}
            >
              Thinking of building something awesome?
            </motion.h2>
            <motion.p
              className="inquiry-description mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.9 }}
              viewport={{ once: true }}
            >
              Let’s turn your ideas into impactful digital solutions that drive
              results and make a difference. Whether you're starting from
              scratch or refining an existing vision, our team is just a message
              away—ready to collaborate, create, and deliver.
            </motion.p>
            <motion.a
              href="tel:+9779851024256" // replace with your actual number
              className="btn btn-dark inquiry-btn"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Let’s Talk
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

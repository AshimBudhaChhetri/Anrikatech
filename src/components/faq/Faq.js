import React, { useState } from "react";
import "./Faq.css";
import { BsTelephoneFill } from "react-icons/bs";
import faq1 from "../../media/faq1.jpg";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide a wide range of IT services including website development, mobile app development, UI/UX design, software solutions, cloud integration, and IT consulting.",
  },
  {
    question: "How do I get started with a project?",
    answer:
      "You can get started by contacting us through our website or emailing us directly. We'll schedule a consultation to understand your requirements and provide a tailored plan.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary depending on the complexity and scope. A standard website may take 2–4 weeks, while custom software or mobile apps can take longer. We provide a clear timeline after the initial consultation.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, we offer maintenance and support plans to ensure your project runs smoothly even after launch. We're here to assist with updates, bug fixes, and performance improvements.",
  },
  {
    question: "Is my data and project information secure?",
    answer:
      "Absolutely. We take data security seriously and follow industry best practices to ensure your information is protected throughout the project lifecycle.",
  },
  {
    question: "How much does a project typically cost?",
    answer:
      "Costs depend on the project requirements, features, and complexity. We provide transparent pricing after understanding your goals and scope.",
  },
  {
    question: "Can you upgrade or redesign my existing website or app?",
    answer:
      "Yes! We specialize in revamping outdated systems and enhancing performance, design, and user experience.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-two-column-section py-5" id="faqs">
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Text */}
          <motion.div
            className="col-lg-6 mb-5 mb-lg-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.p
              className="faq-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              viewport={{ once: true }}
            >
              HAVE ANY QUESTIONS?
            </motion.p>

            <motion.h2
              className="faq-main-title mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1.2 }}
              viewport={{ once: true }}
            >
              Most Asked Questions by Our Customers
            </motion.h2>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="faq-item mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.6 + index * 0.3,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <button
                    className={`faq-question d-flex justify-content-between align-items-center ${
                      openIndex === index ? "open" : ""
                    }`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="fw-semibold">{faq.question}</span>
                    <span className="faq-icon">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  {openIndex === index && (
                    <motion.p
                      className="faq-answer mt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Images */}
          <motion.div
            className="col-lg-6 position-relative d-flex justify-content-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="faq-images">
              <motion.img
                src={faq1}
                alt="Project"
                className="img-top"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.3, duration: 1 }}
                viewport={{ once: true }}
              />
              <motion.img
                src="https://wgl-dsites.net/integrio/wp-content/uploads/2019/05/portfolio_04.jpg"
                alt="Roofing"
                className="img-bottom"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                viewport={{ once: true }}
              />
              <motion.div
                className="phone-box d-flex align-items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <BsTelephoneFill className="text-success" />
                <span>Contact Us Now</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

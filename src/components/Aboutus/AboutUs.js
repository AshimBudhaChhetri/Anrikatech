import React from "react";
import "./AboutUs.css";
import aboutImage from "../../media/aboutimg.jpg";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="about-us-section" id="about">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side: Image */}
          <motion.div
            className="col-lg-6 col-md-12 text-center left-box"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={aboutImage}
              alt="About Us"
              className="img-fluid about-image"
            />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            className="col-lg-6 col-md-12"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.p
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              About Us
            </motion.p>
            <motion.h2
              className="main-heading-about"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Build Your Business Website Better
            </motion.h2>
            <motion.p
              className="description"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              At Anrika Tech Pvt. Ltd., we specialize in empowering businesses
              through innovative digital solutions. With expertise in web
              development, mobile apps, and creative design, we craft tailored
              solutions to meet unique business needs. Our client-centric
              approach ensures satisfaction, fostering long-term relationships
              built on trust.
            </motion.p>

            <div className="stats-about row text-center">
              {[
                {
                  number: "100+",
                  title: "Projects Completed",
                  desc: "Custom-built websites, apps, and systems delivered to perfection.",
                },
                {
                  number: "150+",
                  title: "Customers Worldwide",
                  desc: "Trusted by entrepreneurs, startups, and enterprises globally.",
                },
                {
                  number: "10+",
                  title: "Years of Experience",
                  desc: "Delivering quality, consistency, and innovation since day one.",
                },
              ].map((stat, index) => (
                <motion.div
                  className="col-md-4 col-12 stat-box"
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.9 + index * 0.3,
                    duration: 1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-title">{stat.title}</p>
                  <p className="stat-desc">{stat.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

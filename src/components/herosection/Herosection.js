import React from "react";
import "./Herosection.css";
import heroImg from "../../media/heroimgnew.png";
import heroMovImg from "../../media/heromovimg2.png";
import { Link } from "react-scroll";
import Navbar from "../navbar/Navbar";
import { motion } from "framer-motion";

const Herosection = () => {
  return (
    <section id="hero" className="hero-section ">
      <Navbar />
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side Content */}
          <motion.div
            className="col-lg-6 col-md-12 text-left hero-content-div"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="subtext">Innovating the Future</p>
            <motion.h1
              className="main-heading-hero"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Building Websites That Build Your Business.
            </motion.h1>
            <motion.ul
              className="points-hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <li>
                <span className="bullet">✔</span> We Turn Your Ideas Into Real
                Software
              </li>
              <li>
                <span className="bullet">✔</span> We Build Modern Website And
                Apps
              </li>
              <li>
                <span className="bullet">✔</span> We Focus On What Your Business
                Needs
              </li>
            </motion.ul>
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Link to="about" smooth={true} duration={500}>
                <button className="btn btn-primary learn-more-btn-hero">
                  Learn More
                </button>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <button className="btn btn-outline-light get-started-btn-hero">
                  Book An Appointment
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            className="col-lg-6 col-md-12 position-relative text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <img src={heroImg} alt="Hero" className="img-fluid hero-image" />
            <motion.img
              src={heroMovImg}
              alt="Moving Hero"
              className="hero-mov-image"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;

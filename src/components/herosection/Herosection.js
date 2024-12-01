import React from "react";
import "./Herosection.css";
import heroImg from "../../media/heroimg.png"; // Replace with your large hero image
import heroMovImg from "../../media/heromovimg.png"; // Replace with your moving image

const Herosection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side Content */}
          <div className="col-lg-6 col-md-12 text-left">
            <p className="subtext">Innovating the Future</p>
            <h1 className="main-heading-hero">
              Building Websites That Build Your Business.
            </h1>
            <ul className="points-hero">
              <li>
                <span className="bullet">✔</span> Transforming Ideas into
                Reality
              </li>
              <li>
                <span className="bullet">✔</span> Cutting-edge Solutions
              </li>
              <li>
                <span className="bullet">✔</span> Client-focused Strategies
              </li>
            </ul>
            <button className="btn btn-primary learn-more-btn-hero">
              Learn More
            </button>
          </div>

          {/* Right Side Content */}
          <div className="col-lg-6 col-md-12 position-relative text-center">
            <img src={heroImg} alt="Hero" className="img-fluid hero-image" />
            <img
              src={heroMovImg}
              alt="Moving Hero"
              className="hero-mov-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;

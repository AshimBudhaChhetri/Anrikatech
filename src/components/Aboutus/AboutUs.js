import React from "react";
import "./AboutUs.css";
import aboutImage from "../../media/aboutimg.jpg"; // Replace with your image

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side: Image */}
          <div className="col-lg-6 col-md-12 text-center left-box">
            <img
              src={aboutImage}
              alt="About Us"
              className="img-fluid about-image"
            />
          </div>

          {/* Right Side: Content */}
          <div className="col-lg-6 col-md-12">
            {/* About Us Subtitle */}
            <p className="section-title">About Us</p>
            <h2 className="main-heading-about">
              Build Your Business Website Better
            </h2>
            <p className="description">
              At Anrika Tech Pvt. Ltd., we specialize in empowering businesses
              through innovative digital solutions. With expertise in web
              development, mobile apps, and creative design, we craft tailored
              solutions to meet unique business needs. Our client-centric
              approach ensures satisfaction, fostering long-term relationships
              built on trust.
            </p>
            <ul className="points-about">
              <li>
                <span className="bullet">✔</span> We support programs that
                create advancement opportunities for people.
              </li>
              <li>
                <span className="bullet">✔</span> Get a view of events and
                trends. Be updated on our recent news.
              </li>
              <li>
                <span className="bullet">✔</span> Finally, it all comes down to
                people. Creating a winning team.
              </li>
              <li>
                <span className="bullet">✔</span> Get a view of events and
                trends. Be updated on our recent news.
              </li>
            </ul>
            <button className="btn btn-primary learn-more-btn-about">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

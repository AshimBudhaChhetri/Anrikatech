import React from "react";
import "./Wwd.css";
import cardImg1 from "../../../media/webdev.png"; // Replace with your first card image
import cardImg2 from "../../../media/uiuxdev.png"; // Replace with your second card image
import cardImg3 from "../../../media/mobdev.png"; // Replace with your third card image

const Wwd = () => {
  return (
    <section className="what-we-do-section">
      <div className="container text-center">
        {/* Subtitle */}
        <p className="sub-title">Explore Our Expertise</p>

        {/* Main Title */}
        <h2 className="main-title">Our Digital Services</h2>

        {/* Cards Section */}
        <div className="row mt-5">
          {/* Card 1 */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img src={cardImg1} alt="Service 1" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Web Development</h5>
                <p className="card-text">
                  Building responsive and scalable websites tailored to your
                  needs.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img src={cardImg2} alt="Service 2" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Mobile App Development</h5>
                <p className="card-text">
                  Crafting modern mobile applications for seamless user
                  experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img src={cardImg3} alt="Service 3" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">UI/UX Design</h5>
                <p className="card-text">
                  Designing user-centric interfaces that enhance usability and
                  engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wwd;

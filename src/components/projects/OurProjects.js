import React from "react";
import "./OurProjects.css";
import projectImg1 from "../../media/project1.png"; // Replace with your project images
import projectImg2 from "../../media/project2.png";
import projectImg3 from "../../media/project3.png";
import projectImg4 from "../../media/project4.png";
import projectImg5 from "../../media/project5.png";
import projectImg6 from "../../media/project6.png";
import projectImg7 from "../../media/project7.png";

const OurProjects = () => {
  const projects = [
    {
      id: 1,
      name: "Himalaya Fair Reisen",
      description:
        "Himalayan Fair Reisen is a travel company with over 28 years of expertise in the Himalayan regions of Nepal, Tibet, India, and Bhutan.",
      image: projectImg1,
      url: "https://himalayafairreisen.com", // Add project website URL
    },
    {
      id: 2,
      name: "NepaLifeCare",
      description:
        "NepaLifeCare is a charity foundation committed to improving lives through youth mental health support, blood donation drives, and aid for the needy.",
      image: projectImg2,
      url: "https://nepalifecare.org", // Add project website URL
    },
    {
      id: 3,
      name: "Meditation Healing Bowl",
      description:
        "Meditation Healing Bowl specializing in meditational healing products, designed to promote relaxation, mindfulness, and overall well-being.",
      image: projectImg3,
      url: "https://meditationhealingbowl.com", // Add project website URL
    },
    {
      id: 4,
      name: "Aron Engineering",
      description:
        "Aron Engineering is a Nepal based engineering design firm which mainly caters to structural design of components, drafting, modelling and rendering of structures.",
      image: projectImg4,
      url: "https://aron-engineering.com", // Add project website URL
    },
    {
      id: 5,
      name: "Dekat Engineering",
      description:
        "DEKAT Engineering located in USA is a Rocky Mountain based company founded in 2022 and specializes in providing structural engineering and consulting services.",
      image: projectImg5,
      url: "https://dekatengineering.com", // Add project website URL
    },
    {
      id: 6,
      name: "Mokshya Legal Group",
      description:
        "Mokshya Legal Group is a professional legal firm committed to providing comprehensive and reliable legal services.",
      image: projectImg6,
      url: "https://mokshalegalgroup.com", // Add project website URL
    },
    {
      id: 7,
      name: "Mountain Mart Nepal's Trade House",
      description:
        "As a premier trade house, Mountain Mart specialize in connecting the finest products and services from Nepal to the global market especially in Europe, embodying the essence of our nation’s spirit and authenticity.",
      image: projectImg7,
      url: "http://nepalhouse.org", // Add project website URL
    },
  ];

  return (
    <section className="our-projects-section">
      <div className="container text-center">
        {/* Subtext and Main Text */}
        <p className="subtext-projects">Our Work Speaks for Itself</p>
        <h2 className="main-title-projects">Our Projects</h2>

        {/* Projects Grid */}
        <div className="row mt-5">
          {projects.map((project) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12 mb-4 project-card-wrapper"
              key={project.id}
            >
              <div
                className="project-card"
                onClick={() => window.open(project.url, "_blank")} // Open the project URL in a new tab
                style={{ cursor: "pointer" }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                />
                <div className="project-overlay">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;

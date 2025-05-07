import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./OurProjects.css";
import { motion } from "framer-motion";

// Import project images
import projectImg1 from "../../media/project1.png";
import projectImg2 from "../../media/project2.png";
import projectImg3 from "../../media/project3.png";
import projectImg4 from "../../media/project4.png";
import projectImg5 from "../../media/project5.png";
import projectImg6 from "../../media/project6.png";
import projectImg7 from "../../media/project7.png";
import projectImg8 from "../../media/project8.png";
import projectImg9 from "../../media/project9.png";

const OurProjects = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => setShowAll(!showAll);

  const projects = [
    {
      id: 1,
      name: "Dr Structural Engineering",
      description:
        "DR Structural Engineering and Consulting is a trusted structural engineering firm based in Denver, Colorado...",
      image: projectImg8,
      url: "http://drsengineers.com",
    },
    {
      id: 2,
      name: "Dekat Engineering",
      description:
        "DEKAT Engineering located in USA is a Rocky Mountain based company founded in 2022...",
      image: projectImg5,
      url: "https://dekatengineering.com",
    },
    {
      id: 3,
      name: "Nepal Planet Treks & Exhibition",
      description:
        "Nepal Planet Treks offers customized travel experiences across Nepal, Tibet, and Bhutan...",
      image: projectImg9,
      url: "http://nepalplanettreks.com",
    },
    {
      id: 4,
      name: "Himalaya Fair Reisen",
      description:
        "Himalayan Fair Reisen is a travel company with over 28 years of expertise...",
      image: projectImg1,
      url: "https://himalayafairreisen.com",
    },
    {
      id: 5,
      name: "Mokshya Legal Group",
      description:
        "Mokshya Legal Group is a professional legal firm committed to providing comprehensive legal services.",
      image: projectImg6,
      url: "https://mokshalegalgroup.com",
    },
    {
      id: 6,
      name: "Mountain Mart Nepal's Trade House",
      description:
        "Connecting the finest Nepali products and services to the global market...",
      image: projectImg7,
      url: "http://nepalhouse.org",
    },
    {
      id: 7,
      name: "NepaLifeCare",
      description:
        "A charity foundation committed to youth mental health and support for the needy.",
      image: projectImg2,
      url: "https://nepalifecare.org",
    },
    {
      id: 8,
      name: "Aron Engineering",
      description:
        "Nepal-based engineering design firm for structural drafting and rendering.",
      image: projectImg4,
      url: "https://aron-engineering.com",
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section className="our-projects-section" id="projects">
      <Helmet>
        <meta
          name="description"
          content="Browse our portfolio of web development, software, branding, and mobile app projects delivered across Nepal, USA, and beyond. Discover our work with engineering firms, legal companies, and travel agencies."
        />
        <meta
          name="keywords"
          content="IT project portfolio, software development projects, web development Nepal, mobile app case studies, client work Anrika"
        />
        <link rel="canonical" href="https://www.anrikatech.com/#projects" />

        {/* ✅ JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Our Projects Portfolio",
            url: "https://www.anrikatech.com/#projects",
            numberOfItems: projects.length,
            itemListElement: projects.map((project, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: project.name,
              url: project.url,
            })),
          })}
        </script>
      </Helmet>

      <div className="container text-left">
        {/* ✅ H1 for SEO */}
        <h1 className="visually-hidden">
          Our Projects - Web & Software Solutions
        </h1>

        <motion.div
          className="row mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="col-lg-4 d-flex flex-column justify-content-center">
            <p className="subtext-projects">Our Work</p>
            <h2 className="main-title-projects">
              Transforming Ideas into Impactful Solutions
            </h2>
          </div>

          {visibleProjects.slice(0, 2).map((project, index) => (
            <motion.article
              className="col-lg-4 col-md-6 mb-4"
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.3 + index * 0.3,
                duration: 1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <div
                className="project-card"
                onClick={() => window.open(project.url, "_blank")}
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
            </motion.article>
          ))}
        </motion.div>

        <div className="row">
          {visibleProjects.slice(2).map((project, index) => (
            <motion.article
              className="col-lg-3 col-md-6 col-sm-12 mb-4"
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + index * 0.2,
                duration: 1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <div
                className="project-card"
                onClick={() => window.open(project.url, "_blank")}
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
            </motion.article>
          ))}

          {showAll && (
            <motion.article
              className="col-lg-3 col-md-6 col-sm-12 mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + visibleProjects.length * 0.2,
                duration: 1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <div className="project-card additional-projects-box">
                <div className="project-overlay show-always">
                  <h3 className="project-name">99+ Other</h3>
                  <p className="project-description">
                    Several Projects We've Delivered
                  </p>
                </div>
              </div>
            </motion.article>
          )}
        </div>

        {!showAll && projects.length > 6 && (
          <motion.div
            className="text-center mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            viewport={{ once: true }}
          >
            <button className="btn btn-outline-light" onClick={handleToggle}>
              View More Projects
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default OurProjects;

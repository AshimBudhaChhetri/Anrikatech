import React from "react";
import "./Wwd.css";
import cardImg1 from "../../../media/webdev.png";
import cardImg2 from "../../../media/uiuxdev.png";
import cardImg3 from "../../../media/mobdev.png";
import mobileapp from "../../../media/mobileapp.png";
import uiux from "../../../media/uiux.png";
import seo from "../../../media/seo.png";
import data from "../../../media/data.png";
import redesign from "../../../media/webredesign.png";
import marketing from "../../../media/marketing.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

const Wwd = () => {
  const cards = [
    {
      img: cardImg1,
      title: "Web Development",
      text: "Building responsive and scalable websites tailored to your needs.",
    },
    {
      img: mobileapp,
      title: "Mobile App Development",
      text: "Crafting modern mobile applications for seamless user experiences.",
    },
    {
      img: uiux,
      title: "UI/UX Design",
      text: "Designing user-centric interfaces that enhance usability and engagement.",
    },
    {
      img: seo,
      title: "SEO",
      text: "Improve visibility and rankings with effective SEO strategies and tools.",
    },
    {
      img: marketing,
      title: "Digital Marketing",
      text: "Drive traffic and sales with smart digital marketing campaigns.",
    },
    {
      img: data,
      title: "Data Analytics",
      text: "Turn raw data into actionable insights with smart analytics tools.",
    },
    {
      img: redesign,
      title: "Website Redesign",
      text: "Modernize outdated websites with fresh design and improved performance.",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1200, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="what-we-do-section" id="services">
      <div className="container text-center">
        <motion.p
          className="sub-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Explore Our Expertise
        </motion.p>
        <motion.h2
          className="main-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Digital Services
        </motion.h2>

        <motion.div
          className="mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
        >
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            showDots={false}
            arrows={true}
            className="wwd-carousel"
          >
            {cards.map((card, index) => (
              <motion.div
                className="card-a-container"
                key={index}
                whileHover={{ scale: 1.05 }}
              >
                <img src={card.img} alt={card.title} className="card-a-img" />
                <div className="card-a-body">
                  <h5 className="card-a-title">{card.title}</h5>
                  <p className="card-a-text">{card.text}</p>
                </div>
              </motion.div>
            ))}
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Wwd;

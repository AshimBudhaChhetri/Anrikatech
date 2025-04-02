import React from "react";
import Slider from "react-slick";
import "./Testimonials.css";
import martin from "../../../src/media/martin.jpg";
import mama from "../../../src/media/mama.jpg";
import njmama from "../../../src/media/Njmama.jpg";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Martin Gautam",
      position: "CEO, Himalaya Fair Reisen",
      feedback:
        "Anrika Tech Pvt. Ltd. exceeded our expectations in every aspect. Their innovative solutions were not only tailored to our specific needs but also delivered with exceptional precision and timeliness. The team's professionalism, expertise, and commitment to excellence were evident throughout the entire process. They maintained clear communication, ensuring that our requirements were understood and met with creative, effective strategies. ",
      image: martin,
    },
    {
      id: 2,
      name: "Fanindra Panta",
      position: "Founder, Mountain Mart & NepaLifeCare",
      feedback:
        "Working with Anrika Tech transformed our business. Their expertise, dedication, and innovative approach helped us grow faster than we ever anticipated. From the start, their team demonstrated a clear understanding of our needs and provided tailored solutions that exceeded expectations. Their professionalism, reliability, and commitment to excellence made the entire process seamless and enjoyable. We were impressed by their ability to turn visions into reality.",
      image: mama,
    },
    {
      id: 3,
      name: "NJ Adhikari",
      position: "Nepal Planet Treks & Expeditions (P) Ltd.",
      feedback:
        "I am truly grateful and delighted by the incredible hard work, speed, and extensive knowledge you bring to every task. Your dedication and efficiency make a significant impact, and I deeply appreciate the effort you put into delivering exceptional results. It is rare to find someone who combines intelligence with such a strong work ethic, and I feel fortunate to witness it firsthand. Thank you very much, and I look forward to working with your entire team in the future.",
      image: njmama,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,

    slidesToScroll: 1,
    draggable: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        {/* Animated Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <p className="subtext-testimonials">What Our Clients Say</p>
          <h2 className="main-title-testimonials">Testimonials</h2>
        </motion.div>

        {/* Animated Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Slider {...settings} className="testimonials-slider">
            {testimonials.map((testimonial, index) => (
              <motion.div
                className="testimonial-card"
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image"
                />
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-position">{testimonial.position}</p>
                <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

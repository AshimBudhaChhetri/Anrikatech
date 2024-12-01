import React from "react";
import Slider from "react-slick"; // Import React Slick
import "./Testimonials.css";
import ungkait from "../../../src/media/ungkait.jpg";
import mama from "../../../src/media/mama.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ankit Acharya",
      position: "CEO, TechCorp",
      feedback:
        "Anrika Tech Pvt. Ltd. exceeded our expectations. Their solutions were innovative and delivered on time. Highly recommended!",
      image: ungkait,
    },
    {
      id: 2,
      name: "Phanindra Panta",
      position: "Founder, Mountain Mart",
      feedback:
        "Working with Anrika Tech was a game-changer for our business. Their expertise helped us scale faster than we imagined.",
      image: mama,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 cards at a time
    slidesToScroll: 1,
    draggable: true, // Enable drag functionality
    responsive: [
      {
        breakpoint: 768, // For smaller devices
        settings: {
          slidesToShow: 1, // Show 1 card at a time
        },
      },
    ],
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <p className="subtext-testimonials">What Our Clients Say</p>
        <h2 className="main-title-testimonials">Testimonials</h2>

        <Slider {...settings} className="testimonials-slider">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-position">{testimonial.position}</p>
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;

import React, { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Herosection from "./components/herosection/Herosection";
import Wwd from "./components/Wwd/Wwd.js/Wwd";
import AboutUs from "./components/Aboutus/AboutUs";
import OurProjects from "./components/projects/OurProjects";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Aboutus/Footer/Footer";
import Working from "./components/working/Working";
import Faq from "./components/faq/Faq";
import CTASection from "./components/Cta/CTASection";

const App = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="main-outer-div">
      <Herosection />
      <Wwd />
      <AboutUs />
      <OurProjects />
      <Working />
      <CTASection />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />

      {showButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
};

export default App;

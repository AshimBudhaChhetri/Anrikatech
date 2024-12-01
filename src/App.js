import React from "react";
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

const App = () => {
  return (
    <div className="main-outer-div">
      <Navbar />
      <Herosection />
      <Wwd />
      <AboutUs />
      <OurProjects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

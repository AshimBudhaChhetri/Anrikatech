import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>AnrikaTech | Custom Software Development Company</title>
        <meta
          name="description"
          content="AnrikaTech offers end-to-end software services including custom websites, mobile apps, and backend solutions."
        />
        <meta
          name="keywords"
          content="AnrikaTech, software development, web design, mobile apps, IT company Nepal"
        />
        <meta name="author" content="AnrikaTech" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.anrikatech.com/" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "AnrikaTech",
              "url": "https://www.anrikatech.com/",
              "mainEntity": [
                {
                  "@type": "WebPageElement",
                  "name": "About Us",
                  "url": "https://www.anrikatech.com/#about",
                  "description": "Learn about our mission, team, and company story."
                },
                {
                  "@type": "WebPageElement",
                  "name": "Our Services",
                  "url": "https://www.anrikatech.com/#services",
                  "description": "Explore our services including web, mobile, and backend development."
                },
                {
                  "@type": "WebPageElement",
                  "name": "Projects",
                  "url": "https://www.anrikatech.com/#projects",
                  "description": "Browse our portfolio of past client projects and case studies."
                },
                {
                  "@type": "WebPageElement",
                  "name": "Testimonials",
                  "url": "https://www.anrikatech.com/#testimonials",
                  "description": "Hear directly from our happy clients around the world."
                },
                {
                  "@type": "WebPageElement",
                  "name": "FAQs",
                  "url": "https://www.anrikatech.com/#faqs",
                  "description": "Get answers to common questions about our process and services."
                },
                {
                  "@type": "WebPageElement",
                  "name": "Contact",
                  "url": "https://www.anrikatech.com/#contact",
                  "description": "Contact AnrikaTech for consultations or new project collaborations."
                }
              ]
            }
          `}
        </script>
      </Helmet>

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

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, scrollSpy } from "react-scroll";
import "./Navbar.css";
import logo from "../../media/anrikalogo2.svg";
import logoblue from "../../media/anrikabluelogo.svg";
const Navbar = () => {
  const [showSticky, setShowSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [disableStickyTemporarily, setDisableStickyTemporarily] =
    useState(false);

  // Handle scroll and sticky logic
  useEffect(() => {
    const handleScroll = () => {
      if (disableStickyTemporarily) {
        // While disabled from nav click, don't apply sticky logic
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setShowSticky(false);
      } else if (currentScrollY < lastScrollY) {
        setShowSticky(true); // Scrolling up
      } else {
        setShowSticky(false); // Scrolling down
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, disableStickyTemporarily]);

  useEffect(() => {
    scrollSpy.update();
  }, []);

  const handleNavClick = () => {
    // 🛑 Disable sticky immediately
    setDisableStickyTemporarily(true);
    setShowSticky(false);
  };

  const handleScrollDone = () => {
    // ✅ Reactivate sticky logic after scroll animation finishes
    setDisableStickyTemporarily(false);
    setLastScrollY(window.scrollY);
  };

  const closeNavbar = () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    if (navbarToggler && navbarCollapse.classList.contains("show")) {
      navbarToggler.click();
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${showSticky ? "sticky-navbar" : ""}`}
    >
      <div className="container">
        <div className="navbar-brand d-flex align-items-center">
          <img src={logoblue} alt="Logo" className="logo me-2" />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              // { to: "/", label: "Home", duration: 500 },
              { to: "about", label: "About Us", duration: 300 },
              { to: "services", label: "Our Services", duration: 200 },
              { to: "projects", label: "Our Projects", duration: 400 },
              { to: "faqs", label: "FAQs", duration: 400 },
              { to: "testimonials", label: "Testimonials", duration: 500 },
              {
                to: "contact",
                label: "Contact Us",
                duration: 600,
              },
            ].map(({ to, label, duration, button }) => (
              <li className="nav-item" key={to}>
                <Link
                  className={button ? "btn btn-primary-nav" : "nav-link"}
                  activeClass="active"
                  to={to}
                  spy={true}
                  smooth={true}
                  duration={duration}
                  offset={-80}
                  onClick={() => {
                    handleNavClick();
                    closeNavbar();
                  }}
                  onSetActive={handleScrollDone}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

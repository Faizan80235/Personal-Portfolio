import React from "react";
import "../Styles/Footer.css"; // dark theme styles

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer-section py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">
              © 2025 <span className="brand">Faizan Ali</span>. All rights
              reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="footer-links">
              <a
                href="#"
                className="footer-link me-3"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
              >
                Home
              </a>
              <a
                href="#"
                className="footer-link me-3"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
              >
                About
              </a>
              <a
                href="#"
                className="footer-link me-3"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
              >
                Projects
              </a>
             <a
                href="#"
                className="footer-link me-3"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("Skills");
                }}
              >
                Skills
              </a>

              <a
                href="#"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

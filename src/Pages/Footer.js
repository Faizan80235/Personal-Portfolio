import React from "react";
import "../Styles/Footer.css"; // dark theme styles

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "skills", label: "Skills" }, // lowercase fixed
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <footer className="footer-section py-4">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side */}
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">
              © 2025 <span className="brand">Faizan Ali</span>. All rights reserved.
            </p>
          </div>

          {/* Right side */}
          <div className="col-md-6 text-center text-md-end">
            <div className="footer-links d-flex flex-wrap justify-content-center justify-content-md-end">
              {links.map((link, idx) => (
                <a
                  key={idx}
                  href={`#${link.id}`}
                  className="footer-link me-3 mb-2"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

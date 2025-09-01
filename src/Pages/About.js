import React from "react";
import { User } from "lucide-react";
import "../Styles/AboutSection.css"; // dark theme styles
import image from "../Assets/Profile.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Profile Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="about-image-wrapper text-center">
              <div className="profile-image-placeholder">
                <img src={image} alt="faizan" />
                {/* If no image, show fallback:
                <User size={120} className="text-primary" /> */}
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="col-lg-6">
            <div className="about-content">
              <h2 className="section-title mb-4" style={{"textAlign":"center"}}>About Me</h2>
              <p className="mb-4">
                I'm a passionate web developer with 3+ years of experience
                creating modern, responsive web applications. I love turning
                complex problems into simple, beautiful designs.
              </p>
              <p className="mb-4">
                My expertise lies in JavaScript, React, Node.js, and modern web
                technologies. I'm always eager to learn new technologies and
                take on challenging projects that push the boundaries of what's
                possible.
              </p>

              {/* Stats Section */}
              <div className="about-stats">
                <div className="row">
                  <div className="col-sm-6 mb-3">
                    <div className="stat-item">
                      <h4 className="text-primary mb-1">30+</h4>
                      <p className="mb-0">Projects Completed</p>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div className="stat-item">
                      <h4 className="text-primary mb-1">3+</h4>
                      <p className="mb-0">Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Stats */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

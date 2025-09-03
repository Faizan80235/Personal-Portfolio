import React from "react";
import {
  User,
  Code,
  Rocket,
  CheckCircle,
  Briefcase,
} from "lucide-react"; // icons
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
                {image ? (
                  <img src={image} alt="faizan" />
                ) : (
                  <User size={120} className="text-primary" />
                )}
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="col-lg-6">
            <div className="about-content">
              <h2
                className="section-title mb-4 d-flex align-items-center justify-content-center"
                style={{ textAlign: "center" }}
              >
                <User className="me-2 text-primary" size={28} />
                About Me
              </h2>

              <p className="mb-4 d-flex align-items-start">
                <Code className="me-2 text-primary" size={20} />
                I'm a passionate web developer with 3+ years of experience
                creating modern, responsive web applications. I love turning
                complex problems into simple, beautiful designs.
              </p>

              <p className="mb-4 d-flex align-items-start">
                <Rocket className="me-2 text-primary" size={20} />
                My expertise lies in JavaScript, React, Node.js, and modern web
                technologies. I'm always eager to learn new technologies and
                take on challenging projects that push the boundaries of what's
                possible.
              </p>

              {/* Stats Section */}
              <div className="about-stats">
                <div className="row">
                  <div className="col-sm-6 mb-3">
                    <div className="stat-item d-flex align-items-center">
                      <CheckCircle className="me-2 text-success" size={22} />
                      <div>
                        <h4 className="text-primary mb-1">30+</h4>
                        <p className="mb-0">Projects Completed</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div className="stat-item d-flex align-items-center">
                      <Briefcase className="me-2 text-warning" size={22} />
                      <div>
                        <h4 className="text-primary mb-1">2+</h4>
                        <p className="mb-0">Years Experience</p>
                      </div>
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

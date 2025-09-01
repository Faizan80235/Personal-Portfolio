import React from "react";
import "../Styles/SkillsSection.css"; // dark theme styles

const SkillsSection = () => {
  const skills = [
    { name: "JavaScript", level: 90, color: "#ffc107" },
    { name: "React", level: 85, color: "#0dcaf0" },
    { name: "Node.js", level: 80, color: "#198754" },
    { name: "Python", level: 75, color: "#0d6efd" },
    { name: "HTML/CSS", level: 95, color: "#dc3545" },
    { name: "MongoDB", level: 70, color: "#6c757d" },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="section-title text-white">Skills & Technologies</h2>
            <p className="section-description text-light">
              Here are some of the technologies I work with
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card skill-card h-100 border-0 shadow-sm text-white">
                <div className="card-body">
                  <h5 className="mb-3 text-white">{skill.name}</h5>
                  <div className="progress skill-progress mb-2 bg-dark">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: skill.color,
                      }}
                    ></div>
                  </div>
                  <small className="text-light">{skill.level}%</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

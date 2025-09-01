import React from "react";
import { ExternalLink, Github } from "lucide-react";
import "../Styles/ProjectsSection.css"; // dark theme styles

const ProjectsSection = () => {
  const projects = [
    {
      title: "TimeCraft Watches Store",
      description:
        "An elegant e-commerce platform for luxury watches, built with React, Node.js, Express, and MongoDB (NoSQL).",
      demoUrl: "#",
      githubUrl: "https://github.com/Faizan80235/Time_Craft",
    },
    {
      title: "AI Medical Assistant",
      description:
        "An AI-powered healthcare assistant for medical support, patient queries, and smart recommendations.",
      demoUrl: "",
      githubUrl: "https://github.com/Faizan80235/AI-medical",
    },
    {
      title: "Voucher Portal",
      description:
        "A digital voucher management system for creating, distributing, and redeeming offers seamlessly.",
      demoUrl: "",
      githubUrl: "https://github.com/Faizan80235/fe-voucher-portal",
    },
    {
      title: "Health E-Commerce Store",
      description:
        "An online store focused on healthcare products, optimized for secure checkout and product management.",
      demoUrl: "#",
      githubUrl: "https://github.com/Faizan80235/Expert_b-final-project",
    },
    {
      title: "School Management System",
      description:
        "A web app for managing student records, attendance, results, and teacher administration in schools.",
      demoUrl: "#",
      githubUrl: "https://github.com/Faizan80235/Evergreen-Grammer-international-school-mangemnet-system",
    },
    {
      title: "Chatix App",
      description:
        "A real-time communication web application with instant messaging and group chat support.",
      demoUrl: "#",
      githubUrl: "https://github.com/Faizan80235/Chatrix",
    },
    {
      title: "Tech Nova Solutions",
      description:
        "A professional technology company website showcasing services, projects, and client solutions.",
      demoUrl: "#",
      githubUrl: "https://github.com/Faizan80235/TECHNOVA",
    },
    {
      title: "E-Learning Platform",
      description:
        "An online learning platform with interactive courses, progress tracking, and certification features.",
      demoUrl: "https://github.com/Faizan80235/e-Learning",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="section-title text-light">Featured Projects</h2>
            <p className="section-description">
              A showcase of my recent real-world projects
            </p>
          </div>
        </div>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card project-card h-100 border-0 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title mb-3 text-white">{project.title}</h5>
                  <p className="card-text flex-grow-1 text-light">
                    {project.description}
                  </p>
                  <div className="project-links mt-auto">
                    <a
                      href={project.demoUrl}
                      className="btn btn-primary btn-sm me-2 mb-2"
                    >
                      <ExternalLink size={14} className="me-1" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="btn btn-outline-light btn-sm mb-2"
                    >
                      <Github size={14} className="me-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

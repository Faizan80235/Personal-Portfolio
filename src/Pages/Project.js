import React from "react";
import { ExternalLink, Github } from "lucide-react";
import {
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiSocketdotio,
} from "react-icons/si";
import "../Styles/ProjectsSection.css"; // dark theme styles

// Map technologies to icons
const techIcons = {
  React: <SiReact size={14} className="me-1" color="#61dafb" />,
  Redux: <SiRedux size={14} className="me-1" color="#764abc" />,
  "Node.js": <SiNodedotjs size={14} className="me-1" color="#68a063" />,
  Express: <SiExpress size={14} className="me-1" color="#ffffff" />,
  MongoDB: <SiMongodb size={14} className="me-1" color="#47a248" />,
  Bootstrap: <SiBootstrap size={14} className="me-1" color="#7952b3" />,
  HTML: <SiHtml5 size={14} className="me-1" color="#e34c26" />,
  CSS: <SiCss3 size={14} className="me-1" color="#264de4" />,
  JavaScript: <SiJavascript size={14} className="me-1" color="#f7df1e" />,
  JAVASCRIPT: <SiJavascript size={14} className="me-1" color="#f7df1e" />, // fallback typo
  Python: <SiPython size={14} className="me-1" color="#3776ab" />,
  "Socket.io": <SiSocketdotio size={14} className="me-1" color="#ffffff" />,
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "TimeCraft Watches Store",
      description:
        "An elegant e-commerce platform for luxury watches, built with React, Node.js, Express, and MongoDB (NoSQL).",
      demoUrl: "#",
      githubUrl: "https://github.com/Faizan80235/Time_Craft",
      technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "AI Medical Assistant",
      description:
        "An AI-powered healthcare assistant for medical support, patient queries, and smart recommendations.",
      demoUrl: "",
      githubUrl: "https://github.com/Faizan80235/AI-medical",
      technologies: ["AI", "Python", "Machine Learning", "React", "Node.js"],
    },
    {
      title: "Voucher Portal",
      description:
        "A digital voucher management system for creating, distributing, and redeeming offers seamlessly.",
      demoUrl: "",
      githubUrl: "https://github.com/Faizan80235/fe-voucher-portal",
      technologies: ["React", "Bootstrap", "REST API"],
    },
    {
      title: "Health E-Commerce Store",
      description:
        "An online store focused on healthcare products, optimized for secure checkout and product management.",
      demoUrl: "#",
      githubUrl: "https://github.com/Faizan80235/Expert_b-final-project",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "School Management System",
      description:
        "A web app for managing student records, attendance, results, and teacher administration in schools.",
      demoUrl: "#",
      githubUrl:
        "https://github.com/Faizan80235/Evergreen-Grammer-international-school-mangemnet-system",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Chatix App",
      description:
        "A real-time communication web application with instant messaging and group chat support.",
      demoUrl: "#",
      githubUrl: "https://github.com/Faizan80235/Chatrix",
      technologies: ["React", "Socket.io", "Node.js"],
    },
    {
      title: "Tech Nova Solutions",
      description:
        "A professional technology company website showcasing services, projects, and client solutions.",
      demoUrl: "#",
      githubUrl: "https://github.com/Faizan80235/TECHNOVA",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "E-Learning Platform",
      description:
        "An online learning platform with interactive courses, progress tracking, and certification features.",
      demoUrl: "https://github.com/Faizan80235/e-Learning",
      githubUrl: "#",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    },
      {
    title: "Lumina Technologies Website",
    description:
      "A modern company website for Lumi Technologies, showcasing services, portfolio, and digital solutions.",
    demoUrl: "https://lumina-technologies.vercel.app/",
    githubUrl: "https://github.com/Faizan80235/LUMINA-TECHNOLOGIES",
    technologies: ["React", "Bootstrap", "Node.js"],
  },
    {
      title: "To-Do List App",
      description:
        "A simple and intuitive to-do list app to help users track daily tasks with add/remove and completion functionality.",
      demoUrl: "#",
      githubUrl: "https://github.com/Faizan80235/To-Do-List",
      technologies: ["HTML", "CSS", "JAVASCRIPT"],
    },
    {
      title: "Simple Calculator",
      description:
        "A basic calculator application for performing arithmetic operations like addition, subtraction, multiplication, and division.",
      demoUrl: "#",
      githubUrl: "https://github.com/Faizan80235/Simple-Caluclator",
      technologies: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "BMI Calculator",
      description:
        "A health tool that calculates Body Mass Index (BMI) based on user weight and height inputs with instant results.",
      demoUrl: "#",
      githubUrl: "https://github.com/Faizan80235/BMI-Caluclator",
      technologies: ["JavaScript", "HTML", "CSS"],
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
                  <h5 className="card-title mb-3 text-white">
                    {project.title}
                  </h5>
                  <p className="card-text flex-grow-1 text-light">
                    {project.description}
                  </p>

                  {/* Technology Tags with Icons */}
                  <div className="mb-3 d-flex flex-wrap">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="badge bg-dark text-light d-flex align-items-center me-2 mb-2"
                        style={{ fontSize: "0.75rem" }}
                      >
                        {techIcons[tech] || null}
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links mt-auto">
                    <a
                      href={project.demoUrl || "#"}
                      className={`btn btn-primary btn-sm me-2 mb-2 ${
                        !project.demoUrl ? "disabled" : ""
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={14} className="me-1" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl || "#"}
                      className={`btn btn-outline-light btn-sm mb-2 ${
                        !project.githubUrl ? "disabled" : ""
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
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

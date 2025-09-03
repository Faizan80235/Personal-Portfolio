import React, { useState } from "react";
import "../Styles/SkillsSection.css";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiNextdotjs,
  SiVite,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiNestjs,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import Hostinger from "../Svg/hostinger.svg";
import NameCheap from "../Svg/namecheap.svg"
// VS Code SVG
const VsCodeIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={size}
    height={size}
    fill="#007acc"
  >
    <path d="M230.33 27.68L176.2 7.08c-5.9-2.24-12.6-.78-17.04 3.7l-98.4 95.05L29.9 84.58c-4.05-2.22-9.04-.7-11.17 3.43L2.4 114.68c-2.3 4.3-.6 9.7 3.74 12.2l31.68 18.35-31.68 18.34c-4.35 2.5-6.05 7.9-3.74 12.2l16.33 26.68c2.13 4.13 7.12 5.65 11.17 3.43l30.86-17.25 98.4 95.04c4.44 4.48 11.14 5.94 17.04 3.7l54.13-20.6c6.84-2.6 11.4-9.2 11.4-16.6V44.28c0-7.4-4.56-14-11.4-16.6zM176 192L112 128l64-64v128z" />
  </svg>
);

// NoSQL Icon
const NoSqlIcon = ({ size = 24, color = "#00758f" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width={size}
    height={size}
    fill={color}
  >
    <ellipse cx="32" cy="12" rx="20" ry="6" />
    <path d="M12 12v28c0 3.3 8.95 6 20 6s20-2.7 20-6V12" />
    <ellipse cx="32" cy="40" rx="20" ry="6" />
  </svg>
);

// Generic external SVG icon wrapper
const SvgIcon = ({ url, size = 24 }) => (
  <img
    src={url}
    alt="icon"
    width={size}
    height={size}
    style={{ objectFit: "contain" }}
  />
);

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  // Categorized skills
  const skills = [
    // ===== FRONTEND =====
    {
      name: "HTML",
      level: 95,
      color: "#e34c26",
      icon: <SiHtml5 size={24} />,
      category: "Frontend",
    },
    {
      name: "CSS",
      level: 90,
      color: "#264de4",
      icon: <SiCss3 size={24} />,
      category: "Frontend",
    },
    {
      name: "JavaScript",
      level: 90,
      color: "#f0db4f",
      icon: <SiJavascript size={24} />,
      category: "Frontend",
    },
    {
      name: "TypeScript",
      level: 85,
      color: "#3178c6",
      icon: <SiTypescript size={24} />,
      category: "Frontend",
    },
    {
      name: "React",
      level: 90,
      color: "#61dafb",
      icon: <SiReact size={24} />,
      category: "Frontend",
    },
    {
      name: "Next.js",
      level: 90,
      color: "#000000",
      icon: <SiNextdotjs size={24} />,
      category: "Frontend",
    },
    {
      name: "Vite.js",
      level: 70,
      color: "#646cff",
      icon: <SiVite size={24} />,
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      level: 85,
      color: "#38bdf8",
      icon: <SiTailwindcss size={24} />,
      category: "Frontend",
    },
    {
      name: "Bootstrap",
      level: 95,
      color: "#7952b3",
      icon: <SiBootstrap size={24} />,
      category: "Frontend",
    },

    // ===== BACKEND =====
    {
      name: "Node.js",
      level: 90,
      color: "#68a063",
      icon: <SiNodedotjs size={24} />,
      category: "Backend",
    },
    {
      name: "Express",
      level: 80,
      color: "#000000",
      icon: <SiExpress size={24} />,
      category: "Backend",
    },
    {
      name: "MongoDB",
      level: 95,
      color: "#47a248",
      icon: <SiMongodb size={24} />,
      category: "Backend",
    },
    {
      name: "PostgreSQL",
      level: 70,
      color: "#336791",
      icon: <SiPostgresql size={24} />,
      category: "Backend",
    },
    {
      name: "NoSQL",
      level: 80,
      color: "#00758f",
      icon: <NoSqlIcon size={24} />,
      category: "Backend",
    },
    {
      name: "Nest.js",
      level: 70,
      color: "#ea2845",
      icon: <SiNestjs size={24} />,
      category: "Backend",
    },

    // ===== TOOLS =====
    {
      name: "Git",
      level: 90,
      color: "#f05032",
      icon: <SiGit size={24} />,
      category: "Tools",
    },
    {
      name: "Github",
      level: 95,
      color: "#171515",
      icon: <SiGithub size={24} />,
      category: "Tools",
    },
    {
      name: "Postman",
      level: 80,
      color: "#ff6c37",
      icon: <SiPostman size={24} />,
      category: "Tools",
    },
    {
      name: "VS Code",
      level: 95,
      color: "#007acc",
      icon: <VsCodeIcon size={24} />,
      category: "Tools",
    },

    // ===== DEPLOYMENT =====
    {
      name: "AWS",
      level: 85,
      color: "#FF9900",
      icon: <SvgIcon url="https://cdn.worldvectorlogo.com/logos/aws-2.svg" />,
      category: "Deployment",
    },
    {
      name: "Vercel",
      level: 90,
      color: "#000000",
      icon: <SvgIcon url="https://cdn.worldvectorlogo.com/logos/vercel.svg" />,
      category: "Deployment",
    },
    {
      name: "Netlify",
      level: 98,
      color: "#00C7B7",
      icon: <SvgIcon url="https://cdn.worldvectorlogo.com/logos/netlify.svg" />,
      category: "Deployment",
    },
    {
      name: "Hostinger",
      level: 80,
      color: "#673DE6",
      icon: <img src={Hostinger} alt="Hostinger" width={24} height={24} />,
      category: "Deployment",
    },
    {
      name: "Namecheap",
      level: 95,
      color: "#DE3723",
      icon: <img src={NameCheap} alt="Hostinger" width={24} height={24} />,
      category: "Deployment",
    },
    {
      name: "cPanel",
      level: 85,
      color: "#FF6C2C",
      icon: <SvgIcon url="https://cdn.worldvectorlogo.com/logos/cpanel.svg" />,
      category: "Deployment",
    },
  ];

  // Filter skills by activeTab
  const filteredSkills =
    activeTab === "All"
      ? skills.filter((skill) => skill.category !== "Deployment")
      : skills.filter((skill) => skill.category === activeTab);

  return (
    <section
      id="skills"
      className="skills-section text-light py-5"
      style={{ backgroundColor: "#121212" }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-white">Skills & Technologies</h2>
          <p className="text-secondary">
            Here are some of the technologies I work with
          </p>
        </div>

        {/* Tabs */}
        <div className="d-flex justify-content-center mb-4 gap-2 flex-wrap">
          {["All", "Frontend", "Backend", "Tools", "Deployment"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`btn rounded-pill px-4 ${
                activeTab === tab ? "btn-primary" : "btn-outline-primary"
              }`}
              style={{ transition: "all 0.3s ease" }}
              aria-pressed={activeTab === tab}
              type="button"
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="row">
          {filteredSkills.map((skill, index) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
              <div
                className="card h-100 border-0 shadow-sm text-white"
                style={{
                  backgroundColor: "#1e1e1e",
                  borderRadius: "16px",
                }}
              >
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-2">{skill.icon}</div>
                    <h5 className="mb-0">{skill.name}</h5>
                  </div>
                  <div
                    className="progress bg-dark mb-2"
                    style={{ height: "8px", borderRadius: "4px" }}
                  >
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: skill.color,
                      }}
                      aria-valuenow={skill.level}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                  <small className="text-white">
                    {skill.level}% proficiency
                  </small>
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

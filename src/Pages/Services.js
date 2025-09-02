import React from "react";
import { Globe, Server, Layers, Wrench, FileCode } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe size={28} className="text-info" />,
      title: "Web Scraping",
      description:
        "Extracting structured data from websites using Python and automation tools to power applications and research.",
    },
    {
      icon: <Server size={28} className="text-info" />,
      title: "Backend Development",
      description:
        "Building scalable, secure, and efficient server-side applications and APIs with Node.js, Express, and Python.",
    },
    {
      icon: <Layers size={28} className="text-info" />,
      title: "Full-Stack Development",
      description:
        "Developing complete web solutions from front-end interfaces to back-end systems with modern technologies.",
    },
    {
      icon: <Wrench size={28} className="text-info" />,
      title: "Problem Solving & Error Handling",
      description:
        "Debugging, fixing, and optimizing code with a strong focus on clean, maintainable solutions.",
    },
    {
      icon: <FileCode size={28} className="text-info" />,
      title: "Python Development",
      description:
        "Creating Python-based tools, scripts, and applications for automation, data analysis, and system tasks.",
    },
  ];

  return (
    <section
      id="services"
      className="py-5"
      style={{ background: "#121212" }}
    >
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-lg-12">
            <h2 className="text-white fw-bold">My Services</h2>
            <p className="text-light">Here’s what I can help you with</p>
          </div>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
              <div
                className="card h-100 text-center text-white border-0 shadow-lg"
                style={{
                  background: "#1E1E1E",
                  borderRadius: "16px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  willChange: "transform",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(0, 255, 195, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0, 0, 0, 0.6)";
                }}
              >
                <div className="card-body d-flex flex-column align-items-center p-4">
                  <div
                    className="d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: "rgba(0, 255, 195, 0.1)",
                    }}
                  >
                    {service.icon}
                  </div>
                  <h5 className="fw-semibold mb-2">{service.title}</h5>
                  <p className="text-light small">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

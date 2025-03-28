import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <FontAwesomeIcon icon={faCode} style={{ marginRight: "10px", color: "#a560e8" }} />
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently. Each project reflects my commitment to building practical and innovative web applications with a focus on performance, user experience, and scalability.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="E-commerce Healthy Cart"
              description="An advanced online platform for healthy food shopping with real-time order tracking and a secure payment gateway."
              ghLink="https://github.com/faizan80235/healthy-cart"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Portfolio"
              description="A dynamic personal portfolio website to showcase skills, projects, and contact info with dark mode support."
              ghLink="https://github.com/faizan80235/portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Chatrix"
              description="A real-time chat application with live messaging, authentication, and responsive design."
              ghLink="https://github.com/faizan80235/chatrix"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Landing Page"
              description="A sleek landing page designed to improve engagement and conversion rates."
              ghLink="https://github.com/faizan80235/landing-page"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Milk Website"
              description="A web platform for managing dairy product sales with inventory management and order processing."
              ghLink="https://github.com/faizan80235/milk-website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Technova"
              description="A technology news website offering the latest updates and in-depth reviews on trending tech topics."
              ghLink="https://github.com/faizan80235/technova"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

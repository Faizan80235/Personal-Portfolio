import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faChrome } from "@fortawesome/free-brands-svg-icons";

function ProjectCards({ title, description, ghLink, demoLink, isBlog }) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>

        <Button variant="primary" href={ghLink} target="_blank">
          <FontAwesomeIcon icon={faGithub} /> &nbsp;
          {isBlog ? "Blog" : "GitHub"}
        </Button>

        {/* Show Demo Button Only If Demo Link Exists */}
        {demoLink && !isBlog && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <FontAwesomeIcon icon={faChrome} /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;

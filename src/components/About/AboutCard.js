import React from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Faizan</span>
            from <span className="purple"> Pakistan.</span>
            <br />
            I am a student of class Eight 
            <br />
            I have a passion for technology and learning new things.
            <br />
            <br />
            Apart from studying, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <FontAwesomeIcon icon={faCheckCircle} /> Playing Games
            </li>
            <li className="about-activity">
              <FontAwesomeIcon icon={faCheckCircle} /> Exploring Technology
            </li>
            <li className="about-activity">
              <FontAwesomeIcon icon={faCheckCircle} /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to learn and grow every day!"{" "}
          </p>
          <footer className="blockquote-footer">Faizan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

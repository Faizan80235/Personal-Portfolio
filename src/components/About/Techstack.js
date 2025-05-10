
import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faNodeJs, 
  faJs, 
  faHtml5,
  faCss3Alt,
  faReact,
  faBootstrap,
  faPython,
  faGithub,
  faDocker,
  faLinux
} from "@fortawesome/free-brands-svg-icons";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FontAwesomeIcon icon={faJs} size="1x" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FontAwesomeIcon icon={faHtml5} size="1x" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FontAwesomeIcon icon={faCss3Alt} size="1x" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FontAwesomeIcon icon={faNodeJs} size="1x" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FontAwesomeIcon icon={faReact} size="1x" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FontAwesomeIcon icon={faBootstrap} size="1x" />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <FontAwesomeIcon icon={faPython} size="1x" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FontAwesomeIcon icon={faGithub} size="1x" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FontAwesomeIcon icon={faDocker} size="1x" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FontAwesomeIcon icon={faLinux} size="1x" />
      </Col>
    </Row>
  );
}

export default Toolstack;

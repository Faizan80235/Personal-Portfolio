import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faLaptopCode, 
  faCode, 
  faPaperPlane, 
  faComments, 
  faCloud 
} from "@fortawesome/free-solid-svg-icons";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FontAwesomeIcon icon={faLaptopCode} size="1x" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FontAwesomeIcon icon={faCode} size="1x" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FontAwesomeIcon icon={faPaperPlane} size="1x" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FontAwesomeIcon icon={faComments} size="1x" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FontAwesomeIcon icon={faCloud} size="1x" />
      </Col>
    </Row>
  );
}

export default Toolstack;
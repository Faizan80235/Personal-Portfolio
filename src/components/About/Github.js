import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row className="justify-content-center pb-3">
      <h1 className="project-heading pb-4">
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="soumyajit4419"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;

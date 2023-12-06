import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Adq Wesite"
              description="The Adq Website is a cutting-edge, responsive platform meticulously crafted using Angular, designed to offer an immersive and user-friendly experience. It embodies a fusion of elegant design, seamless functionality, and optimized performance to cater to diverse user needs."
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Title Dashboards"
              description="Angular Dashboards is an advanced application meticulously crafted using Angular, designed to provide real-time data visualization along with interactive editing capabilities. This platform offers an intuitive interface for users to view live data feeds and make modifications to specific fields, enhancing their engagement and control over the presented information."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Form Robo"
              description="Form Robo is an innovative application developed on ReactJS, tailored to efficiently manage and monitor data pertaining to flying drones and active weeder machines. This platform offers comprehensive screens providing insights into the operational data of drones in flight and real-time information on active weeder machines, streamlining the management of these robotic systems."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Cotton Expert"
              description="Cotton Expert is an innovative application designed to revolutionize crop management, especially for various crops. This application consists of three robust modules—Image Analysis, Pesticide Label Recognition, and a Voice Assistant—each serving distinct yet interconnected purposes, aiding farmers and agronomists in efficient crop analysis and management."
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

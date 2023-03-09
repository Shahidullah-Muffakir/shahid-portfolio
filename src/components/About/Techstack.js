import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiMaterialui,
  SiTypescript,
  SiFramer,
  SiExpress,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <h3>Tailwind CSS</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui />
        <h3>Material UI</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFramer />
        <h3>Framer Motion</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h3>JavaScript</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <h3>TypeScript</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h3>NodeJS</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h3>ReactJS</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h3>MongoDB</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <h3>ExpressJS</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h3>Git</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h3>Firebase</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h3>Python</h3>
      </Col>
    </Row>
  );
}

export default Techstack;

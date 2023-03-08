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

import jobapp1 from "../../Assets/Projects/jobapp1.PNG";
import naturcamp1 from "../../Assets/Projects/naturcamp1.PNG";
import ecommerce1 from "../../Assets/Projects/ecommerce1.PNG";
import clothing1 from "../../Assets/Projects/clothing1.PNG";
import gmailclone1 from "../../Assets/Projects/gmailclone1.PNG";
import teslaclone1 from "../../Assets/Projects/teslaclone1.PNG";
import netflixclone1 from "../../Assets/Projects/netflixclone1.PNG";
import mern1 from "../../Assets/Projects/mern-ad1.PNG";
import gym from "../../Assets/Projects/gym.png";

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
              imgPath={mern1}
              isBlog={false}
              title="MERN Admin Dashboard"
              description="Full Stack web app, built with MERN Stack. used Material UI in the frontend with ReactJS."
              ghLink="https://github.com/Shahidullah-Muffakir/MERN-Admin-dashboard"
              demoLink="https://mern-admin-frontend-xrui.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobapp1}
              isBlog={false}
              title="JobApp"
              description="A Full Stack web application built with the help of MERN Stack. Help users to speedup their job hunting process. It has the features of User register, sign in, updating the user, creating a job, and all other CRUD operations. it use express server and mongodb database."
              ghLink="https://github.com/Shahidullah-Muffakir/jobapp-mern"
              demoLink="https://jobapp-mern.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={naturcamp1}
              isBlog={false}
              title="NatureCamp"
              description="Introducing my latest web development project, a full stack camping and nature reserve website built using the MERN stack. This website allows users to register, sign in, and create campground listings, as well as perform other CRUD operations. The website features a user-friendly interface, utilizing Mapbox for interactive mapping, and Cloudinary for easy management of images. With the help of MongoDB and Express, the website is able to handle a large amount of data and provide a seamless experience for users. I am excited to share this project in my portfolio and showcase my skills in building full-stack web applications"
              ghLink="https://github.com/Shahidullah-Muffakir/NatureCamp"
              demoLink="https://naturecamp.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce1}
              isBlog={false}
              title="ECommerce"
              description="An ECommerce Web application, built with the help of ReactJS, having payment with stripe functionality"
              ghLink="https://github.com/Shahidullah-Muffakir/shahid_ecommerce"
              demoLink="https://shahid-ecommerce.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gmailclone1}
              isBlog={false}
              title="Gmail Clone"
              description="I built Gmail Clone using ReactJS and Firebase authentication and firestore."
              ghLink="https://github.com/Shahidullah-Muffakir"
              demoLink="https://afghani-clothing-db.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clothing1}
              isBlog={false}
              title="Clothing Website"
              description="A ReactJS application for Clothing Business, used firebase in the backend. Having user register and login functionality "
              ghLink="https://github.com/Shahidullah-Muffakir/final-afghani-clothing"
              demoLink="https://poetic-parfait-021d61.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teslaclone1}
              isBlog={false}
              title="Tesla Clone"
              description="I built this Tesla clone using ReactJS, Redux and Styled-components"
              ghLink="https://github.com/Shahidullah-Muffakir/tesla-clone"
              demoLink="https://tesla-clone-shahid.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflixclone1}
              isBlog={false}
              title="Netflix Clone"
              description="I built the Netflix Clone, Using ReactJS, Firebase, Sass, Fetching movie details from TMDB api with the help of axios"
              ghLink="https://github.com/Shahidullah-Muffakir/Netflix-Clone"
              demoLink="https://shahidullah-netflix-clone.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="FitnessFuel Gym App"
              description="Built with using ReactJS, Typscript, TailwindCSS, and Framer Motion"
              ghLink="https://github.com/Shahidullah-Muffakir/FitnessFuel-gym-app"
              demoLink="https://fitness-fuel.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

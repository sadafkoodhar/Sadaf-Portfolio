

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/img1.png";
import projImg2 from "../assets/img/img2.png";
import projImg3 from "../assets/img/img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "../styles/projects.css"; // 🔥 Importing the new CSS file

export const Projects = () => {

  const projects = [
    {
      title: "EduTech Platform",
      description: "Spring Boot-based REST APIs for learning management system.",
      imgUrl: projImg1,
    },
    {
      title: "Real-Time Pothole Detection (AI-powered - YOLO-v7)",
      description: "Developed an AI-driven pothole detection system using deep learning.",
      imgUrl: projImg2,
    },
    {
      title: "Chota Champ (E-Commerce Platform)",
      description: "Spring Boot backend for online baby products store with advanced order management.",
      imgUrl: projImg3,
    }
  ];

  return (
      <section className="projects" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                      <h2>Projects</h2>
                      <p>Here are some of my key projects related to Java backend development.</p>
                      <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                          <Nav.Item>
                            <Nav.Link eventKey="first">All Projects</Nav.Link>
                          </Nav.Item>
                        </Nav>
                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                          <Tab.Pane eventKey="first">
                            <Row>
                              {
                                projects.map((project, index) => {
                                  return (
                                      <ProjectCard
                                          key={index}
                                          {...project}
                                      />
                                  )
                                })
                              }
                            </Row>
                          </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt="Project Background" />
      </section>
  );
};

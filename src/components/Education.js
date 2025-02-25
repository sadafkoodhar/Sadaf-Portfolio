import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "../styles/education.css"; // 🔥 Make sure to create this CSS file

export const Education = () => {
    return (
        <section className="education" id="education">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Education</h2>
                                    <div className="education-box">
                                        <div className="education-item">
                                            <h3>BS Information Technology</h3>
                                            <p>University of Sindh (2020 - 2024)</p>
                                            <p>Relevant Courses: Software Engineering, Database Systems, Algorithms & Data Structures</p>
                                        </div>
                                    </div>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

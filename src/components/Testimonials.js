import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "../styles/testimonials.css";

export const Testimonials = () => {
    return (
        <section className="testimonials" id="testimonials">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>What People Say</h2>
                                    <div className="testimonials-box">
                                        <div className="testimonial-item">
                                            <p>"Sadaf is an outstanding Java Developer with great problem-solving skills. She is always eager to learn and deliver top-quality code!"</p>
                                            <h4>-Hussain, Senior Developer</h4>
                                        </div>
                                        <div className="testimonial-item">
                                            <p>"Her expertise in Spring Boot and REST APIs is remarkable. I highly recommend her for backend development roles."</p>
                                            <h4>- Adil Ali, Project Manager</h4>
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

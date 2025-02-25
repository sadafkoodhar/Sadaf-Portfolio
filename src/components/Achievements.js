import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "../styles/achievements.css";

export const Achievements = () => {
    return (
        <section className="achievements" id="achievements">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Achievements</h2>
                                    <div className="achievements-box">
                                        <div className="achievement-item">
                                            <h3>🏆 Award for Outstanding Contribution in Academics & Development (2022)</h3>
                                        </div>
                                        <div className="achievement-item">
                                            <h3>🚀 NGIRI Funded Project: Real-time Pothole Detection with YOLO-v7</h3>
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


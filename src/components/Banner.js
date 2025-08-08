import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/java.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../styles/custom-theme.css';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);

  const toRotate = ["Java Backend Developer", "Spring Boot Expert", "REST API Architect"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center justify-content-center text-center">
            <Col xs={12} md={8} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn banner-content" : ""}>
                      <h1>{`Hi! I'm Sadaf Koondhar`} <br/>
                        <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Java Backend Developer", "Spring Boot Expert", "REST API Architect" ]'>
                      <span className="wrap">{text}</span>
                    </span>
                      </h1>
                      <p>I am a passionate Java Backend Developer with expertise in building scalable REST APIs using Spring Boot, Hibernate, and Microservices architecture.</p>
                      <button className="download-button">
                        <a href="/Sadaf Khan Koondhar.pdf" download="Sadaf Khan Koondhar.pdf">
                          Download CV 📄
                        </a>
                      </button>

                    </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5} className="text-center">
              <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                      <img src={headerImg} alt="Header Img" className="header-image" />
                    </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
  );
}

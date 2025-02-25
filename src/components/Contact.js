import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "../styles/contact.css"; // 🔥 Importing the new CSS file

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formDetails.firstName || !formDetails.email || !formDetails.message) {
      alert("Please fill in all required fields!");
      return;
    }

    setButtonText("Sending...");

    setTimeout(() => {
      alert(`Message sent successfully!\n\nName: ${formDetails.firstName} ${formDetails.lastName}\nEmail: ${formDetails.email}\nMessage: ${formDetails.message}`);
      setFormDetails(formInitialDetails);
      setButtonText("Send");
    }, 1000);
  };

  return (
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) =>
                    <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
                }
              </TrackVisibility>
            </Col>
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                      <h2>Get In Touch</h2>
                      <form onSubmit={handleSubmit}>
                        <Row>
                          <Col size={12} sm={6} className="px-1">
                            <input type="text" value={formDetails.firstName} placeholder="First Name *" onChange={(e) => onFormUpdate('firstName', e.target.value)} required />
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                            <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                            <input type="email" value={formDetails.email} placeholder="Email Address *" onChange={(e) => onFormUpdate('email', e.target.value)} required />
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                            <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                          </Col>
                          <Col size={12} className="px-1">
                            <textarea rows="6" value={formDetails.message} placeholder="Message *" onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
                            <button type="submit"><span>{buttonText}</span></button>
                          </Col>
                        </Row>
                      </form>
                    </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
  )
}

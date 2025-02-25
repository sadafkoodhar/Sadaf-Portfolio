import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineUser, AiOutlineMail, AiOutlineMessage } from "react-icons/ai";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

export const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [buttonText, setButtonText] = useState("Send Email");
  const [status, setStatus] = useState("");

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs
        .send(
            "service_trgpy4x",
            "template_qughi2q",
            {
              from_name: formDetails.name,
              from_email: formDetails.email,
              message: formDetails.message,
            },
            "PXIDN-Ry5_7TBLrO3"
        )
        .then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
              setStatus("✅ Message sent successfully!");
              setFormDetails({ name: "", email: "", message: "" });
              setButtonText("Send Email");
            },
            (error) => {
              console.log("FAILED...", error);
              setStatus("❌ Failed to send message. Try again later.");
              setButtonText("Send Email");
            }
        );
  };

  return (
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) => (
                    <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
                )}
              </TrackVisibility>
            </Col>
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) => (
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                      <h2>Get In Touch</h2>
                      <form onSubmit={handleSubmit}>
                        <div className="input-group">
                          <AiOutlineUser className="input-icon" />
                          <input type="text" value={formDetails.name} placeholder="Your Name" onChange={(e) => onFormUpdate("name", e.target.value)} required />
                        </div>
                        <div className="input-group">
                          <AiOutlineMail className="input-icon" />
                          <input type="email" value={formDetails.email} placeholder="Your Email" onChange={(e) => onFormUpdate("email", e.target.value)} required />
                        </div>
                        <div className="input-group">
                          <AiOutlineMessage className="input-icon" />
                          <textarea rows="4" value={formDetails.message} placeholder="Your Message" onChange={(e) => onFormUpdate("message", e.target.value)} required></textarea>
                        </div>
                        <button type="submit" className="send-button">{buttonText}</button>
                        {status && <p className="status-message">{status}</p>}
                      </form>
                    </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
  );
};

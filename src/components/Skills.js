import React from "react";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import "../styles/skills.css"; // 🔥 Importing Skills CSS

export const Skills = () => {
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    return (
        <section className="skills" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skills-box wow zoomIn">
                            <h2>Technical Skills</h2>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="owl-carousel owl-theme skills-slider"
                            >
                                <div className="skill-item">
                                    <img src={meter1} alt="Java" />
                                    <h5>Java</h5>
                                </div>
                                <div className="skill-item">
                                    <img src={meter2} alt="Spring Boot" />
                                    <h5>Spring Boot</h5>
                                </div>
                                <div className="skill-item">
                                    <img src={meter3} alt="Hibernate & JPA" />
                                    <h5>Hibernate & JPA</h5>
                                </div>
                                <div className="skill-item">
                                    <img src={meter1} alt="REST API Development" />
                                    <h5>REST API Development</h5>
                                </div>
                                <div className="skill-item">
                                    <img src={meter2} alt="Microservices" />
                                    <h5>Microservices</h5>
                                </div>
                                <div className="skill-item">
                                    <img src={meter3} alt="SQL & PostgreSQL" />
                                    <h5>SQL & PostgreSQL</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Background" />
        </section>
    );
};

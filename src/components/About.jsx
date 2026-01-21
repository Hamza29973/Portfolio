import React from "react";
import aboutImg from "../assets/img/full stack.jpg";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section__title">About Me</h2>
        <div className="about__container grid">
          <div className="about__image">
            <img src={aboutImg} alt="CHANNOUF Hamza" className="about__img" />
          </div>
          <div className="about__content">
            <p className="about__text">
              A student in digital development, passionate about the web and new technologies, I am seeking an opportunity to apply these innovative technologies in a professional environment.
            </p>
            <div className="about__social">
              <a href="https://www.linkedin.com/in/hamza-channouf-479047325" target="_blank" className="about__social-link">
                <i className="ri-linkedin-box-fill"></i>
              </a>
              <a href="https://github.com/Hamza29973" target="_blank" className="about__social-link">
                <i className="ri-github-fill"></i>
              </a>
              <a href="mailto:channoufhamza007@gmail.com" target="_blank" className="about__social-link">
                <i className="ri-mail-fill"></i>
              </a>
            </div>
            <p className="about__note">
              I don't typically respond to messages on social networks. Please send me an email and I'll get back to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

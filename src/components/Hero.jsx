import React from "react";
import heroImg from "../assets/img/A.png";
import cv from "../assets/pdf/hamza.channouf.pdf";

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero__container container grid">
        <div className="hero__content">
          <h1 className="hero__title glitch-effect">
            <span className="glitch-text" data-text="CHANNOUF Hamza">
              CHANNOUF Hamza
            </span>
            <span className="glitch-line"></span>
            <span className="dev-text">Developer Web</span>
          </h1>

          <p className="hero__description">
            Passionate about web development and new technologies, currently seeking opportunities to apply my skills in a professional environment.
          </p>

          <div className="hero__buttons">
            <a href="#projects" className="button button--primary">
              View Projects
            </a>
            <a href={cv} download className="button button--secondary">
              Download CV
            </a>
          </div>
        </div>

        <div className="hero__image">
          <div className="image-container">
            <img src={heroImg} alt="CHANNOUF Hamza" className="hero__img" />

            <div className="image-overlay">
              <div className="overlay-content">
                <h3>CHANNOUF Hamza</h3>
                <p>Full Stack Developer</p>
                <div className="social-links">
                  <a
                    href="https://www.linkedin.com/in/hamza-channouf-479047325"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ri-linkedin-box-fill"></i>
                  </a>
                  <a
                    href="https://github.com/Hamza29973"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ri-github-fill"></i>
                  </a>
                  <a href="mailto:channoufhamza007@gmail.com">
                    <i className="ri-mail-fill"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import React from "react";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section__title">Get In Touch</h2>
        <div className="contact__container grid">
          <div className="contact__info">
            <p className="contact__text">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!
            </p>
            <div className="contact__social">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import projet1 from "../assets/img/projet1.png";
import projet2 from "../assets/img/projet2.png";
import projet3 from "../assets/img/projet3.png";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="section__title">Mes Projets</h2>
        <div className="projects__container grid">

          <article className="project__card">
            <div className="project__image">
              <img src={projet2} alt="Laravel Project" className="project__img" />
            </div>
            <div className="project__content">
              <h3 className="project__title">Hotel Reservation System</h3>
              <p className="project__description">
                Application web de réservation d’hôtel développée avec Laravel.
                Gestion des chambres, des réservations et des utilisateurs,
                avec une base de données MySQL et un design responsive.
              </p>
              <div className="project__tech">
                <span className="project__tech-item">Laravel</span>
                <span className="project__tech-item">PHP</span>
                <span className="project__tech-item">MySQL</span>
                <span className="project__tech-item">Bootstrap</span>
              </div>
              <a href="https://github.com/Hamza29973" target="_blank" className="project__link">
                View Project <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </article>

          <article className="project__card">
            <div className="project__image">
              <img src={projet1} alt="OFPPT Projects" className="project__img" />
            </div>
            <div className="project__content">
              <h3 className="project__title">Projets Académiques – OFPPT</h3>
              <ul className="project__list">
                <li>Plateforme de cours en ligne (HTML5, CSS3, Bootstrap)</li>
                <li>Application de gestion de stock (CRUD)</li>
                <li>Utilisation de Git/GitHub, Jira et Figma</li>
              </ul>
              <div className="project__tech">
                <span className="project__tech-item">HTML5</span>
                <span className="project__tech-item">CSS3</span>
                <span className="project__tech-item">Bootstrap</span>
                <span className="project__tech-item">Git/GitHub</span>
              </div>
              <a href="https://github.com/Hamza29973" target="_blank" className="project__link">
                View Project <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </article>

       <article className="project__card">
  <div className="project__image">
    <img src={projet3} alt="Blog App API" className="project__img" />
  </div>
  <div className="project__content">
    <h3 className="project__title">Blog App – REST API</h3>
    <ul className="project__list">
      <li>API RESTful pour la gestion de blog (CRUD)</li>
      <li>Stockage de données via File System (Sans base de données)</li>
      <li>Architecture MVC (Model-View-Controller)</li>
    </ul>
    <div className="project__tech">
      <span className="project__tech-item">Node.js</span>
      <span className="project__tech-item">Express.js</span>
      <span className="project__tech-item">JavaScript</span>
      <span className="project__tech-item">File System</span>
    </div>
    <a href="https://github.com/Hamza29973/blog-App" target="_blank" rel="noopener noreferrer" className="project__link">
      View Project <i className="ri-arrow-right-line"></i>
    </a>
  </div>
</article>

        </div>
      </div>
    </section>
  );
};

export default Projects;

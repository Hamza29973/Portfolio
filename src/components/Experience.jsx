import React from "react";

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <h2 className="section__title">Education & Experience</h2>
        <div className="experience__container">

          <div className="experience__item">
            <div className="experience__header">
              <h3 className="experience__title">Diploma in Digital Development</h3>
              <span className="experience__date">2022 - 2024</span>
            </div>
            <div className="experience__content">
              <ul className="experience__details">
                <li>Web Development: HTML, CSS, JavaScript, PHP, ReactJS</li>
                <li>Databases: MySQL</li>
              </ul>
            </div>
          </div>

          <div className="experience__item">
            <div className="experience__header">
              <h3 className="experience__title">Baccalauréat – Sciences de la Vie et de la Terre (SVT)</h3>
              <span className="experience__date">2021</span>
            </div>
            <div className="experience__content">
              <ul className="experience__details">
                <li>Baccalauréat en SVT – Lycée Abdellah Genoun, Oujda</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;

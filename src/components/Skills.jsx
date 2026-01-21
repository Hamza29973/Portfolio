import React from "react";
import htmlIcon from "../assets/img/skills-html.svg";
import cssIcon from "../assets/img/skills-css.svg";
import jsIcon from "../assets/img/skills-javascript.svg";
import bootstrapIcon from "../assets/img/skills-bootstrap.svg";
import reactIcon from "../assets/img/skills-react.svg";
import tailwindIcon from "../assets/img/skills-tailwind-css.svg";
import phpIcon from "../assets/img/skills-php.svg";
import mysqlIcon from "../assets/img/skills-mysql.svg";
import xamppIcon from "../assets/img/skills-xampp.svg";
import githubIcon from "../assets/img/skills-github.svg";
import gitIcon from "../assets/img/skills-git.svg";
import figmaIcon from "../assets/img/skills-figma.svg";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section__title">Skills</h2>
        <div className="skills__container grid">

          <div className="skills__category">
            <h3 className="skills__category-title">Frontend</h3>
            <div className="skills__list">
              {[{icon: htmlIcon, name: "HTML"}, {icon: cssIcon, name:"CSS"}, {icon: jsIcon, name:"JavaScript"},
                {icon: bootstrapIcon, name:"Bootstrap"}, {icon: reactIcon, name:"React"}, {icon: tailwindIcon, name:"Tailwind-CSS"}].map((skill, i) => (
                  <div className="skill__item" key={i}>
                    <img src={skill.icon} alt={skill.name} className="skill__icon" />
                    <span className="skill__name">{skill.name}</span>
                  </div>
              ))}
            </div>
          </div>

          <div className="skills__category">
            <h3 className="skills__category-title">Backend</h3>
            <div className="skills__list">
              {[{icon: phpIcon, name:"PHP"}, {icon: mysqlIcon, name:"MySQL"}, {icon: xamppIcon, name:"XAMPP"}].map((skill,i)=>(
                <div className="skill__item" key={i}>
                  <img src={skill.icon} alt={skill.name} className="skill__icon" />
                  <span className="skill__name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills__category">
            <h3 className="skills__category-title">Programming Languages</h3>
            <div className="skills__list">
              {[{icon: jsIcon, name:"JavaScript"}, {icon: phpIcon, name:"PHP"}].map((skill,i)=>(
                <div className="skill__item" key={i}>
                  <img src={skill.icon} alt={skill.name} className="skill__icon" />
                  <span className="skill__name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills__category">
            <h3 className="skills__category-title">Tools</h3>
            <div className="skills__list">
              {[{icon: githubIcon, name:"GitHub"}, {icon: gitIcon, name:"Git"}, {icon: figmaIcon, name:"Figma"}].map((skill,i)=>(
                <div className="skill__item" key={i}>
                  <img src={skill.icon} alt={skill.name} className="skill__icon" />
                  <span className="skill__name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;

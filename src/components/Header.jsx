import React, { useState } from "react";
import logo from "../assets/img/logo-concept-3.svg";
import useScrollSpy from "./hooks/useScrollSpy";

const Header = () => {
  const sectionIds = ["home", "about", "projects", "skills", "experience", "contact"];
  const activeSection = useScrollSpy(sectionIds, 60);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <nav className="nav">
        <div className="nav__container container">
          <div className="nav__brand">
            <a href="#home" className="nav__logo-link" aria-label="Home">
              <img src={logo} alt="CHANNOUF Logo" className="logo" />
            </a>
          </div>

        <ul className={`nav__list ${menuOpen ? "show" : ""}`}>
          <li>
            <a
              href="#home"
              className={`nav__link ${activeSection === "home" ? "active-link" : ""}`}
            >
              <i className="ri-home-3-line"></i>
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`nav__link ${activeSection === "about" ? "active-link" : ""}`}
            >
              <i className="bx bx-user"></i>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`nav__link ${activeSection === "projects" ? "active-link" : ""}`}
            >
              <i className="ri-folder-5-line"></i>
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`nav__link ${activeSection === "skills" ? "active-link" : ""}`}
            >
              <i className="bx bx-book"></i>
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={`nav__link ${activeSection === "experience" ? "active-link" : ""}`}
            >
              <i className="ri-honour-line"></i>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`nav__link ${activeSection === "contact" ? "active-link" : ""}`}
            >
              <i className="ri-send-plane-line"></i>
            </a>
          </li>
        </ul>

        <div
          className="nav__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="ri-menu-line"></i>
        </div>
      </div>
    </nav>
  );
};

export default Header;

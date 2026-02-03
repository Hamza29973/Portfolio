import React from "react";

import certJS from "../assets/pdf/certijs.pdf";
import certGit from "../assets/pdf/certif-git.pdf";
import certNode from "../assets/pdf/certi-node.pdf";
import certReact from "../assets/pdf/Certification-react.pdf";
import certMongo from "../assets/pdf/certicate-mongo.pdf";
import certTailwind from "../assets/pdf/certificate-tailwind-css.pdf";
import certHtmlCss from "../assets/pdf/html-css-certificate.pdf";
import certExpress from "../assets/pdf/express.pdf";

const certificatesData = [
  { title: "HTML & CSS", pdf: certHtmlCss },
  { title: "JavaScript Module", pdf: certJS },
  { title: "Advanced Git & GitHub", pdf: certGit },
  { title: "Tailwind CSS", pdf: certTailwind },
  { title: "React JS", pdf: certReact },
  { title: "NodeJS Module", pdf: certNode },
  { title: "Express JS", pdf: certExpress },
  { title: "MongoDB", pdf: certMongo },
];

const Certificates = () => {
  return (
    <section className="certificates section" id="certificates">
      <div className="container">
        <h2 className="section__title">Certificates</h2>

        <div className="certificates__container grid">
          {certificatesData.map((cert, index) => (
            <div className="certificate__card" key={index}>
              <div className="certificate__icon">
                <i className="ri-shield-check-line"></i>
              </div>
              <h3 className="certificate__title">{cert.title}</h3>
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate__link"
              >
                View Certificate <i className="ri-external-link-line"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

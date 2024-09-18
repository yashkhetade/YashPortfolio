import React from "react";
import "./Education.css";
import { education } from "../../sources";
import { Link } from "react-scroll";
const Education = () => {
  return (
    <>
      <section id="educations">
        <div className="wrapper">
          <div className="section-header">
            <h1 className="heading-1" data-aos="fade-right">
              <span className="gradient-text">Education</span>
            </h1>

            <h4 className="sub-title muted" data-aos="fade-left">
              My Educational Background
            </h4>
          </div>
          <div className="educations-container">
            {education.map((education, index) => (
              <div className="education" data-aos="fade-left" key={index}>
                <div className="details">
                  <h3 className="name gradient-text">{education.name}</h3>
                  <p className="muted">{education.description}</p>
                </div>
                <div className="flex-center percentage">
                  {education.percentile}
                </div>
                <div className="flex buttons-wrapper">
                  <a
                    href={education.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn">Read More</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;

import React from "react";
import "./WorkExp.css";
import { workexperience } from "../../sources";
import { Link } from "react-scroll";
const Education = () => {
  return (
    <>
      <section id="workexperiences">
        <div className="wrapper">
          <div className="section-header">
            <h1 className="heading-1" data-aos="fade-right">
              <span className="gradient-text"> Work Experience</span>
            </h1>
          </div>
          <div className="workexperiences-container">
            {workexperience.map((experience, index) => (
              <div className="experience" data-aos="fade-left" key={index}>
                <div className="details">
                  <h3 className="name gradient-text">{experience.name}</h3>
                  <h3 className="name ">{experience.location}</h3>
                  <h3 className="name ">{experience.date}</h3>
                </div>
                <div className="project ">
                  {`Project : ${experience.project}`}
                  <p className="muted">{`Description : ${experience.description}`}</p>
                </div>
                <div className="flex buttons-wrapper">
                  <a
                    href={experience.link}
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

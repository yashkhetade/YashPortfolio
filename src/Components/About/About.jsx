import React from "react";
import "./About.css";
import { whyChooseMe } from "../../sources";
const About = () => {
  return (
    <>
      <section id="about">
        <div className="wrapper">
          <div className="section-header">
            <h1
              className="heading-1"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-offset="50"
            >
              <span className="gradient-text">About Us</span>
            </h1>
            <h4
              className="sub-title muted"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-offset="50"
            >
              Focused and Driven Developer , with a strong proficiency in Java,
              Advanced Java, and Software Development. Adept in front-end
              development (ReactJS), with a keen eye for detail and a passion
              for problem-solving. Successfully solved 200+ DSA problems on
              LeetCode and GeeksforGeeks, demonstrating strong analytical
              skills.
            </h4>
          </div>

          <div className="group">
            {whyChooseMe.map((list, index) => (
              <div className="flex-center group-item" key={index}>
                <div className=" flex-center icon-wrapper">{list.icon}</div>
                <h4 className="title">{list.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

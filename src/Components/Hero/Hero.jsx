import React from "react";
import "./Hero.css";
import { Link } from "react-scroll";
import Img1 from "../../assets/YashImgDp.jpg";
import Achievements from "../Achievements/Achievements";
import { Typewriter } from "react-simple-typewriter";
const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="wrapper info-container">
          <div className="column">
            <h3 className="sub-title" data-aos="fade-right">
              Hi I'am <span className="primary">Yash Khetade</span>
            </h3>
            <h1 className="heading-1" data-aos="fade-up" data-aos-delay="500">
              {/* a <br></br> */}
              <span className="gradient-text">
                <Typewriter
                  words={[
                    " FullStack Developer",
                    "  Frontend Developer",
                    " Backend Developer",
                    "MERN Stack Developer",
                    " ReactJS Developer",
                    " Java Developer",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={80}
                  delaySpeed={500}
                />
              </span>
            </h1>
            <p className="muted" data-aos="fade-up" data-aos-delay="500">
              Focused and Driven Developer , with a strong proficiency in Java,
              Advanced Java, and Software Development. Adept in front-end
              development (ReactJS), with a keen eye for detail and a passion
              for problem-solving. Successfully solved 200+ DSA problems on
              LeetCode and GeeksforGeeks, demonstrating strong analytical
              skills.
            </p>
            <div className="flex-center buttons-wrapper">
              <Link
                to="services"
                smooth={true}
                className="btn primary"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-offset="50"
              >
                Learn more
              </Link>
              <Link
                to="contact"
                smooth={true}
                className="btn"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-offset="50"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div
            className="column hero-image"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-offset="50"
          >
            <img src={Img1} alt="profileimage" />
          </div>
        </div>

        <div className="achievements-cluster">
          <div className="wrapper">
            <Achievements />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

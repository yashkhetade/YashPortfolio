import React from "react";
import "./Contact.css";
import { contactOptions } from "../../sources";
const Contact = () => {
  return (
    <section id="contact" data-aos="fade-zoom-in">
      <div className="wrapper">
        <div className="contact-options">
          {contactOptions.map((option, index) => (
            <div
              className="flex-center option"
              data-aos="fade-right"
              key={index}
            >
              <div className="flex-center icon-wrapper">{option.icon}</div>
              <h4 className="muted">{option.title}</h4>
              <h3 className="value">{option.value}</h3>
            </div>
          ))}
        </div>

        <div className="contact-form" data-aos="fade-left">
          <div className="top">
            <h1 className="title">
              <span className="gradient-text">Join With Me!</span>
            </h1>
            <p className="muted">
              I build with precision and passion,creating web projects that
              stands out.It's straightforward as that !
            </p>
          </div>
          <form action="https://formspree.io/f/mwkjvgae" method="POST">
            <div className="middle">
              <div className="flex row">
                <input
                  required
                  type="text"
                  placeholder="First name"
                  name="firstname"
                  className="control"
                />
                <input
                  required
                  type="text"
                  placeholder="Last name"
                  name="lastname"
                  className="control"
                />
              </div>
              <div className="flex row">
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  name="email"
                  className="control"
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone number"
                  name="phone"
                  className="control"
                />
              </div>
              <textarea
                required
                name="message"
                className="control"
                placeholder="Message"
                cols={30}
                rows={10}
              ></textarea>
            </div>

            <div className="flex-center bottom">
              <button className="btn primary">Send Now</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

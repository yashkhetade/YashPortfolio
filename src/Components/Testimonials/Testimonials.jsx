import React, { useRef, useEffect } from "react";
import "./Testimonials.css";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa6";
import { clients } from "../../sources";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const ref = useRef(null);
  const settings = {
    infinite: true,
    slidesToShow: 2,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section id="testimonials">
        <div className="wrapper">
          <div className="section-header">
            <h1 className="heading-1" data-aos="fade-left">
              <span className="gradient-text">Testimonials</span>
            </h1>
            <h4
              className="sub-title"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              What my clients are saying
            </h4>
          </div>

          <div data-aos="fade-right">
            <Slider {...settings} className="testimonials-container" ref={ref}>
              {clients.map((list, index) => (
                <React.Fragment key={index}>
                  <div className="flex-center">
                    <div className="profile">
                      <img src={list.image} al={list.name} />
                    </div>
                    <div className="details">
                      <h3 className="name">{list.name}</h3>
                      {/* <small className="muted">CEO of Microbank</small> */}
                    </div>
                  </div>
                  <p className="flex-center p muted content"> {list.review}</p>
                  <div className="flex-center stars-container">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </React.Fragment>
              ))}
            </Slider>
          </div>
          <div className="flex-center buttons-container" data-aos="fade-left">
            <button
              className="flex-center btn"
              onClick={() => ref.current && ref.current.slickPrev()}
            >
              <FaLongArrowAltLeft />
            </button>
            <button
              className="flex-center btn"
              onClick={() => ref.current && ref.current.slickNext()}
            >
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;

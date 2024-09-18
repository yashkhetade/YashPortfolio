import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { tabs } from "../../../src/sources";
import Logo from "../../Commons/Logo";
import SocialHandles from "../../Commons/SocialHandles";
import { HiMenu } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [openSideBar, setopenSideBar] = useState(false);
  return (
    <>
      <div className="navbar flex">
        {openSideBar ? (
          <div
            className="overlay"
            onClick={() => setopenSideBar(!openSideBar)}
          />
        ) : (
          ""
        )}
        <Logo />
        <div
          className={`box flex-center tabs-group sidebar ${
            openSideBar ? "visible" : ""
          }`}
        >
          <div
            className="flex-center icon-wrapper cancel-btn"
            onClick={() => setopenSideBar(!openSideBar)}
          >
            <FaTimes />
          </div>
          {tabs.map((tab, index) => (
            <Link
              to={tab.id}
              smooth={true}
              spy={true}
              className="tab"
              activeClass="active"
              onClick={() => setopenSideBar(false)}
              key={index}
            >
              {tab.name}
            </Link>
          ))}
        </div>
        <SocialHandles />
        <div className="box flex-center buttons">
          <Link to="contact" smooth={true} className="btn primary contact-btn">
            Hire Me
          </Link>
          <Link to="services" smooth={true} className="btn services-btn">
            Services
          </Link>

          <div
            className="flex-center icon-wrapper menu-btn"
            onClick={() => setopenSideBar(!openSideBar)}
          >
            <HiMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

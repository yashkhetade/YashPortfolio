import React, { useState, useEffect } from "react";
import "./Achievements.css";
import Odometer from "react-odometerjs";
const Achievements = () => {
  const [experience, setExperience] = useState(0);
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    const timeoutid = setTimeout(() => {
      setClients(500);
      setExperience(1);
      setProjects(100);
    }, 500);
    return () => clearTimeout(timeoutid);
  }, []);
  return (
    <>
      <div className="achievements-container">
        <div className="card">
          <div className="flex-center">
            <Odometer value={experience} className="title" />
            <h1 className="title">+</h1>
          </div>
          <p className="muted name">Years Experience</p>
        </div>

        <div className="card">
          <div className="flex-center">
            <Odometer value={clients} className="title" />
            <h1 className="title">+</h1>
          </div>
          <p className="muted name">Clients Worldwide</p>
        </div>

        <div className="card">
          <div className="flex-center">
            <Odometer value={projects} className="title" />
            <h1 className="title">+</h1>
          </div>
          <p className="muted name">Completed Projects</p>
        </div>
      </div>
    </>
  );
};

export default Achievements;

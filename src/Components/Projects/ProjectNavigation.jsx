import React, { useState, useRef, useEffect } from "react";
import "./ProjectNavigation.css";
import Aos from "aos";

const ProjectNavigation = ({ tabs, onChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [offset, setOffSet] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const itemElements = useRef(new Array());

  let sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  };

  useEffect(() => {
    Aos.refreshHard();
    const prevEls = itemElements.current.filter(
      (_, index) => index < activeIndex
    );
    setOffSet(sumArray(prevEls.map((item) => item.offsetWidth)));
    setIndicatorWidth(itemElements.current[activeIndex].offsetWidth);
  }, [activeIndex]);
  return (
    <nav className="project-navigation">
      {tabs.map((tab, index) => (
        <button
          ref={(el) => (itemElements.current[index] = el)}
          onClick={() => {
            setActiveIndex(index);
            onChange(tab);
            Aos.refreshHard();
          }}
          key={index}
        >
          {tab}
        </button>
      ))}

      <span
        className="indicator"
        style={{ left: `${offset}px`, width: `${indicatorWidth}px` }}
      />
    </nav>
  );
};

export default ProjectNavigation;

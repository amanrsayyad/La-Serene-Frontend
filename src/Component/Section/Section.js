import React, { useEffect } from "react";
import { SectionData } from "../../data/Data";
import "./Section.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Section = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="section">
      <div>
        <h2 className="sec_h2">Why choose us?</h2>
        <div className="section_container">
          {SectionData.map((item)=> (
          <div data-aos="flip-down" className="section_card1 card_main">
          <div className="section_border">
            <h3>{item.sectionHead}</h3>
            <p>{item.sectionPara}</p>
          </div>
        </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;

import React, { useEffect } from "react";
import "./Services.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { ServicesData } from "../../data/Data";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="service">
      <div>
        <div className="service_container">
          {ServicesData.map((item) => (
             <div data-aos="fade-down" className="card_service">
             {item.serviceIcon}
             <h3>{item.serviceName}</h3>
             <p>{item.serviceText}</p>
           </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

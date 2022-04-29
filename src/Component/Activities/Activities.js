import React, { useEffect } from "react";
import "./Activities.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";
import gameroom from "../../Assets/gameroom.jpg";
import pool from "../../Assets/pool.jpg";

const Activities = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className="activate_new">
        <div className="activate__content">
          <h1 className="animate-hero">Activities</h1>
        </div>
      </div>
      <div className="acti">
        <div className="acti_container">
          <div className="acti_img" data-aos="fade-down">
            <img src={gameroom} alt="" />
            <div className="acti_layer"></div>
          </div>
          <div className="acti_img" data-aos="fade-down">
            <img src={pool} alt="" />
            <div className="acti_layer"></div>
          </div>
          <div className="acti_para" data-aos="fade-down">
            <div className="acti_detail">
              <h3>A shelter from the frenzy of everyday life</h3>
              <p>
                We have everything you need to rekindle your romance. Are you on
                your honeymoon or celebrating your anniversary? Perfect! Ask for
                the Executive Suite. Whisper a word to our staff and we will
                plan a lovely candle light dinner for you in our gazebos. All
                you need to do is sit back and cherish the romantic evening with
                your loved one.
              </p>
            </div>
            <div className="acti_detail">
              <h3>Rediscover Nature</h3>
              <p>
              Your stay in La Serene Resorts will definitely take you one step closer to nature! While our comfortable rooms will keep you well rested!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Activities;

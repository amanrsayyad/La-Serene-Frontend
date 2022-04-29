import React from "react";
import "./Detail.css";
import "./new.css";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../../Component/Footer/Footer";
import DeProfile from "../../Component/Profiles/DeProfile";
import deluxe1 from "../../Assets/deluxe1.JPG";
import deluxe2 from "../../Assets/deluxe2.JPG";
import deluxe3 from "../../Assets/deluxe3.jpg";

const Deluxe = () => {
  return (
    <div>
      <div class="deluxe_new">
        <div class="deluxe_content">
          <h1 className="animate-hero" style={{color: "#fff"}}>Deluxe Room</h1>
        </div>
      </div>
      <div className="detail">
          <div className="detail_container">
          <div>
          <Carousel fade>
               <Carousel.Item>
               <img
                 className="d-block w-100 roomd_img"
                 src={deluxe1}
                 alt=""
               />
             </Carousel.Item>
 
             <Carousel.Item>
               <img
                 className="d-block w-100 roomd_img"
                 src={deluxe2}
                 alt=""
               />
             </Carousel.Item>
 
             <Carousel.Item>
               <img
                 className="d-block w-100 roomd_img"
                 src={deluxe3}
                 alt=""
               />
             </Carousel.Item>  
          </Carousel>
        </div>
        <div className="detail_card">
          <div className="detail_heading">La Serene Resort & Spa</div>
          <div className="detail_features">
                <>
                <h5 className="detail_feature">Deluxe Room</h5>
                <h4 className="h4_room">Size 19m2</h4>
                </>
            <h3 className="facilities">Most Popular Facilities :</h3>
            <ul className="feature">
              <li>
                <Link to="/" className="speacial">
                <i class="fa-solid fa-mountain"></i>Hill View
                </Link>
              </li>
              <li>
                <Link to="/" className="speacial">
                <i class="fa-brands fa-pagelines"></i>Garden
                </Link>
              </li>
              <br/>
              <li>
                <Link to="/">
                  <i class="fas fa-parking"></i>Free Parking
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i class="fas fa-users"></i>Family Rooms
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i class="fas fa-wifi"></i>Free Wifi
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i class="fas fa-utensils"></i>Restaurant
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i class="fas fa-spa"></i>Spa & Wellnees Centre
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i class="fas fa-concierge-bell"></i>Room Service
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i class="fas fa-coffee"></i>Cofee Maker All Rooms
                </Link>
              </li>
            </ul>
            <div>
            <DeProfile />
            </div>
            <div className="detail_btn">
              <a href="https://wa.me/919404929492" target="_blank" rel="noreferrer">Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Deluxe;

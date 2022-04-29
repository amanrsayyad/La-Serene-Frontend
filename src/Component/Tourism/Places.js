import React from "react";
import "./Places.css";
import { PlacesData } from "../../data/Data";

function Places() {
  return (
    <div className="places">
      <div className="places_container">
        {PlacesData.map((item) => (
          <div className="places_card">
            <div className="places_img">
              <img src={item.placesImg} alt="" />
            </div>
            <div className="places_head">
              <h3>{item.places}</h3>
              <p>{item.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Places;

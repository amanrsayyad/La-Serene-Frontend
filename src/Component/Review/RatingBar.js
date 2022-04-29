import React from 'react';
import './RatingBar.css';
import google from '../../Assets/google.png';
import star from '../../Assets/star.png';

const RatingBar = () => {
  return (
    <div className='rating_bar'>
        <div className="rating_container">
            <div className="rating_card">
                <div className="rating_img">
                    <img src={google} alt="" /> <span>Rating</span>
                </div>
                <div className="rating_star">
                   <span>4.7</span> <img src={star} alt="" />
                </div>
                <span className="total">524 Reviews</span>
            </div>
            <div className="rating_card">
                <div className='rating_btn'>
                    <a href="https://www.google.com/travel/entity/key/CgoIqojI5-3r6chLEAE/writereview?g2lb=4308226%2C4306835%2C4722900%2C4726605%2C4270442%2C4401769%2C2502548%2C4597339%2C4647135%2C4716128%2C2503771%2C4723328%2C4524133%2C4258168%2C4649665%2C4680142%2C2503781%2C4640247%2C4291517%2C4284970&hl=hi-IN&gl=in&ssta=1&q=la%20serene%20resort%20and%20spa&rp=EKqIyOft6-nISxCqiMjn7evpyEs4AkAASAHAAQI&ictx=1&sa=X&utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAESABpJCisSJzIlMHgzYmMyNjUwNzc3ZjIyYjhkOjB4NGI5MWE3NWVkY2YyMDQyYRoAEhoSFAoHCOYPEAMYARIHCOYPEAMYAhgBMgIQACoJCgU6A0lOUhoA&rs=0&ved=0CAAQ5JsGahcKEwi4_PKl8aT2AhUAAAAAHQAAAAAQEw"
                    target="_blank" rel="norefrer">Write A Review</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RatingBar;
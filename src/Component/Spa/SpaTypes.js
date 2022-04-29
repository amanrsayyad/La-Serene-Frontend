import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './SpaTypes.css';

function SpaTypes() {

    useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);

  return (
    <div className='spa_types'>
       <h2 className="spa_types_h2">Soul Helping Spa</h2>
      <div className='spa_types_text' data-aos="fade-down">
          <div className='spa_para'>
             <h3>ABHYANGAM</h3>
             <p>An Indian traditional massage which includes long strokes and literally means application all over the body.Abhyangam. It starts with a head massage in the sitting positions.</p>
          </div>
          <div className="spa_types_pri">
              <div>
                 <h5>Time- 60 min</h5>
              </div>
              <div>
                 <h5>Price <i class="fa-solid fa-indian-rupee-sign"></i> 1999/-</h5>
              </div>
          </div>
      </div>
      <div className='spa_types_text' data-aos="fade-down">
          <div className='spa_para'>
             <h3>HERBAL POTLI MASSAGE</h3>
             <p>It is Abhyangam Massage that starts with a deep muscular massage using oil is followed by an application of hot Herbal poultices all over the body. The vigorous strokes and heat of these poultices up tense muscles. Good for with stiff and constricted joints.</p>
          </div>
          <div className="spa_types_pri">
              <div>
                 <h5>Time 75 min</h5>
              </div>
              <div>
                 <h5>Price <i class="fa-solid fa-indian-rupee-sign"></i> 3999/-</h5>
              </div>
          </div>
      </div>
      <div className='spa_types_text' data-aos="fade-down">
          <div className='spa_para'>
             <h3>KALARI MARMA MASSAGE</h3>
             <p>Kalari marma massage is traditional ayurvedic massage for stimulating vital points. This is a traditional kerala Ayurvedic massage done using herb-infused Ayurvedic oil, performed by the therapist using his or her hands,by applying appropriate pressure to specific vital points/parts of the body</p>
          </div>
          <div className="spa_types_pri">
              <div>
                 <h5>Time 1 hours</h5>
              </div>
              <div>
                 <h5>Price <i class="fa-solid fa-indian-rupee-sign"></i> 2999/-</h5>
              </div>
          </div>
      </div>
      <div className='spa_types_text' data-aos="fade-down">
          <div className='spa_para'>
             <h3>BALINESS MASSAGE</h3>
             <p>Benefits Of : Relieves muscle pain, Treats any kind of sleep issues, Boosts blood circulation, Promotes skin health,Helps to keep away stress,Serve as an energizer,Boost the immunity level.</p>
          </div>
          <div className="spa_types_pri">
              <div>
                 <h5>Time 60 min</h5>
              </div>
              <div>
                 <h5>Price <i class="fa-solid fa-indian-rupee-sign"></i> 2499/-</h5>
              </div>
          </div>
      </div>
    </div>
  )
}

export default SpaTypes;
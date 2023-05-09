import React, {useState} from 'react';
import CV from '../../assets/cv.pdf';

const CTA = (props) => {
  const [activeNav, setActiveNav] = useState ('#contact');
  return (
    <div>
    <div className="cta">
      
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a onClick={() => setActiveNav('#contact') || props.onFormSwitch('contact')} className="btn btn-primary">
        Let's talk
      </a>
    </div>

    </div>
  );
};

export default CTA;

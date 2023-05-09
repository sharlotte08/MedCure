import React, {useState} from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = (props) => {
  const [activeNav, setActiveNav] = useState('#contact');
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
`            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
 
          </div>
          <p style={{fontSize: '20px'}}> I am a diligent and truthful person who values punctuality and is eager to acquire new abilities. Additionally, I am affable, accommodating, and respectful, possessing a good sense of humor. I can operate effectively both independently and collaboratively in demanding surroundings. I am sociable and diplomatic, and I have the capacity to attentively listen while resolving issues.</p>
          <a href="#contact" className="btn btn-primary" onClick={() => setActiveNav('#contact') || props.onFormSwitch('contact')}>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro
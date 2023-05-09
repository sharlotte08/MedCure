import React, {useState} from 'react';
import CTA from './CTA';
import './header.css';
import HeaderImage from '../../assets/front.jpeg';

const Header = (props) => {
  const toggleForm = props.onFormSwitch;
  const currentForm = props.setActiveNav;
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Charlotte Chuca</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA 
            onFormSwitch={toggleForm}
            setActiveNav={currentForm} />
      </div>
      <div className='header-img'>
        <img className='headerpic' src={HeaderImage} alt='Header-Image'></img>
      </div>
    </header>
  );
};

export default Header;

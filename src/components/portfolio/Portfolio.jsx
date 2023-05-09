import React, { useEffect, useState } from 'react';
import './portfolio.css';
import Shadows from '../../assets/sadow.png';
import 'animate.css';

const Portfolio = (props) => {
  const [activeNav, setActiveNav] = useState('#portfolio');
  useEffect(() => {
    const handleScrollAnimation = () => {
      const scrollY = window.scrollY;
      const portfolioSection = document.getElementById('portfolio');
      const portfolioOffset = portfolioSection.offsetTop;
      const portfolioHeight = portfolioSection.offsetHeight;

      if (scrollY > portfolioOffset - window.innerHeight + portfolioHeight) {
        // add animation class to elements you want to animate
        document.querySelector('.animate-on-scroll').classList.add('animate__animated', 'animate__fadeInUp');
      }
    };

    window.addEventListener('scroll', handleScrollAnimation);

    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <div className='portfolio'>
      <section id='portfolio'>
        <h5>List of My Works</h5>
        <h2>Portfolio</h2>
      </section>
      <div className='portfolio-cont'>
        <p className='text-dark'>
          <h2 className='text-light animate-on-scroll animate__animated animate__bounceIn'>
            My Works
          </h2>
          <ul className='animate-on-scroll'>
            <li>Gab & Kate e-commerce website</li>
            <li>Pizza Shop POS</li>
            <li>Attendance Roll Call</li>
            <li>Wake Me App UI</li>
            <li>Medcure Pharmacy Management System</li>
            <li>Graphics and Content Creations</li>
          </ul>
          <br />
          <br />
          <a href='#portfolio' onClick={() => setActiveNav('#portfolio') || props.onFormSwitch('portfolio')} className='btn btn-primary animate-on-scroll animate__animated animate__zoomIn'>
            View Portfolio
          </a>
        </p>

        <img
          className='portfolio-img animate-on-scroll animate__animated animate__flipInX'
          src={Shadows}
          alt='portfolio image'
        />
      </div>
    </div>
  );
};

export default Portfolio;

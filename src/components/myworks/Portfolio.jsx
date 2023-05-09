import React, { useEffect } from 'react';
import './portfolio.css';
import Shadows from '../../assets/sadow.png';
import 'animate.css';
import medicure from '../../assets/med 2.png';
import blob from '../../assets/blob.png'; 
import blob2 from '../../assets/blob2.png'; 


// import Carousel from './carousel.jsx';
import Carousel from 'better-react-carousel'
import image1 from '../../assets/sliderpics/image1.jpeg';
import image2 from '../../assets/sliderpics/image2.jpg';
import image3 from '../../assets/sliderpics/image3.jpg';
import image4 from '../../assets/sliderpics/image4.jpg';
import image5 from '../../assets/sliderpics/image5.png';
import image6 from '../../assets/sliderpics/image6.jpg';
import image7 from '../../assets/sliderpics/image7.jpg';
import image8 from '../../assets/sliderpics/image8.png';
import image9 from '../../assets/sliderpics/image9.png';




const Portfolio = () => {

  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

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
            Gab&Kate E-commerce Website
          </h2>

          <p>An HTML, CSS, and JAVA Based E-commerece website</p>
          <a href='https://643671ed7bc05603aa982712--celebrated-unicorn-7d63cc.netlify.app' className='btn btn-primary animate-on-scroll animate__animated animate__zoomIn'>
            Live View
          </a>
          <a href='#contact' className='btn btn-primary animate-on-scroll animate__animated animate__zoomIn github-link'>
            Github
          </a>
        </p>

        <img
          className='portfolio-img animate-on-scroll animate__animated animate__flipInX'
          src={Shadows}
          alt='portfolio image'
        />  
      </div>
      
      <img className="blob" src={blob}></img>

      <div className="">
   
      <div className="medicure">
      
        <div className="medicure-cont">

          <p className='text-dark'>
            <h2 className='text-light animate-on-scroll animate__animated animate__bounceIn'>
              MedCure Pharmacy Management System
            </h2>

            <p>A capstone project pharmacy management system made using vb.net</p>
            <a href='#' className='btn btn-primary animate-on-scroll animate__animated animate__zoomIn '>
              Github
            </a>

          </p>
        </div>
        <img className="medicure-img" src={medicure}></img>
     
</div>
      </div>
      <div>
        <img className="blob2" src={blob2}></img>
      </div>
      

      <div className="medicure-cont">

<p className='text-dark'>
  <h1 className='text-light animate-on-scroll animate__animated animate__bounceIn'>
   Graphics and Content Creations
  </h1  >

  <p style={{ textAlign: 'center' }}>Logos for local businesses and contents for social media postings.</p>
</p>
</div>  {/* {data.resources.map((item) => console.log(item))} */}
      <div className="carousel-div">

        <Carousel cols={3} rows={1} gap={10} autoplay={3000} loop interval={5}>

          {images.map((item) => (
            <Carousel.Item className='itemcarousel'>
              <img src={item} alt='carousel' />
            </Carousel.Item>
          ))
          }
        </Carousel>

      </div>

      <div className="other-cont">

<p className='text-dark'>
<p style={{fontSize: '20px'}}>
        Some of my projects are subject to non-disclosure agreements (NDAs). 
        <br/>
        If you are interested in learning more about these projects, please feel free to&nbsp;
        <a href="#contact" style={{ color: '#097663;' }}>contact me</a>
        &nbsp;directly.
      </p>       

</p>
</div>
    </div>
  );
};

export default Portfolio;

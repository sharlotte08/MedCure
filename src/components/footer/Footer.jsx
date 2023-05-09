import React from 'react';
import './footer.css';
import { Box, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-scroll";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = (props) => {

  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };

  return (
    <footer>

      <a href="#home" className="footer__logo">CHARLOTTE</a>
      <ul className="permalinks">
        <li><a href="#home" onClick={() => props.onFormSwitch('div')}>Home</a></li>
        <li><a href="#about" onClick={() => props.onFormSwitch('div')}>About</a></li>
        <li><a href="#experience" onClick={() => props.onFormSwitch('div')}>Skills</a></li>
        <li><a href="#portfolio" onClick={() =>  props.onFormSwitch('portfolio')}>Portfolio</a></li>
        <li><a href="#testimonials" onClick={() => props.onFormSwitch('div')}>Testimonials</a></li>
        <li><a href="#contact" onClick={() => props.onFormSwitch('contact')}>Contact</a></li>
      </ul>


      <Box sx={{
    maxWidth: "1100px", 
    borderTop: "1px solid #7889A8", 
    mx: "auto", 
    padding: 3, 
    display: "flex", 
  justifyContent: "space-around",
  }}
  
  >
    
    <Box sx={{display: "flex", flexDirection: "column"}}>
    <Typography        className='text-dark'

      variant="body1" 
      sx={{
      fontWeight: "bold",
      mb: 2}}>
        SOCIAL
      </Typography>

      
      <Box sx={{display: "flex", alignItems: "center", cursor: "pointer"}}>
          <LinkedInIcon sx={{mr: 2, color: "white"}}/>
          <Typography variant="body2" sx={{ color: "white", my: 1}}>
          <a href="https://www.linkedin.com/in/charlotte-chuca-609593262" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }} >LinkedIn</a>
          </Typography>
      </Box>
    
      <Box sx={{display: "flex", alignItems: "center", cursor: "pointer"}}>
          <FacebookIcon sx={{mr: 2, color: "white"}}/>
          <Typography variant="body2" sx={{ color: "white", my: 1}}>
          <a href="https://www.facebook.com/ohyeslot" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }} >Facebook</a>
          </Typography>
      </Box>

      <Box sx={{display: "flex", alignItems: "center", cursor: "pointer"}}>
          <InstagramIcon sx={{mr: 2, color: "white"}}/>
          <Typography variant="body2" sx={{ color: "white", my: 1}}>
          <a href="https://www.instagram.com/ohsharlotte/" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }} >Instagram</a>
          </Typography>
      </Box>
   
    </Box>
    <Box sx={{display: "flex", flexDirection: "column"}}>
    <Typography   className='text-dark'
      variant="body1" 
      sx={{
      fontWeight: "bold",
      mb: 2}}>
       REACH OUT TO US
      </Typography>
    
      <Box sx={{display: "flex", alignItems: "center", cursor: "pointer"}}>
          <FmdGoodIcon sx={{mr: 2, color: "white"}}/>
          <Typography variant="body2" sx={{ color: "white", my: 1}}>
   Taytay, Rizal, 1940, Philippines
          </Typography>
      </Box>
      
      <Box sx={{display: "flex", alignItems: "center", cursor: "pointer"}}>
          <EmailIcon sx={{mr: 2, color: "white"}}/>
          <Typography variant="body2" sx={{ color: "white", my: 1}}>
          <a href="mailto:lottechuca.edu@gmail.com" style={{ color: "white", textDecoration: "none" }} >lottechuca.edu@gmail.com</a>
          </Typography>
      </Box>


   
    </Box>
  </Box>
  <div className="footer__copyright">
        <small>&copy; {getYear()} Charlotte Chuca. All rights reserved.</small>
      </div>

    </footer>
    
  )
}

export default Footer

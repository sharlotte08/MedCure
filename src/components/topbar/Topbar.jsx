import React, { useEffect, useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import './topbar.css';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const Topbar = (props) => {
  const [activeNav, setActiveNav] = useState('#home');
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");



  useEffect(() => {
    document.documentElement.className = theme === "dark" ? "dark" : "";
  }, [theme]);

  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home') || props.onFormSwitch('div')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about') || props.onFormSwitch('div')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience') || props.onFormSwitch('div')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio') || props.onFormSwitch('portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine /></a>


      <a href="#contact" onClick={() => setActiveNav('#contact') || props.onFormSwitch('contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>

      <div className={theme === "dark" ? "dark" : ""}>
        <button className="theme-toggle" onClick={() => setTheme("light")}>
          <LightModeOutlinedIcon />
        </button>
        <button className="theme-toggle" onClick={() => setTheme("dark")}>
          <DarkModeOutlinedIcon />
        </button>
      </div>


    </nav>
  )
}

export default Topbar;
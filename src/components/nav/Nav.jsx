import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookOpen} from "react-icons/bi";
//import {RiServiceLine} from "react-icons/ri";
import {MdOutgoingMail} from "react-icons/md";
import {useState} from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#home" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : '' }><FaHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav ==='#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav ==='#experience' ? 'active' : ''}><BiBookOpen /></a>
      {/*<a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav ==='#services' ? 'active' : ''}><RiServiceLine /></a>*/}
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav ==='#contact' ? 'active' : ''}><MdOutgoingMail /></a>
    </nav>
  )
}

export default Nav

import React from 'react'
import './footer.css'
import {AiOutlineLinkedin} from 'react-icons/ai'
import { BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>



      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experieince">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/sergio-pizarro-segovia/"> <AiOutlineLinkedin /></a>
        <a href="https://github.com/SergioPizarro"><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>Made with &hearts; and <strong>React</strong>. &copy; Sergio Pizarro. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer

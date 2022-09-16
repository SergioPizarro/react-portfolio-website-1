import React from 'react'
import './header.css'
import CTA from './CTA'
import profile from '../../assets/profile.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Sergio!</h1>
        <h5 className="text-light">Fullstack Developer from Chile in Berlin!</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={profile} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header

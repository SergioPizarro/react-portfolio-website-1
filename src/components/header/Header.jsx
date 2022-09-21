import React from 'react'
import './header.css'
import CTA from './CTA'
import profile from '../../assets/profile.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">

        <h1 className='h__1'>Hello there!</h1>
        <h3 className="text-light"> I am Sergio, a Fullstack Developer from Chile based in Berlin.</h3>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={profile} alt="me" className='my__picture' />
        </div>


      </div>
    </header>
  )
}

export default Header

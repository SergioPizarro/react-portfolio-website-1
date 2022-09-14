import React from 'react'
import CV from '../../assets/CV Sergio Pizarro.pdf'
const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download> Download CV</a>
      <a href='#contact'> Let's Talk!</a>
    </div>
  )
}

export default CTA

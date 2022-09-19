import React from 'react'
import './experience.css'
import { GiCutDiamond } from "react-icons/gi";
const Experience = () => {
  return (
    <section id='experience'>

      <h5>Take a look</h5>
      <h2>At my Skills!</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <GiCutDiamond className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <GiCutDiamond className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <GiCutDiamond className='experience__details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <GiCutDiamond className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <GiCutDiamond className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <GiCutDiamond className='experience__details-icon'/>
              <div>
                <h4>SASS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/*end of frontend*/}

        <div className="experience__backend">
          <h3>Backend</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <GiCutDiamond className='experience__details-icon'/>
              <div>
                <h4>Ruby</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <GiCutDiamond className='experience__details-icon'/>
              <div>
                <h4>Postgresql</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <GiCutDiamond className='experience__details-icon'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

import React from 'react'
import './experience.css'
import { BsFillCheckCircleFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id='experience'>


      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>

              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>

              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Javascript</h4>

              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>

              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>

              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>SASS</h4>

              </div>
            </article>
          </div>
        </div>

        {/*end of frontend*/}

        <div className="experience__backend">
          <h3>Backend</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Ruby on Rails</h4>

              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Postgresql</h4>

              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Node JS</h4>

              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Sanity</h4>

              </div>

            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Sanity</h4>

              </div>

            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

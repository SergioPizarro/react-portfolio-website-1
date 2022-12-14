import React from 'react'
import './about.css'
import profileDibujo from '../../assets/profileDibujo.png'
import { FaGraduationCap } from 'react-icons/fa'
import { BiCodeAlt } from "react-icons/bi";
import { SiReact } from 'react-icons/si'

const About = () => {
  return (
    <section id='about'>
      {/*<h5>Get to Know</h5>*/}
      <h2> About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={profileDibujo} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaGraduationCap className='about__icon' />
              <h5>Industrial Civil Engineer</h5>
              <small>University Diego Portales in Santiago de Chile</small>
            </article>
            <article className='about__card'>
              <BiCodeAlt className='about__icon' />
              <h5>Fullstack Development with Ruby on Rails</h5>
              <small>Le Wagon Bootcamp in Berlin, Germany</small>
            </article>
            <article className='about__card'>
              <SiReact className='about__icon' />
              <h5>React</h5>
              <small>Code Academy online course</small>
            </article>
          </div>
          <p>
          My name is Sergio Pizarro and I moved to Berlin after a Bachelor's Degree in Industrial Engineering
          from the University Diego Portales in Chile to improve my language skills and intercultural competencies.
          Here, I decided to enroll in an intensive web-developer full-stack Bootcamp at Le Wagon and deepen the
          knowledge I acquired in my studies. During this program, I specialized primarily in backend
          development; however, I am interested in both front- and backend as I am currently learning React
          (like this Website). I'm up for new challenges and excited to learn new things!.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>

    </section>
  )
}

export default About

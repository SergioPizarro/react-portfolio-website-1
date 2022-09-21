import React from 'react'
import './portfolio.css'
import wePick from '../../assets/wePick.png';
import rentAPlant from '../../assets/rentAPlant.png';
import githubPortfolio from '../../assets/githubPortfolio.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>

      <h2>My Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={wePick} alt="wepick" />
          </div>
          <div className='portfolio__description'>
            <h3>We Pick</h3>
            <p>Web app where users can create an activity, add users, add proposals,
              and vote to pick between options in the activity. Like wich movie to watch in a movie night</p>

            <a href='https://www.we-pick.fun' className='btn btn-primary' target='blank'>Try it yourself</a>

          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={rentAPlant} alt="rentAPlant" />
          </div>
          <div className='portfolio__description'>
            <h3>Rent a Plant</h3>
            <p>Website where you can upload a plant so it can be rented for some time for certain
              ammount of money. Here you can look for plants in your city
              and basically rent them, how fun!.
            </p>

            <a href='https://rent-a-plant-app.herokuapp.com/' className='btn btn-primary' target='blank'>Try it yourself</a>

          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={githubPortfolio} alt="githubportfolio" />
          </div>
          <div className='portfolio__description'>
            <h3>Rent a Plant</h3>
            <p>Litle website created in Le Wagon, it does not have fancy thing
              but it does have the links to my social media.
              This website is a reminder of how I start with the litle page on github profiles!       </p>

            <a href='https://sergiopizarro.github.io/profile/' className='btn btn-primary' target='blank'>Try it yourself</a>

          </div>
        </article>


      </div>
    </section>
  )
}

export default Portfolio

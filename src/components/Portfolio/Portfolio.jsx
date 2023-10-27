import React from 'react'
import './portfolio.css'
import img1 from '../../assets/stackoverflow.jpg'
import img2 from '../../assets/todo.jpg'
import img3 from '../../assets/airbnb.jpg'
import img4 from '../../assets/travel.jpg'
import img5 from '../../assets/spotify.png'
import img6 from '../../assets/portfolio6.jpg'
const data = [
  {
    id: 1,
    image: img1,
    title: 'Stackoverflow clone',
    github: 'https://github.com/hixmanshu00/stackoverflow-clone',
    demo: 'https://stackoverflow-clone-him.netlify.app'
  },
  {
    id: 2,
    image: img2,
    title: 'Mern Todo App',
    github: 'https://github.com/hixmanshu00/todo-frontend',
    demo: 'https://him-todo-app.netlify.app'
  },
  {
    id: 3,
    image: img3,
    title: 'Airbnb clone',
    github: 'https://github.com/hixmanshu00/airbnb-landing-page-clone',
    demo: 'https://aibnb-landing-page-clone.netlify.app/'
  },
  {
    id: 4,
    image: img4,
    title: 'Travel Website',
    github: 'https://github.com/hixmanshu00/react-travel-website',
    demo: 'him-travel.netlify.app'
  },
  {
    id: 5,
    image: img5,
    title: 'Spotify Premiuim Design',
    github: 'https://github.com/hixmanshu00/spotify-premium-page-clone',
    demo: 'https://flourishing-dieffenbachia-cd028c.netlify.app'
  },
  {
    id: 6,
    image: img6,
    title: 'Store API',
    github: 'https://github.com/hixmanshu00/store-api',
    demo: 'https://github.com/hixmanshu00/store-api'
  },
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
      {
        data.map(({id,image,title,github,demo})=> (
          <article className="portfolio-item" key={id}>
          <div className="portfolio-item-image">
          <img src={image} alt={title} />
          </div>
            <h3>{title}</h3>
            <div className="portfolio-item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        ))
      }
      </div>
    </section>
  )
}

export default Portfolio

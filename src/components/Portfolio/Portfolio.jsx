import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'
const data = [
  {
    id: 1,
    image: img1,
    title: 'Project 1',
    github: 'https://github.com/hixmanshu00',
    demo: ''
  },
  {
    id: 2,
    image: img2,
    title: 'Project 2',
    github: 'https://github.com/hixmanshu00',
    demo: ''
  },
  {
    id: 3,
    image: img3,
    title: 'Project 3',
    github: 'https://github.com/hixmanshu00',
    demo: ''
  },
  {
    id: 4,
    image: img4,
    title: 'Project 4',
    github: 'https://github.com/hixmanshu00',
    demo: ''
  },
  {
    id: 5,
    image: img5,
    title: 'Project 5',
    github: 'https://github.com/hixmanshu00',
    demo: ''
  },
  {
    id: 6,
    image: img6,
    title: 'Project 6',
    github: 'https://github.com/hixmanshu00',
    demo: ''
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

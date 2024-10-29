import React from 'react'
import './about.css'
import mari  from '../../assets/mari.jpg'
import yvann  from '../../assets/yvann.jpg'
import mona  from '../../assets/mona.png'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='main-content'>
      <div className='about-title'>
        <h1>This is the About Page</h1>
        <h2>About the team members:</h2>
      </div>
      <div className='info'>

        <p>Who we are:</p>
        <div className='image-section'>

          <div className='profile-picture'>
            <Link to='https://github.com/mavictorino'>
              <img src={mari} alt='mari' />
            </Link>

            <div className='profile-picture'>
              <Link to='https://github.com/YvannGuy'>
                <img src={yvann} alt='yvann' />
              </Link>
            </div>

          </div>
        </div>

        <div className='profile-picture'>
          <Link to='https://github.com/monaeslah'><img src={mona} alt='mona' /></Link>
        </div>


        <p>3xHere goes LinkedIn link</p>

      </div>
    </div>
  )
}

export default About

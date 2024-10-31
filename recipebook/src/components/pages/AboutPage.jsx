import React from 'react'
import './about.css'
import mari from '../../assets/mari.jpg'
import yvann from '../../assets/yvann.jpg'
import mona from '../../assets/mona.png'
import { Link } from 'react-router-dom'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

function About () {
  return (
    <div className='main-content'>
      <div className='info'>
        <h2>ABOUT THE TEAM MEMBERS</h2>

        <p>
          Meet three dedicated web development students from a Bootcamp, each
          eager to master the skills and concepts of building dynamic,
          user-focused applications. Together, they’re navigating the challenges
          and triumphs of learning front-end and back-end technologies,
          experimenting with various tools, and practicing collaborative
          problem-solving. They’re working hard to create fully functional web
          applications, bringing creative ideas to life while building a solid
          foundation in coding principles, design, and data management. As a
          team, they support each other through complex projects, share
          knowledge, and motivate each other to push the limits of what they can
          achieve in development.
        </p>
        <div className='image-section'>
          <div className='profile-picture'>
            <img src={mari} alt='mari' />
            <div>
              <Link to='https://www.linkedin.com/in/mariana-victorino/'>
                {' '}
                <LinkedInIcon />
              </Link>
              <Link to='https://github.com/mavictorino'>
                <GitHubIcon />{' '}
              </Link>
            </div>
          </div>

          <div className='profile-picture'>
            <img src={yvann} alt='yvann' />
            <div>
              <Link to='https://www.linkedin.com/in/yvann-guyonnet-5b1327107/<<'>
                {' '}
                <LinkedInIcon />
              </Link>
              <Link to='https://github.com/YvannGuy'>
                <GitHubIcon />{' '}
              </Link>
            </div>
          </div>
          <div className='profile-picture'>
            <img src={mona} alt='mona' />
            <div>
              <Link to='https://www.linkedin.com/in/monaeslah/'>
                {' '}
                <LinkedInIcon />
              </Link>
              <Link to='https://github.com/monaeslah'>
                <GitHubIcon />{' '}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

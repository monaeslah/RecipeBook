import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-links'>
        <li>
          <Link to='/'>My Recipes</Link>
        </li>
        <li>
          <Link to='/add-recipe'>Add new recipe</Link>
        </li>
        <li>
          <Link to='/about'>About Us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

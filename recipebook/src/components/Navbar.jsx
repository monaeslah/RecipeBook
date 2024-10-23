import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-links'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/my-recipes'>My Recipes</a>
        </li>
        <li>
          <a href='/new-recipe'>Add new recipe</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

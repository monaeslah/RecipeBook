import React, { useState } from 'react'
import '../App.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);   

  return ( 
    <nav>
      <Link to="/" className='title'>Recipes Book</Link>
      <div className='menu' onClick={() => (
        setMenuOpen(!menuOpen)
      )} >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
       
        <li>
          <NavLink to="/" >My Recipes</NavLink>
          </li>
        <li>
          <NavLink to="/add-recipe">Add New Recipe</NavLink>
          </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
          </li>
      </ul>
    </nav>
  )
}

export default Navbar

import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div id='sidebar'>
      <Link to='/'>
        {' '}
        <p className='sidebar-prop'>My Recipes</p>
      </Link>

      <p className='sidebar-prop'>Add new recipe</p>
      <p className='sidebar-prop'>About Us</p>
    </div>
  )
}
export default Sidebar

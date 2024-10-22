import { useState } from 'react'
import './app.css'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'

function App () {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Footer />
    </>
  )
}

export default App

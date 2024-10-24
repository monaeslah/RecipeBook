import './app.css'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import List from './components/List.jsx'
import NotFound from './components/NotFound.jsx'
import { Routes, Route } from 'react-router-dom'
import About from './components/AboutPage.jsx'
import Detail from './components/detail.jsx'

function App () {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/about' element={<About />} />
        <Route path='/recipe/:recipeId' element={<Detail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App

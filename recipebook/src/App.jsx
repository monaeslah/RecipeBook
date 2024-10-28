import React, { useState } from 'react'
import recipes from './assets/recipes.json'
import './app.css'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import List from './components/List.jsx'
import NotFound from './components/NotFound.jsx'
import { Routes, Route } from 'react-router-dom'
import About from './components/AboutPage.jsx'
import Detail from './components/detail.jsx'
import AddRecipe from './components/AddRecipe.jsx'

function App () {
  const [list, setList] = useState(recipes)
  const recipeDelete = id => {
    let updateRecipes = list.filter(recipe => recipe.id !== id)
    setList(updateRecipes)
  }
  const createRecipe = newFood => {
    console.log(newFood)
    const recipeId = list.map(item => item.id)
    const maxId = Math.max(...recipeId)
    const newId = maxId + 1
    const newRecipe = {
      ...newFood,
      id: newId
    }
    const newItemFood = [newRecipe, ...list]
    setList(newItemFood)
  }
  const upDateRecipe = updatedFood => {
    console.log(updatedFood)
  }
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route
          path='/'
          element={
            <List
              list={list}
              recipeDelete={recipeDelete}
              upDateRecipe={upDateRecipe}
            />
          }
        />
        <Route path='/about' element={<About />} />
        <Route path='/recipe/:recipeId' element={<Detail />} />
        <Route
          path='/add-recipe'
          element={<AddRecipe createRecipe={createRecipe} />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App

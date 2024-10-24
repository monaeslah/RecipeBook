import React, { useState } from 'react'
import ImageRender from './ImageRender'
import recipes from '../assets/recipes.json'
import './list.css'
import DeleteButton from './DeleteButton'
import CaloriesRender from './CaloriesRender'
import { Link } from 'react-router-dom'
function List () {
  const [list, setList] = useState(recipes)

  const recipeDelete = id => {
    let updateRecipes = list.filter(recipe => recipe.id !== id)
    setList(updateRecipes)
  }

  return (
    <div>
      {list.map(recipe => {
        return (
          <div className='card' key={recipe.id}>
            <ImageRender image={recipe.image} alt='' />
            <div className='descrition-frame'>
              <CaloriesRender calories={recipe.calories} alt='' />

              <DeleteButton calltoBackDelet={() => recipeDelete(recipe.id)} />
            </div>
            <Link to={`./recipe/${recipe.id}`} className='detail-btn'>
              Go to detail
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default List

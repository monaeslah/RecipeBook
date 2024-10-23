import React, { useState } from 'react'

import recipes from '../assets/recipes.json'
import './list.css'
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
          <div key={recipe.id} className='card'>
            <div className='image-frame'>
              <img src={recipe.image} alt='' />
            </div>
            <div className='descrition-frame'>
              <h3>{recipe.name}</h3>
              <p>{recipe.calories}</p>
              {recipe.calories < 200 ? (
                <button className='low-calories'>low</button>
              ) : (
                <button className='high-calories'>high</button>
              )}
              <button onClick={() => recipeDelete(recipe.id)}>Delete</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default List

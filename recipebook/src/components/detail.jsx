import React from 'react'
import { Link, useParams } from 'react-router-dom'
import recipes from '../assets/recipes.json'
const ItemDetails = props => {
  const { recipeId } = useParams()
  console.log('recipeId', props)
  const recipeDetail = recipes.find(recipe => recipe.id === recipeId)

  return (
    <div>
      <div className='card'>
        <div className='image-frame'>
          <img src={recipeDetail.image} alt='' />
        </div>
        <div className='descrition-frame'>
          <h3>{recipeDetail.name}</h3>
          <p>{recipeDetail.calories}</p>
          {recipeDetail.calories < 200 ? (
            <button className='low-calories'>low</button>
          ) : (
            <button className='high-calories'>high</button>
          )}
        </div>
        <Link to='/'>Back</Link>
      </div>
    </div>
  )
}

export default ItemDetails

import React from 'react'
import { Link, useParams } from 'react-router-dom'
import recipes from '../assets/recipes.json'
import './list.css'
import EditNoteIcon from '@mui/icons-material/EditNote'
const ItemDetails = props => {
  const { recipeId } = useParams()

  const recipeDetail = recipes.find(recipe => recipe.id === recipeId)

  return (
    <div className='details'>
      <div className='input-wrap'>
        <Link to={`/recipe/edit/${recipeId}`}>
          <EditNoteIcon color='success' />
        </Link>
        <div className='image-frame'>
          <img src={recipeDetail.image} alt={recipeDetail.name} />
        </div>

        <div className='details-description'>
          <p>
            Food Name
            <br />
            {recipeDetail.name}
          </p>

          <p>
            Food Calories <br />
            {recipeDetail.calories}
          </p>

          <p>
            Serving <br />
            {recipeDetail.servings}
          </p>
        </div>

        {/* <input
            type='button'
            value='Submit'
            onClick={onEdit}
            className='edit-submited'
          /> */}
      </div>
    </div>
  )
}

export default ItemDetails

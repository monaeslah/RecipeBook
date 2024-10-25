import React, { useState } from 'react'
import ImageRender from './ImageRender'
import recipes from '../assets/recipes.json'
import './list.css'
import DeleteButton from './DeleteButton'
import CaloriesRender from './CaloriesRender'
import { Link } from 'react-router-dom'
function List (props) {
  const [active, setActive] = useState(false)
  const setOne = () => {
    setActive(true)
  }
  return (
    <div>
      {props.list.map(recipe => {
        return (
          <div className='card' key={recipe.id}>
            <ImageRender image={recipe.image} alt='' />
            <div className='descrition-frame'>
              <CaloriesRender calories={recipe.calories} alt='' />
              {active && <input name='name' placeholder={recipe.name} />}
              <DeleteButton
                calltoBackDelet={() => props.recipeDelete(recipe.id)}
              />
            </div>
            <Link to={`./recipe/${recipe.id}`} className='detail-btn'>
              Go to detail
            </Link>
            <button onClick={setOne}>Edite</button>
          </div>
        )
      })}
    </div>
  )
}

export default List

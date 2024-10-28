import React, { useState } from 'react'
import ImageRender from './ImageRender'
import recipes from '../assets/recipes.json'
import './list.css'
import DeleteButton from './DeleteButton'
import CaloriesRender from './CaloriesRender'
import { Link } from 'react-router-dom'
function List (props) {
  const [editingId, setEditingId] = useState(null)
  const [active, setActive] = useState(false)
  const [editedName, setEditedName] = useState('')
  const [editedCalories, setEditedCalories] = useState('')
  const [editedServings, setEditedServings] = useState('')
  const [editedImage, setEditedImage] = useState('')

  const setEdit = recipe => {
    setActive(true)
    setEditingId(recipe.id)
    setEditedName(recipe.name)
    setEditedCalories(recipe.calories)
    setEditedServings(recipe.servings)
    setEditedImage(recipe.image)
  }
  const sendEdit = () => {
    const editedFood = {
      id: editingId,
      name: editedName,
      calories: editedCalories,
      image: editedImage,
      servings: editedServings
    }
    props.upDateRecipe(editedFood)
    setActive(false)
    setEditingId(null)
  }
  return (
    <div>
      {props.list.map(recipe => {
        return (
          <div className='card' key={recipe.id}>
            <ImageRender image={recipe.image} alt='' />
            <div className='descrition-frame'>
              <h3>{recipe.name}</h3>
              <CaloriesRender calories={recipe.calories} alt='' />

              {active && editingId === recipe.id ? (
                <>
                  <input
                    name='name'
                    placeholder={recipe.name}
                    value={editedName}
                    onChange={e => setEditedName(e.target.value)}
                  />
                  <input
                    type='number'
                    name='calories'
                    placeholder={recipe.calories}
                    value={editedCalories}
                    onChange={e => setEditedCalories(e.target.value)}
                  />
                  <input
                    type='text'
                    name='image'
                    placeholder={recipe.image}
                    value={editedImage}
                    onChange={e => setEditedImage(e.target.value)}
                  />
                  <input
                    type='number'
                    name='servings'
                    placeholder={recipe.servings}
                    value={editedServings}
                    onChange={e => setEditedServings(e.target.value)}
                  />

                  <button onClick={sendEdit}>submit</button>
                </>
              ) : (
                <button onClick={() => setEdit(recipe)}>Edite</button>
              )}
              <br />
              <DeleteButton
                calltoBackDelet={() => props.recipeDelete(recipe.id)}
              />
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

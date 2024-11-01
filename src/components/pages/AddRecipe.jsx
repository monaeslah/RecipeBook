import React, { useState } from 'react'
import './addRecipe.css'
import { useNavigate } from 'react-router-dom'
const AddRecipe = props => {
  const [name, setName] = useState('')
  const [calories, setCalories] = useState('')
  const [image, setImage] = useState('')
  const [servings, setServings] = useState('')
  const navigate = useNavigate()
  const handleSubmit = e => {
    e.preventDefault()
    const newFood = {
      name: name,
      calories: calories,
      image: image,
      servings: servings
    }
    props.createRecipe(newFood)

    setName('')
    setCalories('')
    setImage('')
    setServings('')
    navigate('/')
  }
  return (
    <div className='add-recipe'>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          className='recipetwo'
          type='text'
          name='name'
          placeholder='food name'
          value={name}
          required={true}
          onChange={e => setName(e.target.value)}
        />{' '}
        <label>Calories </label>
        <input
          type='number'
          name='calories'
          placeholder='food calories '
          value={calories}
          required={true}
          onChange={e => setCalories(e.target.value)}
        />{' '}
        <label>Image URL: </label>
        <input
          type='text'
          name='image'
          placeholder='food image '
          value={image}
          required={true}
          onChange={e => setImage(e.target.value)}
        />
        <label>Food Serving: </label>
        <input
          type='number'
          name='servings'
          placeholder='food servings '
          value={servings}
          required={true}
          onChange={e => setServings(e.target.value)}
        />
        <input type='submit' value='Create' className='create-btn' />
      </form>
    </div>
  )
}
export default AddRecipe

import React, { useState } from 'react'

const AddRecipe = props => {
  const [name, setName] = useState('')
  const [calories, setCalories] = useState('')
  const [image, setImage] = useState('')
  const [servings, setServings] = useState('')

  const handleSubmit = e => {
    console.log('you clicked submit')
    e.preventDefault()
    const newFood = {
      name: name,
      calories: calories,
      image: image,
      servings: servings
    }
    props.createRecipe(newFood)
    console.log(newFood)
    setName('')
    setCalories('')
    setImage('')
    setServings('')
  }
  return (
    <div className='add-recipe'>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            name='name'
            placeholder='food name'
            value={name}
            required={true}
            onChange={e => setName(e.target.value)}
          />{' '}
        </label>
        <label>
          Calories
          <input
            type='number'
            name='calories'
            placeholder='food calories '
            value={calories}
            required={true}
            onChange={e => setCalories(e.target.value)}
          />{' '}
        </label>
        <label>
          Image URL:
          <input
            type='text'
            name='image'
            placeholder='food image '
            value={image}
            required={true}
            onChange={e => setImage(e.target.value)}
          />
        </label>
        <input
          type='number'
          name='servings'
          placeholder='food servings '
          value={servings}
          required={true}
          onChange={e => setServings(e.target.value)}
        />
        <button>Create</button>
      </form>
    </div>
  )
}
export default AddRecipe

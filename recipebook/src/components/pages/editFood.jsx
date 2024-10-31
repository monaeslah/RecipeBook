import React, { useEffect, useState } from 'react'
import './addRecipe.css'
import { useParams } from 'react-router-dom'
import recipes from '../../assets/recipes.json'
const EditFood = ({
  placeholder,
  caloriesPlaceholder,
  servingsPlaceholder,
  imagePlaceholder,
  onNameChange,
  onCaloriesChange,
  onServingsChange,
  onImageChange
}) => {
  const { recipeId } = useParams()

  const recipeDetail = recipes.find(recipe => recipe.id === recipeId)

  //   const [name, setName] = useState('')
  //   const [calories, setCalories] = useState('')
  //   const [image, setImage] = useState('')
  //   const [servings, setServings] = useState('')
  useEffect(() => {
    console.log('you clicked submit')
  }, [])
  const handleSubmit = e => {
    console.log('you clicked submit')
    e.preventDefault()
    // const newFood = {
    //   name: name,
    //   calories: calories,
    //   image: image,
    //   servings: servings
    // }
    // props.createRecipe(newFood)
    // console.log(newFood)
    // setName('')
    // setCalories('')
    // setImage('')
    // setServings('')
  }
  return (
    <div className='add-recipe'>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name='name' placeholder={placeholder} onChange={onNameChange} />
        <label>Calories </label>
        <input
          type='number'
          name='calories'
          placeholder='food calories '
          value={'calories'}
          required={true}
          //   onChange={e => setCalories(e.target.value)}
        />{' '}
        {/* <label>Image URL: </label>
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
        /> */}
        <input type='button' value='Create' className='create-btn' />
      </form>
    </div>
  )
}
export default EditFood

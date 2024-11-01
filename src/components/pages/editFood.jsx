import { useState } from 'react'
import './addRecipe.css'
import { useParams, useNavigate } from 'react-router-dom'
import recipes from '../../assets/recipes.json'
const EditFood = props => {
  const { recipeId } = useParams()
  const navigate = useNavigate()
  const recipeDetail = recipes.find(recipe => recipe.id === recipeId)

  const [name, setName] = useState(recipeDetail.name)
  const [calories, setCalories] = useState(recipeDetail.calories)
  const [image, setImage] = useState(recipeDetail.image)
  const [servings, setServings] = useState(recipeDetail.servings)

  const handleSubmit = e => {
    e.preventDefault()
    const upDatedFood = {
      name: name,
      calories: calories,
      image: image,
      servings: servings
    }
    props.upDateRecipe(upDatedFood)

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
          name='name'
          placeholder={name}
          onChange={e => setName(e.target.value)}
          value={name}
        />
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
        />{' '}
        <input type='submit' value='Update Food' className='create-btn' />
      </form>
    </div>
  )
}
export default EditFood

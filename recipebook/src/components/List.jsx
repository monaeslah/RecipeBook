import Card from './Card'
import { useState } from 'react'
import CaloriesRender from './CaloriesRender'

function List ({ list, recipeDelete }) {
  const [calorieFilter, setCalorieFilter] = useState('all')

  // Filtered list based on selected calorie range
  const filteredList = list.filter(recipe => {
    if (calorieFilter === 'low') return recipe.calories < 200
    if (calorieFilter === 'medium')
      return recipe.calories >= 200 && recipe.calories <= 400
    if (calorieFilter === 'high') return recipe.calories > 400
    return true // 'all' option, no filtering
  })

  return (
    <div>
      <div className='filter-controls'>
        <select
          value={calorieFilter}
          onChange={e => setCalorieFilter(e.target.value)}
        >
          <option value='all'>Filter by Calories:</option>
          <option value='low'>Low Calories (&lt; 200)</option>
          <option value='medium'>Medium Calories (200-400)</option>
          <option value='high'>High Calories (&gt; 400)</option>
        </select>
      </div>

      <div className='card-container'>
        {filteredList.length > 0 ? (
          filteredList.map(recipe => (
            <Card
              key={recipe.id}
              imgSrc={recipe.image}
              imgAlt={`Image of ${recipe.name}`}
              title={recipe.name}
              description={<CaloriesRender calories={recipe.calories} />}
              onDelete={() => recipeDelete(recipe.id)}
              id={recipe.id}
            />
          ))
        ) : (
          <p>No recipes match this calorie range.</p>
        )}
      </div>
    </div>
  )
}

export default List

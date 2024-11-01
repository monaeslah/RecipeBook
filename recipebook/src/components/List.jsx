import Card from './Card'
import CaloriesRender from './CaloriesRender'

function List ({ list, recipeDelete }) {
  return (
    <div className='card-container'>
      {list &&
        list.map(recipe => (
          <Card
            key={recipe.id}
            imgSrc={recipe.image}
            imgAlt={`Image of ${recipe.name}`}
            title={recipe.name}
            description={<CaloriesRender calories={recipe.calories} />}
            buttonText='Edit'
            onDelete={() => recipeDelete(recipe.id)}
            id={recipe.id}
          />
        ))}
    </div>
  )
}

export default List

import React from 'react'

const CaloriesRender = ({ calories }) => {
  return (
    <div className='calories'>
      <p>
        {calories} <p>Calories</p>
      </p>
      {calories < 200 ? (
        <button className='btn-low-calories'>Low Calories</button>
      ) : calories <= 400 ? (
        <button className='btn-medium-calories'>Medium Calories</button>
      ) : (
        <button className='btn-high-calories'>High Calories</button>
      )}
    </div>
  )
}

export default CaloriesRender

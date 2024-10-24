import React from 'react'

const CaloriesRender = ({ calories }) => {
  return (
    <div>
      <h3>{calories.name}</h3>
      <p>{calories}</p>
      {calories < 200 ? (
        <button className='low-calories'>low</button>
      ) : (
        <button className='high-calories'>high</button>
      )}
    </div>
  )
}

export default CaloriesRender

import React from 'react'

const CaloriesRender = ({ calories }) => {
  console.log(calories)
  return (
    <div>
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

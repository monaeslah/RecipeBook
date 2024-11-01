import React from 'react'

function DeleteButton (props) {
  return <button onClick={() => props.calltoBackDelet(props.id)}>Delete</button>
}

export default DeleteButton

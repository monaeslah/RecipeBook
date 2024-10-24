import React from 'react'

const ImageRender = ({ image }) => {
  return (
    <div className='image-frame'>
      <img src={image} alt='' />
    </div>
  )
}
export default ImageRender

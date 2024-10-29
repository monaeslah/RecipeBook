import './Card.css'

export const Card = ({
  imgSrc,
  imgAlt = 'card image',
  title = 'Card Title',
  description = 'This is the card description',
  buttonText = 'See more details',
  onDelete,
  onEdit,
  editMode = false,
  placeholder,
  caloriesPlaceholder,
  servingsPlaceholder,
  imagePlaceholder,
  onNameChange,
  onCaloriesChange,
  onServingsChange,
  onImageChange
}) => {
  return (
    <div className='card-area'>
      <div className='card-box'>
        <div className='image-border'>
          {' '}
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <h1 className='card-title'>{title}</h1>
        <p className='card-description'>{description}</p>
        <div className='btn-controler'>
          {editMode ? (
            <>
              <input
                name='name'
                placeholder={placeholder}
                onChange={onNameChange}
              />
              <input
                name='calories'
                placeholder={caloriesPlaceholder}
                onChange={onCaloriesChange}
              />
              <input
                name='servings'
                placeholder={servingsPlaceholder}
                onChange={onServingsChange}
              />
              <input
                name='image'
                placeholder={imagePlaceholder}
                onChange={onImageChange}
              />
              <button onClick={onEdit}>Submit</button>
            </>
          ) : (
            <button className='detail-btn' onClick={onEdit}>
              {buttonText}
            </button>
          )}

          <button className='delete-btn' onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card

import './Card.css'
import DeleteIcon from '@mui/icons-material/Delete'
import EditNoteIcon from '@mui/icons-material/EditNote'
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
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <h1 className='card-title'>{title}</h1>
        <p className='card-description'>{description}</p>
        <div className='btn-controler'>
          {editMode ? (
            <>
              <div className='input-wrap'>
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
                <input
                  type='button'
                  value='Submit'
                  onClick={onEdit}
                  className='edit-submited'
                />
              </div>
            </>
          ) : (
            <EditNoteIcon onClick={onEdit} />
          )}

          <DeleteIcon onClick={onDelete} />
        </div>
      </div>
    </div>
  )
}

export default Card

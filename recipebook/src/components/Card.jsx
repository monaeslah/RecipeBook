import './Card.css'
import DeleteIcon from '@mui/icons-material/Delete'
import EditNoteIcon from '@mui/icons-material/EditNote'
import { Link } from 'react-router-dom'
export const Card = ({ imgSrc, imgAlt, title, description, onDelete, id }) => {
  return (
    <div className='card-area'>
      <div className='card-box'>
        <div className='image-border'>
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <Link className='card-title' to={`/recipe/${id}`}>
          <h3>{title}</h3>
        </Link>
        <p className='card-description'>{description}</p>
        <div className='btn-controler'>
          <Link to={`/recipe/edit/${id}`}>
            <EditNoteIcon />
          </Link>

          <DeleteIcon onClick={onDelete} />
        </div>
      </div>
    </div>
  )
}

export default Card

import { Link } from 'react-router-dom'

const AddComicButton: React.FC = () => {
  return (
    <Link to="AddComicForm">
      <button className="add-button with-icon">
        Add Comic
        {/* <i className="fas fa-plus"></i> */}
      </button>
    </Link>
  )
}

export default AddComicButton

import { Link } from 'react-router-dom'

const AddComicButton: React.FC = () => {
  return (
    <Link to="AddComicForm">
      <button className="add-button">Add Comic</button>
    </Link>
  )
}

export default AddComicButton

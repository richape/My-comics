import { useNavigate } from 'react-router-dom'
import { useComics } from '../hooks/useComics'

type DeleteButtonParams = { id: number }

const DeleteButton = ({ id }: DeleteButtonParams) => {
  const comic = useComics()
  const navigate = useNavigate()
  const handleDelete = async () => {
    comic.delete.mutate(id)
    navigate('/')
  }

  return (
    <>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </>
  )
}

export default DeleteButton

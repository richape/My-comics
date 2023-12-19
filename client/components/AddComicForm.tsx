// import { useMutation, useQueryClient } from '@tanstack/react-query'
// import { addComic } from '../apis/comics'
import Nav from './Nav'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { addComic } from '../apis/comics'
import { useMutation } from '@tanstack/react-query'

const AddComicForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const navigate = useNavigate()

  const comicMutation = useMutation(addComic, {
    onSuccess: () => navigate('/'),
  })

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget as HTMLFormElement)

    const newComicData = {
      title: form.get('title')?.toString() || '',
      name: form.get('name')?.toString() || '',
      issue: form.get('issue')?.toString() || '',
      datePublished: form.get('datePublished')?.toString() || '',
      publisher: form.get('publisher')?.toString() || '',
      credits: form.get('credits')?.toString() || '',
      coverArt: 'images/comic_placeholder.jpg',
      coverArtist: form.get('coverArtist')?.toString() || '',
    }
    // hahaha
    console.log(newComicData)

    if (newComicData) {
      comicMutation.mutate(newComicData)
      formRef.current?.reset()
    }
  }

  return (
    <div className="container">
      <Nav />
      <div className="add-comic">
        <h1>Add Comic</h1>
        <form
          onSubmit={handleFormSubmit}
          encType="multipart/form-data"
          ref={formRef}
        >
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="issue">Issue:</label>
            <input type="text" id="issue" name="issue" />
          </div>
          <div className="form-group">
            <label htmlFor="datePublished">Date Published:</label>
            <input type="text" id="datePublished" name="datePublished" />
          </div>
          <div className="form-group">
            <label htmlFor="publisher">Publisher:</label>
            <input type="text" id="publisher" name="publisher" />
          </div>
          <div className="form-group">
            <label htmlFor="credits">Credits:</label>
            <input type="text" id="credits" name="credits" />
          </div>
          {/* <div className="form-group">
            <label htmlFor="coverArt">Cover Art:</label>
            <input type="file" id="coverArt" name="coverArt" accept="image/" />
          </div> */}
          <div className="form-group">
            <label htmlFor="coverArtist">Cover Artist:</label>
            <input type="text" id="coverArtist" name="coverArtist" />
          </div>
          {/* {comicData.coverArt ? (
            <div className="form-group">
              <img
                src={URL.createObjectURL(comicData.coverArt)}
                alt="Cover Art"
              />
            </div>
          ) : null} */}
          <button type="submit" className="add-button">
            Add Comic
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddComicForm

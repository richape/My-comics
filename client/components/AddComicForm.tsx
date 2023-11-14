import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addComic } from '../apis/comics'
import Nav from './Nav'
import { ComicData } from '../../models/comics'
import { useRef, useState } from 'react'

const AddComicForm: React.FC = () => {
  const queryClient = useQueryClient()
  const mutation = useMutation((comicData: ComicData) => addComic(comicData), {
    onSuccess: () => {
      queryClient.invalidateQueries(['addComic'])
      formRef.current?.reset()
    },
  })

  const [comicData, setComicData] = useState<ComicData>({
    title: '',
    name: '',
    issue: '',
    datePublished: '',
    publisher: '',
    credits: '',
    coverArt: null,
    coverArtist: '',
  })

  const formRef = useRef<HTMLFormElement>(null)

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget as HTMLFormElement)

    const coverArtInput = form.get('coverArt') as File
    if (coverArtInput) {
      setComicData({
        title: form.get('title')?.toString() || '',
        name: form.get('name')?.toString() || '',
        issue: form.get('issue')?.toString() || '',
        datePublished: form.get('datePublished')?.toString() || '',
        publisher: form.get('publisher')?.toString() || '',
        credits: form.get('credits')?.toString() || '',
        coverArt: coverArtInput,
        coverArtist: form.get('coverArtist')?.toString() || '',
      })
    }

    mutation.mutate(comicData)
  }

  return (
    <div className="container">
      <Nav />
      <div className="add-comic">
        <h2>Add Comic</h2>
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
          <div className="form-group">
            <label htmlFor="coverArt">Cover Art:</label>
            <input type="file" id="coverArt" name="coverArt" accept="image/" />
          </div>
          <div className="form-group">
            <label htmlFor="coverArtist">Cover Artist:</label>
            <input type="text" id="coverArtist" name="coverArtist" />
          </div>
          {comicData.coverArt ? (
            <div className="form-group">
              <img
                src={URL.createObjectURL(comicData.coverArt)}
                alt="Cover Art"
              />
            </div>
          ) : null}
          <button type="submit" className="add-button">
            Add Comic
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddComicForm

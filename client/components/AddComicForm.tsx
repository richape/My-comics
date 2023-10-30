import { useState } from 'react'

const AddComicForm: React.FC = () => {
  const [comic, setComic] = useState<{
    title: string
    name: string
    issue: string
    datePublished: string
    publisher: string
    credits: string
    coverArt: File | null //use null to store the image upload
    coverArtist: string
  }>({
    title: '',
    name: '',
    issue: '',
    datePublished: '',
    publisher: '',
    credits: '',
    coverArt: null,
    coverArtist: '',
  })

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setComic({ ...comic, [name]: value })
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null
    setComic({ ...comic, coverArt: file })
  }

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('title', comic.title)
    formData.append('name', comic.name)
    formData.append('issue', comic.issue)
    formData.append('datePublished', comic.datePublished)
    formData.append('publisher', comic.publisher)
    formData.append('credits', comic.title)
    formData.append('coverArtist', comic.coverArtist)
    if (comic.coverArt) {
      formData.append('coverArt', comic.coverArt)
    }

    try {
      const response = await fetch('/api/add-comic', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        // If comic is added successfully the form will reset.
        setComic({
          title: '',
          name: '',
          issue: '',
          datePublished: '',
          publisher: '',
          credits: '',
          coverArt: null,
          coverArtist: '',
        })
      } else {
        console.error('Failed to add comic')
      }
    } catch (error) {
      console.error('Error adding comic:', error)
    }
  }

  return (
    <div className="container">
      <div className="add-comic">
        <h2>Add Comic</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={comic.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={comic.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="issue">Issue:</label>
            <input
              type="text"
              id="issue"
              name="issue"
              value={comic.issue}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="datePublished">Date Published:</label>
            <input
              type="text"
              id="datePublished"
              name="datePublished"
              value={comic.datePublished}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="publisher">Publisher:</label>
            <input
              type="text"
              id="publisher"
              name="publisher"
              value={comic.publisher}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="credits">Credits:</label>
            <input
              type="text"
              id="credits"
              name="credits"
              value={comic.credits}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="coverArt">Cover Art:</label>
            <input
              type="file"
              id="coverArt"
              name="coverArt"
              accept="image/"
              onChange={handleFileChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="coverArtist">Cover Artist:</label>
            <input
              type="text"
              id="coverArtist"
              name="coverArtist"
              value={comic.coverArtist}
              onChange={handleInputChange}
            />
          </div>
          {comic.coverArt ? (
            <div className="form-group">
              <img src={URL.createObjectURL(comic.coverArt)} alt="Cover Art" />
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

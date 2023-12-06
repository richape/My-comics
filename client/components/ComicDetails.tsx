import { useComics } from '../hooks/useComics.ts'
import { useParams } from 'react-router-dom'
import CoverArt from './CoverArt.tsx'
import Nav from './Nav.tsx'
import Footer from './Footer.tsx'
import DeleteButton from './DeleteButton.tsx'

function ComicDetails() {
  const { data, error, isLoading } = useComics()
  // console.log(data)

  const { id } = useParams()
  // console.log(id)

  const findComic = data?.find((comic) => comic.id === Number(id))
  // console.log(findComic)

  return (
    <div className="container">
      <div>
        <Nav />
      </div>
      <div className="comic-box">
        {isLoading ? (
          <h3>Hmmmm Where are all my Comics?</h3>
        ) : error ? (
          <h3>Can not find my Comics?</h3>
        ) : findComic ? (
          <>
            <h2>{findComic.name}</h2>
            <h2>{findComic.title}</h2>
            <h4>Issue: {findComic.issue}</h4>
            <h4>Date published: {findComic.datePublished}</h4>
            <h4>Published by: {findComic.publisher}</h4>
            <h4>Writers: {findComic.credits}</h4>
            <h4>Cover Artist: {findComic.coverArtist}</h4>
            <DeleteButton id={Number(id)} />
          </>
        ) : null}
      </div>
      {findComic && <CoverArt comic={findComic} />}
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default ComicDetails

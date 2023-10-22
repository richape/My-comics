import { Comic } from '../../models/comics.tsx'

interface Props {
  comic: Comic
}

export function ComicDetails(props: Props) {
  const { comic } = props
  // const comicId = comic.id

  return (
    <>
      <div className="comic-box">
        <h2>{comic.title}</h2>
        <h3>{comic.name}</h3>
        <h4>{comic.issue}</h4>
        <h4>{comic.datePublished}</h4>
        <h3>{comic.publisher}</h3>
        <h3>{comic.credits}</h3>
      </div>
    </>
  )
}

export default ComicDetails

// coverArt: string
// coverArtist: string

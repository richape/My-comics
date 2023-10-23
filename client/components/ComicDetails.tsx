import { Comic } from '../../models/comics.ts'

interface Props {
  comic: Comic
}

export function ComicDetails(props: Props) {
  const { comic } = props
  // const comicId = comic.id

  console.log('File path:', comic.coverArt)

  return (
    <>
      <div className="comic-box">
        <img src={comic.coverArt} alt={comic.title} />
        <h2>{comic.title}</h2>
        <h3>{comic.name}</h3>
        <h4>{comic.issue}</h4>
        <h4>{comic.datePublished}</h4>
        <h3>{comic.publisher}</h3>
        <h3>{comic.credits}</h3>
        <h3>{comic.coverArtist}</h3>
      </div>
    </>
  )
}

export default ComicDetails

import { Comic } from '../../models/comics.ts'

interface Props {
  comic: Comic
}

export function ComicDetails(props: Props) {
  const { comic } = props
  // const comicId = comic.id

  console.log('Comic Object:', comic)

  return (
    <>
      <div className="comic-box">
        <img src={comic.coverArt} alt={comic.title} />
        <h2>{comic.name}</h2>
        <h2>{comic.title}</h2>
        <h4>Issue: {comic.issue}</h4>
        <h4>Date published: {comic.datePublished}</h4>
        <h4>Published by: {comic.publisher}</h4>
        <h4>Writers: {comic.credits}</h4>
        <h4>Cover Artist: {comic.coverArtist}</h4>
      </div>
    </>
  )
}

export default ComicDetails

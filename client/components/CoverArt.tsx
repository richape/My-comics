import { Link } from 'react-router-dom'
import { Comic } from '../../models/comics'

interface CoverArtProps {
  comic: Comic
}

const CoverArt: React.FC<CoverArtProps> = ({ comic }) => {
  return (
    <>
      <div className="comic-box">
        <Link to={`/comic/${comic.id}`}>
          <img src={comic.coverArt} alt={comic.title} />
        </Link>
      </div>
    </>
  )
}

export default CoverArt

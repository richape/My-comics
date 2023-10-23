import CoverArt from './CoverArt.tsx'
import ComicDetails from './ComicDetails.tsx'
import { Comic } from '../../models/comics.ts'

const MainDisplay: React.FC<{ comics: Comic[] }> = ({ comics }) => {
  return (
    <div className="main-collection">
      {comics.map((comic) => (
        <div className="comic-item" key={comic.id}>
          <CoverArt comic={comic} />
          <ComicDetails comic={comic} />
        </div>
      ))}
    </div>
  )
}

export default MainDisplay

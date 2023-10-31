import { useComics } from '../hooks/useComics.ts'
import { Link } from 'react-router-dom'
import CoverArt from './CoverArt.tsx'
import Header from './Header.tsx'
import AddComicButton from './AddComicButton.tsx'
import Footer from './Footer.tsx'

function ComicHome() {
  const { data, error, isLoading } = useComics()

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="cover-art">
        {isLoading ? (
          <h3>Hmmmm Where are all my Comics?</h3>
        ) : error ? (
          <h3>Can not find my Comics?</h3>
        ) : data ? (
          data.map((comic, index) => <CoverArt key={index} comic={comic} />)
        ) : null}
        <Link to="/add-comic" className="comic-box">
          Add Comic
        </Link>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}
console.log(AddComicButton)

export default ComicHome

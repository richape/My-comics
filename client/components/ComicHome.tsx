import { useComics } from '../hooks/useComics.ts'
import CoverArt from './CoverArt.tsx'
import Header from './Header.tsx'

function ComicHome() {
  const { data, error, isLoading } = useComics()

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="section">
        {isLoading ? (
          <h3>Hmmmm Where are all my Comics?</h3>
        ) : error ? (
          <h3>Can not find my Comics?</h3>
        ) : data ? (
          data.map((comic, index) => <CoverArt key={index} comic={comic} />)
        ) : null}
      </div>
    </>
  )
}

export default ComicHome

import { useComics } from '../hooks/useComics.ts'
import ComicDetails from './ComicDetails.tsx'

function ComicList() {
  const { data, error, isLoading } = useComics()

  return (
    <>
      <div className="section">
        <div>
          {isLoading ? (
            <h3>Hmmmm Where are all my Comics?</h3>
          ) : error ? (
            <h3>Can not find my Comics?</h3>
          ) : data ? (
            data.map((comic, index) => (
              <ComicDetails key={index} comic={comic} />
            ))
          ) : null}
        </div>
      </div>
    </>
  )
}

export default ComicList

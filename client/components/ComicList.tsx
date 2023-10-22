import { useComics } from '../hooks/useComics.ts'
import ComicDetails from './ComicDetails.tsx'

function ComicList() {
  const { data, error, isLoading } = useComics()

  return (
    <>
      <div className="section">
        <div>
          {isLoading ? (
            <p>Hmmmm Where are all my Comics?</p>
          ) : error ? (
            <p>Can not find my Comics?</p>
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

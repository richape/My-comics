import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <div className="Nav">
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Nav

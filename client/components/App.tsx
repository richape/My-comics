import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function App() {
  return (
    <>
      <div className="app">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App

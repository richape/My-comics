// client-side routing
import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App.tsx'
import ComicHome from './components/ComicHome.tsx'
import ComicDetails from './components/ComicDetails.tsx'
import AddComicForm from './components/AddComicForm.tsx'

export const routes = createRoutesFromElements(
  <Route element={<App />}>
    <Route index element={<ComicHome />} />
    <Route path="comic/:id" element={<ComicDetails />} />
    <Route path="add-comic" element={<AddComicForm />} />
  </Route>
)

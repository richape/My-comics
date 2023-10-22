import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App.tsx'
import ComicList from './components/ComicList.tsx'

export const routes = createRoutesFromElements(
  <Route element={<App />}>
    <Route index element={<ComicList />} />
  </Route>
)

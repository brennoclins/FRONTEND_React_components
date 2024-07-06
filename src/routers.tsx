import { createBrowserRouter } from 'react-router-dom'

import { RubiksCube } from './components/rubiks_cube/rubiks_cube'
import { Components2024Layout } from './pages/_layouts/components_2024_layout'
import { HomePage } from './pages/home_page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Components2024Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/rubiks-cube', element: <RubiksCube /> },
    ],
  },
])

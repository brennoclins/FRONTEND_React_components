import { createBrowserRouter } from 'react-router-dom'

import { LinedPaperSheet } from './components/lined_paper_sheet/lined_paper_sheet'
import { LoaderHeatPulse } from './components/loader_heat_pulse/loader_heat_pulse'
import { LoaderProgressBar } from './components/loader_progress_bar/loader_progress_bar'
import { LoaderSpinner } from './components/loader_spinner/loader_spinner'
import { LoadingScreenCircularLights } from './components/loading_screen_circular_lights/loading_screen_circular_lights'
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
      {
        path: '/loading-screen-circular-lights',
        element: <LoadingScreenCircularLights />,
      },
      { path: '/loader-spinner', element: <LoaderSpinner /> },
      { path: '/loader-progress-bar', element: <LoaderProgressBar /> },
      { path: '/loader_heat_pulse', element: <LoaderHeatPulse /> },
      { path: '/lined_paper_sheet', element: <LinedPaperSheet /> },
    ],
  },
])

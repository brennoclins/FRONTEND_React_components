import { LinedPaperSheet } from './components/lined_paper_sheet/lined_paper_sheet'
import { LoadingScreenCircularLights } from './components/loading_screen_circular_lights/loading_screen_circular_lights'

export function App() {
  return (
    <main>
      <LoadingScreenCircularLights />
      <LinedPaperSheet />
    </main>
  )
}

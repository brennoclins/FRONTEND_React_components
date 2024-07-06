import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <section>
      <h1>Componentes - 2024</h1>
      <ul>
        <li>
          <Link to={'/rubiks-cube'}>Cubo Mágico</Link>
        </li>
      </ul>
    </section>
  )
}

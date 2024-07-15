import { Link } from 'react-router-dom'

import { LIST_COMPONENTS_LINKS } from '../servers/DB_HOME_LIST'

export function HomePage() {
  return (
    <section>
      <h1>Componentes - 2024</h1>
      <ul>
        {LIST_COMPONENTS_LINKS.map((list) => {
          return (
            <li key={list.link}>
              <Link to={list.link}>{list.title}</Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

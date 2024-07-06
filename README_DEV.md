### Libs

- [eslint-config-rocketseat](https://github.com/rocketseat/eslint-config-rocketseat)
- [Automatic Class Sorting with Prettier](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)
- [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)
- [React Router Dom](https://reactrouter.com/en/main/start/overview)
- [react-helmet-async](https://github.com/staylor/react-helmet-async#readme)


#### Install ESLINT
```bash
npm i eslint @rocketseat/eslint-config -D
```

.eslintrc.json
```
{
  "extends": ["@rocketseat/eslint-config/react"]
}
```

#### Install Automatic Class Sorting with Prettier
```Bash
npm install -D prettier-plugin-tailwindcss
```

.prettierrc
```json
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

#### Install eslint-plugin-simple-import-sort
```bash
npm install --save-dev eslint-plugin-simple-import-sort
```
.eslintrc.json
```json
  "plugins": ["simple-import-sort"],
  "rules": {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": "latest"
  }
```

### Install React Router
```bash
npm install react-router-dom
```

#### Creating layouts / criando layouts para as rotas
- criar uma pasta para os layouts dentro de SRC
- Outlet é um componente do react-router-dom
- crianto um layout "components_2024_Layout.tsx"


_layouts/components_2024_Layout.tsx
```tsx
import { Link, Outlet } from 'react-router-dom'

export function Components2024Layout() {
  return (
    <main>
      <Link
        to={'/'}
        className="flex h-12 w-full items-center justify-end bg-sky-500 p-8 font-semibold text-white hover:text-red-500"
      >
        Voltar
      </Link>

      <Outlet />

      {/* <Footer /> */}
    </main>
  )
}
```

- Criando arquivo de rotas
- "routers.tsx"

src/routers.tsx
```tsx
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

  {
    path: '/',
    element: <Components2025Layout />,
    children: [
      { path: '/', element: <Home2025Page /> },
      { path: '/arara-azul-ia', element: <AraraAzulIa /> },
    ],
  },
])

```

- configurando as rotas no arquivo App.tsx do projeto

App.tsx
```tsx
import { RouterProvider } from 'react-router-dom'

import { router } from './routers'

export function App() {
  return <RouterProvider router={router} />
}

```


#### Install react-helmet-async
```bash
npm i react-helmet-async
```

App.tsx
```tsx
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { router } from './routers'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | developer by Brenno" />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}

```
pages/contato.tsx
```tsx
import { Helmet } from 'react-helmet-async'

export function Contact() {
  return (
    <>
      <Helmet title="Contato" />
      <h1>Contato</h1>
    </>
  )
}
```
### Libs

-[Automatic Class Sorting with Prettier](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)




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

src/routers.tsx
```tsx
import { createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/home'
import { SignIn } from './pages/sign-in'

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/sign-in', element: <SignIn /> },
  ...
])

```
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
      <Helmet titleTemplate="%s | Andre Mello Olinda" />
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
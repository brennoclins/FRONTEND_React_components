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

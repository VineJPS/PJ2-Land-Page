const navigationItems = [
  'Serviços e projetos',
  'Transparência',
  'Contato',
  'Mais alguma coisa',
]

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#1c5db4] text-lg text-white shadow-sm">
      <div className=" text-sm mx-auto flex min-h-[70px] max-w-screen-2xl flex-col items-center justify-between gap-3 px-5 py-3 sm:flex-row sm:px-10">
        <a
          href="/"
          className="shrink-0 text-lg font-bold leading-6"
        >
          Recanto Betel
        </a>

        <nav aria-label="Navegação principal">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:justify-end">
            {navigationItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="font-semibold leading-5 transition-colors hover:text-blue-50 focus-visible:outline">
                
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

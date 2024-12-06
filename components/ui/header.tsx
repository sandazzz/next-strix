import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-center bg-gradient-to-r from-blue-950 via-purple-800 to-indigo-900 shadow-md">
      <nav className="flex w-full max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-semibold italic tracking-wide text-white transition duration-500 hover:text-yellow-300"
        >
          <span className="text-yellow-300 transition duration-500">S</span>TRIX
        </Link>
        {/* Desktop Navigation */}
        <ul className="hidden items-center space-x-8 text-sm font-medium text-gray-300 md:flex">
          <li>
            <Link
              href="/"
              className="px-4 py-2 transition duration-300 hover:text-white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="px-4 py-2 transition duration-300 hover:text-white"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/cart"
              className="px-4 py-2 transition duration-300 hover:text-white"
            >
              Cart
            </Link>
          </li>
        </ul>
        {/* Mobile Dropdown Menu */}
        <div className="relative block md:hidden">
          <div tabIndex={0} className="group relative">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-md text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <ul className="absolute right-0 mt-2 hidden w-48 rounded-md bg-gray-900 text-gray-300 shadow-lg group-focus-within:block">
              <li>
                <Link
                  href="/"
                  className="block px-4 py-2 transition hover:bg-blue-800 hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="block px-4 py-2 transition hover:bg-blue-800 hover:text-white"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="block px-4 py-2 transition hover:bg-blue-800 hover:text-white"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

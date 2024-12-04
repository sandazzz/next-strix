import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full justify-center border-b border-neutral-200 bg-white px-4">
      <nav className="flex w-full max-w-[1200px] items-center p-4">
        {/* Mobile Dropdown Menu */}
        <div className="relative block md:hidden">
          {/* Groupe Dropdown */}
          <div tabIndex={0} className="group relative">
            {/* Bouton du menu */}
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center text-gray-700 hover:text-gray-900 focus:outline-none"
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

            {/* Menu Dropdown */}
            <ul className="absolute left-0 mt-2 hidden w-48 rounded-lg border border-gray-200 bg-white shadow-lg group-focus-within:block">
              <li className="border-b border-gray-100">
                <Link
                  href="/"
                  className="block px-4 py-2 text-sm text-purple-600 hover:bg-gray-100"
                >
                  Home
                </Link>
              </li>
              <li className="border-b border-gray-100">
                <Link
                  href="/products"
                  className="block px-4 py-2 text-sm text-purple-600 hover:bg-gray-100"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="block px-4 py-2 text-sm text-purple-600 hover:bg-gray-100"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo */}
        <Link href="/" className="text-lg text-purple-600 hover:text-black">
          STRIX
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          <li>
            <Link
              href="/"
              className="px-4 py-2 text-purple-500 hover:text-purple-700"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="px-4 py-2 text-purple-500 hover:text-purple-700"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/cart"
              className="px-4 py-2 text-purple-500 hover:text-purple-700"
            >
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

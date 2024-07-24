import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-16 px-4 bg-white flex justify-center border-neutral-200 border-b ">
      <nav className="w-full max-w-[1200px] flex justify-center items-center p-4">
        <div className="dropdown block md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="">
              <Link className="no-underline py-2 px-4 text-purple-500" href="/">
                Home
              </Link>
            </li>
            <li className="">
              <Link
                className="no-underline py-2 px-4 text-purple-500"
                href="/products"
              >
                Products
              </Link>
            </li>
            <li className="">
              <Link
                className="no-underline py-2 px-4 text-purple-500"
                href="/cart"
              >
                Cart
              </Link>
            </li>
          </ul>
        </div>
        
        <Link className=" text-purple-600 text-lg hover:text-black" href="/">
          STRIX
        </Link>

        <div className="flex w-full justify-end md:justify-between ">
          <ul className="hidden flex-row list-none p-2 md:flex">
            <li className="">
              <Link className="no-underline py-2 px-4 text-purple-500" href="/">
                Home
              </Link>
            </li>
            <li className="">
              <Link
                className="no-underline py-2 px-4 text-purple-500"
                href="/products"
              >
                Products
              </Link>
            </li>
            <li className="">
              <Link
                className="no-underline py-2 px-4 text-purple-500"
                href="/cart"
              >
                Cart
              </Link>
            </li>
          </ul>
          {/*<ul className="flex flex-row list-none p-2">
            <li className="">
              <Link className="no-underline py-2 px-4 text-purple-500" href="">
                Login
              </Link>
            </li>
            <li className="">
              <Link className="no-underline py-2 px-4 text-purple-500" href="">
                Register
              </Link>
            </li>
          </ul>*/}
        </div>
      </nav>
    </header>
  );
}

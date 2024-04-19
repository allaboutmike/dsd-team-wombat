"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div>
      <nav className="bg-teal-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <Image
                    className="h-20 w-auto"
                    src="/16057621.png"
                    alt="Your Company"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {/* <!-- Current: "bg-teal-700 text-white", Default: "text-white hover:bg-teal-500 hover:bg-opacity-75" --> */}
                  <Link
                    href="/"
                    className={`link ${
                      pathname === "/"
                        ? "bg-teal-700 text-white rounded-md px-3 py-2 text-sm font-medium"
                        : "text-white hover:bg-teal-500 hover:bg-opacity-75 rounded-md px-3 py-2 text-sm font-medium"
                    }`}
                    aria-current="page"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/users"
                    className={`link ${
                      pathname === "/users"
                        ? "bg-teal-700 text-white rounded-md px-3 py-2 text-sm font-medium"
                        : "text-white hover:bg-teal-500 hover:bg-opacity-75 rounded-md px-3 py-2 text-sm font-medium"
                    }`}
                  >
                    Users
                  </Link>
                  <Link
                    href="/logs"
                    className={`link ${
                      pathname === "/logs"
                        ? "bg-teal-700 text-white rounded-md px-3 py-2 text-sm font-medium"
                        : "text-white hover:bg-teal-500 hover:bg-opacity-75 rounded-md px-3 py-2 text-sm font-medium"
                    }`}
                  >
                    Logs
                  </Link>
                  <Link
                    href="/images"
                    className={`link ${
                      pathname === "/images"
                        ? "bg-teal-700 text-white rounded-md px-3 py-2 text-sm font-medium"
                        : "text-white hover:bg-teal-500 hover:bg-opacity-75 rounded-md px-3 py-2 text-sm font-medium"
                    }`}
                  >
                    Images
                  </Link>
                  <Link
                    href="/reports"
                    className={`link ${
                      pathname === "/reports"
                        ? "bg-teal-700 text-white rounded-md px-3 py-2 text-sm font-medium"
                        : "text-white hover:bg-teal-500 hover:bg-opacity-75 rounded-md px-3 py-2 text-sm font-medium"
                    }`}
                  >
                    Reports
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="relative rounded-full bg-teal-600 p-1 text-teal-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>

                {/* <!-- Profile dropdown --> */}
                <div className="relative ml-3 ">
                  <div>
                    <button
                      type="button"
                      className="relative flex max-w-xs items-center rounded-full bg-teal-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-8 w-8 rounded-full"
                        src="/david-clode-BSXdD5MawH4-unsplash.jpg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </button>
                  </div>
                  {/* 
          <!--
          Dropdown menu, show/hide based on menu state.

          Entering: "transition ease-out duration-100"
          From: "transform opacity-0 scale-95"
          To: "transform opacity-100 scale-100"
          Leaving: "transition ease-in duration-75"
          From: "transform opacity-100 scale-100"
          To: "transform opacity-0 scale-95"
      --> */}
                  <div
                    className=" hidden absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex={-1}
                  >
                    {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-0"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-1"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-2"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {/* <!-- Mobile menu button --> */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md bg-teal-600 p-2 text-teal-200 hover:bg-teal-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <a
              href="#"
              className="bg-teal-700 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="text-white hover:bg-teal-500 hover:bg-opacity-75 block rounded-md px-3 py-2 text-base font-medium"
            >
              Users
            </a>
            <a
              href="#"
              className="text-white hover:bg-teal-500 hover:bg-opacity-75 block rounded-md px-3 py-2 text-base font-medium"
            >
              Logs
            </a>
            <a
              href="#"
              className="text-white hover:bg-teal-500 hover:bg-opacity-75 block rounded-md px-3 py-2 text-base font-medium"
            >
              Images
            </a>
            <a
              href="#"
              className="text-white hover:bg-teal-500 hover:bg-opacity-75 block rounded-md px-3 py-2 text-base font-medium"
            >
              Reports
            </a>
          </div>
          <div className="border-t border-teal-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <Image
                  className="h-10 w-10 rounded-full"
                  src="/david-clode-BSXdD5MawH4-unsplash.jpg"
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-white">Mike</div>
                <div className="text-sm font-medium text-teal-300">Admin</div>
              </div>
              <button
                type="button"
                className="relative ml-auto flex-shrink-0 rounded-full bg-teal-600 p-1 text-teal-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-3 space-y-1 px-2">
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-teal-500 hover:bg-opacity-75"
              >
                Your Profile
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-teal-500 hover:bg-opacity-75"
              >
                Settings
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-teal-500 hover:bg-opacity-75"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

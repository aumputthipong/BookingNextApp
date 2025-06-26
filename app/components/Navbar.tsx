"use client"
import Link from "next/link";
import React from 'react'
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const {data: session, status} = useSession(); 


  return (
    <nav className="navbar bg-white sticky top-0 z-50 shadow-sm px-4">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl" href="/">Home</a>
  </div>

  {session && status === "authenticated" ? (
    <div className="flex items-center gap-4">
      <p className="text-md font-medium truncate max-w-[150px]">{session.user?.name}</p>

      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
            {session.user?.image && (
              <img alt="user avatar" src={session.user.image} />
            )}
          </div>
        </div>

        <ul tabIndex={0} className="mt-3 z-50 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-56">
          <li>
            <p className="font-semibold">{session.user?.name}</p>
          </li>
          <li>
            <p className="text-sm text-gray-500 truncate">{session.user?.email}</p>
          </li>
          <li>
            <a onClick={() => signOut()}>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <Link href="/login" className="ml-auto">
      <button
        type="button"
        className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55"
      >
        <svg className="w-4 h-4 me-2" aria-hidden="true" fill="currentColor" viewBox="0 0 18 19">
          <path
            fillRule="evenodd"
            d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
            clipRule="evenodd"
          />
        </svg>
        Sign in with Google
      </button>
    </Link>
  )}
</nav>
  
  
  

  )
}

export default Navbar
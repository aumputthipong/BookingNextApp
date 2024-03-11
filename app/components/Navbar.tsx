"use client"
import Link from "next/link";
import React from 'react'
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const {data: session, status} = useSession(); 


  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl" href='/'>Home</a>
    </div>
    {session && status === "authenticated"  ?  (
    <div className="flex-none gap-2">
      <div className="form-control">
        <h2 className='text-xl'>{session.user?.name}</h2>
      </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-15 rounded-full">
          {session.user?.image && (
            <img alt="Tailwind CSS Navbar component" src={session.user.image} />)}
          </div>
        </div>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              {session.user?.name}
              {/* <span className="badge">email</span> */}
            </a>
          </li>
          <li><text> {session.user?.email}</text></li>
          <li><a  
          onClick={() => signOut()}
        >Logout</a></li>
        </ul>
      </div>
    </div>
       ): (
        <Link href="/login">
         <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
            <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
            </svg>
            Sign in with Google
            </button>
        </Link >
      )}
  </div>
  
  
  

  )
}

export default Navbar
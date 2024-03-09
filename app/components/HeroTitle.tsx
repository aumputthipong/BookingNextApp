"use client"
import Link from 'next/link'
import React from 'react'
import { useSession, signOut } from "next-auth/react";
const HeroTitle = () => {

  const {data: session, status} = useSession(); 
  //   console.log('session',session);
  // console.log('status', status);
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      {session && session.user && session.user.role === "admin" && 
      ( // Conditional rendering with type safety
            <Link href="/admin">
              <button className="btn btn-primary">Goto Admin console</button>
            </Link>
          )}
    </div>
  </div>
</div>
  )
}

export default HeroTitle
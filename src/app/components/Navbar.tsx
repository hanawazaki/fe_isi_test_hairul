"use client"

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const { data: session } = useSession()
  return (
    <nav className="bg-white border border-[#E2E2EA] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-[#171725] text-2xl font-semibold">Task Master</a>

        <div className="flex items-center space-x-4">
          {session?.user ?
            (
              <>
                <span className="text-[#171725]">Hi, {session.user.name}</span>
                <button className="text-[#171725] py-2 px-4 " onClick={() => signOut({
                  callbackUrl: '/'
                })}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                  </svg>
                </button>
              </>
            ) :
            <>
            </>
          }
        </div>

      </div>
    </nav>

  )
}

export default Navbar
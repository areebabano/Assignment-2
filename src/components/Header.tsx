import Image from 'next/image'
import React from 'react'
import Navbar from "@/components/Navbar"

const Header = () => {
  return (
        <header>
            <div className='bg-gray-200 p-4 flex justify-between items-center'>
        <Image
          src="/logo.jpg"
          alt='Logo'
          height={70}
          width={70}
          className='rounded-full'
        />
      {/* <h1 className='font-extrabold text-[32px] bg-black text-white w-16 h-16 flex items-center justify-center rounded-full'>AH</h1> */}
    <Navbar/>
    </div>
        </header>
  )
}

export default Header

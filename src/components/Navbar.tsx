import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul className='flex items-center gap-9 text-[24px] font-semibold px-8'>
        <li className='relative hover:border-b-[3px] hover:border-gray-500 cursor-pointer hover:font-extrabold'>Home</li>
        <li className='relative hover:border-b-[3px] hover:border-gray-500 cursor-pointer hover:font-extrabold'>Shop</li>
        <li className='relative hover:border-b-[3px] hover:border-gray-500 cursor-pointer hover:font-extrabold'>Services</li>
        <li className='relative hover:border-b-[3px] hover:border-gray-500 cursor-pointer hover:font-extrabold'>About</li>
        <li className='relative hover:border-b-[3px] hover:border-gray-500 cursor-pointer hover:font-extrabold'>Contact</li>
    </ul>
    </div>
  )
}

export default Navbar

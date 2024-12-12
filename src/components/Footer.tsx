import React from 'react'
import Navbar from "@/components/Navbar"
import { FaFacebook , FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-black text-white pt-11 pb-4 mt-24'>
      <Navbar/>
      <div className='flex items-center justify-between'>
      <ul className='flex mt-6 gap-6'>
        <li>
          <a href="https://facebook.com" target='_blank' aria-label="Facebook">
          <FaFacebook size={25} className='hover:text-blue-600'/>
          </a>
         </li>
        <li>
          <a href="https://instagram.com" target='_blank' aria-label="Instagram">
          <FaInstagram size={25} className='hover:text-pink-500'/>
          </a>
          </li>
        <li>
          <a href="https://twitter.com" target='_blank' aria-label="Twitter">
          <FaTwitter size={25} className='hover:text-blue-300'/>
          </a>
          </li>
        <li>
          <a href="https://youtube.com" target='_blank' aria-label="Youtube">
          <FaYoutube size={25} className='hover:text-red-600'/>
          </a>
         </li>
      </ul>
      </div>
      <h6 className='text-sm mt-6 font-semibold'>© 2024 Areeba Bano. All rights reserved.</h6>
 
    </div>
  )
}

export default Footer

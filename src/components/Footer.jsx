import { Chrome, Facebook, Instagram, Phone, Twitter, Youtube } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col gap-9 text-[#A4193D] p-4 rounded-[6px] font-semibold bg-[#FFDFB9]'>
      <div className="flex flex-col gap-4">
        <h2 className='text-xl'>Stay Updated</h2>
        <h4>From trending school news to major national updates, we’ve got you covered. Never miss a story that matters to you.</h4>
      </div>
      <div className="flex flex-col gap-4">
        <div className=" flex justify-between">
          <a href=""><Facebook size={25}/></a>
          <a href=""><Twitter size={25}/></a>
          <a href=""><Instagram size={25}/></a>
          <a href=""><Youtube size={25}/></a>
          <a href=""><Chrome size={25}/></a>
          <a href=""><Phone size={25}/></a>
        </div>
        <div className="flex justify-center">
          <h2>&copy; Copyright {new Date().getFullYear()} @headlines360</h2>
        </div>
      </div>
    </footer>
  )
}

export default Footer
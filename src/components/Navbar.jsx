import React from 'react'
import { useState } from 'react';
import {
    FaFacebookF,
    FaTwitter,
    FaGooglePlusG,
    FaInstagram,
    FaBars,
    FaGithub,
    FaLinkedinIn
  } from 'react-icons/fa';

const Navbar = () => {
    const[nav,setNav]= useState(false)

    function handleNav(){
        setNav(!nav)
    }
  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>
      <ul className=' hidden sm:flex px-4'>
        <a href="#home"><li>Home</li></a>
        <a href="#gallery"><li>Gallery</li></a>
        <a href="#deals"><li>Deals</li></a>
        <a href="#contact"><li>Contact</li></a>
      </ul>
       <div className='flex justify-between'>
      <a href="https://github.com/lyrics05" target='_blank' rel="noreferrer"><FaGithub className='mx-4' /></a>
      <a href="https://www.linkedin.com/in/isidro-rivera-bab6971a5/" target='_blank' rel="noreferrer">  <FaLinkedinIn className='mx-4' /></a>
        <FaFacebookF className='mx-4' />
        <FaTwitter className='mx-4' />
        <FaGooglePlusG className='mx-4' />
        <FaInstagram className='mx-4' />
       </div>
        <div onClick={handleNav} className='sm:hidden z-10'>
            <FaBars size={20} className='mr-4'/>
        </div>
        
        <div onClick={handleNav} className={nav?'over-y-hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col':
           " absolute top-0 h-screen left-[-100%] ease-in duration-100"
          }>
            <ul className='w-full h-full text-center pt-12'>
            <a href="#home"><li className='text-2xl py-12'>Home</li></a>
            <a href="#gallery"><li className='text-2xl py-12'>Gallery</li></a>
            <a href="#deals"><li className='text-2xl py-12'>Deals</li></a>
            <a href="#contact"><li className='text-2xl py-12'>Contact</li></a> 
            </ul>
        </div>
    </div>
  )
}

export default Navbar
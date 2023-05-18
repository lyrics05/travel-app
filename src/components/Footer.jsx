import React from 'react'
import {  FaGithub,
        FaLinkedinIn
 } from 'react-icons/fa';

const Footer = () => {
  return (
    <div  className='max-w-[1140px] w-full py-8 m-auto border-t-4  bg-gray-500/80'>
        <div className='flex items-center m-auto justify-center'>
        <a href="https://www.linkedin.com/in/isidro-rivera-bab6971a5/" target='_blank' rel="noreferrer"><FaLinkedinIn size={30} className='text-var[(--primary-dark)] mr-2 text-white'/></a>
        <a href="https://github.com/lyrics05" target='_blank' rel="noreferrer"><FaGithub size={30} className='text-var[(--primary-dark)] mr-2 text-white'/></a>
            <h1 className='text-xl font-bold text-white'>WeekAway</h1>
        </div>
    </div>
  )
}

export default Footer
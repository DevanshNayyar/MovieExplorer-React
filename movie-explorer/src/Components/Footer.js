import React from 'react';
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className='flex flex-row justify-around flex-wrap bg-black sticky mt-[400px] bottom-0 w-full'>
        <p className='text-white text-3xl p-5'>Created with Love By : &copy; "Devansh Nayyar"</p>
        <div className='flex flex-row justify-around '>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/devanshnayyar/"
            className='text-white text-2xl mr-5 mt-1 p-5 hover:scale-x-125 hover:scale-y-105'>
            <BsLinkedin /></a>
          <a target="_blank" rel="noreferrer" href="https://github.com/DevanshNayyar"
            className='text-white text-2xl mr-5 mt-1 p-5 hover:scale-x-125 hover:scale-y-105'>
            <BsGithub /></a>
        </div>
      </div>
    </>
  )
}

export default Footer
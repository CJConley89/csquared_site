import React from 'react'
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai'
import logoIMG from '../assets/logo.png'

const TopBar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
        <div className='flex items-center'>
            <img src={logoIMG} alt="logo" width='80' height='80'/>
            <h1 className='text-xl font-bold text-gray-700'>C2 Woodworking</h1>
        </div>
        <div className='flex'>
            <div className='hidden md:flex items-center px-6'>
                <AiOutlineClockCircle size='20' className='mr-2 text-[var(--primary-dark)]'/>
                <p className='text-sm text-gray-700'>9AM - 5PM</p>
            </div>
            <div className='hidden md:flex items-center px-6'>
                <AiFillPhone size='20' className='mr-2 text-[var(--primary-dark)]'/>
                <p className='text-sm text-gray-700'>1-888-817-1234</p>
            </div>
            <button>Get In Touch</button>
        </div>
    </div>
  )
}

export default TopBar
import React from 'react'
import logoIMG from '../assets/logo.png'

const Footer = () => {
  return (
    <div className='max-w-[1140px] w-full py-8 m-auto border-t-4'>
        <div className='flex items-center m-auto justify-center'>
          <img src={logoIMG} alt="logo" width='80' height='80' className='mr-2'/>
            <h1 className='text-xl font-bold text-gray-700'>C2 Woodworking</h1>
        </div>
    </div>
  )
}

export default Footer
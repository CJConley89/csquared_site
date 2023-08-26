import React from 'react'
import IMG1 from '../assets/hero_chisels.jpg'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img src={IMG1} alt="Workshop wall of chisels"
            className='w-full h-full object-cover' 
        />
        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-4xl'>Build Your Next Project</h1>
                <h2 className='text-4xl py-4 italic'>With C2 Woodworking</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Deserunt quam voluptatibus deleniti. Laudantium quas veniam, cumque 
                    doloremque voluptatibus sint aspernatur sunt? Distinctio amet incidunt 
                    suscipit quod, doloribus cum. Accusantium, nesciunt.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Hero
import React from 'react'
import IMG1 from '../assets/gallery1.jpg'
import IMG2 from '../assets/gallery2.jpg'
import IMG3 from '../assets/gallery3.jpg'
import IMG4 from '../assets/gallery4.jpg'
import IMG5 from '../assets/gallery5.jpg'
import IMG6 from '../assets/gallery6.jpg'
import IMG7 from '../assets/gallery7.jpg'
import IMG8 from '../assets/gallery8.jpg'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
        <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img src={IMG1} className="w-full h-full object-cover"alt="" />
            </div>
            <div>
                <img src={IMG2} className="w-full h-full object-cover"alt="" />
            </div>
            <div>
                <img src={IMG3} className="w-full h-full object-cover"alt="" />
            </div>
            <div>
                <img src={IMG4} className="w-full h-full object-cover"alt="" />
            </div>
            <div>
                <img src={IMG5} className="w-full h-full object-cover"alt="" />
            </div>
            <div>
                <img src={IMG6} className="w-full h-full object-cover"alt="" />
            </div>
            <div>
                <img src={IMG7} className="w-full h-full object-cover"alt="" />
            </div>
            <div>
                <img src={IMG8} className="w-full h-full object-cover"alt="" />
            </div>
        </div>
    </div>
  )
}

export default Gallery
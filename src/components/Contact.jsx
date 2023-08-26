import React, { useRef } from 'react'
import IMG1 from '../assets/contact.jpg'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ov24c6o', 'template_8mrgrej', form.current, 'rBszRBDl1V0ex9ZMa')
      e.target.reset()
    };
    
  return (
    <div id='contact' className='max-w-[1140px] m-auto w-ful px-4 py-16'>
        <h2 className='text-center text-gray-700'>Send Us a Message</h2>
        <p className='text-center text-gray-700 py-2'>We're happy to help bring your project to life!</p>
        <div className='grid md:grid-cols-2'>
            <img 
            src={IMG1} 
            alt="Contact" 
            className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]'
            /> 
            <form ref={form} onSubmit={sendEmail}>
                <div className='grid grid-cols-2'>
                    <input className="border m-2 p-2" type="text" placeholder='First' />
                    <input className="border m-2 p-2" type="text" placeholder='Last' />
                    <input className="border m-2 p-2" type="email" placeholder='Email' />
                    <input className="border m-2 p-2" type="tel" placeholder='Phone' />
                    <input className="border col-span-2 m-2 p-2" type="text" placeholder='Address' />
                    <textarea className='border col-span-2 m-2 p-2' name="message" id="message" cols="30" rows="10"></textarea>
                    <button className='col-span-2 m-2'>Submit</button>
                </div>
            </form>   
        </div>
    </div>
  )
}

export default Contact
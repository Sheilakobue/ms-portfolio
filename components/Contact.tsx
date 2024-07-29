import React from 'react'
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <div id="contact"
    className='w-full h-fit py-10 relative bg-blue-200'>
      <div className='max-w-[1400px] mx-auto w-[91%]'>
        <div className='mb-10'>
          <h2 className='text-4xl font-extrabold mb-5 text-blue-950'>
            Let's {""}
            <span className='text-yellow-300'>
              Connect
            </span> {" "}
            and Build Something!
          </h2>
          <p className='text-sm text-blue-950'>
            Please allow 24-48 hours for a response
          </p>
        </div>
        <ContactForm/>
      </div>
      </div>
  )
}

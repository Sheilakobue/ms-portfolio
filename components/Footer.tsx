import React from 'react'

export default function Footer() {
  return (
    <footer className='p-5 bg-blue-100 relative
    border-t'>
        <div className='max-w-[1400px] mx-auto w-[91%]'>
            <p className='text-center text-sm text-blue-950'>
           Copyright&copy; {new Date().getFullYear()}- All rights reserved by Sheila Kobue.
            </p>
        </div>
    </footer>
  )
}

import React from 'react'
import img from '../assets/nb-bg.jpg'
import Navbar from './Navbar'

function Hero() {
  return (
    <div>
        <div className='w-full h-screen object-cover absolute -z-10'><img className='absolute w-full h-screen object-cover' src={img} alt="" /></div>
        <Navbar></Navbar>
    </div>
  )
}

export default Hero
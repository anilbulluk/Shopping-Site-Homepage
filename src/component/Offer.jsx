import React from 'react'
import img from '../assets/uns.jpg'

function Offer() {
  return (
    <div className='h-screen w-full py-10'>
        <div className='flex flex-col bg-white/20 h-screen w-full z-10 absolute py-[50px] justify-center pl-[128px] text-6xl items-start'>
            <h1 className='text-center'>SUSTAINABLE <br /> CLOTHING</h1>
            <a href='/' className='flex items-center text-2xl py-10 underline text-center'>DISCOVER <ion-icon name="chevron-forward-outline"></ion-icon></a>
        </div>
        <img className='h-screen w-full py-[50px] object-cover absolute' src={img} alt="" />
    </div>
  )
}

export default Offer


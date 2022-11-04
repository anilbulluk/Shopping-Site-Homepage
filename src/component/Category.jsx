import React from 'react'
import img from '../assets/cat1.jpg'
import img2 from '../assets/cat2.jpg'

function Category() {
  return (
    <div className='grid grid-cols-2 w-full h-screen px-10 gap-x-10 mt-10 font-bold text-3xl'>
        <div className='flex flex-col items-center gap-y-5'>
            <img className='h-[660px] w-full object-cover' src={img} alt="" />
            <h1>MAN NEW PRODUCT</h1>
        </div>
        <div className='flex flex-col items-center gap-y-5'>
            <img className='h-[660px] w-full object-cover' src={img2} alt="" />
            <h1>WOMAN NEW PRODUCT</h1>
        </div>
    </div>
  )
}

export default Category
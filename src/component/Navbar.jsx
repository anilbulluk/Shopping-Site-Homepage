import React, { useState } from 'react'


export default function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const handleClose = () => setNav(!nav)
    return (
        <div className='h-screen'>
            <div className='flex items-center justify-between py-7 px-3 md:px-[128px] font-bold bg-transparent h-[10%] '>
                <div className='flex text-2xl items-center gap-8'>
                    <button onClick={handleClick} className='flex items-center text-5xl'>{!nav ? <ion-icon name="menu-outline"></ion-icon> : <ion-icon name="close-outline"></ion-icon>}</button>
                    <h1 className='md:text-5xl text-4xl'>RESQUE</h1>
                </div>
                <div>
                    <ul className='md:flex hidden items-center gap-x-10 text-2xl '>
                        <li>WOMEN</li>
                        <li>MEN</li>
                        <li>KIDS</li>
                    </ul>
                </div>
                <div>
                    <ul className='flex md:gap-x-5 md:text-4xl text-2xl gap-2'>
                        <li><ion-icon name="person-outline"></ion-icon></li>
                        <li><ion-icon name="cart-outline"></ion-icon></li>
                        <li><ion-icon name="heart-outline"></ion-icon></li>
                    </ul>
                </div>
            </div>
            <div className={!nav ? "hidden" : "absolute bg-white/40 w-[300px] font-medium x-8 px-9 h-[90%] overflow-y-scroll"}>
                    <h1 className='font-bold text-3xl'>WOMAN</h1>
                    <li>SNEAKERS</li>
                    <li>CLOTHES</li>
                    <li>ACCESORIES</li>
                    <li>SALE</li>
                    <li>NEW</li>

                    <h1 className='font-bold text-3xl'>MAN</h1>
                    <li>SNEAKERS</li>
                    <li>CLOTHES</li>
                    <li>ACCESORIES</li>
                    <li>SALE</li>
                    <li>NEW</li>

                    <h1 className='font-bold text-3xl'>KIDS</h1>
                    <li>SNEAKERS</li>
                    <li>CLOTHES</li>
                    <li>ACCESORIES</li>
                    <li>SALE</li>
                    <li>NEW</li>
                </div>
            </div>
    )
}

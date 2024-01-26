import React from 'react'
import burger from '../assets/burger.jpg'
export default function Hero() {
  return (
        <div className='max-w-[1640px] mx-auto p-4'>
            {/* overlay */}
            <div className='max-h-[500px] relative'>
                <div className='absolute text-gray-200 flex flex-col bg-black/40 w-full h-full max-h-[500px] justify-center'>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-400 font-extrabold'>Best</span></h1>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-400 font-extrabold'>Foods</span> Delivered</h1>
                </div>
                <img className='max-h-[500px] w-full object-cover' src={burger} alt="" />
            </div>
        </div>
  )
}

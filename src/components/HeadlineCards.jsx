import React from 'react'

import url1 from '../assets/url1.png'
import url2 from '../assets/url2.png'
import url3 from '../assets/url3.png'

export default function HeadlineCards() {
  return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>

            <div className='rounded-xl relative max-h-[160px] md:max-h-[200px]'>
                <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-3 pt-4'>Sun's Out, BOGO Out</p>
                    <p className='px-3'>Through 8/26</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img src={url1} alt="" className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-lg'/>
            </div>
            <div className='rounded-xl relative'>
                <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-3 pt-4'>New Restraunts</p>
                    <p className='px-3'>Added Daily</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img src={url2} alt="" className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-lg'/>
            </div>
            {/* card 3 */}
            <div className='rounded-xl relative'>
                {/* overlay */}
                <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>We Deliver Deserts Too</p>
                    <p className='px-2'>Tasty Treats</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-lg' src={url3} alt="" />
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import { data } from '../data/data.jsx'
export default function Food() {
    const [foods, setFoods] = useState(data)

    // filter type 
    const filterType = (category)=>{
        setFoods(
            data.filter((item)=>{
                return item.category === category;
            })
        )
    }

    // filter price 
    const filterPrice = (price)=>{
        setFoods(
            data.filter((item)=>{
                return item.price === price;
            })
        )
    }

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-4xl font-bold text-orange-600 text-center'>Top Rated Menu Items</h1>

        {/* Filter Row */}
        <div className='flex flex-col  justify-between'>
            {/* Filter Type */}
            <div className='flex flex-col  items-center m-4'>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap max-w-[450px] w-full'>
                    <button className='m-1 border-orange-600 text-orange-600 hover hover:bg-orange-600 hover:text-white hover:scale-110 ease-in duration-300' onClick={() => setFoods(data)}>All</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover hover:bg-orange-600 hover:text-white hover:scale-110 ease-in duration-300' onClick={() => filterType('burger')}>Burger</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover hover:bg-orange-600 hover:text-white hover:scale-110 ease-in duration-300' onClick={() => filterType('pizza')}>Pizza</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover hover:bg-orange-600 hover:text-white hover:scale-110 ease-in duration-300' onClick={() => filterType('salad')}>Salad</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover hover:bg-orange-600 hover:text-white hover:scale-110 ease-in duration-300' onClick={() => filterType('chicken')}>Chicken</button>
                </div>
            </div>
            {/* Filter Price */}
            <div className='flex flex-col items-center m-4'>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between flex-wrap max-w-[390px] w-full'>
                    <button className='m-1 border-orange-600 text-orange-600 hover hover:bg-orange-600 hover:text-white hover:scale-110 ease-in duration-300' onClick={() => filterPrice('$')}>$</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover hover:bg-orange-600 hover:text-white hover:scale-110 ease-in duration-300' onClick={() => filterPrice('$$')}>$$</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover hover:bg-orange-600 hover:text-white hover:scale-110 ease-in duration-300' onClick={() => filterPrice('$$$')}>$$$</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover hover:bg-orange-600 hover:text-white hover:scale-110 ease-in duration-300' onClick={() => filterPrice('$$$$')}>$$$$</button>
                </div>
            </div>
        </div>

        {/* Display Foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((item,index)=> {
                    return (<div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-lg'>
                        <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-lg'/>
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p><span className='bg-orange-500 text-white-1 p-1 rounded-lg font-bold'>{item.price}</span></p>
                        </div>
                    </div>)
                })}
        </div>
    </div>
  )
}

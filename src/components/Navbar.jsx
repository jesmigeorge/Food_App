import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose,AiFillTag } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdHelp, MdFavorite } from "react-icons/md";
import { FaWallet, FaUserFriends} from "react-icons/fa";
export default function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = ()=>{
        setNav(!nav)
    }
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* left side */}
        <div className='flex  items-center'>
            <div onClick={handleNav} className='cursor-pointer'>
                <AiOutlineMenu size={30}/>
            </div>
            <h1 className='text-2xl lg:text-4xl sm:text-3xl px-2'>
                Best <span className='font-extrabold'>Eats</span>
            </h1>
            <div className='hidden lg:flex flex-row items-center bg-gray-200 rounded-full px-1 text-[14px]'>
                <p className='text-white bg-black m-1 rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>     
        </div>
        {/* search input */}
        <div className='flex items-center bg-gray-200 rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px] lg:ml-20 lg:rounded-xl'>
            <AiOutlineSearch size={25}/>
            <input className='bg-transparent p-2 w-full focus:outline-none' type="text" placeholder='Search yummy' />
        </div>
        {/* cart button */}
        <button className='hidden md:flex flex-row items-center bg-black text-white rounded-full py-2'>
                <BsFillCartFill size={20} className='mr-3'/>Cart
        </button>
        {/* mobile menu */}
        {/* overlay */}
        { nav ? 
            <div className='bg-black/80 top-0 left-0 z-10 fixed h-screen w-full'>
            </div> : ''
        }
        {/* side drawer menu */}
        <div className={ nav? 'fixed z-10 top-0 left-0 h-screen w-[300px] bg-white duration-300' : 'fixed z-10 top-0 left-[-100%] h-screen w-[300px] bg-white duration-300'}>
            <AiOutlineClose onClick={handleNav} size={30} className='absolute cursor-pointer right-4 top-4 duration-300'/>
            <h2 className='text-2xl p-4'>
                Best <span className='font-extrabold'>Eats</span>
            </h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800 '>
                    <li className='text-xl py-4 flex'>
                        <TbTruckDelivery size={25} className='mr-4'/>
                        Orders
                    </li>
                    <li className='text-xl py-4 flex'>
                        <MdFavorite size={25} className='mr-4'/>
                        Favourites
                    </li>
                    <li className='text-xl py-4 flex'>
                        <FaWallet size={25} className='mr-4'/>
                        Wallet
                    </li>
                    <li className='text-xl py-4 flex'>
                        <MdHelp size={25} className='mr-4'/>
                        Help
                    </li>
                    <li className='text-xl py-4 flex'>
                        <AiFillTag size={25} className='mr-4'/>
                        Promotions
                    </li>
                    <li className='text-xl py-4 flex'>
                        <BsFillSaveFill size={25} className='mr-4'/>
                        Best Ones
                    </li>
                    <li className='text-xl py-4 flex'>
                        <FaUserFriends size={25} className='mr-4'/>
                        Invite Friends
                    </li>
                </ul>
            </nav>
        </div>
        
    </div>
  )
}

import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
    <div className='flex py-8 items-center px-8  bg-gray-400 justify-between'>
        <h2 className='text-2xl font-bold'>Ananth</h2>
        <div className='flex gap-10'>
            <Link className='text-lg font-medium' to='/'>Home</Link>
            <Link className='text-lg font-medium' to='/about'>About</Link>
            <Link className='text-lg font-medium' to='/courses'>Courses</Link>
            <Link className='text-lg font-medium' to='/product'>Product</Link>
            
        </div>
    </div>
    )
}

export default Navbar

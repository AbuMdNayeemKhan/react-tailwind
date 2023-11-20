import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#ffffff]'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <ul className='hidden md:flex'>
                <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Home</li>
                <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Company</li>
                <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Resources</li>
                <li className='p-4 cursor-pointer hover:text-[#00df9a]'>About</li>
                <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
            </div>
            <div className={`fixed top-0 h-full bg-[#000300] text-[#00df9a] ${nav ? 'left-0 w-[300px] ease-in-out transition-all duration-500' : '-left-full w-0 ease-in-out transition-all duration-500'}`}>
                <h1 className='w-full text-3xl font-bold m-4'>REACT.</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600 cursor-pointer text-white'>Home</li>
                    <li className='p-4 border-b border-gray-600 cursor-pointer  text-white'>Company</li>
                    <li className='p-4 border-b border-gray-600 cursor-pointer text-white'>Resources</li>
                    <li className='p-4 border-b border-gray-600 cursor-pointer text-white'>About</li>
                    <li className='p-4 cursor-pointer  text-white'>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

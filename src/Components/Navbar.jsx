import React from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#ffffff]'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT</h1>
            <ul className='flex hidden'>
                <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Home</li>
                <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Company</li>
                <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Resources</li>
                <li className='p-4 cursor-pointer hover:text-[#00df9a]'>About</li>
                <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Contact</li>
            </ul>
            <div>
                <AiOutlineMenu size={20} />
            </div>
            <div className='fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]'>
                <ul className='pt-24 uppercase'>
                    <li className='p-4 cursor-pointer'>Home</li>
                    <li className='p-4 cursor-pointer'>Company</li>
                    <li className='p-4 cursor-pointer'>Resources</li>
                    <li className='p-4 cursor-pointer'>About</li>
                    <li className='p-4 cursor-pointer'>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
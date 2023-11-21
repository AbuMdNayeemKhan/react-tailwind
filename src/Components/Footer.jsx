import React from 'react';

import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div className="">
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsum repellendus architecto sed asperiores harum molestiae consequatur voluptatum.</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={32} />
                    <FaInstagram size={32} />
                    <FaTwitterSquare size={32} />
                    <FaDribbbleSquare size={32} />
                </div>
            </div>
            <div className="lg:col-span-3 flex justify-between">
                <div className="">
                    <h6 className=' font-medium text-gray-400 '>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Commerce</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
                </div>
                <div className="">
                    <h6 className=' font-medium text-gray-400 '>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Documentation</li>
                        <li className='py-2 text-sm'>Guides</li>
                        <li className='py-2 text-sm'>API Status</li>
                    </ul>
                </div>
                <div className="">
                    <h6 className=' font-medium text-gray-400 '>Company</h6>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Blog</li>
                        <li className='py-2 text-sm'>Jobs</li>
                        <li className='py-2 text-sm'>Career</li>
                    </ul>
                </div>
                <div className="">
                    <h6 className=' font-medium text-gray-400 '>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Commerce</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
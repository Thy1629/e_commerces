import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import Darkmode from './Darkmode';
import { FaUserAlt } from "react-icons/fa";

const MenuLinks = [
    { id: 1, name: "home", link: "/#" },
    { id: 2, name: "Shop", link: "/#Shop" },
    { id: 3, name: "About", link: "/#about" },
    { id: 4, name: "Blogs", link: "/#blog" },
];

const DropdownLinks = [
    { id: 1, name: "Trending Products", link: "/#" },
    { id: 2, name: "Best Selling", link: "/#" },
    { id: 3, name: "Top Rated", link: "/#" },
]

const Navbar = ({ handleRegisterPopup }) => {
    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            <div className='py-4'>
                <div className="container flex justify-between items-center">
                    
                    {/* Left Section: Logo and Menu Items */}
                    <div className='flex items-center gap-4'>
                        <a href="#" className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
                            E-Aura
                        </a>
                        <div className='block'>
                            <ul className='flex items-center gap-4'>
                                {MenuLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'>
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                                {/*Dropdown*/}
                                <li className='relative cursor-pointer group'>

                                    <a href="#" className='flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2'>
                                        Quick Links
                                        <span>
                                        <FaCaretDown className='group-hover:rotate-180 duration-300'/>
                                        </span>
                                    </a>
                                {/*Dropdown Links*/}
                                    <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white '>
                                    <ul className='space y-2'>
                                        {
                                            DropdownLinks.map((data, index) => (
                                                <li>
                                                    <a className='text-gray-500 hover:text-black dark:hover:text-white duration-200 inline-block p-2 hover:bg-neutral-300 rounded-md font-semibold' href={data.link}>{data.name}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    </div>
                                     
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Section: Search, Cart, Dark Mode, and User Icon */}
                    <div className='flex items-center gap-4'>
                        <div className='relative group hidden sm:block'>
                            <input type="text" placeholder='Search' className='search-bar' />
                            <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
                        </div>
                        <button className='relative p-3'>
                            <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400' />
                            <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>4</div>
                        </button>
                        <div>
                            <Darkmode />
                        </div>
                        <button className='relative p-3' onClick={handleRegisterPopup} >
                            <FaUserAlt className='text-xl text-gray-600 dark:text-gray-400' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

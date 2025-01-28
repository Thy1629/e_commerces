import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6';
import { FaMobileButton } from 'react-icons/fa6';

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#Contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
            {/*company Detail*/}
            <div className='py-8 px-4'>
            <a href="#" className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
                E-Aura
            </a>
            <p className='dark:text-white/70 text-gray-600 lg:pr-24 pt-3 dark:text-white'>
            E-Aura is your ultimate destination for high-quality electronics. We specialize in offering a wide range of products, including cutting-edge gadgets, premium keyboards, and other tech essentials. Our goal is to provide customers with top-notch products that combine innovation, reliability, and style.
            </p>
            <p className='text-gray-500 mt-4 dark:text-white'>
               Made by E-Aura
            </p>
            </div>

            {/*Footer links*/}
            <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                <div className='py-8 px-4'>
                    <h1 className='text-xl font-bold sm:text-left mb-3'>
                        Address Links
                    </h1>
                    <ul className='space-y-3 '>
                        {FooterLinks.map((data, index) => (
                                <li key={index}>

                                    <a href={data.link} className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'>
                                        {data.title}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            {/*second Col links*/}

                <div className='py-8 px-4'>
                    <h1 className='text-xl font-bold sm:text-left mb-3'>
                        Quick Links
                    </h1>
                    <ul className='space-y-3 '>
                        {FooterLinks.map((data, index) => (
                                <li key={index}>

                                    <a href={data.link} className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'>
                                        {data.title}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            {/*Company address*/}
            <div className='py-8 px-4 col-span-2 sm:col-auto'>
                <div>
                    <div className='flex items-center gap-3'>
                        <FaLocationArrow />
                        <p>Cambodia</p>
                        <p>Chamkar mon</p>
                        
                    </div>
                    <div className='flex items-center gap-3 mt-6'>
                        <FaMobileButton />
                        <p>+855 123456789</p>
                    </div>
                {/*Social Links*/}
                <div className='flex items-center gap-3 mt-6'>
                    <a href="#">
                        <FaInstagram className='text-3xl hover:text-primary duration-300' />
                    </a>
                    <a href="#">
                        <FaFacebook className='text-3xl hover:text-primary duration-300' />
                    </a>
                    <a href="#">
                        <FaLinkedin className='text-3xl hover:text-primary duration-300' />
                    </a>
                    
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Footer

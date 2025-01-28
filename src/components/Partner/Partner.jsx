import React from 'react'
import ALIEN from "../../assets/Asset/Brand/ALIEN.png";
import ASUS from "../../assets/Asset/Brand/Asus.png";
import Dell from "../../assets/Asset/Brand/Dell.png";
import Logitech from "../../assets/Asset/Brand/Logitech.png";
import MSI from "../../assets/Asset/Brand/MSI.png";




const Partner = () => {
  return (
    <div data-aos="zoom-out" className='py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10'>
      <div className="container">
        <div className='grid grid-cols-5 gap-3 place-items-center opacity-50'>
            <img src={ALIEN} alt="Brand" className='w-[80px] dark:invert'/>
            <img src={ASUS} alt="Brand2" className='w-[80px] dark:invert'/>
            <img src={Dell} alt="Brand3" className='w-[80px] dark:invert'/>
            <img src={Logitech} alt="Brand4" className='w-[80px] dark:invert'/>
            <img src={MSI} alt="Brand5" className='w-[80px] dark:invert'/>
        </div>
      </div>
    </div>
  )
}

export default Partner

import React from 'react'
import Earphone from '../../assets/Category/Earphone.png';
import Flash from "../../assets/Category/Flash.png";
import Keyboard from "../../assets/Category/Keyboard.png";
import Button from '../Shared/Button';





const Category = () => {
  return (
    <div className='py-8'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/*first col */}
            <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-gray-400'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>with</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>

                        <Button 
                        text="Browse"
                        bgColor={"bg-primary"}
                        textColor={"text-white"}
                        />

                    </div>
                </div>
                <img src={Earphone} alt="" className='w-[200px] absolute right-0 buttom-0 lg:top-[20px]'/>
            </div>
            {/*second col */}
            <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>with</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Flash Drive</p>

                        <Button 
                        text="Browse"
                        bgColor={"bg-white"}
                        textColor={"text-brandYellow"}
                        />

                    </div>
                </div>
                <img src={Flash} alt="" className='w-[180px] absolute right-4 lg:top-[70px]'/>
            </div>

            {/*Third col */}
            <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                    <div className='space-y-2 mb-4'>
                        <p className='text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold'>with</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-40'>Keyboard</p>

                        <Button 
                        text="Browse"
                        bgColor={"bg-white"}
                        textColor={"text-primary"}
                        />

                    </div>
                </div>
                <img src={Keyboard} alt="" className='w-[350px] absolute top-1/2 -translate-y-1/2 -right-0'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Category

import React from 'react'
import Button from '../Shared/Button';
import GPU from "../../assets/Category/GPU.png";
import controller from "../../assets/Category/controller.png";
import Webcam from "../../assets/Category/Webcam.png";




const Category = () => {
  return (
    <div className='py-8'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/*first col */}
            <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='space-y-2 mb-4'>
                            <p className='text-white'>Enjoy</p>
                            <p className='text-2xl font-semibold'>with</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40'>Best GPU</p>

                            <Button 
                            text="Browse"
                            bgColor={"bg-primary"}
                            textColor={"text-white"}
                            />

                        </div>
                    </div>
                    <img src={GPU} alt="" className='w-[350px] absolute top-1/2 -translate-y-1/2 -right-0'/>
                </div>
            {/*Second col */}
            <div className='py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>with</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Best Controller</p>

                        <Button 
                        text="Browse"
                        bgColor={"bg-white"}
                        textColor={"text-brandGreen"}
                        />

                    </div>
                </div>
                <img src={controller} alt="" className='w-[350px] absolute left-10 buttom-0 lg:top-[80px]'/>
            </div>
            {/*Third col */}
            <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-start'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>with</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>WebCam</p>

                        <Button 
                        text="Browse"
                        bgColor={"bg-white"}
                        textColor={"text-brandYellow"}
                        />

                    </div>
                </div>
                <img src={Webcam} alt="" className='w-[180px] absolute left-24 lg:top-[120px]'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Category

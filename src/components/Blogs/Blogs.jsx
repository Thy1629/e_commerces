import React from 'react'
import Heading from '../Shared/Heading'
import Choose from '../../assets/Blogs/Choose.jpg'
import perfect_gadget from '../../assets/Blogs/perfect_gadget.jpg'
import perfect_watch from '../../assets/Blogs/perfect_watch.jpg'



const BlogData = [
    {
        title: "How to choose perfect smartwatch?",
        subtitle: "Choosing the perfect smartwatch can be a daunting task with so many options available in the market. This guide will walk you through the key factors to consider, including compatibility with your smartphone, fitness tracking features, battery life, design, and price. Whether you’re looking for a smartwatch to monitor your health, stay connected on the go, or complement your personal style, this article will help you make an informed decision and find the smartwatch that suits your lifestyle perfectly.",
        published: "Jan 20, 2024 by E-Aura",
        Image: Choose,
        aosDelay:"0",
    },
    {
        title: "How to choose perfect Gadget?",
        subtitle: "Finding the perfect gadget can be overwhelming with the vast array of choices available. This guide simplifies the process by outlining key factors to consider, such as your specific needs, budget, performance, brand reliability, and future-proofing features. Whether you're looking for a smartphone, laptop, smartwatch, or any other tech device, we’ll help you weigh your options and select the gadget that fits seamlessly into your lifestyle while delivering maximum value.",
        published: "Jan 20, 2024 by E-Aura",
        Image: perfect_gadget,
        aosDelay:"200",

    },
    {
        title: "How to choose perfect Products?",
        subtitle: "Choosing the perfect product can feel challenging with so many options on the market. This guide will help you make informed decisions by focusing on essential factors such as quality, price, functionality, reviews, and your personal needs. Whether you're shopping for electronics, home appliances, or everyday essentials, this article provides practical tips to ensure you pick the right product that delivers value and satisfaction.",
        published: "Jan 20, 2024 by E-Aura",
        Image: perfect_watch,
        aosDelay:"400",
    }
]


const Blogs = () => {
  return (
    <div className='my-12'>
      <div className="container">
        {/*Header section*/}
        <Heading title="Recent News" subtitle={"Explore Our Blogs"} />
        
        {/*Blogs section*/}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
        {/*Blogs Card*/}
        {
            BlogData.map((data) => (
             <div 
             data-aos = 'fade-up'
             data-aos-delay= {data.aosDelay}
             className='bg-white dark:bg-gray-900' key={data.title}>
                {/*img section*/}
                <div className='overflow-hidden rounded-2xl mb-2'>
                   <img src={data.Image} alt="" 
                   className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'/> 
                </div>
                <div>
                {/*content section*/}
                <div className='space-y-2'>
                    <p className='text-xs text-gray-500'>{data.published}</p>
                    <p className='font-bold line-clamp-1'>{data.title}</p>
                    <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>


                </div>
                </div>
             </div>                        
            ))
        }
        </div>
      </div>
    </div>
  )
}

export default Blogs

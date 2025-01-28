import React from 'react'
import Button from '../Shared/Button';
import { useDispatch } from 'react-redux';
import { incrementByAmount } from '../../store/carts_slicer';



const ProductCard = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="mb-10 text-center text-gray-500">
        No products available
      </div>
    );
  }
  const dispatch = useDispatch()

  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        
        {/*Card Section */}
        {data.map((data) => (
          <div 
          data-aos = 'fade-up'
          data-aos-delay= {data.aosDelay}
            key={data.id} 
            className="group rounded-lg w-full max-w-xs mx-auto h-[300px] flex flex-col">
            
            <div
            
            className="bg-gray-200 relative h-64 w-full flex items-center justify-center rounded-3xl">
              <img 
                src={data.img} 
                alt={data.title}
                className="h-1/2 w-1/2 object-contain"
              />

              {/* Hover Button */}
              <div className="hidden group-hover:flex absolute inset-0 items-center justify-center bg-black/30 backdrop-blur-sm transition-all duration-300 rounded-3xl">
                <button 
                onClick={() => {
                  dispatch(incrementByAmount(1))
                }}
                  className="bg-primary text-white px-6 py-2 rounded-md uppercase hover:bg-primary/90 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="p-4 flex-1 ">
              <h2 className="font-semibold text-lg text-gray-900 dark:text-white">{data.title}</h2>
              <h2 className="font-bold text-xl mt-2 text-gray-900 dark:text-white">${data.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
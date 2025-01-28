import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import Button from '../Shared/Button';

const Popup = ({ RegisterPopup, handleRegisterPopup }) => {
  return (
    <>
      {RegisterPopup && (
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="w-[400px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-md">
              {/* Header Section */}
              <div className="flex items-center justify-between">
                <h1 className="text-semi-bold text-2xl">Login</h1>
                <div>
                  <IoCloseOutline
                    onClick={handleRegisterPopup}
                    className="text-2xl cursor-pointer"
                  />
                </div>
              </div>
              {/* Form Section */}
              <form action="">
                <div className="relative my-4">
                  <input
                    className="block w-full py-2 px-0 text-sm text-black dark:text-white bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                    type="email"
                  />
                  <label className="absolute text-gray-500 dark:text-gray-400 text-sm transition-transform -translate-y-6 scale-75 origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75">
                  </label>
                  <label className='text-gray-500' htmlFor="">Your Email</label>
                </div>

                <div className="relative my-4">
                  <input
                    className="block w-full py-2 px-0 text-sm text-black dark:text-white bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                    type="password"
                  />
                  <label className="absolute text-gray-500 dark:text-gray-400 text-sm transition-transform -translate-y-6 scale-75 origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75">
                  </label>
                  <label className='text-gray-500' htmlFor="">Your Password</label>
                </div>

                <div className="flex items-center justify-between my-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      name="rememberMe"
                      id="rememberMe"
                    />
                    <label htmlFor="rememberMe" className="text-sm">
                      Remember Me
                    </label>
                  </div>
                  <span className="text-sm text-blue-500 cursor-pointer">
                    Forget Password?
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  Login
                </button>
                <div className="mt-4 text-center">
                  <span className="text-sm">
                    New Here?{' '}
                    <span className="text-blue-500 cursor-pointer">
                      Create an Account
                    </span>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;

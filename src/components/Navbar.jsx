import React from 'react';
import logo from '../assets/Group 28.png';
import Timer from './Timer';

const Navbar = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">
       
        <div className="flex flex-col items-center md:items-start max-w-md">
          <img src={logo} alt="Logo" className="w-30 md:w-40" />

          <h1 className="mt-10 text-4xl md:text-6xl text-green-900 font-semibold font-open-sans-playfair leading-tight text-center md:text-left">
            Be <span className="text-green-600">Beautiful</span> <br />
            You need time for <br /> Perfection
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full justify-center md:justify-start items-center">
            <button className="btn bg-emerald-600 p-3 font-semibold text-white hover:bg-green-700 rounded-md w-full sm:w-auto">
              Become a member
            </button>
            <button className="text-emerald-600 border-2 border-emerald-600 p-3 font-semibold hover:bg-green-700 hover:text-white rounded-md w-full sm:w-auto">
              See pricing
            </button>
          </div>
        </div>

       
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <Timer />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

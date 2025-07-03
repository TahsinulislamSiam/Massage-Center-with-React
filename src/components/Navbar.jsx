import React from 'react';
import logo from '../assets/Group 28.png'
import girl from '../assets/10967 1.png'
import timer from '../assets/Group 1.png'

const Navbar = () => {
    return (
        <div className=''>
            

            <div className='flex justify-between'>
            <div className='p-15 ml-10 mt-10'>
                <img src={logo} alt="" />
                <h1 className=' text-7xl text-green-900 mt-10 font-open-sans-playfair font-'>Be <span className='text-green-600'>Beautiful</span> <br />
                   You need time for <br /> Perfection  </h1>

            <div className='flex gap-3 mt-20'>
                <button className='btn bg-emerald-600 p-2 font-semibold text-white hover:bg-green-700'>Become a member</button>
                <button className='text-emerald-600 border-2 border-emerald-600 p-2 font-semibold hover:bg-green-700 hover:text-white'>See pricing</button>
            </div>
                
            </div>
            
            <div className='relative'>
                <img className='' src={girl} alt="" />
                <img className='absolute bottom-7 left-1/2 transform -translate-x-4/5 px-6 py-3' src={timer} alt="" />
             </div>
        </div>


        </div>

        

        

        
    );
};

export default Navbar;
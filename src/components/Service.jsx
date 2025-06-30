import React from 'react';
import scrub from '../assets/18137_adobespark 1 (1).png'

const Service = () => {
    return (
        <div className='flex'>
            <div className='bg-[#ECFDF5] flex justify-center w-3/5 p-10'>
                <div className='space-y-4 ml-7'>
                    <p className='bg-emerald-700 text-white px-3 py-1 w-max rounded-full'>Exclusive Product</p>
                    <h2 className='text-3xl font-bold px-3 py-1'>Suger Scrubs</h2>
                    <p className='text-green-800 italic'>Sugar scrubs brighten tired, dull-looking skin to promote healthy, smooth, and flawless skin.
          Sugar scrubs also fight skin aging in a natural way.</p>
          <p className='text-green-800 italic font-semibold'>Ingredients: <span className='font-light'>brown suger, coconutc jojoba, olive,almond or grapeseed</span></p>
          <a className='text-green-800 underline font-bold' href="#">View Product</a>
            </div>
                </div>

                <div>
                    <div className='bg-emerald-700'>
                        <img className='' src={scrub} alt="" />
                    </div>
                </div>
            
        </div>
    );
};

export default Service;
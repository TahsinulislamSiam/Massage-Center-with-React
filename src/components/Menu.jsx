import React from 'react';
import spa1 from '../assets/image 1.png'
import spa2 from '../assets/image 1 (1).png'
import spa3 from '../assets/Image Container.png'

const Menu = () => {
    return (
        <div>
           
        <div className='grid grid-cols-3 gap-2'>
<div class="bg-emerald-600 p-2 text-center text-white">
  <h2 class="text-2xl font-bold mb-2">
    Swedish Deep<br/>Tissue Massage
  </h2>
  <div class="border-dashed border-b-2 border-white my-4"></div>
  <div class="flex justify-between items-center text-sm mb-4">
    <span class="bg-emerald-900 text-white px-3 py-1 rounded-full">Rp. 550.000,00</span>
    <span>SPA. 01</span>
  </div>
  <div class="">
    <img className=' mx-auto w-full' src={spa3} alt="" />
  </div>
  <a href="" class="text-white">
    <span>Select package</span>
    <span>→</span>
  </a>
</div>

      <div class="bg-[#10B981] p-2  text-center text-white">
  <h2 class="text-2xl font-bold mb-2">
    Facial Massage<br/>With Scrubs
  </h2>
  <div class="border-dashed border-b-2 border-white my-4"></div>
  <div class="flex justify-between items-center text-sm mb-4">
    <span class="bg-emerald-900 text-white px-3 py-1 rounded-full">Rp. 550.000,00</span>
    <span className=''>SPA. 01</span>
  </div>
  <div class="">
    <img className='mx-auto w-full' src={spa1} alt="" />
  </div>
  <a href="" class="text-white">
    <span>Select package</span>
    <span>→</span>
  </a>
</div>

      <div class="bg-[#059669] p-2  text-center text-white">
  <h2 class="text-2xl font-bold mb-2">
    Body Treatment<br/>With Scrubs
  </h2>
  <div class="border-dashed border-b-2 border-white my-4"></div>
  <div class="flex justify-between items-center text-sm mb-4">
    <span class="bg-emerald-900 text-white px-3 py-1 rounded-full">Rp. 550.000,00</span>
    <span>SPA. 01</span>
  </div>
  <div class="">
    <img  className='mx-auto w-full' src={spa2} alt="" />
  </div>
  <a href="" class="text-white">
    <span>Select package</span>
    <span>→</span>
  </a>
</div>
      </div>

        <div>
            <button className='btn bg-emerald-700 block mx-auto mb-2 text-white p-4 mt-5 font-semibold hover:bg-emerald-900 hover:text-white'>More services</button>
        </div>


        </div>
    );
};

export default Menu;
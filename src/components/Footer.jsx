import React from 'react';
import logo from '../assets/Group 28.png'
import phone from '../assets/feather_phone.png'

const Footer = () => {
    return (
        <div>
            <div className='mt-10 px-20 flex gap-10 justify-between mb-10'>
                <div>
                    <img src={logo} alt="" />
                    <p className='mt-8'>© 2021 <br /> All right reserved.</p>
                </div>
                <div>
                    <p className='font-bold text-green-800'>About</p>
                    <a href="">Profile</a><br />
                    <a href="">Services</a><br />
                    <a href="">Pricing</a>
                </div>
                <div>
                    <p className='font-bold text-green-800'>Article</p>
                     <a href="">Healthcare</a><br />
                    <a href="">News</a><br />
                    <a href="">Promos</a>
                </div>

                <div>
                    <p className='font-bold text-green-800'>Contact</p>
                    <div className='flex gap-2'>
                        <img src={phone} alt="" />
                    <p>01322716969</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;
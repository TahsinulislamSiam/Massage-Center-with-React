import React from 'react';
import girl from '../assets/10967 1.png'
import timer from '../assets/Group 1.png'

const Timer = () => {
    return (
        <div className='relative'>
                <img className='' src={girl} alt="" />
                <img className='absolute bottom-7 left-1/2 transform -translate-x-[90%] px-6 py-3' src={timer} alt="" />
             </div>
    );
};

export default Timer;
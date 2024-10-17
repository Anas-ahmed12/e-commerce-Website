

import React from 'react';

const Container = () => {
  return (
    <div 
      className='container mx-auto h-auto lg:h-[650px] mt-14 bg-cover bg-center abc' 
    >
      <div className='flex items-center justify-center h-full bg-black bg-opacity-50'>
        <div className='text-center p-4'>
        <p className='text-white text-base sm:text-lg'>New Collection</p>
          <h2 className='text-white text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>Be different in your way!</h2>
          <p className='text-white text-base sm:text-lg md:text-xl mt-2 font-bold'>find uniqe style.</p>
          <button className='bg-[#FAEDEB] text-black font-bold rounded mt-2 text-xs border-2px border-solid border-black px-2 py-1'>
            Shop Collection
          </button>
        </div>
      </div>
    </div>
  );
}

export default Container;


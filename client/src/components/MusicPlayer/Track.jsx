import React from 'react';

const Track = ({ 
   isPlaying, 
   isActive, 
   activeSong
    }) => (
  <div className="flex-1 flex items-center justify-start">
    <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
      <img src={
        activeSong?.images?.coverart || 
        activeSong?.images?.default || 
        `https://source.unsplash.com/random/225x225?random=${Math.random()}`
        } alt="cover art" className="rounded-full" />
    </div>
    <div className="max-w-[50%] ">
      <p className="break-words h-10 overflow-y-auto text-white font-bold text-lg">
        {
           activeSong?.title ||
           activeSong?.heading?.title || 
            'No active Song'}
      </p>
      <p className="break-words text-gray-300">
        {
          activeSong?.subtitle || 
          activeSong?.heading?.subtitle || 
          'No active Song'
        }
      </p>
    </div>
  </div>
);

export default Track;

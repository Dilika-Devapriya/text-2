import React from 'react';

const UPSCard = ({ image, cname, description }) => {
  return (
    <div className='card text-center group p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-300'>
      <div className='flex justify-center items-center mb-4'>
        <div className='w-full h-48 flex justify-center items-center'>
          <img src={image} alt={cname} className='max-w-full max-h-full object-contain' />
        </div>
      </div>
      <div>
        <div className='text-2xl font-bold text-red-600 mb-2'>{cname}</div>
        <div className='text-gray-700'>{description}</div>
      </div>
    </div>
  );
};

export default UPSCard;

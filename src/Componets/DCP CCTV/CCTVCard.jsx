import React from 'react';

const CCTVCard = ({ image, cname, description, onButtonClick }) => {
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
        <button
          onClick={onButtonClick}
          className='mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300'
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CCTVCard;

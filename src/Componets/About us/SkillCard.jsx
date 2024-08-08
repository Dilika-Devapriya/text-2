import React from 'react';

const SkillCard = ({ icon, cname, description }) => {
  return (
    <div className='card text-center group p-4 bg-white rounded-lg shadow-md transition-shadow duration-300 h-64'>
      <div className='flex justify-center items-center mb-4'>
        {icon}
      </div>
      <div>
        <div className='text-2xl font-bold text-red-600 mb-2'>{cname}</div>
        <div className='text-gray-700'>{description}</div>
      </div>
    </div>
  );
};

export default SkillCard;

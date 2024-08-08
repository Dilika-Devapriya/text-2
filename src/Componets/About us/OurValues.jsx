import React from 'react';
import { PiLightbulbFill } from "react-icons/pi";
import { BsPersonFill } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillCard from './SkillCard';

const skillsData = [
  {
    cname: "Innovation",
    icon: (<PiLightbulbFill className='text-5xl text-red-600 ' />),
    description: "We're committed to staying ahead of the curve by embracing the latest technology and innovations in power supply",
  },
  {
    cname: "Customer-centricity",
    icon: (<BsPersonFill className='text-5xl text-red-600 ' />),
    description: "We put our customers at the heart of everything we do, understanding their needs and providing personalized solutions that meet their requirements.",
  },
  {
    cname: "Quality",
    icon: (<IoDiamond className='text-5xl text-red-600 ' />),
    description: "We're dedicated to delivering high-quality products and services that exceed our customers' expectations.",
  },
  {
    cname: "Reliability",
    icon: (<FaHandshake className='text-5xl text-red-600 ' />),
    description: "We're committed to providing uninterrupted power supply solutions that are reliable, efficient, and cost-effective.",
  },
];

const OurValues = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className='py-14 sm:min-h-[600px] sm:grid sm:place-items-center bg-gray-100'>
      <div className='container'>
        <div className='pb-12'>
          <h1 className='text-6xl font-extrabold text-center sm:text-6xl text-red-600'>OUR VALUES</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 ' ref={ref}>
          {skillsData.map((skill) => (
            <motion.div
              key={skill.cname}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 1 }}
            >
              <SkillCard
                icon={skill.icon}
                cname={skill.cname}
                description={skill.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurValues;

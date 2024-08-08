import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-gray-300 font-poppins py-5" ref={ref}>
      <div className="container py-14 gap-12">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center space-y-5">
            <h1 className='text-6xl font-extrabold text-center font-poppins sm:text-5xl uppercase text-red-600'>
            DCP Uninterruptible Power Supply: Protect Your Devices and Stay Online 
            </h1>
            <p className='text-[20px] text-gray-700'>
            Stay connected and keep working even during outages Protect your valuable devices from damage caused by power surges and spikes Enjoy peace of mind knowing your systems are always up and running 
            </p>
            <p className='text-[20px] text-gray-700 font-semibold'>
            We offer a range of UPS solutions to fit your unique needs, from compact desktop units to large-scale data center solutions. Browse our selection today and find the perfect fit for your business or home office. 
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section;

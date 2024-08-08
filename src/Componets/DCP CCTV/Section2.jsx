import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section2 = () => {
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
              Our cutting-edge video surveillance solutions are designed to provide you with a clear 
              view of your world, one frame at a time. Whether you're a business owner looking to protect your assets,
              a homeowner seeking peace of mind, or a security professional working to keep communities safe, our advanced 
              technology and expertise will give you the confidence to know that your world is secure.
            </p>
            <p className='text-[20px] text-gray-700 font-semibold'>
              Explore our solutions today and discover how DCP can help you see the world in a whole new light.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section2;

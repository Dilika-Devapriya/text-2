import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Banner2 = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-red-600  py-5" ref={ref}>
      <div className="container py-14 gap-12">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center space-y-5">
            <h1 className='text-6xl font-extrabold text-center  sm:text-6xl text-white uppercase'>Join the DCP family</h1>
            <p className='text-[22px] text-white'>Today and experience the difference that comes with being always connected!</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Banner2;

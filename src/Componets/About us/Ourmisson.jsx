import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Bannerimage from '../../Assests/about.jpg';

const OurMission = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div>
      <section className="py-8">
        <div className="container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12" ref={ref}>
          {/* Banner image */}
          <motion.div 
            className=''
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 1 }}
          >
            <img className="W-[300px] md:w-[500px] position" src={Bannerimage} />
          </motion.div>
          {/* Banner Text Info */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 1 }}
          >
            <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
              <h1 className="text-3xl uppercase lg:text-6xl :text-6xl font-extrabold  text-red-600">Our Mission</h1>
              <p className='text-gray-500 text-[22px]'>
                Our mission is to empower our customers by providing innovative power supply solutions 
                that meet their unique needs and exceed their expectations. We strive to build long-term
                relationships with our customers, partners, and communities by delivering high-quality products
                and services that make a positive impact on their lives.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default OurMission;

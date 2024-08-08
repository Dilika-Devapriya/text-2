import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Pattern from '../../Assests/pattern.jpg';

const bannerImg = {
  backgroundImage: `url(${Pattern})`,
  backgroundPosition: "center",
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Banner3 = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="container pt-28 pb-7">
      <motion.div
        className="text-black py-5 sm:min-h-[100px] sm:grid sm:place-items-center rounded-3xl"
        style={bannerImg}
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        <div className="justify-center items-center">
          <div className="space-y-6 max-w-xl mx-auto">
            <h1 className="text-xl text-center sm:text-6xl font-bold font-serif uppercase text-white">
              DCP UPS
            </h1>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner3;

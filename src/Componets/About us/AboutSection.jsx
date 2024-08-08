import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-gray-100  py-5">
      <div className="container py-14 gap-12" ref={ref}>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center space-y-5">
            <p className='text-2xl text-red-600 font-extrabold '>
              Launched in 1999, DCP has been the number one household name in
              Sri Lanka for delivering uninterrupted power supply solutions.
              Our commitment to innovation and technology has enabled us to
              stay ahead of the curve, providing our customers with the best
              products at competitive prices.
            </p>
            <p className='text-[22px] text-gray-500'>
              Our team of experts is dedicated to understanding your unique requirements and providing
              personalized solutions that meet both your budget and needs. With years of experience and a passion for excellence,
              we have built a reputation for reliability, customer satisfaction, and after-sales service.
            </p>
            <p className='text-[22px] text-gray-500'>
              At DCP, we believe that staying connected is key to a better life.
              That's why we're committed to providing you with the power you need to stay connected, always.
              Whether you're a residential or commercial customer, we have a solution that's tailored just for you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;

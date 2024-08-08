import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Bannerimage from '../Assests/about.jpg';

const About = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      <section className="bg-gray-100s py-8">
        <div className="container py-14 grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6" ref={ref}>
          <motion.div 
            className=""
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 1 }}
          >
            <img className="w-[300px] md:w-[400px]" src={Bannerimage} alt="About Us" />
          </motion.div>
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 1 }}
          >
            <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
              <h1 className="text-3xl uppercase lg:text-7xl font-extrabold  text-red-600">About Us</h1>
              <p > 
                Launched in 1999, DCP has been the number one household name in
                Sri Lanka for delivering uninterrupted power supply solutions.
                Our commitment to innovation and technology has enabled us to
                stay ahead of the curve, providing our customers with the best
                products at competitive prices.
                <br /><br />
                Our team of experts is dedicated to understanding your unique
                requirements and providing personalized solutions that meet
                both your budget and needs. With years of experience and a
                passion for excellence, we have built a reputation for
                reliability, customer satisfaction, and after-sales service.
              </p>
              <motion.button
                className="border-2 border-[#ff2525] text-[#ff2525] px-6 py-2 rounded-md hover:bg-[#ff2525] hover:text-white"
                whileHover={{ scale: 1.1 }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate('/aboutus');
                }}
              >
                View more
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;

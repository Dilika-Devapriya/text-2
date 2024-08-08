import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CCTVCard from './CCTVCard';
import CCTV1 from '../../Assests/CCTV 1 (1).png';
import CCTV2 from '../../Assests/CCTV 2.png';
import CCTV3 from '../../Assests/DCP-4CH-removebg-preview 1.png';
import CCTV4 from '../../Assests/DCP XVR2100 L.png';
import CCTV5 from '../../Assests/DCP XVR2108 S.png';
import CCTV6 from '../../Assests/DCP XVR2116 S.png';

const CCTVcard = [
  { image: CCTV1, cname: "DCP B1200P 0360B", description: "( 2MP HD Analog IR Bullet Camera )", url: "dcpcctv/details/DCP-B1200P-0360B" },
  { image: CCTV2, cname: "DCP B1200M 0280B", description: "( 2MP HD Analog IR Bullet Camera )", url: "dcpcctv/details/DCP-B1200M-0280B" },
  { image: CCTV3, cname: "DCP XVR2104 S", description: "( 4 CH Hybrid DVR )", url: "dcpcctv/details/DCP-XVR2104-S" },
  { image: CCTV4, cname: "DCP XVR2100 L", description: "( 1080P Hybrid DVR )", url: "dcpcctv/details/DCP-XVR2100-L" },
  { image: CCTV5, cname: "DCP-XVR2108-S", description: "( 8/16 CH Hybrid DVR )", url: "dcpcctv/details/DCP-XVR216-S" },
  { image: CCTV6, cname: "DCP XVR2116 S", description: "( 8/16 CH Hybrid DVR )", url: "dcpcctv/details/DCP-XVR2116-S" },
];

const Cctv = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className='py-14 sm:min-h-[600px] sm:grid sm:place-items-center bg-gray-100'>
      <div className='container'>
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4'
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          {CCTVcard.map((skill) => (
            <CCTVCard
              key={skill.cname}
              image={skill.image}
              cname={skill.cname}
              description={skill.description}
              onButtonClick={() => handleButtonClick(skill.url)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Cctv;

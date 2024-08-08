import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import UPSCard from './UPSCard';
import UPS1 from '../../Assests/ups 3.png';
import UPS2 from '../../Assests/ups 1.png';
import UPS3 from '../../Assests/ups 4.png';
import UPS4 from '../../Assests/ups-7.png';
import UPS6 from '../../Assests/ups 2.png';
import UPS7 from '../../Assests/ups 5.png';
import UPS8 from '../../Assests/ups 6.png';

const UPScard = [
  { image: UPS1, cname: "DCP Version 2.0", description: "( 1Ph in -1Ph out )", url: "dcpups/details2/DCPVersion20"  },
  { image: UPS2, cname: "DCP Power (Tower )", description: "( 1Ph in -1Ph out )", url: "dcpcctv/details2/DCP-POWER-TOWER"  },
  { image: UPS3, cname: "DCP Power RT Rackmount", description: "( 3 Ph in - 1 Ph out )", url: "dcpcctv/details2/DCP-POWER-RT"  },
  { image: UPS4, cname: "DCP Power 3100", description: "( 3 Ph in - 1 Ph out )", url: "dcpcctv/details2/DCP-POWER-3100"  },
  { image: UPS6, cname: "DCP Power 3300", description: "( 1Ph in -1Ph out )", url: "dcpcctv/details2/DCP-POWER-3300"  },
  { image: UPS7, cname: "DCP - DC MINI UPS", description: "( DCP DC 418-DC UPS )", url: "dcpcctv/details2/DCP-DCMINI-UPS"  },
  { image: UPS8, cname: "DCP BATTERY ", description: "( DCP 12V/7AH TO 200AH )", url: "dcpcctv/details2/DCP-BATTERY"  },
];

const Ups = () => {
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
              {UPScard.map((skill) => (
                <UPSCard
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

export default Ups;

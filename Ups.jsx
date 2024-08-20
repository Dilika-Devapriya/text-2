import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import UPSCard from './UPSCard';
import UPS1 from '../../Assests/2 (2).png';
import UPS2 from '../../Assests/1.png';
import UPS3 from '../../Assests/ups 4.png';
import UPS4 from '../../Assests/ups-7.png';
import UPS6 from '../../Assests/ups 2.png';
import UPS7 from '../../Assests/ups 5.png';
import UPS8 from '../../Assests/ups 6.png';

const initialUPScard = [
  // Line Interactive UPS
  { image: UPS1, cname: "DCP Line Interactive 650VA / 850VA", description: "(1 Ph in -1Ph out )", category: "Line Interactive", url: "dcpups/details2/DCPVersion20" },
  { image: UPS1, cname: "DCP Line Interactive 1000VA / 1200VA", description: "(1 Ph in -1Ph out )", category: "Line Interactive", url: "dcpups/details2/DCPVersion20" },
  { image: UPS1, cname: "DCP Line Interactive 2000VA / 3000VA", description: "(1 Ph in -1Ph out )", category: "Line Interactive", url: "dcpups/details2/DCPVersion20" },

  //Online Single Phase UPS 
  { image: UPS2, cname: "DCP Power 1KVA / 2KVA / 3KVA", description: "( 1Ph in -1Ph out )", category: "Online(Single Phase)", url: "dcpcctv/details2/DCP-POWER-TOWER" },
  { image: UPS2, cname: "DCP Power 6KVA / 10KVA", description: "( 1Ph in -1Ph out )", category: "Online(Single Phase)", url: "dcpcctv/details2/DCP-POWER-TOWER" },
  { image: UPS2, cname: "DCP Power 15KVA / 120KVA", description: "( 1Ph in -1Ph out )", category: "Online(Single Phase)", url: "dcpcctv/details2/DCP-POWER-TOWER" },

   //Online Three  Phase UPS 
  { image: UPS6, cname: "DCP Power 3300 10KVA", description: "( 3 Ph in - 3Ph out )", category: "Online(Three Phase)", url: "dcpcctv/details2/DCP-POWER-3300" },
  { image: UPS6, cname: "DCP Power 3300 15KVA", description: "( 3 Ph in - 3Ph out )", category: "Online(Three Phase)", url: "dcpcctv/details2/DCP-POWER-3300" },
  { image: UPS6, cname: "DCP Power 3300 20KVA", description: "( 3Ph in - 3Ph out )", category: "Online(Three Phase)", url: "dcpcctv/details2/DCP-POWER-3300" },
  { image: UPS4, cname: "DCP Power 3100", description: "( 3 Ph in - 3Ph out )", category: "Online(Three Phase)", url: "dcpcctv/details2/DCP-POWER-3100" },

  //RackMount UPS's
  { image: UPS3, cname: "DCP Power RT 1KVA", description: "( 3 Ph in - 1 Ph out )", category: "Rack Mount UPS", url: "dcpcctv/details2/DCP-POWER-RT" },
  { image: UPS3, cname: "DCP Power RT 2KVA", description: "( 3 Ph in - 1 Ph out )", category: "Rack Mount UPS", url: "dcpcctv/details2/DCP-POWER-RT" },
  { image: UPS3, cname: "DCP Power RT 3KVA", description: "( 3 Ph in - 1 Ph out )", category: "Rack Mount UPS", url: "dcpcctv/details2/DCP-POWER-RT" },
  { image: UPS3, cname: "DCP Power RT 6KVA", description: "( 3 Ph in - 1 Ph out )", category: "Rack Mount UPS", url: "dcpcctv/details2/DCP-POWER-RT" },
  { image: UPS3, cname: "DCP Power RT 10KVA", description: "( 3 Ph in - 1 Ph out )", category: "Rack Mount UPS", url: "dcpcctv/details2/DCP-POWER-RT" },
  { image: UPS3, cname: "DCP Power 3100RTRT 6KVA", description: "( 3 Ph in - 1 Ph out )", category: "Rack Mount UPS", url: "dcpcctv/details2/DCP-POWER-RT" },
  { image: UPS3, cname: "DCP Power 3100RTRT 10KVA", description: "( 3 Ph in - 1 Ph out )", category: "Rack Mount UPS", url: "dcpcctv/details2/DCP-POWER-RT" },
  
  //Mini UPS's
  { image: UPS7, cname: "DCP - DC MINI UPS", description: "( DCP DC 418-DC UPS )", category: "Mini Ups", url: "dcpcctv/details2/DCP-DCMINI-UPS" },

  //VRLA Batteries
  { image: UPS8, cname: "DCP 12V-7Ah", description: "( DCP 12V/7AH TO 200AH )", category: "VRLA Batteries", url: "dcpcctv/details2/DCP-BATTERY" },
  { image: UPS8, cname: "DCP 12V-9Ah", description: "( DCP 12V/7AH TO 200AH )", category: "VRLA Batteries", url: "dcpcctv/details2/DCP-BATTERY" },
  { image: UPS8, cname: "DCP 12V-12Ah", description: "( DCP 12V/7AH TO 200AH )", category: "VRLA Batteries", url: "dcpcctv/details2/DCP-BATTERY" },
  { image: UPS8, cname: "DCP 12V-18Ah", description: "( DCP 12V/7AH TO 200AH )", category: "VRLA Batteries", url: "dcpcctv/details2/DCP-BATTERY" },
  { image: UPS8, cname: "DCP 12V-26Ah", description: "( DCP 12V/7AH TO 200AH )", category: "VRLA Batteries", url: "dcpcctv/details2/DCP-BATTERY" }
];

const Ups = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [UPScard, setUPScard] = useState(initialUPScard);  // Manage UPScard as state
  const [filteredItems, setFilteredItems] = useState(UPScard);

  const filters = ["Line Interactive", "Online(Single Phase)", "Online(Three Phase)", "Rack Mount UPS", "Mini Ups", "VRLA Batteries"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilter === selectedCategory) {
      setSelectedFilter(null);
    } else {
      setSelectedFilter(selectedCategory);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilter, UPScard]);  // Add UPScard as a dependency

  const filterItems = () => {
    if (selectedFilter) {
      const tempItems = UPScard.filter((item) =>
        item.category === selectedFilter
      );
      setFilteredItems(tempItems);
    } else {
      setFilteredItems(UPScard);
    }
  };

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className='py-14 sm:min-h-[600px] sm:grid sm:place-items-center bg-gray-100'>
      <div className='container'>
        <div className="buttons-container my-6 flex justify-center space-x-2">
          {filters.map((category, idx) => (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleFilterButtonClick(category)}
              className={`px-6 py-4 border-2 border-[#525252] text-black rounded hover:bg-zinc-700 hover:text-white transition-colors duration-300 items-center ${selectedFilter === category ? "bg-red-800 text-white" : ""}`}
              key={`filters-${idx}`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4'
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          {filteredItems.map((skill) => (
            <motion.div
              key={skill.cname}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <UPSCard
                image={skill.image}
                cname={skill.cname}
                description={skill.description}
                onButtonClick={() => handleButtonClick(skill.url)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Ups;

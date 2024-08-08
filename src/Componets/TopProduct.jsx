import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import Image1 from "../Assests/2 (2).png";
import Image2 from "../Assests/1.png";
import Image3 from "../Assests/ups 5.png";
import Image4 from "../Assests/CCTV 1 (1).png";
import Image5 from "../Assests/CCTV 2.png";

const TopProduct = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const MenuData = [
    {
      id: 1,
      cname: "DCP Version 2.0",
      discription: "( 1Ph in -1Ph out )",
      image: Image1,
    },
    {
      id: 2,
      cname: "DCP POWER (TOWER)",
      discription: "( 1Ph in -1Ph out )",
      image: Image2,
    },
    {
      id: 3,
      cname: "DCP -DC MINI UPS",
      discription: "( DCP DC 418-DC UPS )",
      image: Image3,
    },
    {
      id: 4,
      cname: "DCP B1200P 0360B",
      discription: "( 2MP HD Analog IR Bullet Camera )",
      image: Image4,
    },
    {
      id: 5,
      cname: "DCP B1200M 0280B",
      discription: "( 2MP HD Analog IR Bullet Camera )",
      image: Image5,
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16 bg-red-600 text-white" ref={ref}>
      <div className="container">
        {/* Header Section */}
        <motion.div
          className="mb-10 space-y-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl uppercase lg:text-8xl font-extrabold  text-center">
            Our Top Products
          </h1>
          
        </motion.div>
        {/* Slider Section */}
        <Slider {...settings}>
          {MenuData.map((menu) => (
            <motion.div
              key={menu.id}
              className="my-15 mx-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 1 }}
            >
              <div
                className="flex flex-col items-center gap-4 py-8 px-6 mx-4 rounded-xl bg-red-500 relative"
                style={{ width: "300px", height: "400px" }}
              >
                {/* Image section */}
                <div className="mb-3 flex justify-center h-[200px]">
                  <img
                    src={menu.image}
                    alt={menu.cname}
                    className="w-auto max-h-full object-contain"
                  />
                </div>
                {/* Text content section */}
                <div className="flex flex-col items-center text-center gap-4">
                  <h1 className="text-xl font-semibold">{menu.cname}</h1>
                  <p className="text-sm">{menu.discription}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopProduct;

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import UPS4 from "../Assests/ups-range.png";
import CCTV1 from "../Assests/CCTV-RANGE.png";
import UPSr from "../Assests/ups-range-1.png";

const Hero = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const HeroData = [
    {
      id: 1,
      img: UPS4,
      subtitle: "The Power of",
      title: "Uninterrupted",
      title2: "Connection!",
    },
    {
      id: 2,
      img: CCTV1,
      subtitle: "DCP's Video Surveillance Solutions Securing",
      title: " your world",
      title2: "one frame at a time",
    },
    {
      id: 3,
      img: UPSr,
      subtitle: "The Power of",
      title: "Uninterrupted",
      title2: "Connection!",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container py-5" ref={ref}>
      <div className="overflow-hidden rounded-3xl min-h[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* Text content section */}
                  <motion.div
                    className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-5 text-center sm:text-left order-2 sm:order-1 relative z-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                    transition={{ duration: 1 }}
                  >
                    <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold">{data.subtitle}</h1>
                    <h1 className="text-5xl uppercase sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
                    <h1 className="text-5xl uppercase text-white md:text-[100px] xl:text-[90px] font-bold ">{data.title2}</h1>
                  </motion.div>
                  {/* Image section */}
                  <motion.div
                    className="order-1 sm:order-2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                    transition={{ duration: 1 }}
                  >
                    <div>
                      <img
                        src={data.img}
                        alt=""
                        className="w-[500px] sm:w-[700px] h-[600px] sm:h[500px] sm:scale-105 lg:scale-x-95
                        object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;

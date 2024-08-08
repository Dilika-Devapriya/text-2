import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Pattern from "../Assests/pattern.jpg";

const bannerImg = {
  backgroundImage: `url(${Pattern})`,
  backgroundPosition: "center",
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Blog = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <div className="container py-5">
      <div
        className="text-black py-5 sm:min-h-[100px] sm:grid sm:place-items-center rounded-3xl"
        style={bannerImg}
      >
        <div className="justify-center items-center">
          <div className="space-y-6 max-w-xl mx-auto">
            <motion.h1
              className="text-2xl text-center sm:text-8xl font-extrabold uppercase text-white"
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variants}
            >
              Blog
            </motion.h1>
            <motion.p
              className="text-center sm:text-4xl text-white"
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variants}
            >
              Make Informed decisions! 
 
            </motion.p>
            <div className="flex justify-center">
              <motion.button
                className="border-2 border-[#ffffff] text-[#ffffff] px-6 py-2 rounded-md hover:bg-[#ff2525] hover:text-white"
                whileHover={{ scale: 1.1 }}
                onClick={() => window.scrollTo(0, 0)}
              >
                View more
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

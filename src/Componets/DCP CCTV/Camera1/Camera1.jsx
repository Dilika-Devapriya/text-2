import React from "react";
import activeImg from "../../../Assests/CCTV 1 (1).png";
import downloaf from "../../../Assests/DCP-B1200P-0360B.pdf"

const Camera1 = () => {
  return (
    <div className="bg-gray-200">
      <div className="container py-9">
        <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
          <div className="flex flex-col gap-6 lg:w-2/4">
            <img
              src={activeImg}
              alt=""
              className="w-300 rounded-xl" // Adjust the size using Tailwind CSS classes
            />
          </div>
          {/* ABOUT */}
          <div className="flex flex-col gap-4 lg:w-2/4">
            <div>
              <span className="text-red-600 font-semibold">
                ( 2MP HD Analog IR Bullet Camera )
              </span>
              <h1 className="text-6xl font-bold">DCP B1200P 0360B</h1>
            </div>
            <p className="text-gray-700 text-[20px] py-">
              This device provides a 1080P real-time image with high resolution
              and true color, supporting AHD/TVI/CVI/CVBS standards for lossless
              video output. It utilizes CMOS progressive scan technology to
              perfectly capture moving objects and features an OSD menu,
              high-speed transmission over long distances, and real-time video.
              Additionally, it automatically switches from color to black and
              white in low light, supports ICR switch for true day/night
              functionality, digital WDR, noise reduction, and offers IR night
              vision up to 10 to 20 meters with IP66 ingress protection. It also
              supports COC
            </p>
            <div className="flex flex-row items-center gap-12 py-6">
              <a
                href={downloaf} // Path to your PDF file
                download="" // This attribute triggers the download
                className="bg-red-600 hover:bg-red-500 text-white font-semibold py-3 px-16 rounded-xl h-full text-center"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Camera1;

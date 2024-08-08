import React from 'react'
import activeImg from "../../../Assests/CCTV 2.png";
import downloaf from "../../../Assests/DCP-B1200M-0280B.pdf"

const Camera2 = () => {
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
              2MP HD Analog IR Bullet Camera
              </span>
              <h1 className="text-6xl font-bold">DCP-B1200M-0280B</h1>
            </div>
            <p className="text-gray-700 text-[20px] py-">
            The 1080P real-time imaging technology provides high resolution and 
            true color for a superior visual experience. Supporting AHD, TVI, CVI,
             and CVBS standards, it ensures lossless video output at 1080P Full HD
              quality. Equipped with a CMOS progressive scan sensor, it captures
               moving objects with precision. The device includes an OSD menu for
                easy configuration and supports high-speed, long-distance, real-time
                 transmission. It features automatic color-to-black-and-white switching
                  at low illumination and an ICR switch for true day/night functionality
                   with digital WDR. Additionally, it offers a noise reduction function
                    and a 20 to 30-meter IR night view distance. With an IP67 rating, it 
                    is designed for durability and reliability, and it supports COC for 
                    seamless control over coaxial cables.
            </p>
            <div className="flex flex-row items-center gap-12 py-6">
              <a
                href={downloaf} // Path to your PDF file
                download="DCP-B1200M-0280B" // This attribute triggers the download
                className="bg-red-600 hover:bg-red-500 text-white font-semibold py-3 px-16 rounded-xl h-full text-center"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Camera2

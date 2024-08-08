import React from 'react'
import activeImg from "../../../Assests/DCP-4CH-removebg-preview 1.png";
import downloaf from "../../../Assests/DCP 4CH.pdf"

const Camera3 = () => {
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
              4 CH Hybrid DVR
              </span>
              <h1 className="text-6xl font-bold">DCP-XVR2104-S</h1>
            </div>
            <p className="text-gray-700 text-[20px] py-">
            DCP-XVR2104-S is a 4 CH 1080P high definition DVR with ability to
connect analog and IP cameras simultaneously, which adopts the 
standard H.265 high profile compression format and the advanced SOC 
technique to ensure real time recording in each channel and realize 
outstanding robustness of the system. supports 4 CH 
video input, 1 CH audio input, simultaneous 4 CH playback. 
The series of product can meet different security requirements of home, 
financial, commerce, enterprise, transportation and government, etc.
Hybrid
            </p>
            <div className="flex flex-row items-center gap-12 py-6">
              <a
                href={downloaf} // Path to your PDF file
                download="DCP-XVR2104-S" // This attribute triggers the download
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

export default Camera3

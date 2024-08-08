import React from 'react'
import activeImg from "../../../Assests/ups 4.png";
import downloaf from "../../../Assests/3 DCP POWER RT 1-10KVA 0.9PF2023.pdf"

const UPS3 = () => {
  return (
    <div className="bg-gray-200">
      <div className="container py-9">
        <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
          <div className="flex flex-col gap-4 lg:w-2/4">
            <img
              src={activeImg}
              alt=""
              className="w-100 pl-1 rounded-xl" // Adjust the size using Tailwind CSS classes
            />
          </div>
          {/* ABOUT */}
          <div className="flex flex-col gap-4 lg:w-2/4">
            <div>
              <span className="text-red-600 font-semibold">
              3 Ph in - 1 Ph out 
              </span>
              <h1 className="text-6xl font-bold">DCP Power RT Rackmount </h1>
              
            </div>
            <p className="text-gray-700 text-[20px] py-">
            The intelligent CPU-controlled UPS features a wide input range of 220V ± 25% 
            and offers full AVR functionality. It supports cold starts and is highly compatible 
            with generators. The UPS provides automatic battery charging even when it is off and 
            includes surge protection. With robust electromagnetism compatibility, it does not interfere 
            with connected loads. An optional software monitoring system with USB connectivity allows for 
            user-friendly monitoring of input/output voltages, battery status, and load levels. The UPS 
            ensures full-time EMI/RFI suppression, eliminating high-frequency electrical noise that can 
            harm computers and cause data corruption. Additionally, it offers full protection against 
            over-voltage and low-voltage conditions.
            </p>
            <div className="flex flex-row items-center gap-12 py-6">
              <a
                href={downloaf} // Path to your PDF file
                download="DCP LINE INTERCATIVE" // This attribute triggers the download
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

export default UPS3

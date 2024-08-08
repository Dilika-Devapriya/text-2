import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaPhoneAlt,
  
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Logo from "../Assests/DCP-WHITE-LOGO.png";
import {  Link } from "react-router-dom";




const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 pt-12 pb-8 text-white ">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
            {/* company details section */}
            <div className="space-y-6">
              <div>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="" className="h-16" />
              </Link>
            </div>
              <p className="text-sm max-w-[300px]">
                Launched in 1999, DCP has been the number one household name in
                Sri Lanka for delivering uninterrupted power supply solutions.
                Our commitment to innovation and technology has enabled us to
                stay ahead of the curve, providing our customers with the best
                products at competitive prices.
              </p>
            </div>
            {/* footer links section */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Quick Link</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <ul className="space-y-2">
                    <li>
                      <a href="">HOME</a>
                    </li>
                    <li>
                      <a href="">ABOUT US</a>
                    </li>
                    <li>
                      <a href="">DCP UPS</a>
                    </li>
                    <li>
                      <a href="">DCP CCTV</a>
                    </li>
                    <li>
                      <a href="">BLOG</a>
                    </li>
                    <li>
                      <a href="">CONTACT US</a>
                    </li>
                  </ul>
                </div>
                
              </div>
            </div>
            {/* socila links section */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-3xl font-bold">Contact us</h1>
                <p className="flex items-center gap-2">
                  <FaPhoneAlt /> (+94) 117 520 000
                </p>
                <p className="flex items-center gap-2 mt-2">
                  <FaMapLocation />
                  No 58 42nd Lane, Colombo 06, Sri Lanka
                </p>
                <p className="flex items-center gap-2 mt-2">
                <MdEmail />

                info@debugisp.net
                </p>
              </div>

              <div className="space-y-2">
              <h1 className="text-3xl font-bold">Follow us</h1>
              <div className="flex items-center gap-3">
                <FaFacebook className="text-3xl hover:scale-105 duration-300" />
                <FaLinkedin className="text-3xl hover:scale-105 duration-300" />
                
              </div>
              </div>
            </div>
          </div>
          {/* copyright section */}
          <p className="text-white text-center mt-8 border-t-2 pt-8">
            ©Copyright 2024 DCP Sri Lanka. All Right Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

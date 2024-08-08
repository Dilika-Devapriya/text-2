import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../Assests/DCP-LOGO-removebg-preview 1.png";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-full bg-white text-black shadow-md z-50"> {/* Added z-50 for higher z-index */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
          <div className="container py-[2px] sm:block hidden">
            <div className="flex justify-between">
              <p>Address: No 58 42nd Lane, Colombo 06, Sri Lanka</p>
              <p>Mobile: (+94) 117 520 000</p>
            </div>
          </div>
        </div>
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="" className="h-16" />
              </Link>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-6">
                <li className="py-4 hover:text-red-600">
                  <NavLink to="/" activeClassName="active" onClick={() => window.scrollTo(0, 0)}>
                    HOME
                  </NavLink>
                </li>
                <li className="py-4 hover:text-red-600">
                  <NavLink to="/aboutus" onClick={() => window.scrollTo(0, 0)}>
                    ABOUT US
                  </NavLink>
                </li>
                
                <li className="py-4 hover:text-red-600">
                  <NavLink to="/dcpups" onClick={() => window.scrollTo(0, 0)}>
                    DCP UPS
                  </NavLink>
                </li>
                <li className="py-4 hover:text-red-600">
                  <NavLink to="/dcpcctv" onClick={() => window.scrollTo(0, 0)}>
                    DCP CCTV
                  </NavLink>
                </li>
                <li className="py-4 hover:text-red-600">
                  <NavLink to="/blog" onClick={() => window.scrollTo(0, 0)}>
                    BLOG
                  </NavLink>
                </li>
                <li className="py-4 hover:text-red-600">
                  <NavLink to="/contactus" onClick={() => window.scrollTo(0, 0)}>
                    CONTACT US
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
                ) : (
                  <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </div>
    </>
  );
};

export default Navbar;
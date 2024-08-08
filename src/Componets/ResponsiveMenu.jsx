import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavbarLinks } from "./Navabar"

const navbarlinks =[
    {
        cname: "HOME",
        link:"/",
    },
    {
        cname: "ABOUT US",
        link:"/aboutus",
    },
    {
        cname: "BLOG",
        link:"/blog",
    },
    {
        cname: "DCP UPS",
        link:"/dcpups",
    },
    {
        cname: "DCP CCTV",
        link:"/dcpcctv",
    },
    {
        cname: "CONTACT US",
        link:"/contactus",
    },

]

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between
       bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black 
       transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="Navbar_card">
        {/* Navlinks section */}
        <div className="text-white mt-12">
        <ul className="space-y-4 text-xl">
            {navbarlinks.map((data) => (
              <li>
                <Link
                  to={data.link}
                  onClick={() => setShowMenu(false)}
                  className="mb-5 inline-block"
                >
                  {data.cname}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;

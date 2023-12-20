import React, { useState } from "react";
import { CrossIcon, HomeIcon } from "./icon";
import { Link, NavLink } from "react-router-dom";

const MyNavbar = () => {
  const [nav, setnav] = useState(true);
  if (nav) {
    document.body.classList.remove("overflow_hidden");
  } else {
    document.body.classList.add("overflow_hidden");
  }
  return (
    <>
      <header className="max-w-[1124px] mx-auto px-3">
        <nav>
          <div className="flex justify-between items-center lg:pt-16 md:pt-10 pt-3">
            <Link
              to="/"
              className=" font-Merriweather font-black sm:text-xl hover:scale-125 duration-300 text-lg leading-[normal] text-dark-black"
            >
              Food Ninja
            </Link>
            <ul
              className={`${
                nav
                  ? "flex items-center nav_sm gap-5 m-0 p-0"
                  : "flex justify-center nav_sm nav_show items-center gap-5 p-0"
              }`}
            >
              <li onClick={() => setnav(true)}>
                <Link
                  to="/foodblog"
                  className="cursor-pointer font-Roboto text-md font-normal leading-[normal] text-dark-gray hover:scale-110 duration-300 hover:text-red-500"
                >
                  Blog
                </Link>
              </li>
              <li
                onClick={() => setnav(true)}
                className="cursor-pointer font-Roboto text-md font-normal leading-[normal] text-dark-gray hover:scale-110 duration-300 hover:text-red-500"
              >
                About
              </li>
              <li
                onClick={() => setnav(true)}
                className="cursor-pointer font-Roboto text-md font-normal leading-[normal] text-dark-gray hover:scale-110 duration-300 hover:text-red-500"
              >
                Contact
              </li>
              <li onClick={() => setnav(true)} className="cursor-pointer">
                <button className="bg-dark-blue rounded-[20px] text-white py-2 px-4 font-Roboto text-md font-normal leading-[normal] duration-300 hover:rotate-12 hover:scale-110">
                  Log in
                </button>
              </li>
              <li className="md:hidden block" onClick={() => setnav(true)}>
                <button className="absolute top-3 right-3">
                  <CrossIcon />
                </button>
              </li>
            </ul>
            <button className="md:hidden block" onClick={() => setnav(false)}>
              <HomeIcon />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default MyNavbar;

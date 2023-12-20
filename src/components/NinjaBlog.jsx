import React from "react";
import water from "..//assets/png/water.png";
import food from "../assets/png/food.png";
import men2 from "../assets/png/men-2.png";
import { SearchIcon } from "./icon";

const NinjaBlog = () => {
  return (
    <>
      <div className="max-w-[1124px] mx-auto px-3">
        <h2 className="lg:mt-[92px] md:mt-16 mt-11 font-black lg:text-3xl md:text-2xxl text-xxl text-center font-Merriweather leading-[normal] text-black">
          The Food Ninja Blog
        </h2>
        <p className=" font-normal mt-3 text-medium text-center text-lg font-Roboto leading-[normal] text-email-text">
          A blog about food, experiences, and recipes.
        </p>
        <div className="flex justify-center">
          <div className="bg-white border border-[#dddddd] py-3.5 ps-[28px] pe-[23px] items-center gap-3 flex max-w-[430px] mt-10">
            <input
              type="email"
              placeholder="Search for articles"
              className="text-email-text sm:w-[345px] w-full outline-none font-Roboto font-medium leading-[normal] text-md rounded-[3px]"
            />
            <SearchIcon />
          </div>
        </div>
        <div className="flex justify-between gap-4 flex-wrap lg:mt-20 md:mt-16 mt-12">
          <div className="bg-white min-[1060px]:max-w-[510px] ">
            <img src={water} alt="water" />
            <button className="bg-dark-blue rounded-[5px] mt-[26px] text-white-gray py-1 border-2 border-dark-blue px-4 font-Roboto text-md font-normal leading-[normal]  hover:bg-white hover:text-dark-blue duration-300 hover:translate-x-2 hover:rounded-tl-3xl hover:rounded-br-3xl hover:border-2 ">
              Travel
            </button>
            <h4 className="text-black font-bold leading-[140%] sm:text-xl text-lg font-Merriweather pt-2">
              What Traveling Greece For 2 Weeks Taught Me About Life
            </h4>
            <p className="text-gray font-Merriweather font-normal text-xxs leading-[160%]">
              Jun 21, 2021 • 11 min read
            </p>
            <p className="text-dark-gray font-Roboto font-normal mt-[15px] text-xs leading-[160%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              mollis lectus vitae nulla malesuada amet purus sed. A condimentum
              tempus a egestas sodales diam cras.
            </p>
            <div className="flex items-center min-[1060px]:mt-[46px] mt-5 gap-3.5">
              <img src={men2} alt="men" />
              <p className="font-normal text-bold text-xxs font-Merriweather leading-[22.4%] text-black">
                George Costanza
              </p>
            </div>
          </div>
          <div className="bg-white min-[1060px]:max-w-[510px] min-[1060px]:mt-0 mt-8">
            <img src={food} alt="food" />
            <button className="bg-dark-blue rounded-[5px] mt-[26px] text-white-gray py-1 border-2 border-dark-blue px-4 font-Roboto text-md font-normal leading-[normal]  hover:bg-white hover:text-dark-blue duration-300 hover:translate-x-2 hover:rounded-tl-3xl hover:rounded-br-3xl hover:border-2 ">
              Food Theory
            </button>
            <h4 className="text-black font-bold leading-[140%] sm:text-xl text-lg font-Merriweather pt-2">
              Why You Should Never Order 12 Chicken Nuggets and Fries
            </h4>
            <p className="text-gray font-Merriweather font-normal text-xxs leading-[160%]">
              Aug 1, 2021 • 7 min read
            </p>
            <p className="text-dark-gray font-Roboto font-normal mt-[15px] text-xs leading-[160%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              mollis lectus vitae nulla malesuada amet purus sed. A condimentum
              tempus a egestas sodales diam cras. Ligula a varius tempus ac
              amet, vel lectus sed. Urna sit Eget.
            </p>
            <div className="flex items-center mt-5 gap-3.5">
              <img src={men2} alt="men2" />
              <p className="font-normal text-bold text-xxs font-Merriweather leading-[22.4%] text-black">
                George Costanza
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-4 flex-wrap min-[1060px]:mt-20 mt-8">
          <div className="bg-white min-[1060px]:max-w-[510px] ">
            <img src={water} alt="water" />
            <button className="bg-dark-blue rounded-[5px] mt-[26px] text-white-gray py-1 border-2 border-dark-blue px-4 font-Roboto text-md font-normal leading-[normal]  hover:bg-white hover:text-dark-blue duration-300 hover:translate-x-2 hover:rounded-tl-3xl hover:rounded-br-3xl hover:border-2 ">
              Travel
            </button>
            <h4 className="text-black font-bold leading-[140%] sm:text-xl text-lg font-Merriweather pt-2">
              What Traveling Greece For 2 Weeks Taught Me About Life
            </h4>
            <p className="text-gray font-Merriweather font-normal text-xxs leading-[160%]">
              Jun 21, 2021 • 11 min read
            </p>
            <p className="text-dark-gray font-Roboto font-normal mt-[15px] text-xs leading-[160%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              mollis lectus vitae nulla malesuada amet purus sed. A condimentum
              tempus a egestas sodales diam cras.
            </p>
            <div className="flex items-center min-[1060px]:mt-[46px] mt-5 gap-3.5">
              <img src={men2} alt="men" />
              <p className="font-normal text-bold text-xxs font-Merriweather leading-[22.4%] text-black">
                George Costanza
              </p>
            </div>
          </div>
          <div className="bg-white min-[1060px]:max-w-[510px] min-[1060px]:mt-0 mt-8">
            <img src={food} alt="food" />
            <button className="bg-dark-blue rounded-[5px] mt-[26px] text-white-gray py-1 border-2 border-dark-blue px-4 font-Roboto text-md font-normal leading-[normal]  hover:bg-white hover:text-dark-blue duration-300 hover:translate-x-2 hover:rounded-tl-3xl hover:rounded-br-3xl hover:border-2 ">
              Food Theory
            </button>
            <h4 className="text-black font-bold leading-[140%] sm:text-xl text-lg font-Merriweather pt-2">
              Why You Should Never Order 12 Chicken Nuggets and Fries
            </h4>
            <p className="text-gray font-Merriweather font-normal text-xxs leading-[160%]">
              Aug 1, 2021 • 7 min read
            </p>
            <p className="text-dark-gray font-Roboto font-normal mt-[15px] text-xs leading-[160%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              mollis lectus vitae nulla malesuada amet purus sed. A condimentum
              tempus a egestas sodales diam cras. Ligula a varius tempus ac
              amet, vel lectus sed. Urna sit Eget.
            </p>
            <div className="flex items-center mt-5 gap-3.5">
              <img src={men2} alt="men2" />
              <p className="font-normal text-bold text-xxs font-Merriweather leading-[22.4%] text-black">
                George Costanza
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NinjaBlog;

import React from "react";

const MyFooter = () => {
  return (
    <>
      <div className="max-w-[1124px] px-3 mx-auto lg:mt-[104px] md:mt-16 mt-12">
        <div className="flex gap-9 flex-wrap">
          <div className="bg-dark-blue py-[38px] ps-[49px] pe-[45px] w-[382px]">
            <h4 className="text-white font-Merriweather font-black leading-[160%] sm:text-xl text-lg text-center px-10">
              Subscribe To Our Newsletter
            </h4>
            <p className="text-lite-blue font-Roboto font-medium leading-[160%] text-md text-center pt-3.5">
              Get weekly food news, articles, and videos delivered to your
              inbox.
            </p>
            <input
              type="email"
              placeholder="Email"
              className="text-email-text w-full p-3 outline-none mt-4 font-Roboto font-medium leading-[160%] text-md rounded-[3px]"
            />
            <button className="signup-btn bg-dark-black w-[99px] h-[47px] hover:bg-white hover:text-dark-blue duration-300 hover:translate-x-2 hover:rounded-tl-3xl hover:rounded-br-3xl text-white font-Roboto font-medium leading-[160%] text-md text-center rounded-[3px] mt-[23px]">
              Sign Up
            </button>
          </div>
          <div className="min-[700px]:w-[320px] w-full">
            <h5 className="text-black font-Roboto font-medium leading-[160%] text-xxs">
              POPULAR POSTS
            </h5>
            <p className="text-black font-Merriweather hover:underline duration-300 hover:text-sky-500 font-normal leading-[160%] text-xxs min-[700px]:pt-[27px] pt-4 cursor-pointer">
              How To Have Your Cake and Eat It Too: The Way of The Chicken Man
            </p>
            <p className="text-black font-Merriweather hover:underline duration-300 hover:text-sky-500 font-normal leading-[160%] text-xxs min-[700px]:pt-[22px] pt-3 cursor-pointer">
              My Grandma’s 30-year-old Recipe
            </p>
            <p className="text-black font-Merriweather hover:underline duration-300 hover:text-sky-500 font-normal leading-[160%] text-xxs min-[700px]:pt-[22px] pt-3 cursor-pointer">
              What I learned about cooking from Ratatoulie
            </p>
          </div>
          <div className="min-[700px]:w-[320px] w-full">
            <h5 className="text-black font-Roboto font-medium leading-[160%] text-xxs">
              Recent Posts
            </h5>
            <p className="text-black font-Merriweather hover:underline duration-300 hover:text-sky-500 font-normal leading-[160%] text-xxs min-[700px]:pt-[27px] pt-4 cursor-pointer">
              How To Have Your Cake and Eat It Too: The Way of The Chicken Man
            </p>
            <p className="text-black font-Merriweather hover:underline duration-300 hover:text-sky-500 font-normal leading-[160%] text-xxs min-[700px]:pt-[22px] pt-3 cursor-pointer">
              My Grandma’s 30-year-old Recipe
            </p>
            <p className="text-black font-Merriweather hover:underline duration-300 hover:text-sky-500 font-normal leading-[160%] text-xxs min-[700px]:pt-[22px] pt-3 cursor-pointer">
              What I learned about cooking from Ratatoulie
            </p>
          </div>
        </div>
      </div>
      <div className="bg-lite-gray py-9 mt-[50px]">
        <ul className="flex gap-[25px] justify-center">
          <li className="text-footer-li font-normal hover:translate-y-[-5px] hover:scale-105 hover:text-orange-500 duration-300 font-Merriweather text-xxs leading-[160%] cursor-pointer">
            About
          </li>
          <li className="text-footer-li font-normal hover:translate-y-[-5px] hover:scale-105 hover:text-orange-500 duration-300 font-Merriweather text-xxs leading-[160%] cursor-pointer">
            Privacy Policy
          </li>
          <li className="text-footer-li font-normal hover:translate-y-[-5px] hover:scale-105 hover:text-orange-500 duration-300 font-Merriweather text-xxs leading-[160%] cursor-pointer">
            Contact
          </li>
        </ul>
        <p className="text-copyright-color text-center pt-[26px] font-bold font-Merriweather text-xxs leading-[160%] cursor-pointer">
          Copyright © 2021 Food Ninja Blog. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default MyFooter;

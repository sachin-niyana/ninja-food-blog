import React, { useState, useEffect } from "react";
import back_to_top from "../assets/png/back-to-top.png";
const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section>
        <div className="">
          <img
            className="fixed w-[40px] md:w-[48px] bottom-[20px] BackToTop_height  end-[20px] items-center  justify-center z-[1000] cursor-pointer scrollTop transition-all duration-200 ease-in-out sm:bottom-[30px] sm:w-[45px] sm:end-[30px]  md:bottom-[40px] h-[40px] md:h-[48px]  md:end-[40px] backtotop_scale"
            onClick={scrollTop}
            style={{ display: showScroll ? "flex" : "none" }}
            src={back_to_top}
            alt="back_to_top"
          />
        </div>
      </section>
    </>
  );
};

export default BackToTop;

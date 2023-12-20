import React from "react";
import house from "../assets/png/farm-house.png";
import men2 from "../assets/png/men-2.png";
import men from "../assets/png/men.png";
import food2 from "../assets/png/food-2.png";
import kitchen from "../assets/png/kitchen.png";

const Backpacking = () => {
  return (
    <>
      <div className="max-w-[824px] mx-auto px-3 pt-3">
        <button className="bg-dark-blue rounded-[5px] hover:bg-white hover:text-dark-blue duration-300 hover:translate-x-2 hover:rounded-tl-3xl hover:rounded-br-3xl hover:border-2  lg:mt-[99px] md:mt-16 mt-11 text-white-gray py-1 border-2 border-dark-blue px-4 font-Roboto text-md font-normal leading-[normal]">
          Food Theory
        </button>
        <h2 className="max-w-[800px] mt-3.5 font-black lg:text-2xl md:text-2xxl text-xxl font-Merriweather leading-[normal] text-black">
          What I Learned About Life and Food Backpacking Around Greece
        </h2>
        <p className=" font-normal mt-3 text-medium text-xxs font-Roboto leading-[160%] text-gray">
          Aug 1, 2021 • 7 min read
        </p>
        <img
          className="mt-5 shadow-[0_5px_25px_-10px_#605c59]"
          src={house}
          alt="house"
        />
        <div className="flex items-center mt-5 gap-3.5">
          <img src={men2} alt="men" />
          <p className="font-normal text-bold text-xxs font-Merriweather leading-[22.4%] text-black">
            George Costanza
          </p>
        </div>
        <p className="text-dark-gray font-medium leading-[160%] lg:text-xxl md:text-lg text-md text font-Roboto pt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices dui
          diam arcu pharetra at laoreet pellentesque. Imperdiet sit ut ornare
          nulla risus id fames nascetur urna. Eros in neque tincidunt.
        </p>
        <p className="text-dark-gray font-normal leading-[160%] md:text-lg text-md font-Roboto pt-8">
          Vel leo proin facilisis metus sit ut cursus sagittis. Diam donec mus
          malesuada et ac vulputate. Aenean lacinia suspendisse et mattis
          adipiscing id dictum commodo nunc. Feugiat lorem cras ut cras enim
          neque, elit, facilisi habitasse. Facilisis faucibus nunc congue urna
          diam. Vitae, diam justo, massa, elit. In et nibh ut in diam tellus at
          tellus diam.
        </p>
        <div className="mt-10 bg-lite-gray rounded-[7px] pb-[35px] px-[35px] pt-[33px] border-2 border-[#dddddd]">
          <h4 className="text-black font-bold leading-[160%] text-xxl font-Merriweather">
            In this article
          </h4>
          <ul className=" list-decimal ps-6">
            <li className="underline pt-4 font-Merriweather hover:underline duration-300 hover:text-sky-500 cursor-pointer text-md text-lite-black font-normal leading-[160%]">
              How to travel without spending a dime
            </li>
            <li className="underline pt-4 font-Merriweather hover:underline duration-300 hover:text-sky-500 cursor-pointer text-md text-lite-black font-normal leading-[160%]">
              Get the most out of your credit card reward points
            </li>
            <li className="underline pt-4 font-Merriweatherhover:underline duration-300 hover:text-sky-500 cursor-pointer text-md text-lite-black font-normal leading-[160%]">
              Why you don’t need more than 3 pieces of clothing
            </li>
          </ul>
        </div>
        <p className="text-dark-gray font-normal leading-[160%] md:text-lg text-md font-Roboto pt-10">
          Vel leo proin facilisis metus sit ut cursus sagittis. Diam donec mus
          malesuada et ac vulputate. Aenean lacinia suspendisse et mattis
          adipiscing id dictum commodo nunc. Feugiat lorem cras ut cras enim
          neque, elit, facilisi habitasse. Facilisis faucibus nunc congue urna
          diam. Vitae, diam justo, massa, elit. In et nibh ut in diam tellus at
          tellus diam.
        </p>
        <h4 className="text-lite-black font-bold leading-[160%] sm:text-xl text-lg font-Merriweather pt-3 mt-2">
          How to travel without spending a dime
        </h4>
        <p className="text-dark-gray font-normal leading-[160%] md:text-lg text-md font-Roboto pt-5">
          Dignissim lacus sit congue lacus aliquam. Ut non fermentum vulputate
          donec enim sed ornare scelerisque. Sollicitudin orci leo egestas
          fermentum platea a imperdiet nisl. Velit placerat nibh nisl ut
          feugiat. Egestas id egestas nunc mattis. Sed mauris vitae commodo
          pharetra, vestibulum rhoncus natoque.
        </p>
        <p className="text-dark-gray font-normal leading-[160%] md:text-lg text-md font-Roboto pt-5">
          Leo id aliquet potenti enim sed maecenas sed ornare. Risus nam mauris
          etiam nibh maecenas nibh interdum mauris suspendisse. Volutpat, enim
          interdum facilisi mauris vitae id. Vel malesuada sit etiam dolor.
          Ullamcorper habitant vitae, nec pretium ullamcorper viverra integer
          praesent tincidunt. At erat sagittis tellus ultricies in a.
        </p>
        <h4 className="text-lite-black font-bold leading-[160%] sm:text-xl text-lg font-Merriweather pt-3 mt-2">
          Get the most out of your credit card reward points
        </h4>
        <p className="text-dark-gray font-normal leading-[160%] md:text-lg text-md font-Roboto pt-5">
          Massa, libero morbi morbi sed non sed. In et neque lectus ultricies
          leo eros. Auctor in elementum accumsan malesuada gravida neque cursus
          pellentesque nunc. Dui nullam odio neque varius massa praesent. Neque,
          porta vel, morbi nulla at tincidunt. Neque, et ultrices duis
          fermentum, tincidunt sem sed. Erat accumsan dui enim nisl morbi
          feugiat.
        </p>
        <p className="text-dark-gray font-normal leading-[160%] md:text-lg text-md font-Roboto pt-5">
          Ac eget lorem sit nulla sed fusce etiam. Elementum nibh in eu sed.
          Nibh non semper amet sit hac tristique orci. Quis velit vitae amet
          magnis nec in nunc. Amet vitae id cras nibh. Sed ipsum, lacinia in sit
          vitae. Duis luctus convallis risus purus sollicitudin purus id eu.
          Faucibus mattis eget ullamcorper eu suspendisse elit elit lacus purus.
          Tortor felis.
        </p>
        <h4 className="text-lite-black font-bold leading-[160%] sm:text-xl text-lg font-Merriweather pt-3 mt-2">
          Why you don’t need more than 3 pieces of clothing
        </h4>
        <p className="text-dark-gray font-normal leading-[160%] md:text-lg text-md font-Roboto pt-5">
          Massa aenean cursus nulla urna dui, fermentum cursus in facilisis.
          Vulputate euismod vestibulum dolor in elementum quis quis. Erat proin
          in eget arcu tellus ut ultrices. Quis maecenas ullamcorper ante sit
          leo placerat. Quisque dictum laoreet eget quam leo tortor scelerisque
          sit nullam. Lacus, tortor, aenean mattis lobortis lacinia mauris.
          Viverra nulla.
        </p>
        <p className="text-dark-gray font-normal leading-[160%] md:text-lg text-md font-Roboto pt-5">
          Sed pellentesque quam lorem urna. Mauris donec molestie eget massa
          pellentesque facilisis netus mauris. Magna eget eget sollicitudin at
          faucibus odio. At augue sit nisi et metus cras dignissim vel, tortor.
          Maecenas molestie consequat cursus posuere ultrices facilisis hac
          bibendum semper. Sed lorem vel donec proin. Volutpat aliquet rhoncus
          sit et.
        </p>
        <h3
          className="text-lite-black font-bold leading-[160%] md:text-2xxl text-xxl font-Merriweather pt-12 mt0.5
        "
        >
          Keep reading
        </h3>
        <div className="sm:flex items-center gap-9 pt-3 sm:mt-2 mt-8">
          <img
            className="shadow-[0_5px_20px_-10px_#000000] rounded-[5px]"
            src={food2}
            alt="food2"
          />
          <div className="m-0">
            <h4 className="text-lite-black font-bold leading-[160%] sm:text-xl text-lg font-Merriweather sm:pt-0 pt-5">
              Why you don’t need more than 3 pieces of clothing
            </h4>
            <p className="text-dark-gray font-normal leading-[160%] text-md font-Roboto pt-2">
              Et vitae, mollis euismod lobortis blandit amet sed amet. Amet ut
              amet nisl tortor arcu non id nulla mauris neque nisl magna.
            </p>
          </div>
        </div>
        <div className="sm:flex items-center gap-9 pt-3 sm:mt-2 mt-8">
          <img
            className="shadow-[0_5px_20px_-10px_#000000] rounded-[5px]"
            src={kitchen}
            alt="kitchen"
          />
          <div>
            <h4 className="text-lite-black font-bold leading-[160%] sm:text-xl text-lg font-Merriweather sm:pt-0 pt-5">
              Why you should cook with your family together everyday
            </h4>
            <p className="text-dark-gray font-normal leading-[160%] text-md font-Roboto pt-2">
              Rutrum aliquet eros semper nunc. In adipiscing augue sagittis,
              fermentum donec nunc lacinia. Risus in egestas in orci quam.
            </p>
          </div>
        </div>
        <div className="mt-10 bg-lite-gray rounded-[7px] pb-[35px] px-[35px] pt-[33px] border-2 border-[#dddddd]">
          <div className="md:flex items-center gap-7">
            <img src={men} alt="men" />
            <div className="m-0">
              <h4
                className="text-black font-normal leading-[160%] sm:text-xl md:mt-0 mt-8 text-lg font-Merriweather
        "
              >
                Written by George Costanza
              </h4>
              <p className="text-dark-gray font-normal leading-[160%] text-md font-Roboto pt-2">
                Volutpat cursus id id tincidunt duis id. Urna curabitur ultrices
                molestie bibendum. Purus orci nisl, commodo ipsum, ut urna,
                elementum. Nunc potenti lectus in erat ligula cras. Eget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Backpacking;

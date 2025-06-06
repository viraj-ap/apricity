import React from "react";

const Hero = () => {
  return (
    <div className=" min-h-screen">
      <div className="absolute inset-0 -z-10">
        <img
          className="relative h-screen w-full object-cover"
          src="/hero.jpg"
          alt=""
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-around items-center px-4 sm:px-6 md:px-8 lg:px-4 xl:px-0 mt-12 md:mt-0">
        {/* left side */}
        <div className="w-full lg:w-auto text-center lg:text-left mb-8 lg:mb-0 order-2 lg:order-1">
          <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-28 text-sm sm:text-base">
            Our headquarters is in Mars.
          </div>
          <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-32 w-full sm:w-64 lg:w-48 mx-auto lg:mx-0 text-sm sm:text-base">
            We are fueled by our passion for creating best experience for your
            business that will help it grow.
          </div>
        </div>

        {/* center */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-24 w-full lg:w-auto order-1 lg:order-2">
          <div className="flex flex-col gap-1 sm:gap-2">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center lg:text-left font-bold">
              We
            </div>
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center lg:text-left font-bold">
              Are Digital
            </div>
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center lg:text-left lg:ml-32 xl:ml-56 font-bold">
              Marketing
            </div>
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 flex flex-col lg:flex-row justify-center lg:justify-around items-center gap-6 lg:gap-4 xl:gap-0">
            <div className="text-center lg:text-left text-sm sm:text-base max-w-xs lg:max-w-none">
              <div className="flex flex-col items-center justify-center">
                <div className="">
                  <img src="/favicon.png" className="invert w-64" alt="" />
                </div>
                <div className="text-xl font-bold">Apricity.</div>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <div className="w-full sm:w-80 md:w-64 mb-4 text-center lg:text-left text-sm sm:text-base">
                A full-stack Web3 Digital Marketing Agency, Integrating AI
                Technology to deliver the best service to our clients.
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <button className="font-bold border-2 py-2 px-4 sm:px-6 rounded-full hover:bg-white hover:text-black cursor-pointer transition-all duration-300 hover:scale-105 text-xs sm:text-sm whitespace-nowrap">
                  See Prices
                </button>
                <button className="font-bold border-2 py-2 px-4 sm:px-6 rounded-full hover:bg-white hover:text-black cursor-pointer transition-all duration-300 hover:scale-105 text-xs sm:text-sm whitespace-nowrap">
                  Socials
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="w-full lg:w-auto text-center lg:text-left mt-8 lg:mt-0 mb-8 lg:mb-0 order-3">
          <div className="w-full sm:w-64 lg:w-48 mx-auto lg:mx-0 mt-8 sm:mt-12 md:mt-16 lg:mt-32 text-sm sm:text-base">
            We Take time to deeply understand your business allowing us to
            execute our mission most effectively.
          </div>
          <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-32 flex items-center gap-2 justify-center lg:justify-start">
            <div className="text-sm sm:text-base">Here's our work.</div>
            <div className="flex items-center">
              <img
                className="invert border-2 border-black p-1 sm:p-2 rounded-full w-6 h-6 sm:w-8 sm:h-8"
                src="/down.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

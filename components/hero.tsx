import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10">
        <img
          className="relative h-screen w-full object-cover"
          src="/hero.jpg"
          alt=""
        />
      </div>

      <div className="flex flex-col md:flex-row md:justify-around items-center px-4 md:px-0">
        {/* left side */}
        <div className="w-full md:w-auto text-center md:text-left mb-8 md:mb-0">
          <div className="mt-16 md:mt-28">Our headquartes is in Mars.</div>
          <div className="mt-6 md:mt-32 w-full md:w-48 mx-auto md:mx-0">
            We are fueled by our passion for creating best experience for your
            business that will help it grow.
          </div>
        </div>

        {/* center */}
        <div className="mt-8 md:mt-24 w-full md:w-auto">
          <div className="flex flex-col gap-2">
            <div className="text-5xl md:text-8xl text-center md:text-left">
              We
            </div>
            <div className="text-5xl md:text-8xl text-center md:text-left">
              Are Digital
            </div>
            <div className="text-5xl md:text-8xl text-center md:ml-56">
              Marketing
            </div>
          </div>
          <div className="mt-12 md:mt-16 flex flex-col md:flex-row justify-center md:justify-around items-center gap-6 md:gap-0">
            <div className="text-center md:text-left">
              Your Brand Name or Logo here or tagline
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <div className="">
                <div className="w-64 mb-2">
                  A full-stack Web3 Digital Marketing Agency, Integrating AI
                  Technology to deliver the best service to our clients.
                </div>
                <button className="font-bold border-2 p-2 w-30 m-2 rounded-full hover:bg-white hover:text-black cursor-pointer transition-all duration-300 hover:scale-105 text-[14px]">
                  See Prices
                </button>
                <button className="font-bold border-2 p-2 w-30 m-2 rounded-full hover:bg-white hover:text-black cursor-pointer transition-all duration-300 hover:scale-105 text-[14px]">
                  Socials
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="w-full md:w-auto text-center md:text-left mt- md:mt-0 mb-16 md:mb-0">
          <div className="w-full md:w-48 mx-auto md:mx-0 mt-32">
            We Take time to deeply understand your business allowing us to
            execute our mission most effectively.
          </div>
            <div className="mt-6 md:mt-32 flex items-center gap-2 justify-center md:justify-start">
            <div>Here's our work.</div>
            <div className="flex items-center">
              <img
              className="invert border-2 border-black p-2 rounded-full w-8 h-8"
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

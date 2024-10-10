import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBinoculars,
  faCompass,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const DestinationsHero = () => {
  return (
    <section className="bg-[#F5EFE7] relative overflow-hidden min-h-[600px]">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          <div className="w-full lg:w-1/2 py-8 lg:py-24 px-4 lg:px-6 flex flex-col lg:justify-center min-h-[600px]">
            <div className="space-y-8 lg:space-y-6">
              <h1 className=" mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[#1c150d]">
                Discover the Magic of{" "}
                <span className="text-[#f49a25]">Kenya's Wonders</span>
              </h1>
              <p className="text-lg md:text-xl text-[#3c2a1a]">
                Embark on an unforgettable journey through breathtaking
                landscapes, rich wildlife, and vibrant cultures.
              </p>
              <button className="bg-[#f49a25] text-white px-6 lg:px-8 py-2 lg:py-3 rounded-full text-base lg:text-lg font-semibold hover:bg-[#e38d1e] transition duration-300 self-start">
                Explore Destinations
              </button>
            </div>
            <div className="flex flex-wrap justify-center lg:grid lg:grid-cols-3 gap-3 lg:gap-4 mt-20 lg:mt-12">
              {[
                { icon: faBinoculars, text: "Wildlife Safaris" },
                { icon: faCompass, text: "Adventure Tours" },
                { icon: faSun, text: "Cultural Experiences" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#E8DFD1] p-3 lg:p-4 rounded-lg shadow-md text-center flex flex-col items-center justify-center w-[calc(33%-0.5rem)] lg:w-auto"
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-[#f49a25] mb-2 lg:mb-3"
                    size="lg"
                  />
                  <p className="text-[#3c2a1a] text-xs lg:text-sm font-medium">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 left-1/2 overflow-hidden">
        <div
          className="absolute top-0 bottom-0 left-0 right-0"
          style={{
            clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
            width: "100%",
            left: "0",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1517846875602-2371528547d4?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Scenic Kenya landscape"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default DestinationsHero;

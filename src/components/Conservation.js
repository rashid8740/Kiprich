import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree, faPaw, faUsers } from "@fortawesome/free-solid-svg-icons";

export default function Conservation() {
  const efforts = [
    {
      icon: faTree,
      title: "Reforestation",
      description: "Help us plant trees to restore natural habitats",
    },
    {
      icon: faPaw,
      title: "Wildlife Protection",
      description: "Support anti-poaching efforts and wildlife sanctuaries",
    },
    {
      icon: faUsers,
      title: "Community Engagement",
      description: "Empower local communities through eco-tourism",
    },
  ];

  return (
    <section className="my-8 sm:my-12 md:my-16 bg-[#1c150d] text-white p-4 sm:p-6 md:p-8 rounded-lg">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center">
        Join Our Conservation Efforts
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-center mb-6 sm:mb-8 max-w-2xl mx-auto">
        At Kiprich Safaris, we're committed to preserving Kenya's natural beauty
        and wildlife for future generations.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {efforts.map((effort, index) => (
          <div
            key={index}
            className="text-center bg-[#2c2519] p-4 sm:p-6 rounded-lg transition-transform duration-300 hover:scale-105"
          >
            <FontAwesomeIcon
              icon={effort.icon}
              className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-[#f49a25]"
            />
            <h3 className="font-bold text-lg sm:text-xl mb-2">
              {effort.title}
            </h3>
            <p className="text-sm sm:text-base">{effort.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-6 sm:mt-8 md:mt-10">
        <a
          href="#"
          className="bg-[#f49a25] text-[#1c150d] px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-bold hover:bg-[#e38d1e] transition-colors inline-block"
        >
          Learn More About Our Conservation
        </a>
      </div>
    </section>
  );
}

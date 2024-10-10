import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faMountain,
  faCompass,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export default function Timeline() {
  const events = [
    {
      year: 1995,
      title: "The Beginning",
      description:
        "Richard starts his career as a junior safari guide, learning the ropes and developing his passion for wildlife.",
      icon: faLeaf,
    },
    {
      year: 2005,
      title: "Mastering the Craft",
      description:
        "After a decade of experience, Richard becomes renowned for his expertise in tracking and wildlife behavior.",
      icon: faMountain,
    },
    {
      year: 2010,
      title: "Kiprich Safaris is Born",
      description:
        "Richard founds Kiprich Safaris, aiming to provide authentic and immersive safari experiences.",
      icon: faCompass,
    },
    {
      year: 2020,
      title: "Embracing Sustainability",
      description:
        "Kiprich Safaris launches its conservation program, focusing on wildlife protection and community engagement.",
      icon: faHeart,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#F5EFE7] mb-4">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1c150d] mb-8 md:mb-12 animate-fade-in">
          Richard's Journey
        </h2>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[#f49a25] transform md:-translate-x-1/2"></div>
          <div className="relative z-10">
            {events.map((event, index) => (
              <div
                key={index}
                className={`mb-8 flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } w-full animate-slide-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="order-1 md:w-5/12 mb-4 md:mb-0">
                  <div className="bg-white rounded-lg shadow-xl p-4 md:p-6 transition-transform duration-300 hover:scale-105">
                    <h3 className="mb-2 font-bold text-[#1c150d] text-lg md:text-xl">
                      {event.year}: {event.title}
                    </h3>
                    <p className="text-sm leading-snug tracking-wide text-[#9c7849] text-opacity-100">
                      {event.description}
                    </p>
                  </div>
                </div>
                <div className="z-20 flex items-center justify-center bg-[#f49a25] shadow-xl w-10 h-10 md:w-12 md:h-12 rounded-full transition-transform duration-300 hover:scale-110 absolute left-0 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2">
                  <FontAwesomeIcon
                    icon={event.icon}
                    className="text-white text-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

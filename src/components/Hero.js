"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBinoculars,
  faCompass,
  faPaw,
  faMountain,
} from "@fortawesome/free-solid-svg-icons";

export default function HeroBanner() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <header className="relative bg-gradient-to-r from-[#f49a25] to-[#f4c425] text-white py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Geometric shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>

      {/* Background Image */}
      <div className="absolute inset-0 opacity-60">
        <Image
          src="https://images.unsplash.com/photo-1633247487039-f4d8062e8bf5?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Kenyan Safari"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="relative container mx-auto px-4 z-10">
        <div className="flex flex-col items-center">
          <div
            className={`transition-all duration-1000 ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <FontAwesomeIcon
              icon={faBinoculars}
              className="text-5xl sm:text-6xl mb-6 sm:mb-8 animate-pulse text-[#FFD700]"
            />
          </div>
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 tracking-tight transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Discover Kenya's <span className="text-[#FFD700]">Magic</span>
          </h1>
          <div
            className={`w-24 h-1 bg-white mb-6 sm:mb-8 transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>
          <p
            className={`text-lg sm:text-xl text-center max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 transition-all duration-1000 delay-500 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Experience the breathtaking beauty of East Africa's wildlife and
            embark on an unforgettable journey through Kenya's diverse
            landscapes
          </p>
          <button
            className={`bg-white text-[#f49a25] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold hover:bg-[#FFD700] hover:text-[#1c150d] transition-all duration-300 transform hover:scale-105 hover:shadow-lg mb-8 sm:mb-12 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Start Your Adventure
          </button>
        </div>

        {/* Feature Icons */}
        <div className="flex justify-center space-x-4 sm:space-x-8 lg:space-x-16">
          {[
            { icon: faCompass, text: "Guided Tours" },
            { icon: faPaw, text: "Wildlife Encounters" },
            { icon: faMountain, text: "Scenic Landscapes" },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center transition-all duration-1000 delay-${
                700 + index * 200
              } ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="text-2xl sm:text-3xl lg:text-4xl mb-2 text-[#FFD700] drop-shadow-lg"
              />
              <span className="text-xs sm:text-sm lg:text-base font-semibold text-center text-white drop-shadow">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-auto"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 43.3C1200 47 1320 53 1380 56.7L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </header>
  );
}

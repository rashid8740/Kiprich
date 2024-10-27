"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBinoculars,
  faCompass,
  faPaw,
  faMountain,
  faAngleDown,
  faCalendarAlt,
  faStar,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

export default function HeroBanner() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <header className="relative h-[75vh] mt-4 mb-24 rounded-t-[1rem] overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1c150d]/90 to-transparent z-10" />

      {/* Main Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1633247487039-f4d8062e8bf5?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Kenyan Safari"
          layout="fill"
          objectFit="cover"
          priority
          className="object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center z-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-4 md:space-y-6 lg:space-y-8">
            <div
              className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <FontAwesomeIcon icon={faStar} className="text-[#f49a25]" />
              <span className="text-white text-xs md:text-sm">
                Top-rated Safari Experience
              </span>
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight transition-all duration-1000 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              Experience
              <br />
              <span className="text-[#f49a25]">Wild Kenya</span>
              <br className="hidden md:block" />
              Like Never Before
            </h1>

            <p
              className={`text-base md:text-lg text-white/80 max-w-xl transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              Embark on an unforgettable journey through Kenya's most stunning
              landscapes and encounter majestic wildlife in their natural
              habitat.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-3 md:gap-4 transition-all duration-1000 delay-500 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <button className="bg-[#f49a25] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-[#e38d1e] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm md:text-base">
                <FontAwesomeIcon icon={faCalendarAlt} />
                Book Your Safari
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base">
                <FontAwesomeIcon icon={faPlay} className="text-[#f49a25]" />
                Watch Video
              </button>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div
            className={`grid grid-cols-2 gap-3 md:gap-4 transition-all duration-1000 delay-700 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {[
              {
                icon: faCompass,
                title: "Expert Guides",
                desc: "Professional local guides",
              },
              {
                icon: faPaw,
                title: "Wildlife Tours",
                desc: "Close encounters guaranteed",
              },
              {
                icon: faMountain,
                title: "Scenic Views",
                desc: "Breathtaking landscapes",
              },
              {
                icon: faBinoculars,
                title: "Custom Tours",
                desc: "Tailored experiences",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 group"
              >
                <FontAwesomeIcon
                  icon={feature.icon}
                  className="text-2xl md:text-3xl text-[#f49a25] mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-white font-semibold mb-1 text-sm md:text-base">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-xs md:text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce transition-all duration-1000 delay-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <FontAwesomeIcon icon={faAngleDown} className="text-xl md:text-2xl" />
        </div>
      </div>
    </header>
  );
}

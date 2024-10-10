"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faUsers,
  faShield,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const AnimatedNumber = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(end * percentage));
      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    requestAnimationFrame(animateCount);
  }, [end, duration]);

  return <span className="font-bold text-[#f49a25]">{count}</span>;
};

export default function AboutHero() {
  return (
    <section className="my-8">
      <div className="relative rounded-xl overflow-hidden h-[50vh] md:h-[60vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Kiprich Safaris Team"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-10">
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
              About Kiprich Safaris
            </h1>
            <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-3xl font-medium">
              Since 2008, Kiprich Safaris has been your trusted guide to Kenya's
              wonders. We're dedicated to providing unforgettable safari
              experiences while promoting sustainable tourism and contributing
              to local conservation efforts.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 text-white/80 text-sm sm:text-base md:text-lg mt-3 sm:mt-4">
              <div className="flex items-center bg-black/30 p-2 rounded-lg">
                <FontAwesomeIcon
                  icon={faCompass}
                  className="text-[#f49a25] mr-2 w-5 h-5 sm:w-6 sm:h-6"
                />
                <span>
                  <AnimatedNumber end={100} duration={2000} />+ Unique Routes
                </span>
              </div>
              <div className="flex items-center bg-black/30 p-2 rounded-lg">
                <FontAwesomeIcon
                  icon={faUsers}
                  className="text-[#f49a25] mr-2 w-5 h-5 sm:w-6 sm:h-6"
                />
                <span>
                  <AnimatedNumber end={5000} duration={2000} />+ Happy Clients
                </span>
              </div>
              <div className="flex items-center bg-black/30 p-2 rounded-lg">
                <FontAwesomeIcon
                  icon={faShield}
                  className="text-[#f49a25] mr-2 w-5 h-5 sm:w-6 sm:h-6"
                />
                <span>
                  <AnimatedNumber end={10} duration={2000} /> Conservation
                  Projects
                </span>
              </div>
              <div className="flex items-center bg-black/30 p-2 rounded-lg">
                <FontAwesomeIcon
                  icon={faTrophy}
                  className="text-[#f49a25] mr-2 w-5 h-5 sm:w-6 sm:h-6"
                />
                <span>Award-winning Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

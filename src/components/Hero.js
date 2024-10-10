"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1633247487039-f4d8062e8bf5?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Kenyan Safari",
    title: "Discover Kenya's Magic",
    description: "Experience the breathtaking beauty of East Africa's wildlife",
  },
  {
    src: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Maasai Mara",
    title: "Witness the Great Migration",
    description: "Watch millions of wildebeest cross the Mara River",
  },
  {
    src: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    alt: "Mount Kenya",
    title: "Conquer Mount Kenya",
    description: "Trek through diverse landscapes to Kenya's highest peak",
  },
];

export default function DirectTransitionCarouselHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  const currentImage = images[currentIndex];

  return (
    <section className="my-8">
      <div className="relative rounded-xl overflow-hidden h-[50vh] md:h-[60vh]">
        {/* Current Image */}
        <div className="absolute inset-0">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 md:p-10 pb-16 md:pb-20">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-2 md:mb-4">
            {currentImage.title}
          </h2>
          <p className="text-white text-lg md:text-xl mb-4 md:mb-6">
            {currentImage.description}
          </p>
          <button className="bg-[#f49a25] text-[#1c150d] px-6 py-3 rounded-full text-lg font-bold self-start hover:bg-[#e38d1e] transition-colors">
            Start Your Journey
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white scale-100"
                  : "bg-white/50 scale-75"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

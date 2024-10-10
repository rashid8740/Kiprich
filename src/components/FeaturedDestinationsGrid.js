"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTree,
  faMountain,
  faHippo,
  faWater,
  faPaw,
  faUmbrellaBeach,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";

const parks = [
  {
    name: "Maasai Mara",
    icon: faHippo,
    images: [
      {
        src: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Maasai Mara landscape",
      },
      {
        src: "https://images.unsplash.com/photo-1517846875602-2371528547d4?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Wildlife in Maasai Mara",
      },
      {
        src: "https://plus.unsplash.com/premium_photo-1664302669447-d63f6c898f2f?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Maasai people",
      },
      {
        src: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        alt: "Hot air balloon safari",
      },
    ],
    description:
      "Experience the world-famous wildebeest migration and incredible wildlife viewing.",
  },
  {
    name: "Amboseli",
    icon: faMountain,
    images: [
      {
        src: "/api/placeholder/800/600?text=Amboseli+1",
        alt: "Amboseli landscape",
      },
      {
        src: "/api/placeholder/400/300?text=Amboseli+2",
        alt: "Elephants in Amboseli",
      },
      {
        src: "/api/placeholder/400/300?text=Amboseli+3",
        alt: "Mount Kilimanjaro view",
      },
      {
        src: "/api/placeholder/800/300?text=Amboseli+4",
        alt: "Amboseli savanna",
      },
    ],
    description:
      "Witness herds of elephants against the backdrop of Mount Kilimanjaro.",
  },
  {
    name: "Tsavo",
    icon: faTree,
    images: [
      { src: "/api/placeholder/800/600?text=Tsavo+1", alt: "Tsavo landscape" },
      {
        src: "/api/placeholder/400/300?text=Tsavo+2",
        alt: "Red elephants of Tsavo",
      },
      { src: "/api/placeholder/400/300?text=Tsavo+3", alt: "Tsavo lions" },
      { src: "/api/placeholder/800/300?text=Tsavo+4", alt: "Tsavo river" },
    ],
    description:
      "Explore Kenya's largest national park, home to the famous 'red elephants'.",
  },
  {
    name: "Lake Nakuru",
    icon: faWater,
    images: [
      {
        src: "/api/placeholder/800/600?text=Lake+Nakuru+1",
        alt: "Lake Nakuru flamingos",
      },
      {
        src: "/api/placeholder/400/300?text=Lake+Nakuru+2",
        alt: "Lake Nakuru rhinos",
      },
      {
        src: "/api/placeholder/400/300?text=Lake+Nakuru+3",
        alt: "Lake Nakuru landscape",
      },
      {
        src: "/api/placeholder/800/300?text=Lake+Nakuru+4",
        alt: "Lake Nakuru birds",
      },
    ],
    description:
      "Discover the pink flamingos and diverse wildlife at this stunning lake.",
  },
  {
    name: "Samburu",
    icon: faPaw,
    images: [
      {
        src: "/api/placeholder/800/600?text=Samburu+1",
        alt: "Samburu landscape",
      },
      {
        src: "/api/placeholder/400/300?text=Samburu+2",
        alt: "Samburu elephants",
      },
      {
        src: "/api/placeholder/400/300?text=Samburu+3",
        alt: "Samburu warriors",
      },
      {
        src: "/api/placeholder/800/300?text=Samburu+4",
        alt: "Samburu wildlife",
      },
    ],
    description:
      "Experience unique wildlife and rich cultural heritage in this northern reserve.",
  },
  {
    name: "Diani Beach",
    icon: faUmbrellaBeach,
    images: [
      {
        src: "/api/placeholder/800/600?text=Diani+Beach+1",
        alt: "Diani Beach coastline",
      },
      {
        src: "/api/placeholder/400/300?text=Diani+Beach+2",
        alt: "Diani Beach water sports",
      },
      {
        src: "/api/placeholder/400/300?text=Diani+Beach+3",
        alt: "Diani Beach resort",
      },
      {
        src: "/api/placeholder/800/300?text=Diani+Beach+4",
        alt: "Diani Beach sunset",
      },
    ],
    description:
      "Relax on pristine white sand beaches and enjoy water activities on the coast.",
  },
  {
    name: "Mount Kenya",
    icon: faLeaf,
    images: [
      {
        src: "/api/placeholder/800/600?text=Mount+Kenya+1",
        alt: "Mount Kenya peak",
      },
      {
        src: "/api/placeholder/400/300?text=Mount+Kenya+2",
        alt: "Mount Kenya trekking",
      },
      {
        src: "/api/placeholder/400/300?text=Mount+Kenya+3",
        alt: "Mount Kenya flora",
      },
      {
        src: "/api/placeholder/800/300?text=Mount+Kenya+4",
        alt: "Mount Kenya landscape",
      },
    ],
    description:
      "Climb Africa's second-highest peak and explore diverse ecosystems.",
  },
];

const FeaturedDestinationsGrid = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Kenyan Parks
        </h2>
        <div className="sticky top-0 bg-gray-100 z-10 py-4">
          <div className="flex justify-start lg:justify-center overflow-x-auto">
            <div className="inline-flex bg-white rounded-lg p-1 shadow-md">
              {parks.map((park, index) => (
                <button
                  key={park.name}
                  className={`flex flex-col items-center px-4 py-2 rounded-lg transition duration-300 flex-shrink-0 mx-1 ${
                    activeTab === index
                      ? "bg-[#f49a25] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <FontAwesomeIcon icon={park.icon} className="text-lg mb-1" />
                  <span className="text-xs font-medium whitespace-nowrap">
                    {park.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 overflow-y-auto max-h-[calc(100vh-250px)]">
          {parks.map((park, parkIndex) => (
            <div
              key={park.name}
              className={`grid grid-cols-2 sm:grid-cols-4 gap-4 ${
                activeTab === parkIndex ? "block" : "hidden"
              }`}
            >
              <motion.div
                className="col-span-2 row-span-2 relative rounded-lg overflow-hidden shadow-lg aspect-[4/3]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={park.images[0].src}
                  alt={park.images[0].alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <h3 className="text-xl font-bold mb-1">{park.name}</h3>
                  <p className="text-sm">{park.description}</p>
                  <p className="text-[#f49a25] font-bold mt-1 text-sm">
                    {park.price}
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="col-span-1 relative rounded-lg overflow-hidden shadow-lg aspect-[4/3]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Image
                  src={park.images[1].src}
                  alt={park.images[1].alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </motion.div>
              <motion.div
                className="col-span-1 relative rounded-lg overflow-hidden shadow-lg aspect-[4/3]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  src={park.images[2].src}
                  alt={park.images[2].alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </motion.div>
              <motion.div
                className="col-span-2 relative rounded-lg overflow-hidden shadow-lg aspect-[8/3]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Image
                  src={park.images[3].src}
                  alt={park.images[3].alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinationsGrid;

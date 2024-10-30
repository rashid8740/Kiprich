"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faPersonWalking,
  faHorse,
  faMountain,
  faCompass,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";

const activities = [
  {
    title: "Game Drives",
    description:
      "Bold adventures through Kenya's wilderness with expert guides.",
    subtext: "Great for close wildlife encounters",
    icon: faCar,
    image:
      "https://images.unsplash.com/photo-1559494487-a5bbc635ed2b?q=80&w=1716&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-emerald-400",
  },
  {
    title: "Walking Safaris",
    description: "Easy, guided walks through natural habitats.",
    subtext: "Perfect for nature enthusiasts",
    icon: faPersonWalking,
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    bgColor: "bg-sky-400",
  },
  {
    title: "Horseback Safari",
    description: "Light treks with stunning panoramic views.",
    subtext: "When a lighter pace is needed",
    icon: faHorse,
    image:
      "https://images.unsplash.com/photo-1633247487039-f4d8062e8bf5?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-violet-400",
  },
  {
    title: "Mountain Climbing",
    description: "Challenging climbs with breathtaking views.",
    subtext: "For the adventurous spirit",
    icon: faMountain,
    image:
      "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?ixlib=rb-4.0.3&auto=format&fit=crop&w=1167&q=80",
    bgColor: "bg-amber-400",
  },
  {
    title: "Photography Tours",
    description: "Specialized tours for capturing perfect shots.",
    subtext: "Fits with any experience level",
    icon: faCamera,
    image:
      "https://images.unsplash.com/photo-1621139261252-27d1a67449f4?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-teal-400",
  },
  {
    title: "Hiking Adventures",
    description: "Explore diverse landscapes and trails.",
    subtext: "From beginners to experts",
    icon: faCompass,
    image:
      "https://images.unsplash.com/photo-1517846875602-2371528547d4?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-rose-400",
  },
];

export default function Activities() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1c150d] mb-4">
          Safari Activities
        </h2>
        <p className="text-[#3c2a1a] text-center max-w-2xl mx-auto mb-12">
          Discover the diverse ways to experience Kenya's wildlife and
          landscapes
        </p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl relative group"
            >
              {/* Mobile Layout */}
              <div className="block md:hidden">
                <div className="relative h-48">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-xl text-white">
                        {activity.title}
                      </h3>
                      <div className={`${activity.bgColor} p-2 rounded-xl`}>
                        <FontAwesomeIcon
                          icon={activity.icon}
                          className="h-5 w-5 text-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-2">
                    {activity.description}
                  </p>
                  <span className="text-xs text-gray-500">
                    {activity.subtext}
                  </span>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:block relative h-[220px]">
                {/* Content Section */}
                <div className="absolute inset-0 flex">
                  {/* Left Content */}
                  <div className="w-[45%] p-8 bg-white flex flex-col justify-center relative z-20">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-xl text-[#1c150d]">
                        {activity.title}
                      </h3>
                      <div className={`${activity.bgColor} p-2 rounded-xl`}>
                        <FontAwesomeIcon
                          icon={activity.icon}
                          className="h-5 w-5 text-white"
                        />
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      {activity.description}
                    </p>
                    <span className="text-xs text-gray-500">
                      {activity.subtext}
                    </span>
                  </div>

                  {/* Right Image Section with Diagonal Overlay */}
                  <div className="relative flex-1">
                    {/* Image Container */}
                    <div className="absolute inset-0">
                      <Image
                        src={activity.image}
                        alt={activity.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent" />
                    </div>
                    {/* White Diagonal Overlay */}
                    <div className="absolute inset-0">
                      <div className="absolute top-0 left-0 w-[70%] h-full bg-white transform -skew-x-12 origin-top -translate-x-1/2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBinoculars,
  faHiking,
  faWater,
  faCampground,
  faUmbrellaBeach,
  faMountain,
} from "@fortawesome/free-solid-svg-icons";

const activities = [
  {
    name: "Safari",
    icon: faBinoculars,
    description: "Experience wildlife up close",
  },
  { name: "Hiking", icon: faHiking, description: "Explore scenic trails" },
  {
    name: "Water Sports",
    icon: faWater,
    description: "Enjoy thrilling aquatic adventures",
  },
  {
    name: "Camping",
    icon: faCampground,
    description: "Connect with nature overnight",
  },
  {
    name: "Beach Relaxation",
    icon: faUmbrellaBeach,
    description: "Unwind on pristine shores",
  },
  {
    name: "Mountain Climbing",
    icon: faMountain,
    description: "Conquer majestic peaks",
  },
];

const PopularActivitiesSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Popular Activities
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105"
            >
              <FontAwesomeIcon
                icon={activity.icon}
                className="text-3xl sm:text-4xl mb-2 sm:mb-4 text-[#f49a25]"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-center">
                {activity.name}
              </h3>
              <p className="text-gray-600 text-center text-sm sm:text-base">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularActivitiesSection;

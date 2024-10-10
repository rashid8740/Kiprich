"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faMapMarkedAlt,
  faBinoculars,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export default function Founder() {
  return (
    <section className="bg-[#F5EFE7] relative overflow-hidden mb-4">
      <div className="container mx-auto relative">
        <motion.div
          className="flex flex-col lg:flex-row"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="lg:w-1/2 relative h-[50vh] lg:h-auto">
            <div
              className="absolute top-0 bottom-0 left-0 right-0"
              style={{
                clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
                width: "calc(100% + 3rem)",
                left: "-1.5rem",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Richard Kiprotich"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12 py-12 lg:py-24 px-6 relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1c150d] mb-6">
              Meet Our Founder -{" "}
              <span className="text-[#f49a25]"> Richard Kiprotich</span>{" "}
            </h2>
            <div className="mb-6 text-[#3c2a1a]">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="text-[#f49a25] mr-2"
                size="2x"
              />
              <em className="text-lg lg:text-xl">
                "My goal is to share the raw beauty and authentic spirit of
                Kenya with the world."
              </em>
            </div>
            <p className="text-[#3c2a1a] mb-4 text-sm lg:text-base">
              Richard Kiprotich, a seasoned tour guide with over 25 years of
              experience, founded Kiprich Safaris with a vision that goes beyond
              typical tourism.
            </p>
            <p className="text-[#3c2a1a] mb-6 text-sm lg:text-base">
              His deep connection with Kenya's landscapes, wildlife, and
              cultures has shaped Kiprich Safaris into a company that doesn't
              just offer tours, but life-changing experiences.
            </p>
            <div className="grid grid-cols-3 gap-2 lg:gap-4 text-center">
              {[
                { icon: faMapMarkedAlt, text: "Expert Guide" },
                { icon: faBinoculars, text: "Wildlife Specialist" },
                { icon: faHeart, text: "Conservation Advocate" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#E8DFD1] p-2 lg:p-4 rounded-lg shadow-md"
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
        </motion.div>
      </div>
    </section>
  );
}

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const GalleryHeader = () => {
  return (
    <header className="relative bg-gradient-to-r from-[#f49a25] to-[#f4c425] text-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Geometric shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="relative container mx-auto px-4 z-10">
        <div className="flex flex-col items-center">
          <FontAwesomeIcon
            icon={faCamera}
            className="text-5xl mb-6 animate-pulse"
          />
          <h1 className="text-5xl sm:text-6xl font-bold text-center mb-4 tracking-tight">
            Kenya Photo Gallery
          </h1>
          <div className="w-24 h-1 bg-white mb-6"></div>
          <p className="text-xl text-center max-w-2xl mx-auto leading-relaxed">
            Embark on a visual journey through Kenya's breathtaking landscapes,
            vibrant wildlife, and rich cultural heritage
          </p>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 43.3C1200 47 1320 53 1380 56.7L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </header>
  );
};

export default GalleryHeader;

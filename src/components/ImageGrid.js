import React from "react";
import Image from "next/image";

const ImageGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-md group"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={800}
            height={600}
            layout="responsive"
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <p className="text-white p-4 font-semibold">{image.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;

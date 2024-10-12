import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const BentoImageGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <React.Fragment key={index}>
          {index === 0 && (
            <motion.div
              className="col-span-2 row-span-2 relative rounded-lg overflow-hidden shadow-lg aspect-[4/3]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
              />
            </motion.div>
          )}
          {index > 0 && index < 3 && (
            <motion.div
              className="col-span-1 relative rounded-lg overflow-hidden shadow-lg aspect-[4/3]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
              />
            </motion.div>
          )}
          {index === 3 && (
            <motion.div
              className="col-span-2 relative rounded-lg overflow-hidden shadow-lg aspect-[8/3]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
              />
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BentoImageGrid;

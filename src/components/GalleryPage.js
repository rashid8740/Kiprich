"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import GalleryHeader from "@/components/GalleryHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faTreeCity,
  faUmbrellaBeach,
  faMountain,
  faPaw,
  faCity,
} from "@fortawesome/free-solid-svg-icons";

const categories = [
  { name: "All", icon: faCamera },
  { name: "Wildlife", icon: faPaw },
  { name: "Landscape", icon: faTreeCity },
  { name: "Beach", icon: faUmbrellaBeach },
  { name: "Culture", icon: faMountain },
  { name: "Urban", icon: faCity },
];

const galleryImages = [
  // Wildlife
  {
    src: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Lion in Masai Mara",
    location: "Masai Mara",
    category: "Wildlife",
  },
  {
    src: "https://images.unsplash.com/photo-1581852017103-68ac65514cf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    alt: "Elephant in Amboseli",
    location: "Amboseli",
    category: "Wildlife",
  },
  {
    src: "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?q=80&w=1724&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Rhinoceros",
    location: "Tsavo",
    category: "Wildlife",
  },
  {
    src: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    alt: "Leopard",
    location: "Masai Mara",
    category: "Wildlife",
  },
  // Landscape
  {
    src: "https://images.unsplash.com/photo-1517846875602-2371528547d4?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Masai Mara landscape",
    location: "Masai Mara",
    category: "Landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1633247487039-f4d8062e8bf5?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Amboseli landscape",
    location: "Amboseli",
    category: "Landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?ixlib=rb-4.0.3&auto=format&fit=crop&w=1167&q=80",
    alt: "Tsavo landscape",
    location: "Tsavo",
    category: "Landscape",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661846340419-89bf27138124?q=80&w=1692&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Lake Nakuru",
    location: "Lake Nakuru",
    category: "Landscape",
  },
  // Beach
  {
    src: "https://images.unsplash.com/photo-1505881502353-a1986add3762?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    alt: "Diani Beach",
    location: "Diani Beach",
    category: "Beach",
  },
  {
    src: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    alt: "Watamu Beach",
    location: "Watamu",
    category: "Beach",
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Mombasa Beach",
    location: "Mombasa",
    category: "Beach",
  },
  {
    src: "https://images.unsplash.com/photo-161529942297-dff540a1d624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    alt: "Lamu Island Beach",
    location: "Lamu Island",
    category: "Beach",
  },
  // Culture
  {
    src: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Maasai warriors",
    location: "Maasai Mara",
    category: "Culture",
  },
  {
    src: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    alt: "Kikuyu woman",
    location: "Central Kenya",
    category: "Culture",
  },
  {
    src: "https://images.unsplash.com/photo-1580288927815-cd43cff02309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    alt: "Traditional Kenyan food",
    location: "Nairobi",
    category: "Culture",
  },
  {
    src: "https://images.unsplash.com/photo-1596711715198-fe768d70a2f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    alt: "Lamu Old Town",
    location: "Lamu Island",
    category: "Culture",
  },
  // Urban
  {
    src: "https://images.unsplash.com/photo-1517846875602-2371528547d4?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Nairobi skyline",
    location: "Nairobi",
    category: "Urban",
  },
  {
    src: "https://images.unsplash.com/photo-1570070496386-75a3149d2365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Mombasa Old Town",
    location: "Mombasa",
    category: "Urban",
  },
  {
    src: "https://images.unsplash.com/photo-1563656157432-67560011e209?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Nairobi National Museum",
    location: "Nairobi",
    category: "Urban",
  },
  {
    src: "https://images.unsplash.com/photo-1604170099005-b3897c9fa6c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Kisumu City",
    location: "Kisumu",
    category: "Urban",
  },
];

const useCarousel = (images, interval) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearTimeout(timer);
  }, [currentImageIndex, images, interval]);

  return currentImageIndex;
};

const animations = [
  {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.2 },
  },
  {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  },
  {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  },
  {
    initial: { opacity: 0, rotate: -180 },
    animate: { opacity: 1, rotate: 0 },
    exit: { opacity: 0, rotate: 180 },
  },
  {
    initial: { opacity: 0, scale: 1.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
  },
];

const CarouselGridItem = ({ images, index }) => {
  const currentImageIndex = useCarousel(images, 3000 + index * 1000);
  const animation = animations[index % animations.length];

  return (
    <motion.div
      className={`relative rounded-lg overflow-hidden shadow-lg ${
        index === 0
          ? "col-span-2 row-span-2 aspect-[4/3]"
          : index === 3
          ? "col-span-2 aspect-[8/3]"
          : "col-span-1 aspect-[4/3]"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={animation.initial}
          animate={animation.animate}
          exit={animation.exit}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            fill
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

const BentoImageGrid = ({ images, isAllTab }) => {
  if (isAllTab) {
    const carouselImages = categories
      .slice(1)
      .map((category) =>
        images.filter((img) => img.category === category.name)
      );

    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {carouselImages.map((categoryImages, index) => (
          <CarouselGridItem key={index} images={categoryImages} index={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`relative rounded-lg overflow-hidden shadow-lg ${
            index === 0
              ? "col-span-2 row-span-2 aspect-[4/3]"
              : index === 3
              ? "col-span-2 aspect-[8/3]"
              : "col-span-1 aspect-[4/3]"
          }`}
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
      ))}
    </div>
  );
};

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const filteredImages =
    categories[activeTab].name === "All"
      ? galleryImages
      : galleryImages.filter(
          (img) => img.category === categories[activeTab].name
        );

  return (
    <div className="bg-gray-100 min-h-screen">
      <GalleryHeader />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Explore Kenya's Beauty
        </h1>
        <div className="sticky top-0 bg-gray-100 z-10 py-4">
          <div className="flex justify-start lg:justify-center overflow-x-auto">
            <div className="inline-flex bg-white rounded-lg p-1 shadow-md">
              {categories.map((category, index) => (
                <button
                  key={category.name}
                  className={`flex flex-col items-center px-4 py-2 rounded-lg transition duration-300 flex-shrink-0 mx-1 ${
                    activeTab === index
                      ? "bg-[#f49a25] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <FontAwesomeIcon
                    icon={category.icon}
                    className="text-lg mb-1"
                  />
                  <span className="text-xs font-medium whitespace-nowrap">
                    {category.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8">
          <BentoImageGrid
            images={filteredImages}
            isAllTab={categories[activeTab].name === "All"}
          />
        </div>
      </main>
    </div>
  );
};

export default GalleryPage;

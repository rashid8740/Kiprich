import React from "react";
import Image from "next/image";

const animals = [
  {
    name: "Lion",
    description:
      "The king of the savannah, known for its majestic mane and powerful roar.",
    image:
      "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Elephant",
    description:
      "The gentle giants of Africa, with their characteristic tusks and trunks.",
    image:
      "https://images.unsplash.com/photo-1581852017103-68ac65514cf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Rhinoceros",
    description:
      "Prehistoric-looking creatures with thick armor-like hide and horns.",
    image:
      "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?q=80&w=1724&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Leopard",
    description:
      "Elusive and graceful, known for their beautiful spotted coats.",
    image:
      "https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Buffalo",
    description: "Powerful and unpredictable, often found in large herds.",
    image:
      "https://plus.unsplash.com/premium_photo-1664302669447-d63f6c898f2f?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function BigFive() {
  return (
    <section className="my-8 sm:my-12 md:my-16 bg-[#fcfaf8] p-4 sm:p-6 md:p-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-[#1c150d]">
        Discover Kenya's Big Five
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
        {animals.map((animal, index) => (
          <div
            key={index}
            className="bg-white border border-[#e8ddce] rounded-lg overflow-hidden transition duration-300 hover:shadow-lg hover:scale-105"
          >
            <div className="relative h-36 sm:h-48 md:h-56 w-full">
              <Image
                src={animal.image}
                alt={animal.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-2 sm:p-3 md:p-4">
              <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-[#1c150d]">
                {animal.name}
              </h3>
              <p className="text-[#9c7849] text-xs sm:text-sm line-clamp-3">
                {animal.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

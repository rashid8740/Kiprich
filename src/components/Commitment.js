import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faUsers,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export default function Commitment() {
  const commitments = [
    {
      icon: faMapMarkedAlt,
      title: "Authentic Experiences",
      description: "Immerse yourself in the real Kenya, off the beaten path",
    },
    {
      icon: faUsers,
      title: "Expert Guides",
      description: "Learn from our knowledgeable and passionate local guides",
    },
    {
      icon: faHeart,
      title: "Responsible Tourism",
      description:
        "Travel with a clear conscience, supporting conservation and communities",
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-[#1c150d] text-white">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
          Our Commitment to You
        </h2>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto">
          At Kiprich Safaris, we promise to deliver:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {commitments.map((commitment, index) => (
            <div
              key={index}
              className="bg-[#2c2519] p-6 rounded-lg transition-transform duration-300 hover:scale-105"
            >
              <FontAwesomeIcon
                icon={commitment.icon}
                className="text-3xl sm:text-4xl text-[#f49a25] mb-3 sm:mb-4"
              />
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                {commitment.title}
              </h3>
              <p className="text-sm sm:text-base">{commitment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

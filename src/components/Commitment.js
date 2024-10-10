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
    <section className="py-16 bg-[#1c150d] text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Commitment to You</h2>
        <p className="text-xl mb-12">
          At Kiprich Safaris, we promise to deliver:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {commitments.map((commitment, index) => (
            <div key={index}>
              <FontAwesomeIcon
                icon={commitment.icon}
                className="text-4xl text-[#f49a25] mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{commitment.title}</h3>
              <p>{commitment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

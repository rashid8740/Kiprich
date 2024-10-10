import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree, faPaw, faUsers } from "@fortawesome/free-solid-svg-icons";

export default function Conservation() {
  const efforts = [
    {
      icon: faTree,
      title: "Reforestation",
      description: "Help us plant trees to restore natural habitats",
    },
    {
      icon: faPaw,
      title: "Wildlife Protection",
      description: "Support anti-poaching efforts and wildlife sanctuaries",
    },
    {
      icon: faUsers,
      title: "Community Engagement",
      description: "Empower local communities through eco-tourism",
    },
  ];

  return (
    <section className="my-16 bg-[#1c150d] text-white p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Join Our Conservation Efforts
      </h2>
      <p className="text-center mb-8">
        At Kiprich Safaris, we're committed to preserving Kenya's natural beauty
        and wildlife for future generations.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {efforts.map((effort, index) => (
          <div key={index} className="text-center">
            <FontAwesomeIcon
              icon={effort.icon}
              className="text-4xl mb-4 text-[#f49a25]"
            />
            <h3 className="font-bold text-xl mb-2">{effort.title}</h3>
            <p>{effort.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href="#"
          className="bg-[#f49a25] text-[#1c150d] px-6 py-3 rounded-full text-lg font-bold hover:bg-[#e38d1e] transition-colors inline-block"
        >
          Learn More About Our Conservation
        </a>
      </div>
    </section>
  );
}

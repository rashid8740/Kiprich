import Image from "next/image";

export default function Features() {
  const features = [
    {
      title: "Unrivaled Access",
      description:
        "Experience exclusive access to remote Kenyan reserves and intimate wildlife encounters.",
      image:
        "https://cdn.usegalileo.ai/sdxl10/98a672b2-3a2f-4993-91dd-d56a109443cd.png",
    },
    {
      title: "Expert Guides",
      description:
        "Our local Kenyan guides share deep knowledge of the country's flora and fauna.",
      image:
        "https://cdn.usegalileo.ai/sdxl10/deb99bda-cf4e-427f-a13e-15d2da98047c.png",
    },
    {
      title: "Luxury Accommodations",
      description:
        "Enjoy lavish lodges and tented camps with breathtaking views of the Kenyan landscape.",
      image:
        "https://cdn.usegalileo.ai/sdxl10/d56362a3-558f-43b2-8df1-6f3652ee4569.png",
    },
  ];

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6">What sets us apart</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border border-[#e8ddce] rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <Image
              src={feature.image}
              alt={feature.title}
              width={48}
              height={48}
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-[#9c7849]">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

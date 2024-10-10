import Image from "next/image";

export default function Destinations() {
  const destinations = [
    {
      name: "Masai Mara",
      image:
        "https://images.unsplash.com/photo-1517846875602-2371528547d4?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Amboseli",
      image:
        "https://images.unsplash.com/photo-1633247487039-f4d8062e8bf5?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Tsavo",
      image:
        "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?ixlib=rb-4.0.3&auto=format&fit=crop&w=1167&q=80",
    },
    {
      name: "Lake Nakuru",
      image:
        "https://plus.unsplash.com/premium_photo-1661846340419-89bf27138124?q=80&w=1692&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6">Popular Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {destinations.map((destination, index) => (
          <div key={index} className="group">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={destination.image}
                alt={destination.name}
                width={800}
                height={600}
                className="w-full h-48 object-cover rounded-lg mb-2 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p className="font-medium mt-2">{destination.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

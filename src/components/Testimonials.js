export default function Testimonials() {
  const testimonials = [
    {
      text: "Our experience with Kiprich Safaris was truly unforgettable. The guides were knowledgeable, the accommodations were luxurious, and the wildlife sightings were beyond our wildest dreams!",
      author: "Sarah & John, UK",
    },
    {
      text: "Kiprich Safaris provided us with an authentic Kenyan adventure. From the Masai Mara to Amboseli, every moment was filled with wonder and excitement.",
      author: "David & Emily, USA",
    },
  ];

  return (
    <section className="my-12 bg-[#1c150d] text-white p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Customer Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-[#2c2519] p-6 rounded-lg">
            <p className="mb-4">{testimonial.text}</p>
            <p className="font-bold">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

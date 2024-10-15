import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Destinations from "@/components/Destinations";
import BookingSafari from "@/components/BookingSafari";
import BigFive from "@/components/BigFive";
import Conservation from "@/components/Conservation";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="container mx-auto px-4 md:px-10">
      <Hero />
      <Features />
      <Destinations />
      <BigFive />
      <BookingSafari />
      <Conservation />
      <Testimonials />
    </main>
  );
}

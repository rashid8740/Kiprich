import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Destinations from "@/components/Destinations";
import BookingSafari from "@/components/BookingSafari";
import BigFive from "@/components/BigFive";
import Conservation from "@/components/Conservation";
import Testimonials from "@/components/Testimonials";
import Activities from "@/components/Activities";

export default function Home() {
  return (
    <main className="container mx-auto px-4 md:px-10">
      <Hero />
      <Activities />
      <Features />
      <Destinations />
      <BigFive />
      <BookingSafari />
      <Conservation />
      <Testimonials />
    </main>
  );
}

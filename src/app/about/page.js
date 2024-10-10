import AboutHero from "@/components/AboutHero";
import Founder from "@/components/Founder";
import Timeline from "@/components/Timeline";
import Commitment from "@/components/Commitment";
import BookingSafari from "@/components/BookingSafari";

export default function About() {
  return (
    <main className="container mx-auto px-4 md:px-10">
      <AboutHero />
      <Founder />
      <Timeline />
      <Commitment />
      <BookingSafari />
    </main>
  );
}

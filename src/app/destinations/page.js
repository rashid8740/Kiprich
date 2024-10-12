import DestinationsHero from "@/components/DestinationsHero";
import FeaturedDestinationsGrid from "@/components/FeaturedDestinationsGrid";
import PopularActivitiesSection from "@/components/PopularActivitiesSection";
import MapComponent from "@/components/MapComponent";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export default function Destinations() {
  return (
    <main className="bg-[#fcfaf8]">
      <DestinationsHero />
      <FeaturedDestinationsGrid />
      <PopularActivitiesSection />
      <MapComponent />
      <TestimonialsCarousel />
    </main>
  );
}

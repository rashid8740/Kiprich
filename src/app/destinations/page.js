"use client";

import dynamic from "next/dynamic";
import DestinationsHero from "@/components/DestinationsHero";
import FeaturedDestinationsGrid from "@/components/FeaturedDestinationsGrid";
import PopularActivitiesSection from "@/components/PopularActivitiesSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

// Dynamically import MapComponent with ssr option set to false
const MapComponent = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
});

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

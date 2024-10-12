"use client";

import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const DestinationsHero = dynamic(
  () => import("@/components/DestinationsHero"),
  {
    ssr: false,
    loading: () => <p>Loading Hero...</p>,
  }
);

const FeaturedDestinationsGrid = dynamic(
  () => import("@/components/FeaturedDestinationsGrid"),
  {
    ssr: false,
    loading: () => <p>Loading Destinations Grid...</p>,
  }
);

const PopularActivitiesSection = dynamic(
  () => import("@/components/PopularActivitiesSection"),
  {
    ssr: false,
    loading: () => <p>Loading Activities...</p>,
  }
);

const MapComponent = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
  loading: () => <p>Loading Map...</p>,
});

const TestimonialsCarousel = dynamic(
  () => import("@/components/TestimonialsCarousel"),
  {
    ssr: false,
    loading: () => <p>Loading Testimonials...</p>,
  }
);

export default function Destinations() {
  return (
    <main className="bg-[#fcfaf8]">
      <Suspense fallback={<div>Loading...</div>}>
        <DestinationsHero />
        <FeaturedDestinationsGrid />
        <PopularActivitiesSection />
        <MapComponent />
        <TestimonialsCarousel />
      </Suspense>
    </main>
  );
}

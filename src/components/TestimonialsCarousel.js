"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    text: "My safari experience in Kenya was absolutely breathtaking. The wildlife encounters in Maasai Mara were beyond my wildest dreams!",
  },
  {
    name: "Akio Tanaka",
    location: "Tokyo, Japan",
    text: "Climbing Mount Kenya was a challenging yet rewarding adventure. The views from the top were simply spectacular.",
  },
  {
    name: "Emma Wilson",
    location: "London, UK",
    text: "The beaches of Diani were pristine and tranquil. It was the perfect place to unwind after an exciting safari tour.",
  },
  {
    name: "Carlos Rodriguez",
    location: "Madrid, Spain",
    text: "The cultural experiences with the Maasai people were enlightening. Kenya offers so much more than just wildlife!",
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 sm:py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          What Our Travelers Say
        </h2>
        <div className="relative bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="text-3xl sm:text-4xl text-[#f49a25] mb-4"
          />
          <div className="min-h-[150px] sm:min-h-[200px] pb-16 sm:pb-8">
            <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 italic">
              {testimonials[currentIndex].text}
            </p>
            <div className="text-right">
              <p className="font-semibold text-sm sm:text-base">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-xs sm:text-sm text-gray-600">
                {testimonials[currentIndex].location}
              </p>
            </div>
          </div>
          <div className="absolute bottom-6 left-6 right-6 sm:static sm:mt-8">
            <div className="flex sm:justify-center">
              <div className="flex w-full sm:w-auto rounded-lg overflow-hidden border border-[#f49a25]">
                <button
                  onClick={prevTestimonial}
                  className="flex-1 sm:flex-initial bg-white text-[#f49a25] py-3 px-6 hover:bg-[#f49a25] hover:text-white transition-colors duration-300"
                  aria-label="Previous testimonial"
                >
                  <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
                </button>
                <div className="w-px bg-[#f49a25]"></div>
                <button
                  onClick={nextTestimonial}
                  className="flex-1 sm:flex-initial bg-white text-[#f49a25] py-3 px-6 hover:bg-[#f49a25] hover:text-white transition-colors duration-300"
                  aria-label="Next testimonial"
                >
                  <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

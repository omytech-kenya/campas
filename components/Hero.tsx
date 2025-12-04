"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const slides = [
    {
      title: "Innovate. Collaborate. Excel.",
      subtitle: "Join the global university innovation network",
      description:
        "Connect with brilliant minds across universities worldwide. Share research, collaborate on projects, and accelerate your academic and professional journey.",
      cta: "Start Your Journey",
      image: "/carousel/carousel.jpg",
    },
    {
      title: "Research That Matters",
      subtitle: "Breakthrough discoveries start here",
      description:
        "Access cutting-edge research facilities, collaborate with leading academics, and contribute to innovations that shape the future of technology and society.",
      cta: "Explore Research",
      image: "/carousel/carousel1.jpg",
    },
    {
      title: "Global Career Opportunities",
      subtitle: "Your pathway to success",
      description:
        "Build your professional network, showcase your innovations, and discover career opportunities with leading organizations and research institutions worldwide.",
      cta: "Build Your Profile",
      image: "/carousel/carousel3.jpg",
    },
    {
      title: "Shape the Future",
      subtitle: "Innovation starts with you",
      description:
        "Transform ideas into reality through collaborative research, cutting-edge technology, and meaningful partnerships that drive positive change in the world.",
      cta: "Get Involved",
      image: "/carousel/carousel4.jpg",
    },
    {
      title: "Excellence in Education",
      subtitle: "Empowering tomorrow's leaders",
      description:
        "Access world-class educational resources, mentorship programs, and professional development opportunities that prepare you for success in a rapidly evolving world.",
      cta: "Learn More",
      image: "/carousel/carousel6.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-background">
      {/* Background Image Carousel with Smooth Transitions */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-1500 ease-in-out"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-5xl mx-auto">
            {/* Main Content */}
            <div className="space-y-10">
              {/* Dynamic Content with Smooth Transitions */}
              <div className="space-y-8">
                <div className="overflow-hidden">
                  <h1
                    key={`title-${currentSlide}`}
                    className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-none tracking-tight animate-fade-up"
                  >
                    {slides[currentSlide]?.title || "Loading..."}
                  </h1>
                </div>

                <div className="overflow-hidden">
                  <h2
                    key={`subtitle-${currentSlide}`}
                    className="text-xl md:text-3xl text-primary font-light tracking-wide animate-fade-up delay-200"
                  >
                    {slides[currentSlide]?.subtitle || ""}
                  </h2>
                </div>

                <div className="overflow-hidden">
                  <p
                    key={`description-${currentSlide}`}
                    className="text-lg md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto font-light animate-fade-up delay-400"
                  >
                    {slides[currentSlide]?.description || ""}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-4">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="p-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-all duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Slide Indicators */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? "bg-primary"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="p-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-all duration-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

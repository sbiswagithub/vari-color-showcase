import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import Hero1 from "@/assets/hero.svg?url";
import Hero2 from "@/assets/hero.svg?url";
import Hero3 from "@/assets/hero.svg?url";

const slides = [
  {
    id: 1,
    title: "VIBRANT COLOURS OF KOLKATA",
    subtitle: "VARICOLOR",
    image: Hero1,
  },
  {
    id: 2,
    title: "TRADITIONAL WEAVES",
    subtitle: "VARICOLOR",
    image: Hero2,
  },
  {
    id: 3,
    title: "FESTIVE COLLECTION",
    subtitle: "VARICOLOR",
    image: Hero3,
  },
  {
    id: 4,
    title: "FESTIVE COLLECTION",
    subtitle: "VARICOLOR",
    image: Hero3,
  },
  {
    id: 5,
    title: "FESTIVE COLLECTION",
    subtitle: "VARICOLOR",
    image: Hero3,
  },
  {
    id: 6,
    title: "FESTIVE COLLECTION",
    subtitle: "VARICOLOR",
    image: Hero3,
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[290px] sm:h-[320px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 animate-fade-in ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10 container mx-auto h-full flex items-center px-4">
            <div className="ml-2 sm:ml-6 md:ml-12 lg:ml-14 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <p className="text-[10px] sm:text-xs md:text-sm lg:text-base tracking-[0.2em] md:tracking-[0.3em] text-black mb-2 md:mb-4 lg:mb-6 font-light">
                {slide.title}
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black font-subrayada mb-4 md:mb-6 lg:mb-8">
                {slide.subtitle}
              </h2>

              <Button className="bg-[#402039] hover:bg-[#402039]/90 px-6 md:px-8 py-3 md:py-4 lg:py-5 text-white text-sm md:text-base hover-scale">
                SHOP NOW
              </Button>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 md:h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-purple-dark w-6 md:w-8" : "bg-purple-dark/30 w-1.5 md:w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;

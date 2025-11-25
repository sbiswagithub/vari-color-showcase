import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "VIBRANT COLOURS OF KOLKATA",
    subtitle: "VARICOLOR",
    image: "/hero-1.jpg",
  },
  {
    id: 2,
    title: "TRADITIONAL WEAVES",
    subtitle: "VARICOLOR",
    image: "/hero-2.jpg",
  },
  {
    id: 3,
    title: "FESTIVE COLLECTION",
    subtitle: "VARICOLOR",
    image: "/hero-3.jpg",
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

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-cream">
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 md:w-32 opacity-30 z-10">
        <svg viewBox="0 0 100 200" className="fill-purple-dark/20">
          <path d="M50,20 Q30,50 50,80 T50,140 Q30,170 50,200" stroke="currentColor" fill="none" strokeWidth="2"/>
          <circle cx="50" cy="100" r="30" opacity="0.3"/>
        </svg>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 md:w-32 opacity-30 z-10">
        <svg viewBox="0 0 100 200" className="fill-purple-dark/20">
          <path d="M50,20 Q70,50 50,80 T50,140 Q70,170 50,200" stroke="currentColor" fill="none" strokeWidth="2"/>
          <circle cx="50" cy="100" r="30" opacity="0.3"/>
        </svg>
      </div>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/80 to-transparent z-[1]" />
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute right-0 top-0 h-full w-auto max-w-[60%] object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800";
            }}
          />
          
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="max-w-xl">
              <p className="text-sm md:text-base tracking-[0.3em] text-purple-medium mb-4 font-light">
                {slide.title}
              </p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8">
                {slide.subtitle}
              </h2>
              <Button className="btn-purple px-8 py-6 text-base">
                SHOP NOW
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-2 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-purple-dark" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-2 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-purple-dark" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-purple-dark w-8" : "bg-purple-dark/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;

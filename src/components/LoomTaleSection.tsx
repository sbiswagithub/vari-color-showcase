import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { id: 1, name: "BANARASEE", image: "/banarasee.jpg" },
  { id: 2, name: "PAITHANI", image: "/paithani.jpg" },
  { id: 3, name: "BANDHANI", image: "/bandhani.jpg" },
  { id: 4, name: "POCHAMPALLY", image: "/pochampally.jpg" },
];

const LoomTaleSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  const visibleCategories = [
    categories[currentIndex],
    categories[(currentIndex + 1) % categories.length],
    categories[(currentIndex + 2) % categories.length],
  ];

  return (
    <section className="bg-purple-dark text-white py-16 md:py-24 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Left - Loom image */}
          <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <img
              src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600"
              alt="Traditional loom weaving"
              className="w-full h-[400px] object-cover rounded-lg hover-scale transition-transform duration-500"
            />
          </div>

          {/* Right - Content and carousel */}
          <div className="lg:col-span-3 space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="border-t-2 border-gold pt-4">
              <p className="text-gold text-sm tracking-widest mb-2">FEATURED COLLECTION</p>
              <h2 className="text-3xl md:text-4xl font-bold">
                THE LOOM TALE AT VARICOLOR
              </h2>
            </div>

            {/* Carousel */}
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {visibleCategories.map((category) => (
                  <div
                    key={category.id}
                    className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[3/4] hover-scale"
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        const colors = ["#8B0000", "#FF1493", "#4B0082", "#DC143C"];
                        const colorIndex = category.id % colors.length;
                        e.currentTarget.src = `https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=600&fit=crop&color=${colors[colorIndex]}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-bold text-lg">{category.name}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation buttons */}
              <button
                onClick={prev}
                className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white text-purple-dark p-2 rounded-full hover:bg-gold transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white text-purple-dark p-2 rounded-full hover:bg-gold transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <Button className="btn-gold px-8 py-6 text-base hover-scale">
              View Heritage Collection
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoomTaleSection;

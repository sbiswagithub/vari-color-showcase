import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { id: 1, name: "BANARASEE", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=600" },
  { id: 2, name: "PAITHANI", image: "https://images.unsplash.com/photo-1583391265740-d6d8f45a17e7?w=400&h=600" },
  { id: 3, name: "BANDHANI", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&h=600" },
  { id: 4, name: "POCHAMPALLY", image: "https://images.unsplash.com/photo-1610030469266-3c3a0e0f7a2c?w=400&h=600" },
];

const LoomTaleSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + categories.length) % categories.length
    );
  };

  const visibleCategories = [
    categories[currentIndex],
    categories[(currentIndex + 1) % categories.length],
    categories[(currentIndex + 2) % categories.length],
  ];

  return (
    <section
      className="py-10 md:py-12 lg:py-16 animate-fade-in border-[0.1px] border-black"
      style={{
        background: `linear-gradient(
          180deg,
          #402039 39%,
          #F9F9F9 77%,
          #F9F9F9 95%
        )`,
      }}
    >
      <div className="max-w-[82rem] mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-6 md:gap-8 lg:gap-4 items-center">
          <div className="lg:col-span-2 flex justify-center order-1 lg:order-none animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <img
              src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600"
              alt="Traditional loom weaving"
              className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] h-[360px] sm:h-[420px] md:h-[480px] lg:h-[540px] object-cover rounded-xl hover-scale transition-transform duration-500"
            />
          </div>
          <div className="lg:col-span-3 text-purple-dark order-2 lg:order-none animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-white text-xs md:text-sm font-semibold tracking-widest">
              FEATURED COLLECTION
            </p>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#FDDCAA] mt-1">
              THE LOOM TALE AT VARICOLOR
            </h2>
            <div className="border-t border-gold w-full mt-3 md:mt-4"></div>
            <div className="relative mt-6 md:mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {visibleCategories.map((category) => (
                  <div
                    key={category.id}
                    className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[5/4] bg-gray-200 hover-scale"
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 left-8 md:left-12 lg:left-16">
                      <p className="text-white text-base md:text-lg font-medium">
                        {category.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={prev}
                className="hidden lg:flex absolute -left-6 xl:-left-10 top-1/2 -translate-y-1/2 bg-white text-purple-dark p-2 rounded-full shadow hover:bg-gold transition-colors"
                aria-label="Previous category"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={next}
                className="hidden lg:flex absolute -right-6 xl:-right-10 top-1/2 -translate-y-1/2 bg-white text-purple-dark p-2 rounded-full shadow hover:bg-gold transition-colors"
                aria-label="Next category"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Mobile navigation buttons */}
              <div className="flex lg:hidden justify-center gap-4 mt-6">
                <button
                  onClick={prev}
                  className="bg-white text-purple-dark p-2 rounded-full shadow hover:bg-gold transition-colors"
                  aria-label="Previous category"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={next}
                  className="bg-white text-purple-dark p-2 rounded-full shadow hover:bg-gold transition-colors"
                  aria-label="Next category"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center md:justify-center mt-10 md:mt-12 lg:mt-16">
              <Button className="bg-[#C39D65] hover:bg-[#B08D55] px-8 md:px-10 py-4 md:py-5 lg:py-6 text-[#700404] text-base md:text-lg font-semibold hover-scale">
                View Heritage Collection
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoomTaleSection;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import indiaMap from "@/assets/india-map.png";

interface Region {
  name: string;
  state: string;
  coordinates: { x: string; y: string };
}

const regions: Region[] = [
  { name: "Patan Patola", state: "Gujarat", coordinates: { x: "25%", y: "35%" } },
  { name: "Banarasi", state: "Uttar Pradesh", coordinates: { x: "65%", y: "28%" } },
  { name: "Kanchipuram", state: "Tamil Nadu", coordinates: { x: "60%", y: "75%" } },
  { name: "Chanderi", state: "Madhya Pradesh", coordinates: { x: "50%", y: "40%" } },
  { name: "Pochampally", state: "Telangana", coordinates: { x: "58%", y: "55%" } },
  { name: "Mysore Silk", state: "Karnataka", coordinates: { x: "50%", y: "65%" } },
];

const IndiaMapSection = () => {
  const [hoveredRegion, setHoveredRegion] = useState<Region | null>(null);

  return (
    <section className="py-12 md:py-20 lg:py-24 animate-fade-in" style={{ backgroundColor: '#402039' }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-cream">
              EXPLORE INDIA'S<br />
              WEAVING LEGACY
            </h2>
            <p className="text-base md:text-lg text-cream/90 max-w-lg leading-relaxed">
              Unveil India's diverse saree traditions, state by vibrant state. Explore the distinct artistry and rich weaving legacy where every thread tells a tale.
            </p>
            <Button className="btn-gold px-6 md:px-8 py-5 md:py-6 text-sm md:text-base mt-4 hover-scale">
              View Heritage Collection
            </Button>
          </div>

          {/* Right - India Map */}
          <div 
            className="relative bg-cream rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 shadow-2xl animate-fade-in overflow-hidden"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="relative w-full h-full">
              <img 
                src={indiaMap} 
                alt="India Map with Traditional Textiles" 
                className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
              />
              
              {/* Interactive hotspots for each region */}
              {regions.map((region, index) => (
                <div
                  key={index}
                  className="absolute w-8 h-8 md:w-10 md:h-10 cursor-pointer group"
                  style={{ 
                    left: region.coordinates.x, 
                    top: region.coordinates.y,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onMouseEnter={() => setHoveredRegion(region)}
                  onMouseLeave={() => setHoveredRegion(null)}
                >
                  <div className="absolute inset-0 rounded-full bg-gold/20 group-hover:bg-gold/40 transition-all duration-300 animate-pulse" />
                  <div className="absolute inset-0 rounded-full border-2 border-gold group-hover:scale-125 transition-transform duration-300" />
                </div>
              ))}
            </div>

            {/* Hover tooltip */}
            {hoveredRegion && (
              <div 
                className="absolute top-8 right-8 md:top-12 md:right-12 px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-2xl pointer-events-none z-10 animate-in fade-in duration-200"
                style={{ backgroundColor: '#402039' }}
              >
                <p className="font-bold text-base md:text-lg text-cream">{hoveredRegion.name}</p>
                <p className="text-xs md:text-sm text-cream/80 mt-1">◉ {hoveredRegion.state}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndiaMapSection;

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Region {
  name: string;
  state: string;
  path: string;
}

const regions: Region[] = [
  { name: "Patan Patola", state: "Gujarat", path: "M150,300 L180,290 L200,310 L190,340 L160,335 Z" },
  { name: "Banarasi", state: "Uttar Pradesh", path: "M350,200 L380,190 L400,210 L390,240 L360,235 Z" },
  { name: "Kanchipuram", state: "Tamil Nadu", path: "M320,450 L350,440 L370,460 L360,490 L330,485 Z" },
  { name: "Chanderi", state: "Madhya Pradesh", path: "M280,250 L310,240 L330,260 L320,290 L290,285 Z" },
  { name: "Pochampally", state: "Telangana", path: "M340,380 L370,370 L390,390 L380,420 L350,415 Z" },
];

const IndiaMapSection = () => {
  const [hoveredRegion, setHoveredRegion] = useState<Region | null>(null);

  return (
    <section className="py-12 md:py-20 lg:py-24" style={{ backgroundColor: '#402039' }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-cream">
              EXPLORE INDIA'S<br />
              WEAVING LEGACY
            </h2>
            <p className="text-base md:text-lg text-cream/90 max-w-lg leading-relaxed">
              Unveil India's diverse saree traditions, state by vibrant state. Explore the distinct artistry and rich weaving legacy where every thread tells a tale.
            </p>
            <Button className="btn-gold px-6 md:px-8 py-5 md:py-6 text-sm md:text-base mt-4">
              View Heritage Collection
            </Button>
          </div>

          {/* Right - India Map */}
          <div className="relative bg-cream rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 shadow-2xl">
            <svg
              viewBox="0 0 500 600"
              className="w-full h-auto"
              style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.15))" }}
            >
              {/* Simplified India outline - main shape */}
              <path
                d="M250,50 L280,60 L310,80 L340,100 L365,130 L385,160 L400,195 L410,230 L415,270 L410,310 L400,350 L385,385 L365,415 L340,445 L315,470 L285,490 L250,500 L215,490 L185,470 L160,445 L135,415 L115,385 L100,350 L90,310 L85,270 L90,230 L100,195 L115,160 L135,130 L160,100 L190,80 L220,60 Z"
                fill="#f5efe6"
                stroke="#D4AF37"
                strokeWidth="3"
              />

              {/* Regional textile patterns with vibrant colors */}
              {regions.map((region, index) => (
                <g
                  key={index}
                  onMouseEnter={() => setHoveredRegion(region)}
                  onMouseLeave={() => setHoveredRegion(null)}
                  className="cursor-pointer transition-all duration-300"
                >
                  <path
                    d={region.path}
                    fill={`url(#pattern-${index})`}
                    stroke="#D4AF37"
                    strokeWidth="2"
                    className="hover:opacity-90 transition-opacity duration-300"
                    style={{
                      filter: hoveredRegion?.name === region.name 
                        ? "drop-shadow(0 0 8px rgba(212, 175, 55, 0.8))" 
                        : "none"
                    }}
                  />
                </g>
              ))}

              {/* Enhanced pattern definitions with vibrant textile-inspired designs */}
              <defs>
                {/* Gujarat - Pink with gold dots */}
                <pattern id="pattern-0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect width="20" height="20" fill="#E91E63" />
                  <circle cx="5" cy="5" r="2" fill="#FFD700" />
                  <circle cx="15" cy="15" r="2" fill="#FFD700" />
                  <circle cx="10" cy="10" r="1.5" fill="#FFF" />
                </pattern>
                
                {/* Uttar Pradesh - Purple with gold stripes */}
                <pattern id="pattern-1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect width="20" height="20" fill="#9C27B0" />
                  <path d="M0,5 L20,5 M0,15 L20,15" stroke="#FFD700" strokeWidth="1.5" />
                  <path d="M5,0 L5,20 M15,0 L15,20" stroke="#FF6B9D" strokeWidth="1" />
                </pattern>
                
                {/* Tamil Nadu - Cyan with orange squares */}
                <pattern id="pattern-2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect width="20" height="20" fill="#00BCD4" />
                  <rect x="5" y="5" width="4" height="4" fill="#FF5722" />
                  <rect x="13" y="13" width="4" height="4" fill="#FF9800" />
                  <circle cx="10" cy="10" r="2" fill="#FFEB3B" />
                </pattern>
                
                {/* Madhya Pradesh - Green with yellow circles */}
                <pattern id="pattern-3" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect width="20" height="20" fill="#4CAF50" />
                  <circle cx="10" cy="10" r="4" fill="#FFC107" />
                  <circle cx="3" cy="3" r="2" fill="#8BC34A" />
                  <circle cx="17" cy="17" r="2" fill="#CDDC39" />
                </pattern>
                
                {/* Telangana - Orange with pink crosses */}
                <pattern id="pattern-4" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect width="20" height="20" fill="#FF9800" />
                  <path d="M5,0 L5,20 M0,5 L20,5 M15,0 L15,20 M0,15 L20,15" stroke="#E91E63" strokeWidth="1.5" />
                  <circle cx="10" cy="10" r="2" fill="#FFD700" />
                </pattern>
              </defs>
            </svg>

            {/* Hover tooltip - positioned near cursor */}
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

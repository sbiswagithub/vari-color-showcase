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
    <section className="bg-purple-dark text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              EXPLORE INDIA'S<br />
              WEAVING LEGACY
            </h2>
            <p className="text-lg text-white/80 max-w-lg">
              Unveil India's diverse saree traditions, state by vibrant state. Explore the distinct artistry and rich weaving legacy where every thread tells a tale.
            </p>
            <Button className="btn-gold px-8 py-6 text-base mt-4">
              View Heritage Collection
            </Button>
          </div>

          {/* Right - India Map */}
          <div className="relative bg-cream rounded-3xl p-8 lg:p-12">
            <svg
              viewBox="0 0 500 600"
              className="w-full h-auto"
              style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.1))" }}
            >
              {/* Simplified India outline */}
              <path
                d="M250,50 L280,60 L310,80 L340,100 L365,130 L385,160 L400,195 L410,230 L415,270 L410,310 L400,350 L385,385 L365,415 L340,445 L315,470 L285,490 L250,500 L215,490 L185,470 L160,445 L135,415 L115,385 L100,350 L90,310 L85,270 L90,230 L100,195 L115,160 L135,130 L160,100 L190,80 L220,60 Z"
                fill="#f5efe6"
                stroke="#6B2D7E"
                strokeWidth="2"
              />

              {/* Regional textile patterns */}
              {regions.map((region, index) => (
                <g
                  key={index}
                  onMouseEnter={() => setHoveredRegion(region)}
                  onMouseLeave={() => setHoveredRegion(null)}
                  className="cursor-pointer transition-all"
                >
                  <path
                    d={region.path}
                    fill={`url(#pattern-${index})`}
                    stroke="#6B2D7E"
                    strokeWidth="1"
                    className="hover:opacity-80 transition-opacity"
                  />
                </g>
              ))}

              {/* Pattern definitions */}
              <defs>
                <pattern id="pattern-0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect width="20" height="20" fill="#E91E63" />
                  <circle cx="10" cy="10" r="3" fill="#FFD700" />
                </pattern>
                <pattern id="pattern-1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect width="20" height="20" fill="#9C27B0" />
                  <path d="M0,20 L20,0" stroke="#FFD700" strokeWidth="2" />
                </pattern>
                <pattern id="pattern-2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect width="20" height="20" fill="#00BCD4" />
                  <rect x="5" y="5" width="10" height="10" fill="#FF5722" />
                </pattern>
                <pattern id="pattern-3" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect width="20" height="20" fill="#4CAF50" />
                  <circle cx="10" cy="10" r="5" fill="#FFC107" />
                </pattern>
                <pattern id="pattern-4" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect width="20" height="20" fill="#FF9800" />
                  <path d="M0,0 L20,20 M20,0 L0,20" stroke="#E91E63" strokeWidth="2" />
                </pattern>
              </defs>
            </svg>

            {/* Hover tooltip */}
            {hoveredRegion && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-dark text-white px-6 py-3 rounded-lg shadow-xl pointer-events-none z-10">
                <p className="font-semibold text-lg">{hoveredRegion.name}</p>
                <p className="text-sm text-white/70">⊙ {hoveredRegion.state}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndiaMapSection;

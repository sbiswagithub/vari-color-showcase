import { Button } from "@/components/ui/button";

const categories = [
  {
    id: 1,
    name: "JAMDANI",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600",
  },
  {
    id: 2,
    name: "BALUCHARI",
    image: "https://images.unsplash.com/photo-1583391265740-d6d8f45a17e7?w=600",
  },
  {
    id: 3,
    name: "TAANT",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600",
  },
  {
    id: 4,
    name: "KANTHA STITCH",
    image: "https://images.unsplash.com/photo-1610030469266-3c3a0e0f7a2c?w=600",
  },
];

const features = [
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "PURE SILK FABRICS",
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="10" strokeWidth="2"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2"/>
      </svg>
    ),
    title: "WORLD WIDE SHIPPING",
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="7" r="4" strokeWidth="2"/>
      </svg>
    ),
    title: "HAND CRAFTED BY 1000+ ARTISANS",
  },
];

const BengalEdit = () => {
  return (
    <section id="bengal" className="py-16 md:py-24 animate-fade-in">
      {/* Header with background image */}
      <div className="relative h-48 mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-dark/90 to-purple-dark/70 z-10" />
        <img
          src="https://images.unsplash.com/photo-1583391265740-d6d8f45a17e7?w=1600"
          alt="Bengal textiles"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="relative z-20 h-full flex items-center justify-center animate-fade-in">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              THE BENGAL EDIT: VARI COLOR'S LEGACY
            </h2>
            <p className="text-lg max-w-3xl mx-auto px-4">
              From the ethereal Jamdani to the vibrant Tant and the rich Baluchari,
              each piece is a testament to generations of weaving mastery.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <div
              key={category.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square animate-fade-in hover-scale shadow-lg"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="text-white text-2xl font-bold mb-4">{category.name}</h3>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-dark transition-all hover-scale"
                >
                  SHOP NOW
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-purple-dark mb-4 transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-purple-dark font-bold text-sm">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BengalEdit;

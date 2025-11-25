import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const newProducts = [
  {
    id: 1,
    name: "Dheu Exclusive Designer Kurta Dhoti/Dhoti/Dhoti Set",
    price: "Item: Rs.2,290",
    image: "https://images.unsplash.com/photo-1583391265740-d6d8f45a17e7?w=400",
  },
  {
    id: 2,
    name: "Dheu Exclusive Designer Kurta Dhoti/Dhoti/Dhoti Set",
    price: "Item: Rs.2,390",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400",
  },
  {
    id: 3,
    name: "Dheu Exclusive Designer Kurta Dhoti/Dhoti/Dhoti Set",
    price: "Item: Rs.3,290",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400",
  },
];

const valueProducts = [
  {
    id: 1,
    name: "Dheu Exclusive Designer Kurta Dhoti/Dhoti/Dhoti Set",
    price: "Item: Rs.2,290",
    image: "https://images.unsplash.com/photo-1610030469266-3c3a0e0f7a2c?w=400",
  },
  {
    id: 2,
    name: "Dheu Exclusive Designer Kurta Dhoti/Dhoti/Dhoti Set",
    price: "Item: Rs.2,490",
    image: "https://images.unsplash.com/photo-1583391265740-d6d8f45a17e7?w=400",
  },
  {
    id: 3,
    name: "Dheu Exclusive Designer Kurta Dhoti/Dhoti/Dhoti Set",
    price: "Item: Rs.2,890",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400",
  },
];

const NewArrivals = () => {
  return (
    <section id="new-arrivals" className="bg-cream py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* New Season Section */}
          <div>
            <div className="mb-6 md:mb-8">
              <p className="text-gold text-xs md:text-sm tracking-widest mb-2 uppercase">NEW ARRIVALS</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-dark mb-4 leading-tight">
                NEW SEASON,<br />NEW STORIES
              </h2>
              <div className="flex gap-2 md:gap-3">
                <Button className="btn-gold rounded-full w-10 h-10 md:w-12 md:h-12 p-0 flex items-center justify-center" aria-label="Previous">
                  ←
                </Button>
                <Button className="btn-gold rounded-full w-10 h-10 md:w-12 md:h-12 p-0 flex items-center justify-center" aria-label="Next">
                  →
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {newProducts.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg mb-2 md:mb-3 aspect-[3/4] bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-purple-dark text-xs md:text-sm font-medium mb-1 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-purple-medium font-semibold text-xs md:text-sm">{product.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Value Picks Section */}
          <div>
            <div className="mb-6 md:mb-8">
              <p className="text-gold text-xs md:text-sm tracking-widest mb-2 uppercase">VALUE PICKS</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-dark mb-1 leading-tight">
                STARTS AT
              </h2>
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: '#8B0000' }}>₹699</p>
              <div className="flex gap-2 md:gap-3">
                <Button className="btn-gold rounded-full w-10 h-10 md:w-12 md:h-12 p-0 flex items-center justify-center" aria-label="Previous">
                  ←
                </Button>
                <Button className="btn-gold rounded-full w-10 h-10 md:w-12 md:h-12 p-0 flex items-center justify-center" aria-label="Next">
                  →
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {valueProducts.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg mb-2 md:mb-3 aspect-[3/4] bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-purple-dark text-xs md:text-sm font-medium mb-1 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-purple-medium font-semibold text-xs md:text-sm">{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;

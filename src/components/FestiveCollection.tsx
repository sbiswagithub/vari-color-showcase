import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Semi Govind Silk Saree",
    price: "Rs.2,750",
    badge: "New Arrival",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400",
  },
  {
    id: 2,
    name: "Semi Govind Silk Saree",
    price: "Rs.3,420",
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1583391265740-d6d8f45a17e7?w=400",
  },
  {
    id: 3,
    name: "Semi Govind Silk Saree",
    price: "Rs.3,190",
    badge: "New Arrival",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400",
  },
  {
    id: 4,
    name: "Semi Govind Silk Saree",
    price: "Rs.2,520",
    badge: "New Arrival",
    image: "https://images.unsplash.com/photo-1610030469266-3c3a0e0f7a2c?w=400",
  },
];

const FestiveCollection = () => {
  return (
    <section id="festive" className="bg-white py-16 md:py-24 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-gold text-sm tracking-widest mb-2">FESTIVE COLLECTION</p>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-dark mb-8">
            DRESS FOR THE OCCASION
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <div
              key={product.id}
              className="group cursor-pointer animate-fade-in hover-scale"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4] shadow-md">
                <span className="absolute top-3 right-3 bg-gold text-purple-dark text-xs font-bold px-3 py-1 rounded-full z-10 animate-fade-in">
                  {product.badge}
                </span>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <h3 className="text-purple-dark font-semibold mb-1">{product.name}</h3>
              <p className="text-purple-medium font-bold">{product.price}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-gold px-8 py-6 text-base hover-scale">
            View Festive Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FestiveCollection;

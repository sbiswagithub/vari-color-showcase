import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useProducts } from "@/hooks/useProducts";
import { useCart } from "@/hooks/useCart";

const FestiveCollection = () => {
  const { data: products, isLoading } = useProducts("festive");
  const { addToCart } = useCart();

  if (isLoading) {
    return (
      <section id="festive" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm tracking-widest mb-2">FESTIVE COLLECTION</p>
            <h2 className="text-3xl md:text-4xl font-bold text-purple-dark mb-8">
              DRESS FOR THE OCCASION
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 rounded-lg aspect-[3/4] mb-4" />
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

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
          {products?.map((product, idx) => (
            <div
              key={product.id}
              className="group cursor-pointer animate-fade-in hover-scale"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4] shadow-md">
                {product.badge && (
                  <span className="absolute top-3 right-3 bg-gold text-purple-dark text-xs font-bold px-3 py-1 rounded-full z-10 animate-fade-in">
                    {product.badge}
                  </span>
                )}
                <img
                  src={product.image_url || "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Button
                    onClick={() => addToCart(product.id)}
                    className="bg-white text-purple-dark hover:bg-gold hover:text-purple-dark"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
              <h3 className="text-purple-dark font-semibold mb-1">{product.name}</h3>
              <p className="text-purple-medium font-bold">Rs.{product.price.toLocaleString()}</p>
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

import { useState } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProducts } from "@/hooks/useProducts";
import { useCart } from "@/hooks/useCart";

interface CarouselSectionProps {
  title: string;
  subtitle: React.ReactNode;
  category: string;
}

const CarouselSection = ({ title, subtitle, category }: CarouselSectionProps) => {
  const [index, setIndex] = useState(0);
  const { data: products = [], isLoading } = useProducts(category);
  const { addToCart } = useCart();
  const productsPerPage = 3;

  const prev = () => setIndex((prev) => Math.max(0, prev - 1));
  const next = () =>
    setIndex((prev) => Math.min(products.length - productsPerPage, prev + 1));

  if (isLoading) {
    return (
      <div className="grid lg:grid-cols-[30%_1fr] gap-6 lg:gap-10 items-start animate-fade-in">
        <div className="space-y-4 md:space-y-6 pt-4">
          <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />
          <div className="h-10 bg-gray-200 rounded w-48 animate-pulse" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 justify-items-center">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-full max-w-[200px] md:max-w-[250px] lg:max-w-[320px] animate-pulse">
              <div className="bg-gray-200 rounded-lg aspect-square mb-3" />
              <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2" />
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-[30%_1fr] gap-6 lg:gap-10 items-start animate-fade-in">
      <div className="space-y-4 md:space-y-6 pt-4">
        <p className="text-[#C39D65] text-xs md:text-sm tracking-widest font-bold uppercase">
          {title}
        </p>

        <h2 className="text-[#700404] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
          {subtitle}
        </h2>

        <div className="flex gap-3 md:gap-4 pt-3">
          <button
            onClick={prev}
            disabled={index === 0}
            className="bg-[#C39D65] hover:bg-[#B08D55] disabled:opacity-50 disabled:cursor-not-allowed px-4 md:px-6 py-2 md:py-3 rounded-full transition-all hover-scale"
            aria-label="Previous products"
          >
            <ChevronLeft className="text-white w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={next}
            disabled={index >= products.length - productsPerPage}
            className="bg-[#C39D65] hover:bg-[#B08D55] disabled:opacity-50 disabled:cursor-not-allowed px-4 md:px-6 py-2 md:py-3 rounded-full transition-all hover-scale"
            aria-label="Next products"
          >
            <ChevronRight className="text-white w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 justify-items-center">
        {products.slice(index, index + productsPerPage).map((item) => (
          <div key={item.id} className="group w-full max-w-[200px] md:max-w-[250px] lg:max-w-[320px] animate-fade-in">
            <div className="relative rounded-lg overflow-hidden bg-gray-100 aspect-square hover-scale transition-transform duration-500">
              <img
                src={item.image_url || "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400"}
                alt={item.name}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Button
                  onClick={() => addToCart(item.id)}
                  size="sm"
                  className="bg-white text-purple-dark hover:bg-gold hover:text-purple-dark"
                >
                  <ShoppingCart className="w-4 h-4 mr-1" />
                  Add
                </Button>
              </div>
            </div>

            <h3 className="text-center mt-3 text-xs md:text-sm lg:text-base font-medium text-[#1A1A1A] line-clamp-2">
              {item.name}
            </h3>

            <p className="text-center text-xs md:text-sm text-[#1A1A1A] font-semibold mt-1">
              from Rs.{item.price.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const NewArrivals = () => {
  return (
    <section className="bg-white py-10 md:py-14 lg:py-16">
      <div className="container mx-auto px-4 space-y-12 md:space-y-16 uppercase">
        <CarouselSection
          title="New Arrivals"
          subtitle="New Season, New Stories"
          category="new_arrivals"
        />
        <CarouselSection
          title="Value Picks"
          subtitle={
            <>
              Starts At <br /> ₹699
            </>
          }
          category="value_picks"
        />
      </div>
    </section>
  );
};

export default NewArrivals;

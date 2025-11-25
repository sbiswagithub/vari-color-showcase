import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import IndiaMapSection from "@/components/IndiaMapSection";
import LoomTaleSection from "@/components/LoomTaleSection";
import FestiveCollection from "@/components/FestiveCollection";
import NewArrivals from "@/components/NewArrivals";
import BengalEdit from "@/components/BengalEdit";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      <IndiaMapSection />
      <LoomTaleSection />
      <FestiveCollection />
      <NewArrivals />
      <BengalEdit />
      <Footer />
    </div>
  );
};

export default Index;

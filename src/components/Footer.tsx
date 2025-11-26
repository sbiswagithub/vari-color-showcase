import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#a89fb5] text-white py-12 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-[#FFD700] px-4 py-2 inline-block rounded mb-4 hover-scale transition-transform">
              <h2 className="text-xl font-bold text-purple-dark">
                VARI<span className="text-red-600">COLOR</span>
              </h2>
              <p className="text-[10px] text-purple-dark font-semibold tracking-wider">
                WHOLESALER & RETAIL
              </p>
            </div>
          </div>

          {/* Policies */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="hover:text-gold transition-all hover:translate-x-1">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#refund" className="hover:text-gold transition-all hover:translate-x-1">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#shipping" className="hover:text-gold transition-all hover:translate-x-1">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-gold transition-all hover:translate-x-1">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#contact" className="hover:text-gold transition-all hover:translate-x-1">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-gold transition-all hover:translate-x-1">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-bold mb-4">SIGN UP AND SAVE</h3>
            <p className="text-sm mb-4">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Enter your email"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-gold transition-all"
              />
              <Button className="bg-white text-purple-dark hover:bg-gold hover-scale transition-all">
                →
              </Button>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="#instagram" className="hover:text-gold transition-all hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#facebook" className="hover:text-gold transition-all hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#youtube" className="hover:text-gold transition-all hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center text-sm">
          <p>Powered by Shopify</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

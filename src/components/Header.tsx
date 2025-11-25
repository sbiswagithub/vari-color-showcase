import { useState } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#best-sellers", label: "BEST SELLERS" },
    { href: "#new-arrivals", label: "NEW ARRIVALS" },
    { href: "#festive", label: "FESTIVE COLLECTION" },
    { href: "#weaves", label: "SHOP BY WEAVES" },
    { href: "#bengal", label: "THE BENGAL EDIT" },
  ];

  return (
    <header className="bg-purple-dark text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with search, logo, and actions */}
        <div className="flex items-center justify-between py-3 gap-2 md:gap-4">
          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-purple-dark text-white border-purple-medium">
              <div className="flex flex-col gap-6 mt-8">
                {/* Mobile Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-purple-medium" />
                  <Input
                    placeholder="Search"
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>

                {/* Mobile Navigation */}
                <nav>
                  <ul className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="block text-base font-medium hover:text-gold transition-colors py-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                    <li>
                      <Button className="btn-gold w-full mt-4">
                        WHOLESALER HUB
                      </Button>
                    </li>
                  </ul>
                </nav>
              </div>
            </SheetContent>
          </Sheet>

          {/* Search - Desktop Only */}
          <div className="relative hidden lg:flex flex-shrink-0 w-48 xl:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-purple-medium" />
            <Input
              placeholder="Search"
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
            />
          </div>

          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <div className="bg-[#FFD700] px-3 md:px-4 py-1 rounded">
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-purple-dark">
                VARI<span className="text-red-600">COLOR</span>
              </h1>
              <p className="text-[8px] md:text-[10px] text-purple-dark font-semibold tracking-wider">
                WHOLESALER & RETAIL
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <Button variant="outline" size="sm" className="hidden xl:inline-flex border-white text-white hover:bg-white hover:text-purple-dark text-xs">
              WHOLESALER HUB
            </Button>
            <button className="hover:opacity-80 transition-opacity hidden sm:block">
              <svg className="w-5 h-5 md:w-6 md:h-6 fill-current text-green-400" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </button>
            <button className="relative hover:opacity-80 transition-opacity">
              <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
              <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-gold text-purple-dark text-[10px] md:text-xs font-bold rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="border-t border-white/20 hidden lg:block">
          <ul className="flex items-center justify-center gap-6 xl:gap-8 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm font-medium hover:text-gold transition-colors whitespace-nowrap">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

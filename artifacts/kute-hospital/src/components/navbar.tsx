import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, Plus, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Insurance", id: "insurance" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className={`bg-secondary text-secondary-foreground py-2 px-4 transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden py-0 opacity-0' : 'h-auto opacity-100'}`}>
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2 sm:gap-0">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone size={14} className="text-primary" /> +91 8888882225</span>
            <span className="flex items-center gap-1 hidden md:flex"><Mail size={14} className="text-primary" /> support@kutehospital.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1"><Clock size={14} className="text-primary" /> Emergency 24/7</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`bg-background/95 backdrop-blur-md shadow-sm transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
            <div className="bg-primary text-primary-foreground p-1.5 rounded flex items-center justify-center">
              <Plus size={24} strokeWidth={3} />
            </div>
            <span className="font-heading font-extrabold text-xl tracking-tight text-foreground">Kute Hospital</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollTo(link.id)}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors focus:outline-none"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            <Button onClick={() => scrollTo('appointment')} className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-6">
              Book Appointment
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] flex flex-col">
                <div className="flex items-center gap-2 mt-8 mb-8">
                  <div className="bg-primary text-primary-foreground p-1.5 rounded flex items-center justify-center">
                    <Plus size={20} strokeWidth={3} />
                  </div>
                  <span className="font-heading font-extrabold text-lg tracking-tight">Kute Hospital</span>
                </div>
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollTo(link.id)}
                      className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-border"
                    >
                      {link.name}
                    </button>
                  ))}
                  <Button onClick={() => scrollTo('appointment')} className="mt-4 bg-primary hover:bg-primary/90 text-white font-bold w-full py-6">
                    Book Appointment
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  );
}

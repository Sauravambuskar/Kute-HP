import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Clock, Plus, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Insurance", href: "/insurance" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      {/* Top info bar */}
      <div className="bg-secondary text-white text-xs py-2 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+918888882225" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone size={13} /> +91 8888882225
            </a>
            <a href="mailto:support@kutehospital.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail size={13} /> support@kutehospital.com
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-primary font-semibold">
            <Clock size={13} /> Emergency Care 24/7
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-md shadow-black/5"
            : "bg-white border-b border-border"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center shadow-sm">
              <Plus className="text-white" size={22} strokeWidth={2.5} />
            </div>
            <div>
              <span className="font-heading font-bold text-lg leading-none text-secondary tracking-tight">
                Kute Hospital
              </span>
              <p className="text-[10px] text-muted-foreground leading-none mt-0.5 hidden sm:block">
                & Laparoscopy Centre
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-5 rounded-full bg-primary"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden md:block">
              <Button className="gradient-primary text-white font-semibold rounded-full px-5 h-9 text-sm shadow-sm hover:opacity-90 transition-opacity">
                Book Appointment
              </Button>
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-border bg-white"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = location === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? "bg-accent text-primary font-semibold"
                          : "text-foreground/70 hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <Link href="/contact" className="mt-2">
                  <Button className="gradient-primary text-white font-semibold rounded-xl w-full h-11 text-sm">
                    Book Appointment
                  </Button>
                </Link>
                <div className="mt-4 pt-4 border-t border-border flex flex-col gap-2 text-xs text-muted-foreground">
                  <a href="tel:+918888882225" className="flex items-center gap-2">
                    <Phone size={13} className="text-primary" /> +91 8888882225
                  </a>
                  <span className="flex items-center gap-2">
                    <Clock size={13} className="text-primary" /> Emergency 24/7
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

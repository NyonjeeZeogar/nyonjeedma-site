import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "Services", path: "/Services",
    children: [
      { label: "Digital Marketing", path: "/DigitalMarketing" },
      { label: "Business Launch", path: "/BusinessLaunch" },
      { label: "Community Impact", path: "/CommunityImpact" },
    ],
  },
  { label: "About", path: "/About" },
  { label: "Contact", path: "/Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-card/90 backdrop-blur-xl shadow-sm border-b border-border" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="https://media.base44.com/images/public/69bb52a56a6e106ff967ea92/09f8262b2_Initial-Red.png" alt="Logo" className="w-10 h-10 object-contain" />
          <span className="font-inter font-bold text-lg text-foreground tracking-tight"></span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button
                  className="flex items-center gap-1 font-inter text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
                >
                  {link.label}
                  <ChevronDown className="w-3 h-3" />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-card border border-border rounded-xl shadow-lg py-2 min-w-[200px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2.5 font-inter text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`font-inter text-sm font-medium transition-colors ${location.pathname === link.path ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {link.label}
              </Link>
            )
          )}
          <Button asChild className="font-inter bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
            <Link to="/Contact">Get Started</Link>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border px-6 pb-6 space-y-1">
          <Link to="/" className="block py-2.5 font-inter text-sm font-medium text-muted-foreground hover:text-foreground">Home</Link>
          <Link to="/Services" className="block py-2.5 font-inter text-sm font-medium text-muted-foreground hover:text-foreground">Services Overview</Link>
          <div className="pl-4 space-y-1">
            <Link to="/DigitalMarketing" className="block py-2 font-inter text-sm text-muted-foreground hover:text-foreground">— Digital Marketing</Link>
            <Link to="/BusinessLaunch" className="block py-2 font-inter text-sm text-muted-foreground hover:text-foreground">— Business Launch</Link>
            <Link to="/CommunityImpact" className="block py-2 font-inter text-sm text-muted-foreground hover:text-foreground">— Community Impact</Link>
          </div>
          <Link to="/About" className="block py-2.5 font-inter text-sm font-medium text-muted-foreground hover:text-foreground">About</Link>
          <Link to="/Contact" className="block py-2.5 font-inter text-sm font-medium text-muted-foreground hover:text-foreground">Contact</Link>
          <Button asChild className="w-full mt-2 font-inter bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
            <Link to="/Contact">Get Started</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}

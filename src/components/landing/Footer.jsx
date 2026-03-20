import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2">
          <img src="https://media.base44.com/images/public/69bb52a56a6e106ff967ea92/09f8262b2_Initial-Red.png" alt="Logo" className="w-8 h-8 object-contain" />
          <span className="font-inter font-semibold text-foreground">NJ Elevate LLC</span>
        </Link>

        <div className="flex flex-wrap gap-6 justify-center">
          {[
            { label: "Home", path: "/" },
            { label: "Services", path: "/Services" },
            { label: "About", path: "/About" },
            { label: "Contact", path: "/Contact" },
          ].map((l) => (
            <Link key={l.path} to={l.path} className="font-inter text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="text-center md:text-right">
          <p className="font-inter text-xs text-muted-foreground">© {new Date().getFullYear()} NJ Elevate LLC · Minnesota</p>
          <p className="font-inter text-xs text-primary/60 mt-1 italic">Nyonjee — to be human.</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass shadow-glow' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="text-lg sm:text-xl md:text-2xl font-bold gradient-text">
              Sharath
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(({ label, href }) => (
              <a key={label} href={href} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                {label}
              </a>
            ))}
            <Button asChild className="bg-gradient-primary hover:shadow-neon transition-all duration-300">
              <a href="https://drive.google.com/uc?export=download&id=1hitnDhQU43zawtXNgPR5rlyEYGZWAmTT" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 p-4 glass rounded-lg mx-4 sm:mx-0">
            <div className="flex flex-col gap-3 sm:gap-4">
              {navItems.map(({ label, href }) => (
                <a key={label} href={href} className="text-muted-foreground hover:text-primary transition-colors duration-300 py-2 text-center"
                   onClick={() => setIsOpen(false)}>
                  {label}
                </a>
              ))}
              <Button asChild className="bg-gradient-primary hover:shadow-neon transition-all duration-300 w-full mt-2">
                <a href="https://drive.google.com/uc?export=download&id=1hitnDhQU43zawtXNgPR5rlyEYGZWAmTT" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "Services", path: "#services" },
    { name: "Gallery", path: "#gallery" },
    { name: "About", path: "#about" },
    { name: "Contact", path: "#contact" },
  ];

  const [activeSection, setActiveSection] = useState("home");
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId.replace('#', ''));
    }
  };

  const isActive = (path: string) => activeSection === path.replace('#', '');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg gradient-text">Shree Sawariya</span>
              <p className="text-xs text-muted-foreground leading-none">Events</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.path)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive(item.path) ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Call Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="luxury"
              size="sm"
              className="hidden sm:flex"
              onClick={() => window.open("tel:+919999999999", "_self")}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </Button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  scrollToSection(item.path);
                  setIsOpen(false);
                }}
                className={cn(
                  "block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive(item.path)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {item.name}
              </button>
            ))}
            <Button
              variant="luxury"
              size="sm"
              className="w-full mt-4"
              onClick={() => {
                window.open("tel:+919999999999", "_self");
                setIsOpen(false);
              }}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
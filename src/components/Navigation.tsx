import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const navItems = [{
  label: "Home",
  href: "#home"
}, {
  label: "About",
  href: "#about"
}, {
  label: "Services",
  href: "#services"
}, {
  label: "Portfolio",
  href: "#portfolio"
}, {
  label: "Contact",
  href: "#contact"
}];
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (href: string) => {
    const sectionId = href.replace("#", "");
    if (sectionId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
    setIsMobileMenuOpen(false);
  };
  return <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-card border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto px-6">
        

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden py-4 bg-background/95 backdrop-blur-md rounded-lg mt-2 border border-border">
            <div className="flex flex-col space-y-2 px-4">
              {navItems.map(item => (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="justify-start text-muted-foreground hover:text-foreground"
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>}
      </div>
    </nav>;
}
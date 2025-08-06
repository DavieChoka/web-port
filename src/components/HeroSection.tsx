import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowDown } from "lucide-react";
export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-glow rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{
        animationDelay: '2s'
      }} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-service-cyan rounded-full blur-2xl animate-glow" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Picture */}
          

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
            Hi, I'm <span className="text-primary-glow">Davie Choka</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/80 max-w-4xl mx-auto leading-relaxed">
            A <span className="text-accent font-semibold">passionate software engineer</span> who thrives on building{" "}
            <span className="text-service-cyan font-semibold">clean, scalable, and impactful digital experiences</span>
          </p>

          {/* Tech stack */}
          

          {/* CTA Button */}
          
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary-foreground/50" />
      </div>
    </section>;
}
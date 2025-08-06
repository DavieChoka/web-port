import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-glow rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-service-cyan rounded-full blur-2xl animate-glow" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <Avatar className="w-32 h-32 border-4 border-primary-glow shadow-glow">
              <AvatarImage src="/placeholder-profile.jpg" alt="Davie Choka" />
              <AvatarFallback className="text-2xl font-bold bg-card text-card-foreground">DC</AvatarFallback>
            </Avatar>
          </div>

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
          <p className="text-lg mb-12 text-primary-foreground/70">
            Software Engineer | Web Developer | IoT Enthusiast
          </p>

          {/* CTA Button */}
          <Button 
            onClick={() => scrollToSection('portfolio')}
            size="lg"
            className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-6 text-lg rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 group"
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-glow rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
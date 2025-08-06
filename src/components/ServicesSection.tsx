import { Card } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";
const services = [{
  icon: Code,
  title: "Full Stack Development",
  description: "Building end-to-end solutions with modern technologies",
  color: "service-blue",
  bgColor: "bg-service-blue/10"
}, {
  icon: Palette,
  title: "UI/UX Design",
  description: "Creating beautiful and intuitive user experiences",
  color: "service-pink",
  bgColor: "bg-service-pink/10"
}, {
  icon: Zap,
  title: "Performance Optimization",
  description: "Ensuring fast and efficient applications",
  color: "service-orange",
  bgColor: "bg-service-orange/10"
}];
export function ServicesSection() {
  return <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What I <span className="text-accent">Create</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">I specialize in building modern web applications with cutting-edge technologies</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => <Card key={index} className={`p-8 bg-card border-border hover:shadow-card transition-all duration-300 hover:-translate-y-2 group cursor-pointer ${service.bgColor} hover:bg-opacity-20`}>
              <div className="text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-${service.color}/20 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`h-8 w-8 text-${service.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-card-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
}
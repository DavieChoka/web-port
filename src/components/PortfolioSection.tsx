import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { TechIcon } from "./TechIcons";
const projects = [{
  title: "Champion of the Island",
  description: "An online media platform for reporting and tracking global natural disasters with real-time updates and comprehensive coverage.",
  icon: "🌍",
  technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "WordPress"],
  liveUrl: "#",
  githubUrl: "#",
  status: "completed"
}, {
  title: "IoT Smart Home System",
  description: "A comprehensive smart home automation system using Arduino and Raspberry Pi with mobile app control.",
  icon: "🏠",
  technologies: ["Arduino", "Raspberry Pi", "Flutter", "Python", "IoT"],
  liveUrl: "#",
  githubUrl: "#",
  status: "coming-soon"
}, {
  title: "Web Development Portfolio",
  description: "A collection of responsive websites and web applications built with modern frameworks and best practices.",
  icon: "💻",
  technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
  liveUrl: "#",
  githubUrl: "#",
  status: "coming-soon"
}];
export function PortfolioSection() {
  return <section id="portfolio" className="py-20 bg-background">
      <div className="container px-[8px] mx-0 rounded-sm">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            My <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent projects and technical achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => <Card key={index} className="overflow-hidden bg-card border-border hover:shadow-card transition-all duration-300 hover:-translate-y-2 group">
              {/* Project Icon */}
              <div className="relative h-48 bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center">
                <div className="text-6xl">{project.icon}</div>
                {project.status === "coming-soon" && <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    Coming Soon
                  </Badge>}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => <Badge key={techIndex} variant="secondary" className="text-xs flex items-center gap-1">
                      <TechIcon tech={tech} className="w-3 h-3" />
                      {tech}
                    </Badge>)}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors" disabled={project.status === "coming-soon"}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors" disabled={project.status === "coming-soon"}>
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>)}
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <Card className="p-8 bg-card border-border shadow-card">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-card-foreground mb-4">
                Core <span className="text-accent">Competencies</span>
              </h3>
              <p className="text-muted-foreground">
                Technologies and skills I use to bring ideas to life
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[{
              category: "Frontend",
              skills: ["HTML/CSS", "JavaScript", "React", "Flutter"]
            }, {
              category: "Backend",
              skills: ["Node.js", "Python", "C#", "SQL"]
            }, {
              category: "IoT/Hardware",
              skills: ["Arduino", "Raspberry Pi", "C/C++", "Sensors"]
            }, {
              category: "Other",
              skills: ["Git", "WordPress", "SEO", "Digital Marketing"]
            }].map((category, index) => <div key={index} className="text-center">
                  <h4 className="font-bold text-card-foreground mb-3">{category.category}</h4>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => <div key={skillIndex} className="text-sm text-muted-foreground bg-muted/50 rounded-lg py-2 px-3 hover:bg-primary/10 hover:text-primary transition-colors flex items-center gap-2">
                      <TechIcon tech={skill} className="w-4 h-4" />
                      {skill}
                    </div>)}
                  </div>
                </div>)}
            </div>
          </Card>
        </div>
      </div>
    </section>;
}
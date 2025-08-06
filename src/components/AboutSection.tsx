import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
const skills = [{
  name: "C",
  level: 85,
  color: "bg-service-blue"
}, {
  name: "C++",
  level: 88,
  color: "bg-service-cyan"
}, {
  name: "C#",
  level: 80,
  color: "bg-service-purple"
}, {
  name: "Java",
  level: 85,
  color: "bg-service-orange"
}, {
  name: "Python",
  level: 90,
  color: "bg-service-green"
}, {
  name: "IoT",
  level: 78,
  color: "bg-service-pink"
}];
const technologies = [{
  name: "C",
  icon: "🅲",
  color: "text-service-blue"
}, {
  name: "C++",
  icon: "⚡",
  color: "text-service-cyan"
}, {
  name: "C#",
  icon: "🔷",
  color: "text-service-purple"
}, {
  name: "Java",
  icon: "☕",
  color: "text-service-orange"
}, {
  name: "Python",
  icon: "🐍",
  color: "text-service-green"
}, {
  name: "Node.js",
  icon: "🟢",
  color: "text-service-green"
}, {
  name: "Flutter",
  icon: "🦋",
  color: "text-service-cyan"
}, {
  name: "SQL",
  icon: "🗄️",
  color: "text-service-blue"
}, {
  name: "Arduino",
  icon: "🔌",
  color: "text-service-orange"
}, {
  name: "Raspberry Pi",
  icon: "🥧",
  color: "text-service-pink"
}];
export function AboutSection() {
  return <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a love for creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* My Story */}
          <Card className="p-8 bg-card border-border shadow-card">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-service-pink rounded-full mr-3" />
              <h3 className="text-2xl font-bold text-card-foreground">My Story</h3>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hi, I'm Davie Choka — a passionate software engineer who thrives on building clean, scalable, and impactful digital experiences.
              </p>
              <p>
                My journey into tech began with a deep curiosity about how websites and mobile apps work. Over time, that curiosity evolved into hands-on skills in web development, mobile app creation, and IoT systems. I recently earned my{" "}
                <span className="text-accent font-semibold">Bachelor's degree in Computer Applications from Chandigarh University (2025)</span>, and I've spent my time since then sharpening my craft across multiple areas of technology.
              </p>
              <p>
                I love building projects from the ground up. One of my proudest creations is{" "}
                <span className="text-primary font-semibold">Champion of the Island</span> — a news and media platform that provides updates and insights on natural disasters globally.
              </p>
            </div>
          </Card>

          {/* Technical Skills */}
          <Card className="p-8 bg-card border-border shadow-card">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-service-cyan rounded-full mr-3" />
              <h3 className="text-2xl font-bold text-card-foreground">Technical Skills</h3>
            </div>
            <div className="space-y-4">
              {skills.map((skill, index) => <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-card-foreground">{skill.name}</span>
                    <span className="text-primary font-bold">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>)}
            </div>
          </Card>
        </div>

        {/* Technologies Section */}
        <div className="mt-16">
          <Card className="p-8 bg-card border-border shadow-card">
            <div className="flex items-center justify-center mb-8">
              <div className="w-4 h-4 bg-service-green rounded-full mr-3" />
              <h3 className="text-2xl font-bold text-card-foreground">Technologies I Work With</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {technologies.map((tech, index) => <div key={index} className="flex flex-col items-center p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors cursor-pointer group">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <span className={`font-medium ${tech.color} group-hover:text-primary transition-colors`}>
                    {tech.name}
                  </span>
                </div>)}
            </div>
          </Card>
        </div>

        {/* Stats */}
        
      </div>
    </section>;
}
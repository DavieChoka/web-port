import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";
export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_1nbskaf',
        'template_03t49ka',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Davie Choka',
        },
        'rMRPDiv8_bU_8YpfC'
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-card border-border shadow-card">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-service-pink rounded-full mr-3" />
              <h3 className="text-2xl font-bold text-card-foreground">Send a Message</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-card-foreground">Name</Label>
                <Input 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name" 
                  className="mt-2 bg-muted/50 border-border focus:border-primary" 
                  required 
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-card-foreground">Email</Label>
                <Input 
                  id="email" 
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com" 
                  className="mt-2 bg-muted/50 border-border focus:border-primary" 
                  required 
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-card-foreground">Message</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..." 
                  className="mt-2 bg-muted/50 border-border focus:border-primary min-h-[120px]" 
                  required 
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent text-white py-6 rounded-lg shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>

          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="p-8 bg-card border-border shadow-card">
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 bg-service-cyan rounded-full mr-3" />
                <h3 className="text-2xl font-bold text-card-foreground">Contact Information</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-service-blue/20 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-service-blue" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <p className="text-muted-foreground">davietchoka04@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-service-green/20 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-service-green" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Phone</p>
                    <p className="text-muted-foreground">+265 985 60 73 85</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-service-purple/20 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-service-purple" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Location</p>
                    <p className="text-muted-foreground">Lilongwe, Malawi</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8 bg-card border-border shadow-card">
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 bg-service-green rounded-full mr-3" />
                <h3 className="text-2xl font-bold text-card-foreground">Connect With Me</h3>
              </div>
              
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="w-12 h-12 border-border hover:bg-service-blue/10 hover:border-service-blue hover:text-service-blue transition-all duration-300 hover:scale-110">
                  <Github className="w-6 h-6" />
                </Button>
                <Button variant="outline" size="icon" className="w-12 h-12 border-border hover:bg-service-cyan/10 hover:border-service-cyan hover:text-service-cyan transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-6 h-6" />
                </Button>
                <Button variant="outline" size="icon" className="w-12 h-12 border-border hover:bg-service-blue/10 hover:border-service-blue hover:text-service-blue transition-all duration-300 hover:scale-110">
                  <Twitter className="w-6 h-6" />
                </Button>
              </div>
            </Card>

            {/* Download CV */}
            <Card className="p-6 bg-gradient-to-br from-primary/20 to-accent/20 border-border">
              <div className="text-center">
                <h4 className="font-bold text-card-foreground mb-3">Download My Resume</h4>
                <Button variant="outline" className="border-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                  📄 Download CV
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
}
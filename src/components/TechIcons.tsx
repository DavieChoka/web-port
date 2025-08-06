import { 
  FileCode, 
  Palette, 
  Code, 
  Database,
  Cpu,
  Smartphone,
  Globe,
  Zap,
  Shield,
  Search,
  GitBranch,
  Monitor
} from "lucide-react";

interface TechIconProps {
  tech: string;
  className?: string;
}

export const TechIcon = ({ tech, className = "w-5 h-5" }: TechIconProps) => {
  const getIcon = (techName: string) => {
    const name = techName.toLowerCase();
    
    if (name.includes('html') || name.includes('css')) return <FileCode className={className} />;
    if (name.includes('javascript') || name.includes('js')) return <Code className={className} />;
    if (name.includes('react') || name.includes('flutter')) return <Smartphone className={className} />;
    if (name.includes('node') || name.includes('express')) return <Database className={className} />;
    if (name.includes('python') || name.includes('c++') || name.includes('c#')) return <Code className={className} />;
    if (name.includes('arduino') || name.includes('raspberry')) return <Cpu className={className} />;
    if (name.includes('mongodb') || name.includes('sql')) return <Database className={className} />;
    if (name.includes('bootstrap') || name.includes('tailwind')) return <Palette className={className} />;
    if (name.includes('wordpress')) return <Globe className={className} />;
    if (name.includes('iot') || name.includes('sensors')) return <Zap className={className} />;
    if (name.includes('git')) return <GitBranch className={className} />;
    if (name.includes('seo') || name.includes('marketing')) return <Search className={className} />;
    if (name.includes('typescript')) return <Code className={className} />;
    if (name.includes('stripe')) return <Shield className={className} />;
    
    return <Monitor className={className} />;
  };

  return getIcon(tech);
};
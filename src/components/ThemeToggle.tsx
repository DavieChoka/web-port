import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 z-50 border-primary/20 bg-card/80 backdrop-blur-md hover:bg-card/90 transition-all duration-300 hover:scale-110"
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-primary transition-all" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-primary transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
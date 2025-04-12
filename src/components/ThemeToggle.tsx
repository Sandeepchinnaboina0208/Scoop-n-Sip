
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { Toggle } from '@/components/ui/toggle';
import { cn } from '@/lib/utils';

const ThemeToggle = ({ className }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Toggle 
      pressed={theme === 'dark'} 
      onPressedChange={toggleTheme}
      aria-label="Toggle theme"
      className={cn("p-2 transition-all duration-200", className)}
    >
      {theme === 'dark' ? (
        <Moon className="h-5 w-5 text-yellow-300" />
      ) : (
        <Sun className="h-5 w-5 text-amber-500" />
      )}
    </Toggle>
  );
};

export default ThemeToggle;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 z-50">
          <div className="flex flex-col items-center">
            <div className="text-black dark:text-white font-bold text-xl md:text-2xl leading-none">NCD</div>
            <div className="text-black dark:text-white text-[10px] md:text-xs leading-none">SINCE1940</div>
          </div>
          <span className="hidden sm:block font-heading text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500">
            Nazeer Cool Drinks
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-heading font-medium text-lg text-black dark:text-white hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/menu" className="font-heading font-medium text-lg text-black dark:text-white hover:text-primary transition-colors">
            Menu
          </Link>
          <Link to="/contact" className="font-heading font-medium text-lg text-black dark:text-white hover:text-primary transition-colors">
            Contact
          </Link>
          <ThemeToggle className="mr-2" />
          
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button 
            className="p-2 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />
      
      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 w-[75%] max-w-sm h-full bg-white dark:bg-gray-900 shadow-xl transition-transform duration-300 ease-in-out transform md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-6">
          <div className="flex flex-col gap-4">
            <Link 
              to="/" 
              className="py-2 px-4 font-heading font-medium text-lg text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className="py-2 px-4 font-heading font-medium text-lg text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
            <Link 
              to="/contact" 
              className="py-2 px-4 font-heading font-medium text-lg text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
          <div className="mt-auto">
            <Button 
              variant="primary"
              size="lg"
              className="w-full flex gap-2 items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <ShoppingCart size={18} />
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
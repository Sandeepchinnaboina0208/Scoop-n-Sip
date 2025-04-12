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
          ? 'bg-black shadow-md py-2 dark:bg-black dark:shadow-lg' 
          : 'bg-black bg-opacity-90 backdrop-blur-sm py-4'
      } md:bg-transparent md:py-4`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 drop-shadow-md">
            Nazeer Cool Drinks
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-heading font-medium text-lg text-white hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/menu" className="font-heading font-medium text-lg text-white hover:text-primary transition-colors">
            Menu
          </Link>
          <Link to="/contact" className="font-heading font-medium text-lg text-white hover:text-primary transition-colors">
            Contact
          </Link>
          <ThemeToggle className="mr-2" />
          <Button className="primary-button ml-2 flex gap-2 items-center">
            <ShoppingCart size={18} />
            Order Now
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            className="text-white hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-black absolute w-full left-0 shadow-md transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-60 py-4' : 'max-h-0 py-0 overflow-hidden'
        } ${scrolled ? 'bg-opacity-90' : 'bg-opacity-80'}`}
      >
        <div className="container mx-auto px-4 flex flex-col gap-4">
          <Link 
            to="/" 
            className="py-2 font-heading font-medium text-lg text-white hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/menu" 
            className="py-2 font-heading font-medium text-lg text-white hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Menu
          </Link>
          <Link 
            to="/contact" 
            className="py-2 font-heading font-medium text-lg text-white hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Button 
            className="primary-button flex gap-2 items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <ShoppingCart size={18} />
            Order Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

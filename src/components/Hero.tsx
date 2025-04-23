'use client';
import React, { useState } from 'react';
import { ArrowRight, MapPin, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';
import { useTheme } from '@/context/ThemeContext';
import { useNavigate } from 'react-router-dom'; // Updated import

const Hero = () => {
  const { theme } = useTheme();
  const navigate = useNavigate(); // Updated hook
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [selectedFlavor, setSelectedFlavor] = useState<string | null>(null);

  const flavors = [
    { name: 'Vanilla', color: 'bg-amber-50', hoverColor: 'hover:bg-amber-100', textColor: 'text-amber-800' },
    { name: 'Chocolate', color: 'bg-amber-800', hoverColor: 'hover:bg-amber-900', textColor: 'text-white' },
    { name: 'Strawberry', color: 'bg-red-200', hoverColor: 'hover:bg-red-300', textColor: 'text-red-800' },
    { name: 'Mango', color: 'bg-yellow-300', hoverColor: 'hover:bg-yellow-400', textColor: 'text-yellow-800' },
    { name: 'Blueberry', color: 'bg-blue-300', hoverColor: 'hover:bg-blue-400', textColor: 'text-blue-800' },
  ];

  return (
    <div className={`relative min-h-screen flex items-center justify-center px-4 sm:px-6 ${
      theme === 'dark' ? 'bg-black' : 'bg-white'
    }`}>
      {/* Floating circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-[10%] w-16 h-16 sm:w-24 sm:h-24 bg-icecream-pink dark:bg-purple-600/30 rounded-full opacity-30 animate-float" />
        <div className="absolute top-[20%] left-[65%] w-20 h-20 sm:w-32 sm:h-32 bg-icecream-yellow dark:bg-amber-500/30 rounded-full opacity-40 animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[40%] left-[25%] w-12 h-12 sm:w-16 sm:h-16 bg-icecream-green dark:bg-green-500/30 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[60%] left-[75%] w-14 h-14 sm:w-20 sm:h-20 bg-icecream-purple dark:bg-indigo-500/30 rounded-full opacity-30 animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[80%] left-[45%] w-20 h-20 sm:w-28 sm:h-28 bg-icecream-peach dark:bg-orange-400/30 rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto pt-20 pb-10 sm:pb-20 relative z-10">
        <ScrollReveal effect="fade-right">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6 text-center leading-snug sm:leading-tight">
            <span className="block">Chill Your Taste Buds</span>
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              with Every Sip & Scoop!
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-center px-2">
            Indulge in our refreshing cool drinks and creamy handcrafted ice creams,
            made with premium ingredients for the ultimate taste experience.
          </p>

          {/* Flavor Selection */}
          <div className="mb-10 px-2">
            <h3 className="text-lg sm:text-xl font-medium mb-4 text-center dark:text-white">Choose your flavor:</h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
              {flavors.map((flavor, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedFlavor(flavor.name)}
                  className={`${flavor.color} ${flavor.hoverColor} ${flavor.textColor} px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base transform transition-all duration-300 ${
                    selectedFlavor === flavor.name 
                      ? 'scale-110 ring-2 ring-primary shadow-lg' 
                      : 'scale-100'
                  }`}
                >
                  {flavor.name}
                </button>
              ))}
            </div>
            {selectedFlavor && (
              <p className="text-center text-base sm:text-lg font-medium dark:text-white animate-fade-in">
                <span className="font-bold">{selectedFlavor}</span> is an excellent choice!
              </p>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <Button 
              className={`w-full sm:w-auto primary-button flex items-center justify-center gap-2 transform transition-all duration-300 ${
                activeButton === 1 ? 'scale-105 shadow-lg' : ''
              }`}
              onMouseEnter={() => setActiveButton(1)}
              onMouseLeave={() => setActiveButton(null)}
              onClick={() => navigate('/contact')} // Updated navigation
            >
              Order Now <ArrowRight size={18} className={`transition-all duration-300 ${activeButton === 1 ? 'translate-x-1' : ''}`} />
            </Button>

            <Button 
              className={`w-full sm:w-auto secondary-button flex items-center justify-center gap-2 transform transition-all duration-300 ${
                activeButton === 2 ? 'scale-105 shadow-lg' : ''
              }`}
              onMouseEnter={() => setActiveButton(2)}
              onMouseLeave={() => setActiveButton(null)}
              onClick={() => navigate('/contact')} // Updated navigation
            >
              Find a Store <MapPin size={18} className={`transition-all duration-300 ${activeButton === 2 ? 'translate-y-1' : ''}`} />
            </Button>

            <Button 
              className={`w-full sm:w-auto accent-button flex items-center justify-center gap-2 transform transition-all duration-300 ${
                activeButton === 3 ? 'scale-105 shadow-lg' : ''
              }`}
              onMouseEnter={() => setActiveButton(3)}
              onMouseLeave={() => setActiveButton(null)}
              onClick={() => navigate('/menu')} // Updated navigation
            >
              See Menu <Coffee size={18} className={`transition-all duration-300 ${activeButton === 3 ? 'rotate-12' : ''}`} />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Hero;
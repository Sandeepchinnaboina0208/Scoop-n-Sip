
import React, { useState } from 'react';
import { ArrowRight, MapPin, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';
import { useTheme } from '@/context/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();
  const [activeButton, setActiveButton] = useState<number | null>(null);
  
  // Flavor selection interactive element
  const [selectedFlavor, setSelectedFlavor] = useState<string | null>(null);
  const flavors = [
    { name: 'Vanilla', color: 'bg-amber-50', hoverColor: 'hover:bg-amber-100', textColor: 'text-amber-800' },
    { name: 'Chocolate', color: 'bg-amber-800', hoverColor: 'hover:bg-amber-900', textColor: 'text-white' },
    { name: 'Strawberry', color: 'bg-red-200', hoverColor: 'hover:bg-red-300', textColor: 'text-red-800' },
    { name: 'Mango', color: 'bg-yellow-300', hoverColor: 'hover:bg-yellow-400', textColor: 'text-yellow-800' },
    { name: 'Blueberry', color: 'bg-blue-300', hoverColor: 'hover:bg-blue-400', textColor: 'text-blue-800' },
  ];

  return (
    <div className={`relative min-h-screen flex items-center ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-b from-icecream-blue/30 via-white to-white'
    }`}>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-[10%] w-24 h-24 bg-icecream-pink dark:bg-purple-600/30 rounded-full opacity-30 animate-float" />
        <div className="absolute top-[20%] left-[65%] w-32 h-32 bg-icecream-yellow dark:bg-amber-500/30 rounded-full opacity-40 animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[40%] left-[25%] w-16 h-16 bg-icecream-green dark:bg-green-500/30 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[60%] left-[75%] w-20 h-20 bg-icecream-purple dark:bg-indigo-500/30 rounded-full opacity-30 animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[80%] left-[45%] w-28 h-28 bg-icecream-peach dark:bg-orange-400/30 rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-4 pt-20 section-padding z-10">
        <ScrollReveal effect="fade-right">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6 text-center">
            <span className="block">Chill Your Taste Buds</span>
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              with Every Sip & Scoop!
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-center">
            Indulge in our refreshing cool drinks and creamy handcrafted ice creams,
            made with premium ingredients for the ultimate taste experience.
          </p>
          
          {/* Interactive flavor selection */}
          <div className="mb-10">
            <h3 className="text-xl font-medium mb-4 text-center dark:text-white">Choose your flavor:</h3>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {flavors.map((flavor, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedFlavor(flavor.name)}
                  className={`${flavor.color} ${flavor.hoverColor} ${flavor.textColor} px-4 py-2 rounded-full transform transition-all duration-300 ${
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
              <p className="text-center text-lg font-medium dark:text-white animate-fade-in">
                <span className="font-bold">{selectedFlavor}</span> is an excellent choice!
              </p>
            )}
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className={`primary-button flex items-center gap-2 transform transition-all duration-300 ${
                activeButton === 1 ? 'scale-110 shadow-lg' : ''
              }`}
              onMouseEnter={() => setActiveButton(1)}
              onMouseLeave={() => setActiveButton(null)}
            >
              Order Now <ArrowRight size={18} className={`transition-all duration-300 ${activeButton === 1 ? 'translate-x-1' : ''}`} />
            </Button>
            <Button 
              className={`secondary-button flex items-center gap-2 transform transition-all duration-300 ${
                activeButton === 2 ? 'scale-110 shadow-lg' : ''
              }`}
              onMouseEnter={() => setActiveButton(2)}
              onMouseLeave={() => setActiveButton(null)}
            >
              Find a Store <MapPin size={18} className={`transition-all duration-300 ${activeButton === 2 ? 'translate-y-1' : ''}`} />
            </Button>
            <Button 
              className={`accent-button flex items-center gap-2 transform transition-all duration-300 ${
                activeButton === 3 ? 'scale-110 shadow-lg' : ''
              }`}
              onMouseEnter={() => setActiveButton(3)}
              onMouseLeave={() => setActiveButton(null)}
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

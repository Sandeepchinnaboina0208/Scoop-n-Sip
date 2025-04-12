
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import Specials from '@/components/Specials';
import WhyChooseUs from '@/components/WhyChooseUs';
import Favorites from '@/components/Favorites';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { useTheme } from '@/context/ThemeContext';

const Index = () => {
  const { theme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <Hero />
        <Categories />
        <Specials />
        <WhyChooseUs />
        <Favorites />
        <Gallery />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Index;

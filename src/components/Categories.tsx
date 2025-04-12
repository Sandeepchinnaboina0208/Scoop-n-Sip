
import React from 'react';
import { IceCream, Coffee } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const categories = [
  {
    id: 1,
    title: 'Ice Creams',
    description: 'Classic flavors, sundaes, cones, and custom mixes to satisfy your sweet cravings',
    icon: <IceCream size={32} className="text-primary" />,
    color: 'bg-icecream-pink/30',
    items: ['Classic Flavors', 'Sundaes', 'Cones', 'Custom Mixes']
  },
  {
    id: 2,
    title: 'Cool Drinks',
    description: 'Refreshing milkshakes, mocktails, sodas, and smoothies to beat the heat',
    icon: <Coffee size={32} className="text-secondary" />,
    color: 'bg-icecream-blue/30',
    items: ['Milkshakes', 'Mocktails', 'Sodas', 'Smoothies']
  }
];

const CategoryCard = ({ category, index }: { category: typeof categories[0], index: number }) => {
  return (
    <ScrollReveal 
      effect={index % 2 === 0 ? 'fade-right' : 'fade-left'} 
      delay={index * 100}
      className="w-full md:w-[calc(50%-1rem)]"
    >
      <div className={`menu-card ${category.color} h-full flex flex-col`}>
        <div className="flex items-center gap-3 mb-4">
          {category.icon}
          <h3 className="font-heading text-2xl font-bold">{category.title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{category.description}</p>
        <div className="mt-auto">
          <ul className="grid grid-cols-2 gap-2">
            {category.items.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Categories = () => {
  return (
    <section id="categories" className="section-padding bg-gradient-to-b from-white to-icecream-yellow/20">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-3">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Explore Our Menu
            </span>
          </h2>
          <p className="text-gray-600 text-center max-w-md mx-auto mb-12">
            Discover our wide range of handcrafted treats, perfect for any occasion and every craving
          </p>
        </ScrollReveal>
        
        <div className="flex flex-wrap justify-center gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

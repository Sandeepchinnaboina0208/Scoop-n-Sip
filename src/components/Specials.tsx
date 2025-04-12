import React from 'react';
import { CalendarDays, Percent, Tag } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const specialOffers = [
  {
    id: 1,
    title: 'Buy 1 Get 1 Free',
    day: 'on Tuesdays',
    description: 'Double the delight on Tuesdays with our special BOGO offer on all ice cream scoops!',
    color: 'bg-icecream-pink/30',
    icon: <CalendarDays className="text-primary" size={24} />
  },
  {
    id: 2,
    title: 'Summer Mango Madness',
    day: 'Limited Time',
    description: 'Try our refreshing mango-based treats, from ice creams to smoothies and shakes!',
    color: 'bg-icecream-yellow/40',
    icon: <Tag className="text-yellow-600" size={24} />
  },
  {
    id: 3,
    title: '20% Student Discount',
    day: 'Everyday',
    description: 'Students get 20% off on all orders with a valid student ID card. Learn more!',
    color: 'bg-icecream-blue/30',
    icon: <Percent className="text-secondary" size={24} />
  }
];

const Specials = () => {
  return (
    <section id="specials" className="section-padding bg-white dark:bg-black">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-3">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Special Offers
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-md mx-auto mb-12">
            Don't miss out on these amazing deals and seasonal specials
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialOffers.map((offer, index) => (
            <ScrollReveal key={offer.id} delay={index * 100} className="h-full">
              <div className={`menu-card ${offer.color} h-full`}>
                <div className="flex items-center gap-2 mb-2 text-gray-700 dark:text-gray-200">
                  {offer.icon}
                  <span className="text-sm font-medium">{offer.day}</span>
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 dark:text-white">{offer.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{offer.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;

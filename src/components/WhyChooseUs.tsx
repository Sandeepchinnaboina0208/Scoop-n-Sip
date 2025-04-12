
import React from 'react';
import { ThumbsUp, LeafyGreen, Heart, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const reasons = [
  {
    id: 1,
    title: 'Premium Ingredients',
    description: 'We use only the finest, freshest ingredients in all our products.',
    icon: <LeafyGreen size={40} className="text-green-500" />
  },
  {
    id: 2,
    title: 'Handcrafted Daily',
    description: 'Our ice creams and drinks are made fresh daily in small batches.',
    icon: <ThumbsUp size={40} className="text-primary" />
  },
  {
    id: 3,
    title: 'Unique Flavors',
    description: "Experience our signature recipes that you won't find anywhere else.",
    icon: <Award size={40} className="text-secondary" />
  },
  {
    id: 4,
    title: 'Made with Love',
    description: 'Each item is crafted with passion and care by our experienced team.',
    icon: <Heart size={40} className="text-red-500" />
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-gradient-to-b from-white to-icecream-blue/20 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-3">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Why Choose Us?
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-md mx-auto mb-12">
            What makes our ice creams and cool drinks stand out from the rest
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <ScrollReveal key={reason.id} delay={index * 100}>
              <div className="menu-card flex flex-col items-center text-center h-full dark:bg-gray-800 dark:border dark:border-gray-700">
                <div className="mb-4">
                  {reason.icon}
                </div>
                <h3 className="font-heading text-xl font-bold mb-2 dark:text-white">{reason.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{reason.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

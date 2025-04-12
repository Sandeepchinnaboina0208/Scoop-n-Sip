import React from 'react';
import { Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const favorites = [
  {
    id: 1,
    name: 'Chocolate Volcano',
    type: 'Ice Cream',
    price: '$4.99',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80',
    review: "Absolutely divine! The richest chocolate ice cream I've had!"
  },
  {
    id: 2,
    name: 'Mango Tango Smoothie',
    type: 'Cool Drink',
    price: '$5.49',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80',
    review: 'So refreshing, like summer in a glass!'
  },
  {
    id: 3,
    name: 'Strawberry Cheesecake',
    type: 'Ice Cream',
    price: '$5.29',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80',
    review: "The perfect balance of sweet and tangy. I can't get enough!"
  },
  {
    id: 4,
    name: 'Berry Blast Mojito',
    type: 'Cool Drink',
    price: '$5.99',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80',
    review: 'The mint and berries create such a refreshing combination!'
  }
];

const Favorites = () => {
  return (
    <section
      id="favorites"
      className="section-padding bg-white dark:bg-black transition-colors duration-500"
    >
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-3">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Customer Favorites
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-md mx-auto mb-12">
            Our most beloved treats, as rated by our happy customers
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {favorites.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 100}>
              <div className="menu-card h-full flex flex-col bg-white dark:bg-gray-900 dark:border dark:border-gray-700 p-4 rounded-2xl transition-colors duration-500">
                <div className="relative mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute top-2 right-2 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-full px-2 py-1 text-sm font-medium dark:text-white">
                    {item.price}
                  </div>
                  <div className="absolute bottom-2 left-2 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-full px-2 py-1 text-sm font-medium dark:text-white">
                    {item.type}
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold mb-1 text-gray-800 dark:text-white">
                  {item.name}
                </h3>

                <div className="flex items-center mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-300 italic text-sm">
                  "{item.review}"
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Favorites;

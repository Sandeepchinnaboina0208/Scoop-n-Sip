import React from 'react';
import { Instagram } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80',
    alt: 'Ice cream cones'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1633933358116-a27b902fad35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80',
    alt: 'Milkshake'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80',
    alt: 'Chocolate ice cream'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80',
    alt: 'Ice cream cones'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80',
    alt: 'Ice cream sundae'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80',
    alt: 'Refreshing drinks'
  }
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="section-padding bg-white dark:bg-black transition-colors duration-500"
    >
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-3">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Gallery
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-md mx-auto mb-12">
            A glimpse into our delicious world of treats
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <ScrollReveal key={image.id} delay={index * 100}>
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm md:text-base font-medium">{image.alt}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <Instagram size={20} />
            <span>Follow us on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

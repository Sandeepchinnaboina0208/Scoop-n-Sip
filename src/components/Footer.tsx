import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand and Socials */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-heading text-2xl font-bold hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                Naseer Cool Drinks
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Serving delicious ice creams and refreshing cool drinks since 2010. Made with love and premium ingredients.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <a key={index} href="#" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "Menu", to: "/menu" },
                { label: "Contact", to: "/contact" },
                { label: "About Us", href: "#" },
                { label: "FAQ", href: "#" },
                { label: "Privacy Policy", href: "#" }
              ].map((link, i) => (
                <li key={i}>
                  {link.to ? (
                    <Link to={link.to} className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="shrink-0 mt-1" />
                <span className="text-gray-600 dark:text-gray-300">
                  Kovur, Andhra Pradesh, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} />
                <a href="tel:+91 891 914 4260" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                  +91 891 914 4260
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} />
                <a href="mailto:sw30054@gmail.com" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                  sw30054@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Subscribe</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Get the latest updates, offers, and sweet news.
            </p>
            <div className="flex flex-col space-y-3">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-black/5 dark:bg-white/10 border border-gray-300 dark:border-gray-600 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
              />
              <Button className="bg-pink-600 text-white hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 w-full">
                Subscribe
              </Button>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-6 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Naseer Cool Drinks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

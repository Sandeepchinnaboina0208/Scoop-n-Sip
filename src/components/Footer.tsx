import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-black dark:bg-white text-white dark:text-black transition-colors duration-300">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand and Socials */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-heading text-2xl font-bold hover:text-pink-400 dark:hover:text-pink-600 transition-colors">
                Scoop-n-Sip
              </span>
            </Link>
            <p className="text-gray-300 dark:text-gray-600 mb-6">
              Serving delicious ice creams and refreshing cool drinks since 2010. Made with love and premium ingredients.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <a key={index} href="#" className="hover:text-pink-400 dark:hover:text-pink-600 transition-colors">
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
                    <Link to={link.to} className="hover:text-pink-400 dark:hover:text-pink-600 transition-colors">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="hover:text-pink-400 dark:hover:text-pink-600 transition-colors">
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
                <span className="text-gray-300 dark:text-gray-600">
                  123 Ice Cream Lane, Frosty City, FC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} />
                <a href="tel:+1234567890" className="hover:text-pink-400 dark:hover:text-pink-600 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} />
                <a href="mailto:info@scoopnsip.com" className="hover:text-pink-400 dark:hover:text-pink-600 transition-colors">
                  info@scoopnsip.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Subscribe */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Subscribe</h3>
            <p className="text-gray-300 dark:text-gray-600 mb-4">
              Get 10% off your first order when you sign up for our newsletter!
            </p>
            <div className="flex flex-col space-y-3">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 dark:bg-black/10 border border-white/20 dark:border-black/20 text-white dark:text-black placeholder:text-gray-400 dark:placeholder:text-gray-600"
              />
              <Button className="bg-pink-600 text-white hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 w-full">
                Subscribe
              </Button>
            </div>
          </div>

        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-white/10 dark:border-black/10 mt-12 pt-6 text-center">
          <p className="text-gray-400 dark:text-gray-600">
            &copy; {new Date().getFullYear()} Scoop-n-Sip. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollReveal from '@/components/ScrollReveal';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible!",
    });
  };

  return (
    <>
      <Navbar />
      
      <div className="pt-0 bg-white dark:bg-black transition-colors duration-300">
        <div className="container mx-auto section-padding">
          <ScrollReveal>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-3 text-zinc-900 dark:text-white">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-center max-w-md mx-auto mb-12">
              We'd love to hear from you! Reach out with any questions, feedback, or inquiries
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal effect="fade-right">
              <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-md p-6">
                <h2 className="font-heading text-2xl font-bold mb-6 text-zinc-900 dark:text-white">
                  Send us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-zinc-800 dark:text-gray-200">Your Name</label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-zinc-800 dark:text-gray-200">Your Email</label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-zinc-800 dark:text-gray-200">Subject</label>
                    <Input id="subject" placeholder="How can we help you?" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-zinc-800 dark:text-gray-200">Message</label>
                    <Textarea id="message" placeholder="Your message..." rows={5} required />
                  </div>
                  
                  <Button type="submit" className="primary-button w-full flex items-center justify-center gap-2">
                    Send Message <Send size={18} />
                  </Button>
                </form>
              </div>
            </ScrollReveal>
            
            <ScrollReveal effect="fade-left">
              <div className="space-y-6">
                <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-md p-6">
                  <h2 className="font-heading text-2xl font-bold mb-6 text-zinc-900 dark:text-white">Contact Information</h2>
                   <div className="space-y-4 text-zinc-800 dark:text-gray-300">
                    <div className="flex items-start gap-4">
                      <MapPin size={24} className="text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium">Address</h3>
                        <p>123 Ice Cream Lane, Frosty City, FC 12345</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Phone size={24} className="text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p>(123) 456-7890</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Mail size={24} className="text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p>info@scoopnsip.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Clock size={24} className="text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium">Hours</h3>
                        <p>Monday - Friday: 10am - 9pm</p>
                        <p>Saturday - Sunday: 11am - 10pm</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-md p-6">
                  <h2 className="font-heading text-2xl font-bold mb-6 text-zinc-900 dark:text-white">Our Location</h2>
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095242824!2d-73.98815732352236!3d40.74076613537981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1681221326307!5m2!1sen!2sus" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
      
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ContactPage;

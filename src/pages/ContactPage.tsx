import React, { useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollReveal from '@/components/ScrollReveal';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      
      const result = await emailjs.sendForm(
        'service_w1xfh0l',
        'template_rshtdkp',
        formRef.current,
        'K2V3kyekcGdU81F5x'
      );

      if (result.text === 'OK') {
        toast({
          title: "Message Sent Successfully",
          description: "We'll get back to you as soon as possible!",
        });
        formRef.current.reset();
      }
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      
      <div className="pt-20 bg-white dark:bg-black transition-colors duration-300">
        <div className="container mx-auto px-4 py-12">
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
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="from_name" className="text-sm font-medium text-zinc-800 dark:text-gray-200">Your Name</label>
                      <Input name="from_name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="reply_to" className="text-sm font-medium text-zinc-800 dark:text-gray-200">Your Email</label>
                      <Input name="reply_to" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-zinc-800 dark:text-gray-200">Subject</label>
                    <Input name="subject" placeholder="How can we help you?" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-zinc-800 dark:text-gray-200">Message</label>
                    <Textarea name="message" placeholder="Your message..." rows={5} required />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="primary-button w-full flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
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
                        <p>Kovur, Andhra Pradesh, India</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Phone size={24} className="text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p>+91 891 914 4260</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Mail size={24} className="text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p>sw30054@gmail.com</p>
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.330275262791!2d79.9828823!3d14.4980745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c8c5d932652f9%3A0xe18641cf0d77a1df!2sNazeer%20Cooldrinks!5e0!3m2!1sen!2sin!4v1713872520315!5m2!1sen!2sin" 
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

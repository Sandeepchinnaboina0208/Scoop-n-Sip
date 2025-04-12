
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollReveal from '@/components/ScrollReveal';
import { Star } from 'lucide-react';

const menuItems = {
  iceCream: [
    { id: 1, name: 'Chocolate Volcano', price: '$4.99', description: 'Rich chocolate ice cream with hot fudge and chocolate chunks', rating: 5, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 2, name: 'Strawberry Cheesecake', price: '$5.29', description: 'Creamy cheesecake ice cream with strawberry swirls and graham cracker pieces', rating: 5, image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 3, name: 'Vanilla Bean', price: '$4.49', description: 'Classic vanilla ice cream made with real vanilla beans', rating: 4, image: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 4, name: 'Mint Chocolate Chip', price: '$4.99', description: 'Refreshing mint ice cream with chocolate chips', rating: 4, image: 'https://images.unsplash.com/photo-1643867121562-4cd0f7a5f5a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 5, name: 'Cookie Dough', price: '$5.49', description: 'Vanilla ice cream loaded with chunks of chocolate chip cookie dough', rating: 5, image: 'https://images.unsplash.com/photo-1559703248-dcaaec9fab78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 6, name: 'Butter Pecan', price: '$5.29', description: 'Butter-flavored ice cream with roasted pecans', rating: 4, image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80' },
  ],
  coolDrinks: [
    { id: 1, name: 'Mango Tango Smoothie', price: '$5.49', description: 'Refreshing smoothie with fresh mangoes, yogurt, and a hint of lime', rating: 5, image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 2, name: 'Berry Blast Mojito', price: '$5.99', description: 'Non-alcoholic mojito with mixed berries, lime, mint, and soda water', rating: 5, image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 3, name: 'Classic Chocolate Milkshake', price: '$5.29', description: 'Thick and creamy milkshake made with our chocolate ice cream', rating: 4, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 4, name: 'Strawberry Lemonade', price: '$4.49', description: 'Refreshing lemonade infused with fresh strawberries', rating: 4, image: 'https://images.unsplash.com/photo-1523371683773-affcb4a27e07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 5, name: 'Blue Lagoon', price: '$5.99', description: 'A vibrant blue mocktail with citrus notes and a tropical twist', rating: 5, image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 6, name: 'Green Energy Smoothie', price: '$6.29', description: 'Healthy smoothie with spinach, banana, mango, and almond milk', rating: 4, image: 'https://images.unsplash.com/photo-1619898804629-7e9c48de405e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80' },
  ],
  sundaes: [
    { id: 1, name: 'Banana Split', price: '$7.99', description: 'Classic sundae with vanilla, chocolate, and strawberry ice cream, banana, toppings, and whipped cream', rating: 5, image: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 2, name: 'Brownie Delight', price: '$8.49', description: 'Warm chocolate brownie topped with vanilla ice cream, hot fudge, and whipped cream', rating: 5, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 3, name: 'Caramel Explosion', price: '$7.49', description: 'Vanilla and caramel ice cream with caramel sauce, toffee bits, and whipped cream', rating: 4, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80' },
  ]
};

const MenuCategory = ({ title, items }: { title: string, items: typeof menuItems.iceCream }) => {
  return (
    <div className="mb-12">
      <ScrollReveal>
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 inline-block">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
      </ScrollReveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <ScrollReveal key={item.id} delay={index * 100}>
            <div className="menu-card h-full flex flex-col">
              <div className="relative mb-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 text-sm font-medium">
                  {item.price}
                </div>
              </div>
              
              <h3 className="font-heading text-xl font-bold mb-1">{item.name}</h3>
              
              <div className="flex items-center mb-3">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

const MenuPage = () => {
  return (
    <>
      <Navbar />
      
      <div className="pt-20 bg-gradient-to-b from-icecream-blue/30 via-white to-white">
        <div className="container mx-auto section-padding">
          <ScrollReveal>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-3">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Our Menu
              </span>
            </h1>
            <p className="text-gray-600 text-center max-w-md mx-auto mb-12">
              Explore our full range of delicious treats and refreshing beverages
            </p>
          </ScrollReveal>
          
          <MenuCategory title="Ice Cream Flavors" items={menuItems.iceCream} />
          <MenuCategory title="Cool Drinks & Smoothies" items={menuItems.coolDrinks} />
          <MenuCategory title="Specialty Sundaes" items={menuItems.sundaes} />
        </div>
      </div>
      
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default MenuPage;

import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our <span className="text-blue-primary">Digital Services</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Explore our wide range of premium accounts and digital infrastructure solutions tailored for your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-8 group hover:border-blue-primary/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-blue-primary/10 rounded-2xl flex items-center justify-center text-blue-primary group-hover:bg-blue-primary group-hover:text-white transition-all duration-300">
                    <IconComponent size={28} />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500 bg-white/5 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-primary transition-colors">{service.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <Link 
                  to="/contact" 
                  className="flex items-center gap-2 text-sm font-bold text-blue-primary hover:text-blue-400 transition-colors"
                >
                  Order Now <Icons.ChevronRight size={16} />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Request Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 glass-card p-12 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Need something else?</h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-10">
              If you're looking for a specific digital product or account that isn't listed here, feel free to reach out. I can source most digital assets.
            </p>
            <Link 
              to="/contact" 
              className="px-10 py-4 bg-white text-navy-900 font-bold rounded-xl hover:bg-blue-primary hover:text-white transition-all inline-block"
            >
              Custom Request
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-primary/10 blur-3xl rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-accent/10 blur-3xl rounded-full -ml-32 -mb-32" />
        </motion.div>
      </section>
    </div>
  );
};

export default Services;

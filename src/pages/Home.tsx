import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-primary/10 border border-blue-primary/20 text-blue-primary text-sm font-semibold mb-8">
            <Star size={16} fill="currentColor" />
            <span>Trusted Digital Service Provider</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm <span className="text-blue-primary">Hyoukall</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-medium mb-8 leading-relaxed">
            Digital Services & Premium Accounts Provider.
          </p>
          <p className="text-lg text-slate-400 mb-10 max-w-lg">
            Elevate your digital experience with premium accounts, cloud infrastructure, and specialized digital products. Fast, reliable, and secure.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/services" 
              className="px-8 py-4 bg-blue-primary hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-primary/20 flex items-center gap-2 group"
            >
              View Services
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all border border-white/10"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
            <img 
              src="https://picsum.photos/seed/haikal-profile/800/800" 
              alt="Hyoukall Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-primary/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-accent/20 blur-3xl rounded-full" />
          
          {/* Floating Stats */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 top-1/4 glass-card p-4 flex items-center gap-3 z-20"
          >
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center text-green-500">
              <Shield size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Reliability</p>
              <p className="text-white font-bold">100% Secure</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -left-8 bottom-1/4 glass-card p-4 flex items-center gap-3 z-20"
          >
            <div className="w-10 h-10 bg-blue-primary/20 rounded-lg flex items-center justify-center text-blue-primary">
              <Zap size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Response</p>
              <p className="text-white font-bold">Instant Delivery</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose My Services?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I prioritize customer satisfaction and security above all else. Here's what sets me apart.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Premium Quality",
              desc: "Only the best and most stable accounts and services for your digital needs.",
              icon: <Star className="text-blue-primary" />
            },
            {
              title: "Fast Response",
              desc: "I understand your time is valuable. Expect quick delivery and support.",
              icon: <Zap className="text-blue-primary" />
            },
            {
              title: "Trusted Since 2020",
              desc: "Years of experience in the digital goods market with hundreds of happy clients.",
              icon: <Shield className="text-blue-primary" />
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="glass-card p-8 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-primary/10 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

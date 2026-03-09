import React from 'react';
import { motion } from 'motion/react';
import { Award, Clock, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border-8 border-white/5 aspect-[4/5]">
              <img 
                src="https://picsum.photos/seed/haikal-about/800/1000" 
                alt="Hyoukall" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 glass-card p-8 z-20 hidden md:block">
              <p className="text-4xl font-bold text-blue-primary mb-1">5+</p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Years Experience</p>
            </div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-primary/20 blur-3xl rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-blue-primary font-bold tracking-widest uppercase text-sm mb-4">About Me</h4>
            <h1 className="text-4xl md:text-5xl font-bold mb-8">The Person Behind <span className="text-blue-primary">Hyoukall Services</span></h1>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Hello! I'm Hyoukall, a digital services enthusiast and provider based in Indonesia. I've been navigating the digital landscape since 2020, helping individuals and businesses access premium tools and infrastructure.
            </p>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              My journey started with a simple goal: to make premium digital products more accessible and affordable. Over the years, I've built a reputation for trust, lightning-fast delivery, and reliable after-sales support.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Award size={20} />, label: "Quality First" },
                { icon: <Clock size={20} />, label: "24/7 Support" },
                { icon: <Users size={20} />, label: "500+ Clients" },
                { icon: <Heart size={20} />, label: "Customer Love" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white font-medium">
                  <div className="w-8 h-8 rounded-full bg-blue-primary/20 flex items-center justify-center text-blue-primary">
                    {item.icon}
                  </div>
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline/Experience */}
        <div className="glass-card p-12 mb-32">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="space-y-12">
            {[
              { year: "2020", title: "The Beginning", desc: "Started offering basic premium app accounts to friends and local community." },
              { year: "2021", title: "Expanding Horizons", desc: "Introduced cloud infrastructure services like DigitalOcean and AWS accounts." },
              { year: "2022", title: "Building Trust", desc: "Reached 200+ active clients and established a reputation for reliability." },
              { year: "2023-Present", title: "Full Digital Suite", desc: "Offering a comprehensive range of digital services with automated delivery systems." }
            ].map((milestone, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="md:w-32 flex-shrink-0">
                  <span className="text-2xl font-bold text-blue-primary">{milestone.year}</span>
                </div>
                <div className="relative pb-12 md:pb-0">
                  {i !== 3 && <div className="absolute left-[-2.5rem] top-8 bottom-0 w-px bg-white/10 hidden md:block" />}
                  <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
                  <p className="text-slate-400">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

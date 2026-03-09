import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Send, Mail, MapPin, Phone, ExternalLink, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in <span className="text-blue-primary">Touch</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Have questions or ready to place an order? Reach out through any of the channels below. I'm usually online and ready to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {/* Contact Cards */}
          <motion.a
            href="https://wa.me/yournumber"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="glass-card p-10 flex flex-col items-center text-center group hover:border-green-500/50 transition-all"
          >
            <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500 mb-6 group-hover:bg-green-500 group-hover:text-white transition-all">
              <MessageCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2">WhatsApp</h3>
            <p className="text-slate-400 mb-6">Fastest response for orders and quick inquiries.</p>
            <span className="flex items-center gap-2 text-green-500 font-bold">
              Chat on WhatsApp <ExternalLink size={16} />
            </span>
          </motion.a>

          <motion.a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="glass-card p-10 flex flex-col items-center text-center group hover:border-blue-400/50 transition-all"
          >
            <div className="w-16 h-16 bg-blue-400/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-400 group-hover:text-white transition-all">
              <Send size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Telegram</h3>
            <p className="text-slate-400 mb-6">Secure messaging for technical support and bulk deals.</p>
            <span className="flex items-center gap-2 text-blue-400 font-bold">
              Message on Telegram <ExternalLink size={16} />
            </span>
          </motion.a>

          <motion.div
            whileHover={{ y: -5 }}
            className="glass-card p-10 flex flex-col items-center text-center group transition-all"
          >
            <div className="w-16 h-16 bg-blue-primary/10 rounded-2xl flex items-center justify-center text-blue-primary mb-6 group-hover:bg-blue-primary group-hover:text-white transition-all">
              <Mail size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Email</h3>
            <p className="text-slate-400 mb-6">For business inquiries and formal collaborations.</p>
            <span className="text-white font-bold">haikal@example.com</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card p-10">
            <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-primary transition-colors" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-primary transition-colors" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Subject</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-primary transition-colors" placeholder="How can I help?" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-primary transition-colors" placeholder="Tell me about your needs..."></textarea>
              </div>
              <button className="w-full py-4 bg-blue-primary hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-primary/20">
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-8">
            <div className="glass-card p-8 flex items-start gap-6">
              <div className="w-12 h-12 bg-blue-primary/10 rounded-xl flex items-center justify-center text-blue-primary flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Location</h4>
                <p className="text-slate-400">Jakarta, Indonesia (Available Worldwide)</p>
              </div>
            </div>
            
            <div className="glass-card p-8 flex items-start gap-6">
              <div className="w-12 h-12 bg-blue-primary/10 rounded-xl flex items-center justify-center text-blue-primary flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Phone</h4>
                <p className="text-slate-400">+62 812-3456-7890</p>
              </div>
            </div>

            <div className="glass-card p-8 flex items-start gap-6">
              <div className="w-12 h-12 bg-blue-primary/10 rounded-xl flex items-center justify-center text-blue-primary flex-shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Working Hours</h4>
                <p className="text-slate-400">Daily: 09:00 AM - 11:00 PM (GMT+7)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

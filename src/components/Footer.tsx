import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Github, Twitter, Instagram, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-primary rounded-lg flex items-center justify-center">
                <ShieldCheck className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold text-white tracking-tight">Hyoukall<span className="text-blue-primary">.</span></span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-8">
              Providing premium digital services and verified accounts since 2020. 
              Trust, speed, and reliability in every transaction.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-primary transition-colors text-slate-400 hover:text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-primary transition-colors text-slate-400 hover:text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-primary transition-colors text-slate-400 hover:text-white">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-primary transition-colors text-slate-400 hover:text-white">
                <Send size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-blue-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-blue-primary transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-blue-primary transition-colors">About Me</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-blue-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-blue-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-primary transition-colors">Help Center</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Hyoukall Digital Services. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-1">
            Designed with <span className="text-red-500">♥</span> for the digital world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

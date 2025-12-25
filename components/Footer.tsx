import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-[#5f6368] border-t border-[#dadce0]">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="shrink-0">
                <img 
                  src="/assets/brand/logo.png" 
                  alt="SustyDigi Logo" 
                  className="w-9 h-9 rounded-lg object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=SD&background=5f6368&color=fff&bold=true";
                  }}
                />
              </div>
              <div className="flex flex-col justify-center leading-none min-w-fit">
                <span className="font-bold text-lg text-[#3c4043] tracking-tight whitespace-nowrap">
                  SustyDigi <span className="text-brand-600">Marketers</span>
                </span>
                <div className="flex justify-between items-center text-[9px] font-bold uppercase mt-1.5 font-ui w-full">
                  <span className="text-google-blue">Innovate</span>
                  <span className="text-google-red text-[11px] leading-none">•</span>
                  <span className="text-google-yellow">Integrate</span>
                  <span className="text-google-green text-[11px] leading-none">•</span>
                  <span className="text-google-blue">Inspire</span>
                </div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-[#5f6368] max-w-xs">
              Professional digital products and automation solutions for modern enterprises. Engineering resilient, secure, and industry-focused digital infrastructure.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-[#202124] tracking-wider uppercase mb-6">Company</h3>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-[#5f6368] hover:text-brand-600 transition-colors font-medium">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#202124] tracking-wider uppercase mb-6">Verticals</h3>
            <ul className="space-y-4">
              <li><Link to="/industries" className="text-sm text-[#5f6368] hover:text-brand-600 transition-colors font-medium">Healthcare & Life Sciences</Link></li>
              <li><Link to="/industries" className="text-sm text-[#5f6368] hover:text-brand-600 transition-colors font-medium">Finance & Banking</Link></li>
              <li><Link to="/industries" className="text-sm text-[#5f6368] hover:text-brand-600 transition-colors font-medium">Retail & E-commerce</Link></li>
              <li><Link to="/industries" className="text-sm text-[#5f6368] hover:text-brand-600 transition-colors font-medium">Manufacturing & Industrial</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#202124] tracking-wider uppercase mb-6">Contact</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-600 mt-0.5 shrink-0" />
                <span className="text-sm leading-relaxed">
                  123 Business Park, Tech District<br/>
                  Karnataka, India 560001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-600 shrink-0" />
                <span className="text-sm font-medium">contact@sustydigi.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-[#f1f3f4] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#70757a]">&copy; {new Date().getFullYear()} SustyDigi Marketers. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/contact" className="text-xs text-[#70757a] hover:text-brand-600">Privacy Policy</Link>
            <Link to="/contact" className="text-xs text-[#70757a] hover:text-brand-600">Terms of Service</Link>
            <Link to="/contact" className="text-xs text-[#70757a] hover:text-brand-600">Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
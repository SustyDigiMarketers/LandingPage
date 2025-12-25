
import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
// Added ShieldCheck to imports to resolve "Cannot find name 'ShieldCheck'" error
import { Mail, Phone, MapPin, Sparkles, Send, Headphones, Globe, ShieldCheck } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Dynamic Header Section */}
      <div className="bg-slate-900 pb-48 pt-32 relative overflow-hidden animate-fade-in">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                 <pattern id="grid-contact" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                 </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-contact)" />
           </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-google-blue/20 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-google-blue font-bold text-[10px] uppercase tracking-[0.3em] mb-10 font-ui border border-white/5 backdrop-blur-sm">
             <Sparkles className="w-4 h-4" /> Global Support
          </div>
          <h1 className="text-4xl md:text-[64px] font-medium text-white tracking-tight leading-tight font-heading mb-8">
            Let's Engineer Your <span className="text-google-blue">Future.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Tell us about your business challenges. Our certified architects will help you design the right roadmap.
          </p>
        </div>
      </div>

      {/* Main Form & Contact Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 pb-32 reveal">
        <div className="bg-white rounded-[48px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden grid grid-cols-1 lg:grid-cols-2 border border-slate-100">
          
          {/* Contact Info Sidebar */}
          <div className="bg-[#1a73e8] p-12 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white opacity-[0.05] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-medium mb-12 tracking-tight font-heading">Connect with us</h3>
              <div className="space-y-10">
                {[
                  { icon: <Phone />, title: 'Inquiry Line', val: '+1 (555) 123-4567', sub: 'Mon-Fri, 9am - 6pm IST' },
                  { icon: <Mail />, title: 'Direct Email', val: 'sales@sustydigi.com', sub: 'Technical response in < 24h' },
                  { icon: <MapPin />, title: 'Global HQ', val: '123 Business Park, Tech District', sub: 'Karnataka, India 560001' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start group/item">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mr-6 group-hover/item:bg-white group-hover/item:text-brand-600 transition-all duration-300">
                       {/* Fixed React.cloneElement type error by casting icon to any */}
                       {React.cloneElement(item.icon as React.ReactElement<any>, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <span className="block text-[10px] font-black uppercase tracking-widest text-white/50 mb-1">{item.title}</span>
                      <span className="block text-xl font-medium tracking-tight mb-1">{item.val}</span>
                      <span className="text-xs text-white/40 font-light">{item.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-white/10 relative z-10">
               <div className="flex items-center gap-4 group/support cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white group-hover/support:bg-google-yellow transition-all">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/60">Existing Client Support</p>
                    <p className="text-sm font-medium text-white/90">support@sustydigi.com</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-12 lg:p-20 bg-white">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2">
                <div className="group">
                  <label htmlFor="first-name" className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-google-blue">First name</label>
                  <input 
                    type="text" 
                    id="first-name" 
                    className="py-4 px-0 block w-full bg-transparent border-b-2 border-slate-100 focus:border-google-blue transition-all outline-none font-ui text-slate-900 placeholder-slate-300"
                    placeholder="E.g. Thomas"
                  />
                </div>
                <div className="group">
                  <label htmlFor="last-name" className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-google-blue">Last name</label>
                  <input 
                    type="text" 
                    id="last-name" 
                    className="py-4 px-0 block w-full bg-transparent border-b-2 border-slate-100 focus:border-google-blue transition-all outline-none font-ui text-slate-900 placeholder-slate-300"
                    placeholder="E.g. John"
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-google-blue">Work Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="py-4 px-0 block w-full bg-transparent border-b-2 border-slate-100 focus:border-google-blue transition-all outline-none font-ui text-slate-900 placeholder-slate-300"
                  placeholder="thomas.j@agappe.com"
                />
              </div>

              <div className="group">
                <label htmlFor="industry" className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-google-blue">Industry Domain</label>
                <select id="industry" className="py-4 px-0 block w-full bg-transparent border-b-2 border-slate-100 focus:border-google-blue transition-all outline-none font-ui text-slate-900">
                  <option>Healthcare & Life Sciences</option>
                  <option>Finance & Banking</option>
                  <option>Retail & E-commerce</option>
                  <option>Industrial & Trading</option>
                  <option>Technology & SaaS</option>
                </select>
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-google-blue">Strategic Goals</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="py-4 px-0 block w-full bg-transparent border-b-2 border-slate-100 focus:border-google-blue transition-all outline-none font-ui text-slate-900 placeholder-slate-300 resize-none"
                  placeholder="Tell us about the digital friction points in your current workflow..."
                ></textarea>
              </div>

              <div className="pt-6">
                <button type="submit" className="w-full bg-[#202124] hover:bg-slate-800 text-white px-12 py-6 rounded-2xl font-bold text-sm tracking-[0.3em] uppercase flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-2xl">
                  REQUEST ROADMAP <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Trust Band */}
      <div className="max-w-7xl mx-auto px-4 pb-32 reveal text-center">
         <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-12">Security & Compliance standards verified</p>
         <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
            <div className="flex items-center gap-2"><ShieldCheck className="w-6 h-6" /><span className="text-xs font-bold">GDPR</span></div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-6 h-6" /><span className="text-xs font-bold">HIPAA</span></div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-6 h-6" /><span className="text-xs font-bold">ISO 27001</span></div>
            <div className="flex items-center gap-2"><Globe className="w-6 h-6" /><span className="text-xs font-bold">PCI-DSS</span></div>
         </div>
      </div>
    </div>
  );
};

export default Contact;

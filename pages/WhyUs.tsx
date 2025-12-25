import React from 'react';
import { 
  ArrowRight, ShieldCheck, Globe, Zap, HeartPulse, 
  Users, Activity, Sparkles, Sun, Leaf, TreeDeciduous,
  Monitor, Database, Lock, UserCheck, Quote
} from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';

const STATS = [
  { val: "29+", label: "YEARS IN BUSINESS" },
  { val: "15K+", label: "EMPLOYEES" },
  { val: "180+", label: "COUNTRIES SERVED" },
  { val: "12", label: "DATA CENTERS" },
  { val: "100M+", label: "USERS" },
  { val: "2+", label: "BRANDS" }
];

const WhyUs: React.FC = () => {
  return (
    <div className="bg-white min-h-screen selection:bg-brand-100">
      <section className="bg-slate-900 pt-32 pb-48 relative overflow-hidden text-white animate-fade-in">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-why" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-why)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-google-blue font-bold text-[10px] uppercase tracking-[0.3em] mb-10 font-ui border border-white/5 backdrop-blur-sm">
             <Sparkles className="w-4 h-4" /> Our Identity
          </div>
          <h1 className="text-4xl md:text-[72px] font-medium tracking-tight leading-tight font-heading mb-8">
            Our DNA: <span className="text-google-blue">Resilience</span> & Trust
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            For nearly three decades, we have been building software with a singular focus: 
            empowering businesses while respecting individual privacy.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 -mt-24 pb-32 relative z-20">
        <div className="bg-white rounded-[32px] shadow-2xl border border-slate-100 p-12 md:p-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-google-blue mb-2 group-hover:scale-110 transition-transform duration-300">{stat.val}</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section className="reveal">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-google-green/10 text-google-green font-bold text-[10px] uppercase tracking-[0.2em] mb-8 font-ui border border-google-green/5">
              <TreeDeciduous className="w-4 h-4" /> Social Responsibility
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-[#202124] mb-8 font-heading tracking-tight leading-tight">
              Bringing opportunity to <br/><span className="text-google-green">smaller communities.</span>
            </h2>
            <p className="text-lg text-[#5f6368] mb-8 font-light leading-relaxed">
              A keystone of our philosophy is in seeing value in the overlooked. Small, often rural communities, hold immense talent, but lack viable employment options; we want to change that.
            </p>
            <p className="text-lg text-[#5f6368] mb-12 font-light leading-relaxed">
              We have drifted away from the "mega-office" model and are now opening smaller offices. If we can bring high-tech jobs to places where there are none, we can also help stimulate local economic revitalization.
            </p>
            <div className="flex items-center gap-8">
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-[#202124]">50+</span>
                  <span className="text-[10px] font-black text-slate-400 uppercase">Hub Locations</span>
               </div>
               <div className="w-px h-12 bg-slate-200"></div>
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-[#202124]">Rural</span>
                  <span className="text-[10px] font-black text-slate-400 uppercase">Talent Focus</span>
               </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[48px] overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] transform hover:scale-[1.02] transition-transform duration-700">
              <img 
                src="/assets/why-us/community.jpg" 
                alt="Community Focus" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1000";
                }}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section bgColor="light" className="reveal">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="rounded-[48px] overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] transform hover:scale-[1.02] transition-transform duration-700">
              <img 
                src="/assets/why-us/privacy.jpg" 
                alt="Privacy Commitment" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000";
                }}
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-google-red/10 text-google-red font-bold text-[10px] uppercase tracking-[0.2em] mb-8 font-ui border border-google-red/5">
              <ShieldCheck className="w-4 h-4" /> Data Sovereignty
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-[#202124] mb-8 font-heading tracking-tight leading-tight">
              Privacy as a <br/><span className="text-google-red">Core Commitment.</span>
            </h2>
            <p className="text-lg text-[#5f6368] mb-8 font-light leading-relaxed">
              In 29+ years of being in business, we've been mindful of our users' privacy from the very start. Long before GDPR came into effect, the tenets of data privacy were woven into our corporate tapestry.
            </p>
            <p className="text-lg text-[#5f6368] mb-12 font-light leading-relaxed">
              We are fanatical about data privacy, and about giving you more control rather than less. It's why we extended GDPR protections to all our users worldwide, not just those in the EU.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                <Lock className="w-6 h-6 text-google-red" />
                <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">No Ads</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                <Database className="w-6 h-6 text-google-blue" />
                <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">Your Data</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <section className="py-32 bg-white text-center reveal">
        <div className="max-w-4xl mx-auto px-4">
           <div className="mb-12 flex justify-center">
              <div className="w-20 h-20 bg-google-yellow/10 rounded-full flex items-center justify-center text-google-yellow">
                 <Sun className="w-10 h-10" />
              </div>
           </div>
          <h2 className="text-4xl md:text-6xl font-medium text-[#202124] mb-8 font-heading tracking-tight leading-tight">
            Built for the next century.
          </h2>
          <p className="text-xl text-[#5f6368] mb-16 font-light leading-relaxed max-w-2xl mx-auto">
            We operate without outside investors, meaning our only accountability is to you, the user. 
            This independence allows us to focus on what truly matters: engineering excellent software.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button to="/contact" className="px-16 py-6 text-base font-bold shadow-2xl hover:-translate-y-2 transition-transform">Get Started Today</Button>
            <Button to="/products" variant="outline" className="px-16 py-6 text-base font-bold bg-white hover:shadow-xl transition-all">Explore the Stack</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
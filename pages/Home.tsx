import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, ShieldCheck, ChevronRight, Layers, Activity, 
  Sparkles, Link2 as LinkIcon, 
  Network, Activity as PulseIcon, Book as BookIcon, Mail as MailIcon, 
  Headphones as DeskIcon, Smartphone,
  UserCheck, Headphones, Monitor, Quote as QuoteIcon,
  Play, Cpu, Database, Server, Box, Terminal,
  Users, CreditCard
} from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const INTELLIGENCE_SUITE = [
  { name: "CRM Engine", desc: "Unified pipeline governance for sales ops.", tag: "Core", color: "intel-blue" },
  { name: "Finance Hub", desc: "Real-time revenue & reconciliation.", tag: "Financial", color: "intel-green" },
  { name: "Talent Ops", desc: "Employee lifecycle & HR automation.", tag: "People", color: "intel-yellow" },
  { name: "Service Desk", desc: "High-fidelity customer support nodes.", tag: "Support", color: "intel-blue" },
  { name: "Comm Layer", desc: "Secure, ad-free enterprise mailing.", tag: "Network", color: "intel-red" },
];

const Home: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col bg-white overflow-x-hidden">
      {/* 1. ARCHITECTURAL HERO - Fit Section */}
      <div className="bg-brand-900 fit-section relative overflow-hidden animate-fade-in text-white py-12 lg:py-0">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="arch-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#arch-grid)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full fit-content">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <div className="lg:col-span-7 flex flex-col text-left justify-center py-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md text-brand-300 text-[10px] font-black uppercase tracking-[0.4em] mb-8 border border-white/10 shadow-2xl animate-fade-in-up self-start">
                <ShieldCheck className="w-4 h-4 text-intel-green" /> Verified Partner Ecosystem
              </div>
              
              <h1 className="text-[42px] md:text-[64px] lg:text-[88px] font-medium leading-[0.9] mb-8 tracking-tighter font-heading animate-fade-in-up text-white">
                Engineering <br />
                <span className="relative inline-block italic text-brand-300 font-semibold">
                  Resilience
                </span> <br />
                at Global Scale.
              </h1>
              
              <p className="text-lg lg:text-2xl text-brand-100/70 leading-relaxed mb-10 max-w-2xl font-light animate-fade-in-up [animation-delay:200ms]">
                Transform complex operations with a <span className="text-white font-medium border-b border-white/20 hover:border-intel-blue transition-all cursor-default">bespoke intelligence suite</span> designed for high-fidelity business orchestration.
              </p>
              
              <div className="flex flex-wrap gap-6 animate-fade-in-up [animation-delay:400ms]">
                <Link to="/contact">
                  <button className="group relative overflow-hidden bg-brand-500 text-white px-10 py-5 rounded-[20px] font-bold text-sm tracking-widest flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_-10px_rgba(26,115,232,0.4)] font-ui">
                    <span className="relative z-10 uppercase">Consultation</span>
                    <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                  </button>
                </Link>
                <Link to="/products">
                  <button className="group bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-5 rounded-[20px] font-bold text-sm tracking-widest flex items-center gap-3 transition-all hover:bg-white/10 hover:shadow-2xl font-ui">
                    <Layers className="w-5 h-5 text-brand-300 transition-transform group-hover:rotate-12" />
                    SPECS
                  </button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex items-center">
              <div 
                className="deep-glass rounded-[48px] shadow-[0_60px_160px_-40px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-1000 transform-gpu hover:shadow-[0_80px_200px_-50px_rgba(0,0,0,0.6)] group/suite relative h-full w-full flex flex-col lg:max-h-[85vh]"
                style={{ transform: `rotateY(${-mousePos.x * 3}deg) rotateX(${mousePos.y * 3}deg)` }}
              >
                <div className="p-8 lg:p-10 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em] font-ui flex items-center gap-4">
                      <div className="w-2 h-2 bg-intel-green rounded-full animate-pulse shadow-[0_0_12px_rgba(30,142,62,0.8)]"></div>
                      Intelligence Suite
                    </h3>
                    <div className="text-[9px] font-bold text-white/20 tracking-[0.2em] font-ui">V.3.1 ARCH</div>
                  </div>
                  
                  <div className="space-y-3 flex-grow overflow-hidden flex flex-col justify-center">
                    {INTELLIGENCE_SUITE.map((app, idx) => (
                      <Link key={idx} to="/products" className="flex items-center gap-6 group/item p-4 rounded-[24px] hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-white/5">
                        <div className="shrink-0">
                          <div className={`w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 shadow-inner transition-all duration-700 group-hover/item:scale-110 group-hover/item:bg-white`}>
                            <img 
                              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(app.name)}&background=06162e&color=fff&size=128&bold=true`} 
                              alt={app.name} 
                              className="w-8 h-8 object-contain" 
                            />
                          </div>
                        </div>
                        <div className="flex-1 text-left">
                          <div className="flex items-center justify-between mb-0.5">
                            <h4 className="text-[15px] font-bold text-white/90 group-hover/item:text-white transition-colors font-ui leading-none">{app.name}</h4>
                            <span className="text-[8px] font-black uppercase tracking-widest text-white/20 group-hover/item:text-brand-300 transition-colors">{app.tag}</span>
                          </div>
                          <p className="text-[11px] text-white/40 leading-tight font-light">{app.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                
                <Link to="/products" className="relative block py-8 bg-white/5 text-center text-white/40 text-[10px] font-black tracking-[0.5em] uppercase overflow-hidden group/cta border-t border-white/5">
                  <span className="relative z-10 flex items-center justify-center gap-4 group-hover/cta:text-white transition-colors">FULL ECOSYSTEM <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-3" /></span>
                  <div className="absolute inset-0 bg-brand-500 translate-y-full group-hover/cta:translate-y-0 transition-transform duration-700"></div>
                </Link>
              </div>
              <div className="absolute -inset-20 bg-brand-500/10 blur-[100px] rounded-[100px] -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CORE ORCHESTRATION LIST - Fit Section */}
      <section className="bg-white fit-section relative overflow-hidden z-20 reveal py-12 lg:py-0">
        <div className="max-w-7xl mx-auto px-4 w-full fit-content">
          <div className="bg-white rounded-[56px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-100 p-8 lg:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-[0.05] pointer-events-none">
              <Network className="w-64 h-64 lg:w-96 lg:h-96 -translate-y-1/2 translate-x-1/2" />
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
              <div className="text-left stagger flex flex-col justify-center py-4">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-50 text-slate-400 font-bold text-[9px] uppercase tracking-[0.5em] mb-8 font-ui border border-slate-100 self-start">
                  <Cpu className="w-3.5 h-3.5 text-brand-500" /> Platform Architecture
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-brand-900 tracking-tighter font-heading leading-tight mb-6">
                  The Orchestration <br /><span className="text-brand-500 italic">Modules</span>
                </h2>
                <p className="text-lg text-slate-500 font-light leading-relaxed mb-10 max-w-xl">
                  A high-fidelity list of core modules engineered to integrate seamlessly across every digital domain of your enterprise.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                  {[
                    { title: "Unified CRM", icon: <Users className="w-5 h-5" />, desc: "Pipeline transparency." },
                    { title: "Revenue Ops", icon: <CreditCard className="w-5 h-5" />, desc: "Automated billing." },
                    { title: "Supply Chain", icon: <Box className="w-5 h-5" />, desc: "Vendor governance." },
                    { title: "Audit Trail", icon: <ShieldCheck className="w-5 h-5" />, desc: "Compliance-first." }
                  ].map((mod, i) => (
                    <div key={i} className="group cursor-default flex items-start gap-4">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 shrink-0 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-500 transition-all group-hover:bg-brand-500 group-hover:text-white group-hover:rotate-6">
                        {React.cloneElement(mod.icon as React.ReactElement<any>, { className: 'w-6 h-6' })}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-900 mb-0.5 font-ui">{mod.title}</h4>
                        <p className="text-xs text-slate-400 font-light">{mod.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-50 rounded-[40px] p-8 lg:p-12 border border-slate-100 relative group flex flex-col justify-center min-h-[400px]">
                <div className="space-y-4">
                  {[
                    { label: "Architecture Audit", val: "Complete" },
                    { label: "Data Lake Sync", val: "Active" },
                    { label: "API Gateway", val: "Secure" },
                    { label: "Global Nodes", val: "12/12 Online" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white p-5 lg:p-8 rounded-2xl border border-slate-200 flex items-center justify-between shadow-sm group-hover:shadow-md transition-shadow">
                      <span className="text-xs lg:text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
                      <span className="text-xs lg:text-sm font-black text-brand-500 font-ui uppercase">{stat.val}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Link to="/products" className="text-[10px] font-black text-brand-500 uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:gap-6 transition-all font-ui">
                    VIEW REGISTRY <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PILLARS SECTION - Fit Section */}
      <section className="bg-white fit-section relative overflow-hidden py-12 lg:py-0">
        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full fit-content">
          <div className="text-center mb-12 lg:mb-16 reveal">
             <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-50 text-slate-400 font-bold text-[10px] uppercase tracking-[0.6em] mb-8 font-ui border border-slate-100">
                <Network className="w-4 h-4" /> Alliance Ecosystem
             </div>
             <h2 className="text-4xl md:text-6xl lg:text-8xl font-medium text-brand-900 tracking-tighter font-heading leading-tight stagger">
               Unified Technology <span className="text-brand-500 italic">Pillars</span>
             </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="reveal group">
              <div className="relative bg-[#ffcc00] rounded-[48px] overflow-hidden shadow-xl transition-all duration-1000 transform-gpu hover:scale-[1.02] flex flex-col items-stretch min-h-[400px] lg:min-h-[480px]">
                <div className="p-10 lg:p-14 flex-1 flex flex-col justify-center relative z-10">
                    <h3 className="text-3xl lg:text-4xl font-medium leading-[1.1] text-brand-900 mb-6 font-heading">
                      The operating system for <span className="font-bold underline decoration-black/10 underline-offset-[8px]">modern enterprise.</span>
                    </h3>
                    <p className="text-base lg:text-xl font-light text-brand-900/70 mb-10 leading-relaxed">Zoho stack orchestrates complex operations with unmatched resilience.</p>
                    <button className="bg-brand-900 text-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg hover:-translate-y-1 self-start">
                      EXPLORE ARCH
                    </button>
                </div>
                <div className="absolute right-0 bottom-0 w-32 h-32 lg:w-48 lg:h-48 bg-white/90 backdrop-blur-3xl shadow-2xl flex flex-col items-center justify-center p-8 text-center transform transition-all duration-1000 group-hover:rotate-[-4deg] group-hover:scale-110 rounded-tl-[48px]">
                    <div className="text-2xl lg:text-4xl font-black text-brand-900 tracking-[0.25em] font-ui">ZOHO</div>
                </div>
              </div>
            </div>

            <div className="reveal group">
              <div className="relative bg-intel-green rounded-[48px] overflow-hidden shadow-xl transition-all duration-1000 transform-gpu hover:scale-[1.02] flex flex-col items-stretch min-h-[400px] lg:min-h-[480px]">
                <div className="p-10 lg:p-14 flex-1 flex flex-col justify-center relative z-10">
                    <h3 className="text-3xl lg:text-4xl font-medium leading-[1.1] text-white mb-6 font-heading">
                      Engineered for <span className="font-bold underline decoration-white/10 underline-offset-[8px]">financial resilience.</span>
                    </h3>
                    <p className="text-base lg:text-xl font-light text-white/80 mb-10 leading-relaxed">Automated revenue ops that serve as the backbone of global trading.</p>
                    <button className="bg-white text-intel-green px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg hover:-translate-y-1 self-start">
                      FINANCE STACK
                    </button>
                </div>
                <div className="absolute right-0 bottom-0 w-32 h-32 lg:w-48 lg:h-48 bg-white/10 backdrop-blur-3xl shadow-2xl flex flex-col items-center justify-center p-8 text-center transform transition-all duration-1000 group-hover:rotate-[4deg] group-hover:scale-110 border-l border-t border-white/20 rounded-tl-[48px]">
                    <BookIcon className="w-10 h-10 lg:w-16 lg:h-16 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ENTERPRISE SPOTLIGHT - Fit Section */}
      <section className="bg-brand-50 fit-section relative overflow-hidden reveal py-12 lg:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full fit-content">
          <div className="flex flex-col lg:grid lg:grid-cols-12 items-center gap-12 lg:gap-24">
            <div className="lg:col-span-7 flex flex-col">
              <div className="relative flex-grow min-h-[300px] lg:max-h-[450px]">
                <div className="bg-white rounded-[40px] overflow-hidden relative shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border-8 border-white h-full">
                   <div className="absolute inset-0 p-10 flex items-end">
                      <div className="grid grid-cols-12 gap-4 w-full h-[60%] items-end">
                         <div className="col-span-2 h-[45%] bg-slate-100 rounded-t-xl hover:h-[50%] transition-all"></div>
                         <div className="col-span-3 h-[75%] bg-brand-500 rounded-t-xl shadow-xl flex items-center justify-center hover:h-[80%] transition-all"><Monitor className="text-white/20 w-8 h-8"/></div>
                         <div className="col-span-2 h-[60%] bg-intel-yellow rounded-t-xl hover:h-[65%] transition-all"></div>
                         <div className="col-span-3 h-[90%] bg-intel-red rounded-t-xl shadow-xl hover:h-[95%] transition-all"></div>
                         <div className="col-span-2 h-[70%] bg-intel-green rounded-t-xl hover:h-[75%] transition-all"></div>
                      </div>
                   </div>
                </div>
                <div className="absolute -bottom-10 right-10 w-36 h-36 lg:w-48 lg:h-48 rounded-[48px] border-[12px] border-white shadow-3xl overflow-hidden bg-white transform rotate-6 hover:rotate-0 transition-transform duration-700">
                   <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" alt="Executive" />
                </div>
              </div>
              <div className="max-w-xl stagger mt-10">
                <blockquote className="text-[28px] lg:text-[38px] font-heading leading-[1.1] text-brand-900 mb-6 font-medium tracking-tight">
                  "With our complete business under control, our productivity is up by <span className="text-brand-500 font-bold">80%</span>."
                </blockquote>
                <div className="pl-6 border-l-4 border-brand-500">
                  <h4 className="text-xl font-bold text-brand-900 font-ui">Thomas John</h4>
                  <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mt-1">MD, Agappe Diagnostics</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center stagger py-8">
              <div className="mb-10 flex items-center gap-6">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-[32px] bg-white border border-slate-100 shadow-2xl flex items-center justify-center p-4 transform hover:scale-110 transition-transform">
                   <img src="assets/brand/logo.png" className="w-full h-full object-contain" alt="SustyDigi Logo" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-2">SustyDigi™ for</span>
                  <span className="text-4xl lg:text-5xl font-bold text-brand-900 tracking-tight">Enterprise</span>
                </div>
              </div>
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed mb-12 font-light">Experience high-fidelity digital infrastructure designed for large-scale resilience.</p>
              <Button to="/contact" className="px-12 py-6 rounded-[24px] shadow-2xl hover:-translate-y-2 uppercase tracking-widest text-[11px] self-start">EXPLORE PLATFORM</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GEMINI 3 FLASH SECTION - Fit Section */}
      <section className="bg-white fit-section relative reveal overflow-hidden py-12 lg:py-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-500/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full fit-content">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
            <div className="flex-1 max-w-2xl text-left stagger">
              <h2 className="text-[42px] md:text-[64px] lg:text-[88px] font-sans font-medium text-brand-900 leading-[0.95] mb-8 tracking-tighter">
                Gemini 3 Flash: <br/> Accelerate <br/> Intelligence.
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed mb-10 font-light max-w-xl">
                The latest model with frontier intelligence built for speed. AI orchestrated directly within your core systems.
              </p>
              <button className="bg-brand-900 hover:bg-brand-800 text-white px-12 py-5 rounded-full font-bold text-[11px] tracking-[0.2em] transition-all hover:shadow-2xl hover:-translate-y-1 uppercase self-start">
                Explore Gemini 3
              </button>
            </div>
            
            <div className="flex-1 w-full max-w-xl relative group h-[350px] lg:h-[500px] flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 bg-brand-500/5 rounded-full blur-[100px] scale-0 group-hover:scale-100 transition-transform duration-1000"></div>
                <svg className="w-full h-full text-brand-500 animate-pulse-soft relative z-10 opacity-70" viewBox="0 0 200 200" fill="currentColor">
                  <defs>
                    <pattern id="stipple-pattern" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1" fill="currentColor" />
                    </pattern>
                  </defs>
                  <path 
                    className="transition-all duration-1000 group-hover:scale-[1.05] drop-shadow-2xl w-full h-full"
                    d="M130 15 L35 115 H90 L65 185 L165 85 H110 L130 15Z" 
                    fill="url(#stipple-pattern)" 
                  />
                </svg>
                <div className="absolute bottom-8 right-8 group-hover:scale-110 transition-transform duration-700 z-20">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white shadow-3xl flex items-center justify-center text-slate-400 hover:text-brand-500 cursor-pointer border-4 border-slate-50">
                    <Play className="w-8 h-8 fill-current translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOUNDER'S VISION - Fit Section */}
      <section className="bg-brand-900 fit-section relative reveal overflow-hidden text-white py-12 lg:py-0">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
           <svg className="absolute right-0 bottom-0 h-full w-auto opacity-[0.05] text-white transform translate-x-1/4 translate-y-1/4 scale-150" viewBox="0 0 400 600" fill="none">
              <path 
                className="path-draw"
                d="M100 600V150L150 100H350V600" 
                stroke="currentColor" strokeWidth="2"
              />
              <path d="M150 100V600M200 100V600M250 100V600M300 100V600" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8,8" />
           </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full fit-content">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            <div className="shrink-0 w-full lg:w-1/2 animate-fade-in-up">
              <div className="relative group h-full min-h-[350px] lg:max-h-[550px] w-full">
                <div className="absolute -inset-6 bg-white/5 rounded-[48px] -rotate-2 transition-transform duration-1000"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                  className="relative z-10 w-full h-full rounded-[40px] grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-[1.01] opacity-90 object-cover"
                  alt="Founder"
                />
              </div>
            </div>
            <div className="flex-1 max-w-3xl text-left stagger flex flex-col justify-center">
              <blockquote className="text-[32px] md:text-[52px] lg:text-[68px] font-bold text-white leading-[0.95] mb-10 font-sans tracking-tighter">
                "We are a tech company with a very <span className="italic text-brand-300 font-black">old-fashioned</span> approach to building."
              </blockquote>
              <div className="pl-6 border-l-8 border-brand-500 py-2">
                <cite className="not-italic text-2xl lg:text-3xl font-bold text-white block mb-2 font-ui tracking-tight">Sridhar Vembu</cite>
                <p className="text-[12px] text-white/40 font-black uppercase tracking-[0.4em]">Co-founder, Zoho Corp.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
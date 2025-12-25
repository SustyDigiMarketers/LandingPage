import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, ShieldCheck, ChevronRight, Layers, Activity, 
  Sparkles, Link2 as LinkIcon, 
  Network, Activity as PulseIcon, Book as BookIcon, Mail as MailIcon, 
  Headphones as DeskIcon, Smartphone,
  UserCheck, Headphones, Monitor, Quote as QuoteIcon,
  Play
} from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const FEATURED_APPS = [
  { name: "CRM", desc: "Comprehensive CRM platform for customer-facing teams.", color: "google-blue" },
  { name: "Mail", desc: "Secure email service for teams of all sizes.", color: "google-red" },
  { name: "Books", desc: "Powerful accounting platform for growing businesses.", color: "google-green" },
  { name: "People", desc: "Organize, automate, and simplify your HR processes.", color: "google-yellow" },
  { name: "Desk", desc: "Helpdesk software to deliver great customer support.", color: "google-blue" },
];

const Home: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="flex flex-col bg-white overflow-x-hidden">
      {/* ADVANCED HERO SECTION */}
      <div className="bg-white pt-12 lg:pt-24 pb-16 relative overflow-hidden animate-fade-in">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="hero-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#1a73e8" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-7 flex flex-col pt-4 lg:pt-0">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-brand-100 shadow-sm animate-fade-in-up self-start">
                <Sparkles className="w-3.5 h-3.5" /> Unified Intelligence Architecture
              </div>
              <h1 className="text-[44px] md:text-[68px] lg:text-[84px] font-medium text-[#202124] leading-[0.95] mb-6 tracking-tighter font-heading animate-fade-in-up">
                Your life's work, <br />
                <span className="relative inline-block text-google-blue">
                  powered
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-google-red opacity-30 animate-[scaleX_1.5s_ease-out]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span> by ours.
              </h1>
              <div className="w-32 h-1.5 bg-google-red mb-10 rounded-full transform origin-left animate-[scaleX_1.2s_ease-out]"></div>
              <p className="text-xl md:text-2xl text-[#5f6368] leading-relaxed mb-12 max-w-2xl font-light animate-fade-in-up [animation-delay:200ms]">
                Transform your operations with a bespoke <span className="text-[#202124] font-medium border-b-2 border-slate-100 hover:border-google-blue transition-all cursor-default">high-fidelity software suite</span> designed for global scale and local impact.
              </p>
              <div className="flex flex-wrap gap-6 animate-fade-in-up [animation-delay:400ms] mb-16">
                <Link to="/contact">
                  <button className="group relative overflow-hidden bg-google-red text-white px-12 py-5 rounded-[20px] font-bold text-sm tracking-widest flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_-10px_rgba(234,67,53,0.4)] font-ui">
                    <span className="relative z-10 uppercase">Get Started Free</span>
                    <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  </button>
                </Link>
                <Link to="/products">
                  <button className="group bg-white border border-slate-200 text-slate-700 px-12 py-5 rounded-[20px] font-bold text-sm tracking-widest flex items-center gap-3 transition-all hover:bg-slate-50 hover:shadow-xl font-ui">
                    <Layers className="w-5 h-5 text-google-blue transition-transform group-hover:rotate-12" />
                    EXPLORE STACK
                  </button>
                </Link>
              </div>
              <div className="relative group perspective-2000 hidden md:block" style={{ transform: `rotateY(${mousePos.x * 0.2}deg) rotateX(${-mousePos.y * 0.2}deg)` }}>
                <div className="relative z-10 w-full overflow-hidden rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-white bg-slate-50 aspect-[2/1] transition-transform duration-700 group-hover:scale-[1.02]">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" alt="Digital Architecture" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute top-12 left-12 p-6 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl animate-blob">
                    <PulseIcon className="w-8 h-8 text-google-green" />
                  </div>
                  <div className="absolute bottom-12 right-12 p-6 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl animate-blob [animation-delay:2s]">
                    <ShieldCheck className="w-8 h-8 text-google-blue" />
                  </div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-br from-google-blue/10 to-transparent blur-3xl rounded-[60px] -z-10 opacity-60"></div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-white border border-[#f1f3f4] rounded-[48px] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.1)] overflow-hidden transition-all duration-1000 transform-gpu hover:shadow-[0_80px_200px_-40px_rgba(0,0,0,0.12)] group/card" style={{ transform: `rotateY(${-mousePos.x * 0.15}deg) rotateX(${mousePos.y * 0.15}deg)` }}>
                <div className="p-10 lg:p-14">
                  <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mb-12 font-ui flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-google-blue rounded-full animate-ping"></div>
                    Integrated Core Apps
                  </h3>
                  <div className="space-y-4">
                    {FEATURED_APPS.map((app, idx) => (
                      <Link key={idx} to="/products" className="flex items-center gap-8 group p-5 rounded-3xl hover:bg-slate-50 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: `${600 + (idx * 100)}ms` }}>
                        <div className="shrink-0 transition-all duration-500 group-hover:scale-115 group-hover:rotate-6">
                          <div className={`w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center overflow-hidden transition-all group-hover:shadow-xl group-hover:border-transparent group-hover:bg-gradient-to-br from-white to-slate-50`}>
                            <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(app.name)}&background=f8f9fa&color=1a73e8&size=128&bold=true`} alt={app.name} className="w-10 h-10 object-contain grayscale-[0.5] group-hover:grayscale-0 transition-all" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1.5">
                            <h4 className="text-[18px] font-bold text-[#202124] group-hover:text-google-blue transition-colors font-ui leading-none">{app.name}</h4>
                            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 shadow-sm">
                              <ChevronRight className="w-4 h-4 text-google-blue" />
                            </div>
                          </div>
                          <p className="text-[13px] text-[#5f6368] leading-tight opacity-70 group-hover:opacity-100 transition-opacity line-clamp-1">{app.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <Link to="/products" className="relative block py-8 bg-slate-950 text-center text-white text-[11px] font-black tracking-[0.3em] uppercase overflow-hidden group/cta">
                  <span className="relative z-10 flex items-center justify-center gap-3">EXPLORE FULL ARCHITECTURE <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-2" /></span>
                  <div className="absolute inset-0 bg-google-blue translate-y-full group-hover/cta:translate-y-0 transition-transform duration-500"></div>
                </Link>
              </div>
              <div className="mt-12 animate-fade-in-up [animation-delay:1000ms]">
                <div className="p-8 bg-brand-50/50 backdrop-blur-md rounded-[32px] border border-brand-100/50 flex items-center gap-6 group hover:bg-white hover:shadow-2xl transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-google-green group-hover:scale-110 transition-transform">
                    <Activity className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#202124] font-ui leading-none mb-1">99.9%</div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Architectural Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-slate-50 py-32 md:py-48 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="one-by-one-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                   <circle cx="50" cy="50" r="1.5" fill="#202124" />
                   <path d="M0 50h100M50 0v100" stroke="#202124" strokeWidth="0.5" strokeDasharray="5 5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#one-by-one-grid)" />
           </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24 reveal">
             <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-slate-900/5 text-slate-500 font-bold text-[10px] uppercase tracking-[0.5em] mb-10 font-ui border border-slate-900/5">
                <Network className="w-4 h-4" /> Strategic Alliance Ecosystem
             </div>
             <h2 className="text-5xl md:text-7xl font-medium text-[#202124] tracking-tighter font-heading leading-tight mb-8">
               Unified Technology <span className="text-google-blue">Pillars</span>
             </h2>
          </div>
          <div className="flex flex-col gap-24 lg:gap-32 perspective-2000">
            <div className="reveal [transition-delay:200ms] w-full max-w-6xl mx-auto group">
              <div className="relative bg-[#ffcc00] rounded-[60px] lg:rounded-[80px] overflow-hidden shadow-2xl transition-all duration-1000 transform-gpu hover:shadow-[0_80px_160px_-40px_rgba(255,204,0,0.5)] flex flex-col lg:flex-row min-h-[600px]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <div className="p-12 md:p-20 lg:p-24 flex-1 flex flex-col justify-center relative z-10">
                  <div className="max-w-xl">
                    <h3 className="text-3xl lg:text-5xl font-medium leading-tight text-[#202124] mb-12 font-heading">
                      The operating system for <span className="font-bold underline decoration-black/10 underline-offset-8">modern enterprise.</span>
                    </h3>
                    <p className="text-xl lg:text-2xl font-light text-[#202124]/70 mb-14 leading-relaxed">SustyDigi Marketers leverages the full power of the Zoho stack to orchestrate complex global operations with precision.</p>
                    <div className="grid grid-cols-4 gap-4 md:gap-8 mb-16">
                      {[{ icon: <LinkIcon className="w-8 h-8" />, label: 'CRM', color: 'group-hover:text-google-red' }, { icon: <BookIcon className="w-8 h-8" />, label: 'Books', color: 'group-hover:text-google-green' }, { icon: <MailIcon className="w-8 h-8" />, label: 'Mail', color: 'group-hover:text-google-blue' }, { icon: <DeskIcon className="w-8 h-8" />, label: 'Desk', color: 'group-hover:text-google-yellow' }].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-4 group/icon cursor-pointer">
                           <div className={`w-16 h-16 md:w-20 md:h-20 bg-white/40 backdrop-blur-md rounded-[28px] flex items-center justify-center text-[#202124] transition-all duration-500 border border-white/20 shadow-sm group-hover/icon:bg-white group-hover/icon:shadow-xl group-hover/icon:-translate-y-2 group-hover/icon:rotate-12 ${item.color}`}>
                              {item.icon}
                           </div>
                           <span className="text-[10px] font-black uppercase tracking-widest text-[#202124] opacity-50 font-ui group-hover/icon:opacity-100 transition-all">{item.label}</span>
                        </div>
                      ))}
                    </div>
                    <button className="relative overflow-hidden group/btn bg-[#ea4335] text-white px-14 py-6 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl hover:shadow-[0_30px_60px_-10px_rgba(234,67,53,0.5)] hover:-translate-y-1 active:scale-95">
                      <span className="relative z-10 flex items-center gap-3">EXPLORE ARCHITECTURE <ChevronRight className="w-4 h-4" /></span>
                      <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                    </button>
                  </div>
                </div>
                <div className="lg:w-1/3 flex items-center justify-center p-12 lg:pr-24 relative overflow-visible">
                   <div className="w-72 h-72 md:w-80 md:h-80 bg-white/95 backdrop-blur-3xl rounded-[60px] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center p-12 text-center transform transition-all duration-1000 group-hover:rotate-[-4deg] group-hover:scale-110 border border-white/50 relative">
                      <div className="flex gap-3 mb-10">
                        <div className="w-6 h-6 bg-google-red rounded-lg shadow-sm animate-pulse"></div>
                        <div className="w-6 h-6 bg-google-green rounded-lg shadow-sm animate-pulse [animation-delay:0.2s]"></div>
                        <div className="w-6 h-6 bg-google-blue rounded-lg shadow-sm animate-pulse [animation-delay:0.4s]"></div>
                        <div className="w-6 h-6 bg-google-yellow rounded-lg shadow-sm animate-pulse [animation-delay:0.6s]"></div>
                      </div>
                      <div className="text-4xl font-black text-[#202124] tracking-[0.2em] mb-4 font-ui">ZOHO</div>
                      <p className="text-[13px] font-bold text-[#202124]/50 leading-relaxed font-ui italic">Unified Business <br/>Orchestration</p>
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-google-blue/10 rounded-full blur-2xl group-hover:scale-150 transition-all duration-1000"></div>
                   </div>
                </div>
              </div>
            </div>
            <div className="reveal [transition-delay:400ms] w-full max-w-6xl mx-auto group">
              <div className="relative bg-[#00a651] rounded-[60px] lg:rounded-[80px] overflow-hidden shadow-2xl transition-all duration-1000 transform-gpu hover:shadow-[0_80px_160px_-40px_rgba(0,166,81,0.5)] flex flex-col lg:flex-row-reverse min-h-[600px]">
                <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                <div className="p-12 md:p-20 lg:p-24 flex-1 flex flex-col justify-center relative z-10 text-white">
                  <div className="max-w-xl">
                    <h3 className="text-3xl lg:text-5xl font-medium leading-tight mb-12 font-heading">Comprehensive IT governance for <span className="italic border-b-2 border-white/20">global infrastructure.</span></h3>
                    <p className="text-xl lg:text-2xl font-light text-white/80 mb-14 leading-relaxed">Secure, manage, and monitor your entire digital landscape with enterprise-grade ITOM and ITSM frameworks.</p>
                    <div className="grid grid-cols-4 gap-4 md:gap-8 mb-16">
                      {[{ icon: <UserCheck className="w-8 h-8" />, label: 'Identity' }, { icon: <Headphones className="w-8 h-8" />, label: 'Service' }, { icon: <Smartphone className="w-8 h-8" />, label: 'Security' }, { icon: <Monitor className="w-8 h-8" />, label: 'Ops' }].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-4 group/item cursor-pointer">
                           <div className={`w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-xl rounded-[28px] flex items-center justify-center transition-all duration-500 border border-white/10 group-hover/item:bg-white group-hover/item:text-[#00a651] group-hover/item:shadow-2xl group-hover/item:-translate-y-2 group-hover/item:-rotate-12`}>
                              {item.icon}
                           </div>
                           <span className="text-[10px] font-black uppercase tracking-widest leading-tight opacity-40 group-hover/item:opacity-100 transition-all font-ui">{item.label}</span>
                        </div>
                      ))}
                    </div>
                    <button className="relative overflow-hidden group/btn bg-google-red text-white px-14 py-6 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl hover:shadow-[0_30px_60px_-10px_rgba(234,67,53,0.5)] hover:-translate-y-1 active:scale-95">
                      <span className="relative z-10 flex items-center gap-3">INFRASTRUCTURE REVIEW <ChevronRight className="w-4 h-4" /></span>
                      <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                    </button>
                  </div>
                </div>
                <div className="lg:w-1/3 flex items-center justify-center p-12 lg:pl-24 relative overflow-visible">
                   <div className="w-72 h-72 md:w-80 md:h-80 bg-white/95 backdrop-blur-3xl rounded-[60px] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.2)] flex flex-col items-center justify-center p-12 text-center transform transition-all duration-1000 group-hover:rotate-[4deg] group-hover:scale-110 border border-white/50 text-[#202124]">
                      <div className="relative mb-10 group/logo">
                        <div className="absolute -inset-8 bg-[#00a651]/5 rounded-full blur-2xl group-hover:bg-[#00a651]/15 transition-all duration-700"></div>
                        <Network className="w-20 h-20 text-[#00a651] relative z-10 transition-transform group-hover:scale-110" />
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-google-red rounded-full border-4 border-white shadow-lg animate-bounce"></div>
                      </div>
                      <div className="text-3xl font-black tracking-tighter mb-4 font-ui">ManageEngine</div>
                      <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] font-ui">Secure IT Lifecycle</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENTERPRISE SPOTLIGHT SECTION - BASED ON IMAGE */}
      <section className="bg-white py-24 md:py-32 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left Column: Quote & Illustration */}
            <div className="flex-1 w-full">
              <div className="relative mb-12">
                {/* Illustration Placeholder */}
                <div className="bg-[#e8f0fe] rounded-[24px] overflow-hidden aspect-[1.4/1] relative">
                   <div className="absolute inset-0 p-12">
                      <div className="grid grid-cols-12 gap-4 h-full items-end">
                         <div className="col-span-2 h-[40%] bg-slate-200 rounded-t-lg"></div>
                         <div className="col-span-3 h-[70%] bg-[#4285f4] rounded-t-lg flex items-center justify-center">
                            <Monitor className="text-white opacity-20 w-8 h-8" />
                         </div>
                         <div className="col-span-2 h-[55%] bg-[#ffcc00] rounded-t-lg"></div>
                         <div className="col-span-3 h-[85%] bg-[#ea4335] rounded-t-lg"></div>
                         <div className="col-span-2 h-[65%] bg-[#34a853] rounded-t-lg"></div>
                      </div>
                   </div>
                   <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-900"></div>
                </div>
                
                {/* Profile Image Overlay */}
                <div className="absolute -bottom-10 right-10 md:right-20 w-24 h-24 md:w-32 md:h-32 rounded-full border-[8px] border-white shadow-2xl overflow-hidden bg-white">
                   <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" 
                    alt="Thomas John" 
                    className="w-full h-full object-cover grayscale"
                   />
                </div>
                <div className="absolute -bottom-6 right-28 md:right-44">
                   <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white shadow-lg">
                      <QuoteIcon className="w-6 h-6 fill-white" />
                   </div>
                </div>
              </div>

              {/* Quote Text */}
              <div className="max-w-xl">
                <blockquote className="text-[28px] md:text-[32px] font-heading leading-tight text-[#202124] mb-8 font-medium">
                  "With our complete business under control, our productivity is up by <span className="text-google-blue font-bold">80%</span> in the last year that we have been using SustyDigi."
                </blockquote>
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-[#202124]">Thomas John</h4>
                  <p className="text-[#5f6368] text-sm font-medium">Managing Director, Agappe Diagnostics</p>
                </div>
                <Link to="/why-us" className="inline-flex items-center gap-2 text-google-blue font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all group">
                   READ THE STORY <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Column: Platform Info */}
            <div className="flex-1 w-full lg:max-w-md">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-md flex items-center justify-center p-3">
                   <img src="assets/brand/logo.png" alt="SD Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-black text-[#5f6368] uppercase tracking-widest">SustyDigi™ for</span>
                  <span className="text-3xl font-bold text-[#202124] tracking-tight">Enterprise</span>
                </div>
              </div>
              <p className="text-lg md:text-xl text-[#3c4043] leading-relaxed mb-10 font-light">
                Experience the breadth and depth of the SustyDigi ecosystem, with the professional services, infrastructure, support, and security that a large business needs. Streamline complex business processes, build strong relationships with your customers, and drive growth at scale.
              </p>
              <Link to="/contact">
                <button className="bg-google-blue hover:bg-[#185abc] text-white px-10 py-5 rounded-lg font-bold text-xs tracking-widest flex items-center gap-3 transition-all hover:shadow-[0_20px_40px_-10px_rgba(26,115,232,0.4)] group">
                  LEARN MORE <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEW FLASH SECTION - EXACTLY LIKE IMAGE */}
      <section className="bg-[#f8f9fa] py-24 md:py-32 reveal overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-8">
            {/* Left Content */}
            <div className="flex-1 max-w-xl text-left">
              <h2 className="text-4xl md:text-7xl font-sans font-medium text-[#202124] leading-tight mb-8 tracking-tight">
                Gemini 3 Flash: Bring <br/> any idea to life faster
              </h2>
              <p className="text-lg md:text-xl text-[#5f6368] leading-relaxed mb-12 font-light">
                Our latest model with frontier intelligence built for speed can help you quickly learn, build and plan anything.
              </p>
              <button className="bg-[#1a73e8] hover:bg-[#185abc] text-white px-10 py-4 rounded-full font-bold text-sm tracking-tight transition-all hover:shadow-xl active:scale-95">
                Check it out
              </button>
            </div>
            
            {/* Right Graphic */}
            <div className="flex-1 w-full max-w-md relative">
              <div className="relative aspect-square flex items-center justify-center">
                {/* Stippled Lightning Bolt SVG */}
                <svg className="w-full h-full text-[#4285f4] opacity-[0.85]" viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="stipple-pattern" x="0" y="0" width="3" height="3" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="0.6" fill="currentColor" />
                    </pattern>
                  </defs>
                  {/* Lightning Bolt Path */}
                  <path 
                    d="M130 15 L35 115 H90 L65 185 L165 85 H110 L130 15Z" 
                    fill="url(#stipple-pattern)" 
                  />
                </svg>
                
                {/* Small Play Button in Corner */}
                <div className="absolute bottom-4 right-4 md:bottom-10 md:right-0">
                  <div className="w-10 h-10 rounded-full bg-[#5f6368]/20 flex items-center justify-center text-[#5f6368] hover:bg-[#5f6368]/30 transition-colors cursor-pointer">
                    <Play className="w-5 h-5 fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="bg-white py-24 md:py-32 relative reveal overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[48px] md:text-[84px] font-medium text-[#202124] mb-16 font-heading tracking-tight leading-none">Global Presence</h2>
          <div className="max-w-6xl mx-auto relative px-4 pt-12 group">
             <div className="relative overflow-hidden rounded-[60px] shadow-[0_50px_120px_-20px_rgba(0,0,0,0.15)] border border-slate-100">
                <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" alt="Global Network" className="w-full h-auto transition-transform duration-[4s] ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
             </div>
          </div>
        </div>
      </section>

      {/* FOUNDER'S VISION SECTION - BASED ON IMAGE */}
      <section className="bg-white py-24 md:py-48 relative reveal overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
           {/* Building Sketch Illustration - Simplified placeholder using SVG */}
           <svg className="absolute right-0 bottom-0 h-full w-auto opacity-[0.1] text-slate-400" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 600V150L150 100H350V600" stroke="currentColor" strokeWidth="1" />
              <path d="M150 100V600M200 100V600M250 100V600M300 100V600" stroke="currentColor" strokeWidth="0.5" />
              <path d="M100 150H350M100 200H350M100 250H350M100 300H350M100 350H350M100 400H350M100 450H350M100 500H350M100 550H350" stroke="currentColor" strokeWidth="0.5" />
           </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
            {/* Left: Founder Portrait */}
            <div className="shrink-0 w-full max-w-sm lg:max-w-md animate-fade-in-up">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" 
                alt="Sridhar Vembu" 
                className="w-full h-auto drop-shadow-2xl grayscale transition-all duration-700 hover:grayscale-0"
              />
            </div>
            
            {/* Right: Quote and Attribution */}
            <div className="flex-1 max-w-2xl text-left animate-fade-in-up [animation-delay:200ms]">
              <blockquote className="text-[32px] md:text-[54px] font-bold text-[#202124] leading-tight mb-12 font-sans tracking-tight">
                "We are a state of the art tech company with a very old-fashioned approach to company building."
              </blockquote>
              <div className="space-y-2">
                <cite className="not-italic text-2xl font-bold text-[#202124] block">Sridhar Vembu</cite>
                <p className="text-lg text-[#5f6368] font-medium uppercase tracking-widest text-[14px]">Co-founder and Chief Scientist, Zoho Corp.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
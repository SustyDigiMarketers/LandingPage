import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Globe, ArrowRight, Zap, Shield, Cpu, Code, Activity, Layers, ChevronRight } from 'lucide-react';

const CharacterAnimation = ({ text, className }: { text: string, className?: string }) => {
  return (
    <span className={className}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="inline-block whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const smoothYProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const meshOpacity = useTransform(smoothYProgress, [0, 0.4], [0.8, 0.1]);

  const brandBlocks = [
    {
      title: "Transform the way you work, with a unique and powerful suite of software that runs your entire business.",
      subtitle: "SustyOS",
      color: "bg-google-yellow/90",
      textColor: "text-google-heading",
      logoLabel: "SustyOS",
      logoColor: "text-google-blue",
      features: ["CRM", "Books", "Mail", "Desk"],
      cta: "INITIATE OS",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Comprehensive IT management software for all your business needs.",
      subtitle: "ManageEngine by Susty",
      color: "bg-google-green/90",
      textColor: "text-white",
      logoLabel: "ManageEngine",
      logoColor: "text-google-green",
      features: ["Identity", "Service", "Endpoint", "Operations"],
      cta: "AUDIT STACK",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "A comprehensive platform to help you build engaging online courses, nurture a learning community.",
      subtitle: "TrainerCentral",
      color: "bg-google-blue/90",
      textColor: "text-white",
      logoLabel: "TrainerCentral",
      logoColor: "text-white",
      cta: "DEPLOY LMS",
      icon: <Cpu className="w-8 h-8" />
    }
  ];

  return (
    <div className="bg-white selection:bg-google-blue selection:text-white overflow-hidden">
      {/* Cinematic Hero */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 bg-white">
        <div className="absolute inset-0 dot-grid opacity-[0.2]"></div>
        <motion.div style={{ opacity: meshOpacity }} className="absolute inset-0 mesh-gradient"></motion.div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
          <div className="flex flex-col items-center text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-card border border-google-blue/10 mb-12 shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-google-green animate-pulse"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-google-blue">System_Status: Optimal</span>
            </motion.div>

            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight text-google-heading mb-12 leading-[0.85]">
              <CharacterAnimation text="Business software" /><br /> 
              <CharacterAnimation text="is our " /><span className="italic font-serif relative inline-block">
                <CharacterAnimation text="craft" />
                <motion.svg 
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="absolute -bottom-2 left-0 w-full h-4 opacity-40" 
                  viewBox="0 0 300 12" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 10.5C50 4.5 150 -2.5 299 10.5" stroke="#1A73E8" strokeWidth="4" strokeLinecap="round"/>
                </motion.svg>
              </span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-medium leading-relaxed"
            >
              Architecture engineered for the next era of enterprise. We transform fragmented data into a cohesive digital legacy.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-wrap justify-center gap-8"
            >
              <Link to="/contact" className="px-12 py-6 bg-google-blue text-white rounded-full font-black text-xs uppercase tracking-[0.4em] shadow-google-blue transition-all active:scale-95 interactive-element no-hover-global inline-block">
                Initiate Project
              </Link>
              <Link to="/products" className="px-12 py-6 glass-card text-google-heading rounded-full font-black text-xs uppercase tracking-[0.4em] transition-all hover:bg-google-bg interactive-element no-hover-global inline-block">
                Explore Stack
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-32 relative max-w-6xl mx-auto"
          >
            <div className="relative z-10 glass-card rounded-t-[4rem] p-1 shadow-2xl overflow-hidden group">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 2 }}
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600" 
                alt="Architecture" 
                className="w-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2s] aspect-[21/9] object-cover rounded-t-[3.8rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
            </div>
            
            <div className="absolute -top-16 -left-12 p-8 glass-card rounded-[3rem] shadow-xl hidden lg:block animate-float">
               <Activity size={32} className="text-google-blue mb-4" />
               <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">REAL_TIME_NODE</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Futuristic Brands Section - Alternating Layout Applied */}
      <section className="py-48 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center mb-40">
            <h2 className="text-[11px] font-black uppercase tracking-[1em] text-google-blue mb-8">Ecosystem_Nodes</h2>
            <h3 className="text-5xl md:text-7xl font-black text-google-heading text-center tracking-tighter">Powered by <br />Intelligence.</h3>
          </div>
          
          <div className="grid grid-cols-1 gap-24">
            {brandBlocks.map((block, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className={`group flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch rounded-[4rem] overflow-hidden border border-gray-100 bg-google-bg/30 hover:bg-white transition-all duration-700 shadow-sm hover:shadow-2xl`}
                >
                  <div className={`flex-1 ${block.color} ${block.textColor} p-12 sm:p-24 flex flex-col justify-center relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:opacity-20 transition-opacity duration-1000 rotate-12">
                      {block.icon}
                    </div>
                    <div className="relative z-10">
                      <div className="text-[11px] font-black uppercase tracking-[0.5em] mb-8 opacity-60">{block.subtitle}</div>
                      <h3 className="text-3xl md:text-4xl font-black mb-12 max-w-xl tracking-tight leading-tight">
                        {block.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 mb-16">
                        {block.features?.map(f => (
                          <div key={f} className="px-6 py-2 glass-card rounded-full text-[10px] font-black uppercase tracking-widest group-hover:bg-white transition-all interactive-element">
                            {f}
                          </div>
                        ))}
                      </div>
                      <button className="px-10 py-5 bg-white text-google-heading rounded-full text-[11px] font-black uppercase tracking-[0.4em] shadow-xl transition-all active:scale-95 interactive-element no-hover-global">
                        {block.cta}
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-[450px] bg-white p-20 flex flex-col items-center justify-center text-center">
                     <div className={`text-5xl font-black ${block.logoColor} mb-8 tracking-tighter group-hover:scale-110 transition-transform duration-700 italic`}>
                        {block.logoLabel}
                     </div>
                     <div className="h-px w-20 bg-google-bg mb-8"></div>
                     <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest leading-relaxed">System_Ref_44.0<br />Architecture_Module</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-48 bg-[#0D47A1] relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-[0.05]"></div>
        <div className="absolute top-0 left-0 w-full h-full shimmer opacity-[0.02] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="text-6xl md:text-8xl font-black text-white mb-16 tracking-tighter italic">
              Legacy <br /> Starts Now.
            </h2>
            <Link to="/contact" className="group inline-flex items-center gap-8 bg-white text-google-heading px-16 py-8 rounded-full font-black text-sm uppercase tracking-[0.5em] shadow-2xl transition-all active:scale-95 interactive-element no-hover-global inline-block">
               INITIATE DEPLOYMENT <ChevronRight size={24} className="group-hover:translate-x-3 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
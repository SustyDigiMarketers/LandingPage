import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { SERVICES_DATA } from '../constants';
import { ChevronRight, Users, Mail, Book, UserCheck, Layout as ProjectIcon, ArrowRight, Box, Cpu, Zap, Globe, Shield, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } 
  }
};

const Services = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

  const featuredApps = [
    { name: 'CRM', desc: 'Comprehensive CRM platform for customer-facing teams.', icon: <Users className="text-google-blue" /> },
    { name: 'Mail', desc: 'Secure email service for teams of all sizes.', icon: <Mail className="text-google-red" /> },
    { name: 'Books', desc: 'Powerful accounting software for growing businesses.', icon: <Book className="text-google-green" /> },
    { name: 'People', desc: 'Organize, automate, and simplify your HR processes.', icon: <UserCheck className="text-google-yellow" /> },
    { name: 'Projects', desc: 'Manage, track, and collaborate on projects with teams.', icon: <ProjectIcon className="text-google-blue" /> },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Futuristic Hero */}
      <section className="relative pt-32 lg:pt-48 pb-0 overflow-hidden min-h-[90vh]">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div style={{ y: y1 }} className="absolute top-[20%] left-[10%] w-64 h-64 bg-google-blue/5 rounded-full blur-3xl" />
          <motion.div style={{ y: y2 }} className="absolute top-[40%] right-[15%] w-96 h-96 bg-google-red/5 rounded-full blur-3xl" />
          <div className="absolute top-0 left-0 w-full h-full dot-grid opacity-[0.1]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-7 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-google-blue/10 border border-google-blue/20 text-google-blue text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                  <Zap size={14} className="animate-pulse" /> Architecture of Efficiency
                </div>
                <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-google-heading leading-[0.9] mb-12">
                  Software that <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-google-blue via-google-red to-google-yellow italic">works for you.</span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-500 leading-relaxed max-w-2xl mb-16 font-medium">
                  We don't just provide applications; we architect an <span className="text-google-heading">intelligent ecosystem</span> where data flows contextually across your entire business graph.
                </p>

                <div className="flex flex-wrap gap-6">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link 
                      to="/contact" 
                      className="bg-google-blue text-white px-12 py-6 rounded-google font-black text-xs uppercase tracking-[0.3em] flex items-center gap-4 shadow-google-blue transition-all"
                    >
                      INITIATE STACK <ChevronRight size={18} />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                <div className="bg-white/70 backdrop-blur-3xl rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden relative z-10">
                  <div className="p-10">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-google-blue mb-10">Featured Suite</h4>
                    <div className="space-y-6">
                      {featuredApps.map((app) => (
                        <motion.div 
                          key={app.name} 
                          whileHover={{ x: 10 }}
                          className="group flex items-start gap-6 p-4 rounded-2xl hover:bg-white transition-all cursor-pointer border border-transparent hover:border-gray-50 shadow-sm"
                        >
                          <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-white transition-colors">
                            {app.icon}
                          </div>
                          <div>
                            <h5 className="font-bold text-google-heading text-lg">{app.name}</h5>
                            <p className="text-sm text-gray-500 font-medium leading-relaxed">{app.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-gray-50 p-8 bg-google-bg/50">
                    <Link to="/products" className="flex items-center justify-between text-[11px] font-black uppercase tracking-[0.4em] text-google-blue group">
                      EXPLORE ALL PRODUCTS <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SUSTY ONE PROMO (Google-Yellow Background) */}
      <section className="bg-google-yellow py-32 lg:py-48 relative overflow-hidden">
        {/* Adjusted accent color to pop on yellow */}
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-white/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="flex-1 space-y-10">
              <div className="w-24 h-24 bg-google-heading/5 rounded-3xl backdrop-blur-2xl flex items-center justify-center border border-google-heading/10 shadow-2xl">
                <Box size={40} className="text-google-heading" />
              </div>
              <div className="space-y-4">
                <p className="text-google-heading font-black text-[11px] uppercase tracking-[0.5em] opacity-60">Hyper-Integrated Stack</p>
                <h2 className="text-6xl lg:text-8xl font-black text-google-heading leading-none tracking-tighter italic">Susty One</h2>
              </div>
              <p className="text-xl text-google-heading/70 leading-relaxed max-w-xl font-medium">
                The ultimate operating system for business. Break down silos, eliminate friction, and empower every team member with a unified data thread.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <Link to="/products" className="bg-google-heading text-white px-12 py-6 rounded-google font-black text-xs uppercase tracking-[0.4em] shadow-lg hover:bg-white hover:text-google-heading transition-all">
                  ACTIVATE SYSTEM
                </Link>
              </motion.div>
            </div>
            {/* Adjusted line color for contrast on yellow */}
            <div className="hidden lg:block w-px h-96 bg-gradient-to-b from-transparent via-google-heading/10 to-transparent"></div>
            <div className="flex-1 space-y-12">
              <div className="w-14 h-14 bg-google-heading/5 rounded-full flex items-center justify-center border border-google-heading/10">
                <Shield size={24} className="text-google-blue" />
              </div>
              <blockquote className="text-3xl lg:text-5xl font-light text-google-heading leading-tight italic">
                "Scaling was a nightmare until Susty One. Now it's a competitive advantage."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Narrative Services Grid */}
      <section className="py-48 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-40">
            <h2 className="text-[11px] font-black uppercase tracking-[0.6em] text-google-blue mb-8">Service Architecture</h2>
            <h3 className="text-5xl lg:text-7xl font-black mb-10 tracking-tighter text-google-heading">Beyond Code. <br /> Built for Scale.</h3>
          </div>

          <div className="space-y-64">
            {SERVICES_DATA.map((service, idx) => (
              <motion.div 
                key={service.id} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={scrollReveal}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-24 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={idx % 2 !== 0 ? 'lg:order-last' : ''}>
                  <div className="w-16 h-16 rounded-3xl bg-google-bg flex items-center justify-center mb-10 border border-gray-100">
                    {service.icon}
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-black mb-8 tracking-tighter text-google-heading">{service.title}</h2>
                  <p className="text-xl text-gray-500 mb-12 leading-relaxed font-medium">
                    {service.description} We engineer for long-term resilience, ensuring your infrastructure adapts as you grow.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div className="p-6 rounded-3xl bg-google-bg/50 border border-gray-100">
                      <h4 className="font-bold text-google-heading mb-2 flex items-center gap-2">
                        <Cpu size={18} className="text-google-blue" /> Intelligence
                      </h4>
                      <p className="text-sm text-gray-500">Neural-mapped logic for decision making.</p>
                    </div>
                    <div className="p-6 rounded-3xl bg-google-bg/50 border border-gray-100">
                      <h4 className="font-bold text-google-heading mb-2 flex items-center gap-2">
                        <Globe size={18} className="text-google-green" /> Resilience
                      </h4>
                      <p className="text-sm text-gray-500">Multi-region redundancy as standard.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-google-bg aspect-video rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl">
                   <img src={`https://images.unsplash.com/photo-${1550751827 + idx}-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200`} className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-1000" alt={service.title} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
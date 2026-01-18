import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { 
  ChevronRight, 
  Globe, 
  Clock, 
  Lock, 
  Building2,
  Fingerprint,
  Monitor,
  HeartHandshake,
  ShieldCheck,
  Cloud,
  Database,
  Smartphone,
  Shield,
  FileLock2,
  Server,
  Zap,
  Activity,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';

const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const } 
  }
};

const Counter = ({ value, duration = 2 }: { value: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const target = parseInt(value.replace(/\D/g, ''));

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = target;
      let timer = setInterval(() => {
        start += Math.ceil(target / 100);
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, (duration * 1000) / 100);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return <span ref={ref}>{count}{value.includes('+') ? '+' : ''}</span>;
};

const Enterprise = () => {
  return (
    <div className="bg-white overflow-x-hidden selection:bg-google-blue selection:text-white">
      {/* 1. Hero */}
      <section className="relative pt-40 pb-0 overflow-hidden text-center bg-white min-h-[90vh] flex flex-col justify-between">
        <div className="max-w-7xl mx-auto px-4 relative z-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="text-google-blue font-black text-[11px] uppercase mb-12 tracking-[0.6em]">Enterprise Intelligence</div>
            <h1 className="text-6xl md:text-9xl font-black text-google-heading leading-[0.85] mb-16 tracking-tighter">
              Bespoke <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-google-blue to-google-red italic">Architectures.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 mb-20 max-w-2xl mx-auto font-medium">Mission-critical systems for high-growth enterprises who demand absolute resilience.</p>
            <Link to="/contact" className="group relative bg-[#0D47A1] text-white px-16 py-8 rounded-google font-black text-xs uppercase tracking-[0.4em] overflow-hidden shadow-2xl flex items-center gap-4 justify-center max-w-xs mx-auto">
               CONTACT SALES <ChevronRight size={20} />
               <div className="absolute inset-0 bg-google-blue translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </Link>
          </motion.div>
        </div>
        <div className="h-96 relative w-full mt-24">
           <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <Building2 size={800} strokeWidth={0.1} />
           </div>
        </div>
      </section>

      {/* 2. Security Hub (Orbital) */}
      <section className="py-64 bg-white relative overflow-hidden flex items-center justify-center min-h-[1100px]">
        <div className="max-w-7xl mx-auto px-4 relative z-20 text-center">
          <motion.div initial="hidden" whileInView="visible" variants={scrollReveal} className="space-y-8 max-w-xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-medium text-google-heading tracking-tight">Security & IT management</h2>
            <p className="text-xs md:text-sm text-gray-500 max-w-xs mx-auto">Streamline enterprise operations with a unified security toolkit.</p>
            <Link to="/contact" className="group inline-flex items-center gap-3 px-10 py-3 border border-google-blue/20 text-google-blue rounded-md text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-google-blue hover:text-white transition-all">
              LEARN MORE <ChevronRight size={16} />
            </Link>
          </motion.div>

          <div className="md:absolute md:inset-0 flex items-center justify-center pointer-events-none mt-20 md:mt-0">
             <OrbitalNode icon={<Cloud />} label="Adaptive SSO" color="bg-indigo-50" iconColor="text-indigo-600" angle={-Math.PI / 2} radius={750} delay={0.1} />
             <OrbitalNode icon={<Monitor />} label="Endpoint Ctrl" color="bg-red-50" iconColor="text-google-red" angle={-Math.PI / 4} radius={800} delay={0.2} />
             <OrbitalNode icon={<Fingerprint />} label="Biometric MFA" color="bg-amber-50" iconColor="text-google-yellow" angle={Math.PI / 16} radius={850} delay={0.3} />
             <OrbitalNode icon={<Lock />} label="Mobile DM" color="bg-blue-50" iconColor="text-google-blue" angle={Math.PI / 2.5} radius={800} delay={0.4} />
             <OrbitalNode icon={<Smartphone />} label="Zero-Pass" color="bg-green-50" iconColor="text-google-green" angle={-Math.PI / 1.1} radius={820} delay={0.6} />
          </div>
        </div>
      </section>

      {/* 3. Value Proposition */}
      <section className="py-48 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-7xl font-black text-google-heading tracking-tighter text-center mb-40">Serious software. <br /> <span className="text-google-blue italic font-serif">Friendly service.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-32">
            <ValueCard icon={<Globe className="text-google-red" />} title="Global presence" desc="Offices and data centers in multiple countries to help you wherever you are based." bg="bg-red-50" />
            <ValueCard icon={<Clock className="text-google-yellow" />} title="99.9% monthly uptime" desc="Built on our own cloud infrastructure with 24/7 monitoring and guaranteed availability." bg="bg-amber-50" />
            <ValueCard icon={<ShieldCheck className="text-google-blue" />} title="Simplified auth" desc="Centralise access with SSO, managing users from Active Directory and LDAP." bg="bg-blue-50" />
            <ValueCard icon={<HeartHandshake className="text-google-green" />} title="Dedicated CRM" desc="Round-the-clock access to highly skilled support professionals under tight SLAs." bg="bg-green-50" />
          </div>
        </div>
      </section>

      {/* 4. Autonomous Backbone (Restored UI) */}
      <section className="py-48 bg-google-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" variants={scrollReveal} className="space-y-12">
            <h2 className="text-6xl font-black text-google-heading leading-tight tracking-tighter">
              Autonomous <br /> <span className="text-google-green">Backbone.</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-xl">
              A unified data fabric that eliminates latency and integration debt. Our core engine operates with predictive intelligence to ensure your business never stops.
            </p>
            <div className="space-y-6">
              {[
                { icon: <Zap className="text-google-blue" />, text: "Real-time ecosystem synchronization" },
                { icon: <Layers className="text-google-red" />, text: "Native multi-tenant architecture" },
                { icon: <Activity className="text-google-green" />, text: "Predictive failure mitigation" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-gray-100 group-hover:shadow-md transition-all">
                    {item.icon}
                  </div>
                  <span className="font-black text-google-heading uppercase tracking-[0.2em] text-[11px]">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-2 rounded-[4rem] shadow-2xl border border-gray-100 overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
              alt="Data Infrastructure" 
              className="w-full h-full object-cover grayscale opacity-40 rounded-[3.5rem]"
            />
          </motion.div>
        </div>
      </section>

      {/* 5. Enterprise-grade security (As per Image) */}
      <section className="bg-google-blue pt-32 pb-0 relative">
        <div className="max-w-4xl mx-auto px-4 text-center text-white mb-20 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium tracking-tight mb-8"
          >
            Enterprise-grade security <br /> at the forefront
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl opacity-80 leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            At Susty, we take data privacy and security seriously at every level of our business, from product development to vendor standards. We also comply with all applicable data protection laws and regulations.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-3 border border-white rounded-md font-bold uppercase text-[12px] tracking-widest hover:bg-white hover:text-google-blue transition-all">
              LEARN MORE <ChevronRight size={16} />
            </Link>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-t-[2rem] shadow-2xl p-12 md:p-20 flex flex-col items-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 mb-24">
              <div className="space-y-6">
                <div className="p-3 bg-red-50 w-fit rounded-lg">
                  <FileLock2 size={40} className="text-google-red" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-google-heading">Data protection and encryption</h3>
                <p className="text-gray-500 leading-relaxed font-medium">
                  Data integrity is important to us—that's why we handle all user data using the latest <span className="text-google-blue cursor-pointer">international security compliance</span> standards, with <span className="text-google-blue cursor-pointer">100% data encryption</span> in transit, using the latest version of TLS.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-3 bg-green-50 w-fit rounded-lg">
                  <Shield size={40} className="text-google-green" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-google-heading">Market-leading privacy standards</h3>
                <p className="text-gray-500 leading-relaxed font-medium">
                  We have a strict <span className="text-google-blue cursor-pointer">privacy policy</span> to protect personal information, and we never put our users at risk by selling or disclosing their information to unauthorized third parties. We comply with GDPR and CCPA worldwide.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-3 bg-amber-50 w-fit rounded-lg">
                  <Server size={40} className="text-google-yellow" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-google-heading">Scalable tech infrastructure</h3>
                <p className="text-gray-500 leading-relaxed font-medium">
                  Susty owns and operates its own <span className="text-google-blue cursor-pointer">data centers</span>—we do not run on a public cloud. Our unified data model and cloud storage allows for shared services like AI, search, analytics, and messaging to scale alongside our users.
                </p>
              </div>
            </div>

            <div className="w-full pt-16 border-t border-gray-100">
              <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:opacity-80 transition-opacity">
                {['bsi', 'ISO 27001', 'ISO 9001', 'SOC 2', 'GDPR', 'HIPAA'].map((logo, i) => (
                  <div key={i} className="text-xs font-black uppercase tracking-[0.3em] flex items-center gap-2">
                    <ShieldCheck size={18} /> {logo}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Stats */}
      <section className="bg-[#0D47A1] py-40 text-white text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16">
            {[ { num: '130M+', label: 'Users Global' }, { num: '29+', label: 'Years Active' }, { num: '150+', label: 'Countries' }, { num: '16', label: 'Data Hubs' }, { num: '18K+', label: 'Engineers' }, { num: '55+', label: 'Applications' }
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="space-y-6">
                 <div className="text-5xl font-black tracking-tighter"><Counter value={stat.num} /></div>
                 <div className="text-[10px] font-black uppercase tracking-[0.5em] text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-80 text-center bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" variants={scrollReveal}>
            <h2 className="text-7xl md:text-9xl font-black text-google-heading mb-16 tracking-tighter leading-[0.8] italic">
              Legacy <br /> <span className="text-google-blue">Begins.</span>
            </h2>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link to="/contact" className="group relative bg-[#0D47A1] text-white px-20 py-10 rounded-google font-black text-sm uppercase tracking-[0.5em] shadow-2xl transition-all flex items-center gap-8 overflow-hidden">
                <span className="relative z-10">INITIATE DEPLOYMENT</span>
                <ChevronRight size={28} className="relative z-10 group-hover:translate-x-3 transition-transform" />
                <div className="absolute inset-0 bg-google-blue translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const OrbitalNode = ({ icon, label, color, iconColor, angle, radius, delay }: any) => {
   const x = Math.cos(angle) * (radius / 2);
   const y = Math.sin(angle) * (radius / 2);
   return (
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, x, y }} transition={{ delay, duration: 1 }} className="absolute flex flex-col items-center gap-4 w-48 text-center">
         <div className={`w-20 h-20 rounded-full ${color} shadow-lg border-2 border-white flex items-center justify-center ${iconColor}`}>
            {React.cloneElement(icon as React.ReactElement<any>, { size: 32 })}
         </div>
         <span className="text-[11px] font-black uppercase tracking-widest text-google-heading">{label}</span>
      </motion.div>
   );
};

const ValueCard = ({ icon, title, desc, bg }: any) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex gap-8 group">
    <div className={`p-6 ${bg} rounded-[2.5rem] h-fit transition-all duration-500 group-hover:shadow-2xl`}>
      {React.cloneElement(icon as React.ReactElement<any>, { size: 40, strokeWidth: 1.5 })}
    </div>
    <div className="space-y-4">
      <h3 className="text-2xl font-black text-google-heading tracking-tight">{title}</h3>
      <p className="text-gray-500 text-lg leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

export default Enterprise;
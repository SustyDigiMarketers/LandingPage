
import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

const About = () => {
  return (
    <div className="py-32 lg:py-56 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="max-w-4xl mb-32"
        >
          <motion.h4 variants={fadeUp} className="text-google-blue font-black text-[10px] uppercase tracking-[0.4em] mb-8">The Company</motion.h4>
          <motion.h1 variants={fadeUp} className="text-6xl lg:text-8xl font-black mb-12 tracking-tighter leading-none">Architecting <br /> Engineering <br /> Excellence.</motion.h1>
          <motion.p variants={fadeUp} className="text-2xl text-gray-500 leading-relaxed font-medium">
            SustyDigiMarketers is an elite technology firm focused on building the digital backbone for the world's most ambitious enterprises.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-48">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-4xl font-black tracking-tight">Our Core Philosophy</h2>
            <p className="text-lg text-gray-500 leading-relaxed font-medium">
              We operate on the principle that modern software should be as resilient as a physical structure. Our "Blueprints" aren't just code repositories; they are comprehensive scalability frameworks.
            </p>
            <div className="grid grid-cols-2 gap-12 py-12 border-y border-gray-100">
              <motion.div whileHover={{ y: -5 }}>
                <div className="text-5xl font-black text-google-blue tracking-tighter">05+</div>
                <div className="text-[10px] text-gray-400 uppercase font-black tracking-widest mt-4">Years Operational</div>
              </motion.div>
              <motion.div whileHover={{ y: -5 }}>
                <div className="text-5xl font-black text-google-red tracking-tighter">150+</div>
                <div className="text-[10px] text-gray-400 uppercase font-black tracking-widest mt-4">Scalability Audits</div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-100 aspect-[4/5] rounded-[40px] overflow-hidden relative shadow-premium transition-all duration-500"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-google-blue/10 to-transparent"></div>
             <div className="flex items-center justify-center h-full text-gray-300 text-[10px] font-black uppercase tracking-widest">Corporate_Visual_Placeholder</div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { name: 'Vision', color: 'text-google-red', desc: 'Setting the standard for zero-failure enterprise environments.' },
            { name: 'Mission', color: 'text-google-green', desc: 'Transforming technical debt into scalable market advantages.' },
            { name: 'Values', color: 'text-google-blue', desc: 'Radical transparency, modular design, and absolute security.' }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              className="p-12 bg-gray-50 rounded-[32px] shadow-sm transition-all"
            >
              <h3 className={`text-2xl font-black mb-6 ${item.color}`}>{item.name}</h3>
              <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

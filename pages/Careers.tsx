import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Users, Zap, Globe, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const jobs = [
    { title: 'Senior Cloud Architect', team: 'Engineering', location: 'Palo Alto / Remote', type: 'Full-time' },
    { title: 'Frontend Engineer (React)', team: 'Product', location: 'Remote', type: 'Full-time' },
    { title: 'Director of Digital Growth', team: 'Marketing', location: 'New York', type: 'Full-time' },
    { title: 'Cybersecurity Analyst', team: 'Security', location: 'Palo Alto', type: 'Full-time' },
    { title: 'Product Designer', team: 'Design', location: 'London', type: 'Contract' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-40 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-[0.2] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-8xl font-black text-google-heading mb-8 tracking-tighter leading-none">
              Build the <br /> <span className="text-google-red italic">Next Ecosystem.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium mb-12">
              We are a team of polymaths, engineers, and visionaries redefining how the world interacts with enterprise technology.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#openings" className="bg-google-blue text-white px-10 py-5 rounded-google font-bold text-sm uppercase tracking-widest shadow-google-blue">
                VIEW OPENINGS
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-32 bg-google-bg border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-google-blue/10 rounded-2xl flex items-center justify-center text-google-blue">
                <Zap size={28} />
              </div>
              <h3 className="text-2xl font-black text-google-heading">Velocity</h3>
              <p className="text-gray-500 font-medium leading-relaxed">We move fast, break conventions, and deploy code that matters to millions of users globally.</p>
            </div>
            <div className="space-y-6">
              <div className="w-14 h-14 bg-google-green/10 rounded-2xl flex items-center justify-center text-google-green">
                <Globe size={28} />
              </div>
              <h3 className="text-2xl font-black text-google-heading">Global Impact</h3>
              <p className="text-gray-500 font-medium leading-relaxed">Our solutions power some of the world's most critical infrastructures, from BFSI to Healthcare.</p>
            </div>
            <div className="space-y-6">
              <div className="w-14 h-14 bg-google-yellow/10 rounded-2xl flex items-center justify-center text-google-yellow">
                <Cpu size={28} />
              </div>
              <h3 className="text-2xl font-black text-google-heading">Deep Tech</h3>
              <p className="text-gray-500 font-medium leading-relaxed">We tackle the hard problems—scalability, distributed systems, and real-time data fabrics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="py-32 lg:py-48 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black text-google-heading tracking-tight mb-4">Open Positions</h2>
            <div className="w-16 h-1 bg-google-blue rounded-full"></div>
          </div>

          <div className="space-y-6">
            {jobs.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="group p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-6"
              >
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-google-blue mb-2">{job.team}</div>
                  <h4 className="text-xl font-black text-google-heading mb-1">{job.title}</h4>
                  <div className="flex gap-4 text-xs text-gray-400 font-bold uppercase tracking-wider">
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-google-heading font-black text-[11px] uppercase tracking-widest group-hover:text-google-blue transition-colors">
                  APPLY NOW <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 p-12 bg-[#0D47A1] rounded-[3rem] text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10"><Users size={120} /></div>
            <h3 className="text-3xl font-black mb-6">Don't see your role?</h3>
            <p className="text-white/70 font-medium mb-10 max-w-lg mx-auto leading-relaxed">We're always looking for exceptional talent. Send your portfolio and vision to our team.</p>
            <Link to="/contact" className="inline-block bg-white text-google-heading px-12 py-5 rounded-google font-bold text-xs uppercase tracking-widest hover:bg-google-blue hover:text-white transition-all">
              GENERAL APPLICATION
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
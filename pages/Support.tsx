import React from 'react';
import { motion } from 'framer-motion';
import { Search, MessageCircle, Book, ShieldCheck, Mail, Zap, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Support = () => {
  const categories = [
    { title: 'Technical Help', icon: <Terminal className="text-google-blue" />, desc: 'API integration, deployment, and backend configurations.' },
    { title: 'Billing', icon: <Book className="text-google-green" />, desc: 'Manage your subscriptions, invoices, and payment methods.' },
    { title: 'Security', icon: <ShieldCheck className="text-google-red" />, desc: 'Reporting vulnerabilities and managing account security.' },
    { title: 'Product Guide', icon: <Zap className="text-google-yellow" />, desc: 'Step-by-step tutorials on getting the most out of our suite.' }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Search Hero */}
      <section className="bg-google-bg pt-40 pb-32 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-[0.2] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-google-heading mb-12 tracking-tighter">How can we help?</h1>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-google-blue/40" size={24} />
            <input 
              type="text" 
              placeholder="Search documentation, tickets, or faqs..." 
              className="w-full bg-white h-20 pl-20 pr-10 rounded-full text-xl shadow-2xl outline-none focus:ring-4 focus:ring-google-blue/10 transition-all text-google-heading font-medium placeholder:text-gray-300 border border-gray-100"
            />
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-32 lg:py-48 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all cursor-pointer group"
            >
              <div className="w-16 h-16 bg-google-bg rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white transition-colors border border-transparent group-hover:border-gray-50">
                {React.cloneElement(cat.icon as React.ReactElement<any>, { size: 32 })}
              </div>
              <h3 className="text-xl font-black text-google-heading mb-4">{cat.title}</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">{cat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA (Deep Blue Background) */}
        <div className="mt-32 p-16 bg-[#0D47A1] rounded-[4rem] flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none text-white"><MessageCircle size={300} /></div>
          <div className="relative z-10 space-y-4 text-center lg:text-left text-white">
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-white">Need dedicated support?</h2>
            <p className="text-white/70 font-medium text-lg max-w-xl">Our engineers are available 24/7 for enterprise-tier partners with mission-critical needs.</p>
          </div>
          <Link to="/contact" className="relative z-10 bg-white text-google-heading px-12 py-6 rounded-google font-black text-xs uppercase tracking-[0.4em] shadow-2xl hover:bg-google-blue hover:text-white transition-all">
            CREATE SUPPORT TICKET
          </Link>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-32 bg-google-bg border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-black text-google-heading mb-16 tracking-tight">Popular Questions</h2>
          <div className="space-y-6 text-left">
            {[
              "How do I migrate my existing cloud instances to Susty?",
              "What is the average latency of the global data hubs?",
              "How can I reset my administrative enterprise access?",
              "Can I integrate custom third-party tools via the NexusFlow API?"
            ].map((q, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 flex items-center justify-between group cursor-pointer hover:border-google-blue transition-all shadow-sm">
                <span className="font-bold text-google-heading group-hover:text-google-blue transition-colors">{q}</span>
                <Mail size={18} className="text-google-blue/20" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
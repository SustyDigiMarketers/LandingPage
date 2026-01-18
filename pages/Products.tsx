import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, Users, Mail, Briefcase, DollarSign, Shield, BarChart, Layout as LayoutIcon, MessageSquare, Zap, Globe, Smartphone, Cpu, Lock, Database, Terminal, Activity, Filter, Layers, Sparkles } from 'lucide-react';

const categories = [
  { id: 'featured', name: 'Featured Apps', icon: <Sparkles size={16} /> },
  { id: 'sales', name: 'Sales', icon: <Zap size={16} /> },
  { id: 'marketing', name: 'Marketing', icon: <BarChart size={16} /> },
  { id: 'finance', name: 'Finance', icon: <DollarSign size={16} /> },
  { id: 'hr', name: 'Human Resources', icon: <Users size={16} /> },
  { id: 'it', name: 'IT & Security', icon: <Shield size={16} /> },
  { id: 'analytics', name: 'Analytics', icon: <Activity size={16} /> }
];

const productsData = [
  { id: 'crm', category: 'featured', name: 'CRM Plus', desc: 'Unified platform to deliver top-notch customer experience.', icon: <Users className="text-google-blue" />, color: 'blue' },
  { id: 'mail', category: 'featured', name: 'Mail', desc: 'Secure email service for teams of all sizes.', icon: <Mail className="text-google-red" />, color: 'red' },
  { id: 'people', category: 'featured', name: 'People', desc: 'Organize, automate, and simplify your HR processes.', icon: <Briefcase className="text-google-yellow" />, color: 'yellow' },
  { id: 'crm-std', category: 'sales', name: 'CRM', desc: 'Comprehensive CRM platform for customer-facing teams.', icon: <Users />, color: 'blue' },
  { id: 'salesiq', category: 'sales', name: 'SalesIQ', desc: 'Live chat app to engage and convert website visitors.', icon: <MessageSquare />, color: 'blue' },
  { id: 'campaigns', category: 'marketing', name: 'Campaigns', desc: 'Create, send, and track targeted email campaigns.', icon: <BarChart />, color: 'red' },
  { id: 'books', category: 'finance', name: 'Books', desc: 'Powerful accounting platform for growing businesses.', icon: <DollarSign />, color: 'green' },
  { id: 'endpoint', category: 'it', name: 'Endpoint Central', desc: 'Unified endpoint management and security.', icon: <Smartphone />, color: 'blue' },
  { id: 'vault', category: 'it', name: 'Vault', desc: 'Online password manager for teams.', icon: <Lock />, color: 'blue' },
];

interface ProductCardProps {
  product: any;
  large?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, large = false }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    setGlowPos({ x: e.clientX - left, y: e.clientY - top });
  };

  return (
    <motion.div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative group bg-white p-10 rounded-[2.5rem] border border-gray-100 flex flex-col ${large ? 'items-center text-center min-h-[400px]' : 'items-start'} transition-all overflow-hidden interactive-element no-hover-global`}
    >
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${glowPos.x}px ${glowPos.y}px, rgba(26, 115, 232, 0.04), transparent 40%)`
        }}
      />
      
      <div className={`mb-8 p-6 rounded-3xl ${large ? 'bg-google-bg/50 scale-125' : 'bg-google-bg/30'} group-hover:bg-white transition-all duration-700 shadow-sm border border-transparent group-hover:border-gray-50`}>
        {React.cloneElement(product.icon as React.ReactElement<any>, { size: large ? 36 : 24, strokeWidth: 1.5 })}
      </div>
      
      <h3 className={`font-black text-google-heading mb-4 tracking-tighter ${large ? 'text-3xl' : 'text-xl'}`}>{product.name}</h3>
      <p className={`text-gray-500 leading-relaxed mb-12 font-medium ${large ? 'text-base' : 'text-sm'}`}>
        {product.desc}
      </p>
      
      <Link 
        to="/contact" 
        className={`mt-auto flex items-center gap-3 font-black uppercase tracking-[0.4em] text-[10px] ${
          product.color === 'blue' ? 'text-google-blue' : product.color === 'red' ? 'text-google-red' : 'text-google-green'
        } group/link interactive-element no-hover-global p-2 rounded-xl`}
      >
        <span>Initialize Module</span>
        <ChevronRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
      </Link>
    </motion.div>
  );
};

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('featured');

  const filteredProducts = useMemo(() => {
    return productsData.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      p.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const scrollToSection = (id: string) => {
    setActiveCategory(id);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 120, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-[#0D47A1] pt-48 pb-40 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-[0.05]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-google-blue/10 rounded-full blur-[150px] animate-pulse"></div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-card border border-white/10 text-white/60 text-[10px] font-black uppercase tracking-[0.6em] mb-12">
            Index_Discovery_v.4.0
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-20 tracking-tighter leading-none italic">
            Digital Directory.
          </h1>
          
          <div className="relative max-w-2xl mx-auto group">
            <Search className="absolute left-10 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-white transition-colors" size={24} />
            <input 
              type="text" 
              placeholder="Search ecosystem..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 backdrop-blur-xl h-24 pl-24 pr-10 rounded-full text-xl border border-white/10 outline-none focus:ring-4 focus:ring-google-blue/20 transition-all text-white font-medium placeholder:text-white/20"
            />
          </div>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-32 flex flex-col lg:flex-row gap-20">
        <aside className="lg:w-80 lg:sticky lg:top-32 h-fit hidden lg:block">
          <div className="glass-card p-10 rounded-[3rem] border border-gray-100 space-y-3 shadow-sm">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300 mb-10 pl-4">Categories</h4>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                className={`w-full text-left px-6 py-5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-6 group interactive-element no-hover-global ${
                  activeCategory === cat.id 
                  ? 'bg-google-blue text-white shadow-xl' 
                  : 'text-gray-400 hover:text-google-heading hover:bg-google-bg'
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </aside>

        <div className="flex-1 space-y-40">
          <AnimatePresence mode="popLayout">
            {categories.map(category => {
              const categoryProducts = filteredProducts.filter(p => p.category === category.id);
              if (categoryProducts.length === 0 && searchTerm) return null;
              
              return (
                <section key={category.id} id={category.id} className="scroll-mt-32">
                  <div className="flex items-center gap-8 mb-16">
                    <h2 className="text-4xl font-black text-google-heading tracking-tighter">{category.name}</h2>
                    <div className="h-px flex-1 bg-google-bg"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {categoryProducts.map(product => (
                      <ProductCard key={product.id} product={product} large={category.id === 'featured'} />
                    ))}
                  </div>
                </section>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Products;
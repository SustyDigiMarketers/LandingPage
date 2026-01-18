import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Linkedin, Twitter, Youtube, ArrowUp, Zap, Phone, Mail, MessageCircle, ChevronRight, Globe } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';

interface MagneticWrapperProps {
  children: React.ReactNode;
  strength?: number;
}

const MagneticWrapper: React.FC<MagneticWrapperProps> = ({ children, strength = 0.2 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * strength;
    const y = (e.clientY - (top + height / 2)) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Enterprise', path: '/enterprise' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const excludedDesktopLinks = ['Home', 'Careers', 'Contact'];

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-google-blue via-google-red to-google-yellow origin-left z-[60]"
        style={{ scaleX }}
      />
      <header className={`sticky top-0 z-50 transition-all duration-700 ${
        scrolled ? 'bg-white/70 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-1' : 'bg-white border-b border-gray-50 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-3 group no-hover-global">
              <motion.img 
                initial={{ rotate: -10, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                whileHover={{ rotate: 5, scale: 1.1 }}
                src="./logo.svg" 
                alt="SustyDigi Logo" 
                className="w-10 h-10 object-contain"
              />
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-2xl font-black tracking-tighter bg-gradient-to-r from-google-blue via-google-red to-google-yellow bg-clip-text text-transparent"
              >
                SustyDigiMarketers
              </motion.div>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks
                .filter(link => !excludedDesktopLinks.includes(link.name))
                .map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-5 py-2 text-[11px] uppercase tracking-[0.2em] font-black text-gray-500 hover:text-google-blue transition-all group interactive-element"
                >
                  <span className="relative z-10">{link.name}</span>
                  {location.pathname === link.path && (
                    <motion.div 
                      layoutId="header-active"
                      className="absolute inset-0 bg-google-blue/5 rounded-full"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <MagneticWrapper strength={0.15}>
                <Link
                  to="/contact"
                  className="relative overflow-hidden bg-google-blue text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest shadow-google-blue group interactive-element no-hover-global inline-block"
                >
                  <span className="relative z-10">Deploy System</span>
                  <motion.div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </Link>
              </MagneticWrapper>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 p-2 interactive-element">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-50 overflow-hidden"
            >
              <div className="px-6 py-12 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-4 text-xl font-black text-google-heading border-b border-gray-50 group hover:pl-2 transition-all"
                  >
                    {link.name}
                    <ChevronRight className="group-hover:translate-x-2 transition-transform text-google-blue" />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

interface SocialIconProps {
  Icon: any;
  href: string;
  name: string;
  colorClass: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ Icon, href, name, colorClass }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="absolute -top-12 px-3 py-1.5 bg-google-heading text-white text-[10px] font-bold rounded-lg whitespace-nowrap z-50 shadow-xl pointer-events-none"
          >
            {name}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-google-heading rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
      <MagneticWrapper strength={0.3}>
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`w-12 h-12 rounded-2xl flex items-center justify-center text-gray-400 border border-gray-100 bg-white transition-all duration-300 shadow-sm interactive-element ${colorClass}`}
        >
          <Icon size={20} />
        </motion.a>
      </MagneticWrapper>
    </div>
  );
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { Icon: Instagram, href: '#', name: 'Instagram', colorClass: 'hover:text-google-red hover:border-google-red/20 hover:bg-red-50/50' },
    { Icon: Facebook, href: '#', name: 'Facebook', colorClass: 'hover:text-google-blue hover:border-google-blue/20 hover:bg-blue-50/50' },
    { Icon: Linkedin, href: '#', name: 'LinkedIn', colorClass: 'hover:text-google-blue hover:border-google-blue/20 hover:bg-blue-50/50' },
    { Icon: Twitter, href: '#', name: 'X', colorClass: 'hover:text-gray-900 hover:border-gray-200 hover:bg-gray-100/50' },
    { Icon: Youtube, href: '#', name: 'YouTube', colorClass: 'hover:text-google-red hover:border-google-red/20 hover:bg-red-50/50' }
  ];

  return (
    <footer className="bg-white border-t border-gray-100 pt-32 pb-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full dot-grid"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-google-blue/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-20 mb-24">
          
          <div className="md:col-span-5 lg:col-span-4">
            <Link to="/" className="flex items-center gap-4 mb-10 group no-hover-global inline-flex">
              <img 
                src="./logo.svg" 
                alt="SustyDigi Logo" 
                className="w-12 h-12 object-contain group-hover:rotate-6 transition-transform duration-500"
              />
              <h3 className="text-3xl font-black tracking-tighter bg-gradient-to-r from-google-blue via-google-red to-google-yellow bg-clip-text text-transparent">
                SustyDigiMarketers
              </h3>
            </Link>
            <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-sm font-medium">
              We engineer scalable ecosystems for the modern enterprise. Pioneering digital transformation through Google-standard infrastructure.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, i) => (
                <SocialIcon key={i} {...social} />
              ))}
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-400 mb-10">Structure</h4>
            <ul className="space-y-5 text-sm font-bold text-google-heading">
              {['Home', 'About Us', 'Services', 'Products'].map((name) => (
                <li key={name}>
                  <Link to={name === 'Home' ? '/' : `/${name.toLowerCase().replace(' ', '')}`} className="hover:text-google-blue transition-all flex items-center group interactive-element rounded-lg py-1">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-google-blue mr-0 group-hover:mr-2 transition-all"></span>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-400 mb-10">Ecosystem</h4>
            <ul className="space-y-5 text-sm font-bold text-google-heading">
              {['Enterprise', 'Careers', 'Blog', 'Contact'].map((name) => (
                <li key={name}>
                  <Link to={`/${name.toLowerCase()}`} className="hover:text-google-red transition-all flex items-center group interactive-element rounded-lg py-1">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-google-red mr-0 group-hover:mr-2 transition-all"></span>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-4">
            <div className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden group transition-all duration-700 hover:shadow-2xl">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Globe className="w-24 h-24 text-google-blue animate-spin-slow" />
              </div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-400 mb-8">Palo Alto Hub</h4>
              <p className="text-sm text-google-heading leading-relaxed font-bold mb-10 relative z-10">
                123 Mountain View Avenue,<br />Palo Alto, CA 94043,<br />USA
              </p>
              
              <div className="flex flex-col gap-4 relative z-10">
                <a href="mailto:contact@sustydigi.com" className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-google-blue transition-all group/link interactive-element p-2 rounded-xl">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-google-blue border border-gray-100 shadow-sm group-hover/link:shadow-md transition-all">
                    <Mail size={16} />
                  </div>
                  contact@sustydigi.com
                </a>
                <a href="tel:+16505550192" className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-google-green transition-all group/link interactive-element p-2 rounded-xl">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-google-green border border-gray-100 shadow-sm group-hover/link:shadow-md transition-all">
                    <Phone size={16} />
                  </div>
                  +1 (650) 555-0192
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-gray-100 flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-[11px] font-black text-gray-300 uppercase tracking-[0.4em]"
            >
              © 2024 Susty Digi Corp
            </motion.p>
            <div className="flex items-center gap-8">
              {[
                { name: 'Terms', path: '/terms' },
                { name: 'Privacy', path: '/privacy' },
                { name: 'Support', path: '/support' }
              ].map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 hover:text-google-blue transition-all relative group interactive-element px-2 py-1"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-google-blue transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2 px-4 py-2 bg-google-bg rounded-full border border-gray-100">
               <div className="w-2 h-2 rounded-full bg-google-green animate-pulse"></div>
               <span className="text-[10px] font-black text-google-heading uppercase tracking-widest">Nodes Active</span>
            </div>
            <motion.button
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-premium flex items-center justify-center text-gray-400 hover:text-google-blue hover:border-google-blue/30 transition-all interactive-element no-hover-global"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-google-blue selection:text-white relative">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
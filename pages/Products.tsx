import React, { useState, useEffect } from 'react';
import { 
  Box, Users, CreditCard, Megaphone, Calendar, BarChart, 
  Briefcase, Package, BookOpen, Video, Home, Truck, Terminal, 
  LifeBuoy, Ticket, Map, FileText, ShoppingBag, ClipboardList, Handshake,
  ChevronRight, Mail, Book, Activity, Search, ShieldCheck, HeartPulse,
  Settings, UserCheck, Smartphone, Layers, Globe, Monitor, HelpCircle,
  Clock, Database, Lock, Cpu, LayoutGrid, Sparkles, Workflow, ArrowRight
} from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const SECTIONS = [
  { id: 'sales', title: 'Sales', subtitle: 'Modern tools for high-velocity sales teams.', color: 'google-blue' },
  { id: 'marketing', title: 'Marketing', subtitle: 'Engage and grow your audience everywhere.', color: 'google-red' },
  { id: 'finance', title: 'Finance', subtitle: 'Accounting and expense management made easy.', color: 'google-green' },
  { id: 'it', title: 'IT & Security', subtitle: 'Manage, secure, and monitor your infrastructure.', color: 'google-yellow' },
  { id: 'hr', title: 'HR & People', subtitle: 'Empower your employees with unified tools.', color: 'purple-600' },
  { id: 'collaboration', title: 'Collaboration', subtitle: 'Communicate and collaborate from anywhere.', color: 'cyan-600' }
];

const PRODUCT_LIST = {
  sales: [
    { name: 'CRM', desc: 'Comprehensive platform for customer-facing teams.', icon: 'crm.png', tag: 'Core' },
    { name: 'Forms', desc: 'Build forms for lead generation and surveys.', icon: 'forms.png', tag: 'Essential' },
    { name: 'Bookings', desc: 'Appointment scheduling for your customers.', icon: 'bookings.png', tag: 'Workflow' },
    { name: 'SalesIQ', desc: 'Live chat and visitor tracking for your site.', icon: 'salesiq.png', tag: 'Real-time' }
  ],
  marketing: [
    { name: 'Campaigns', desc: 'Reach and engage your customers via email.', icon: 'campaigns.png', tag: 'Engage' },
    { name: 'Social', desc: 'Manage your social media presence easily.', icon: 'social.png', tag: 'Growth' },
    { name: 'Survey', desc: 'Gather feedback with professional surveys.', icon: 'survey.png', tag: 'Insights' },
    { name: 'Marketing Plus', desc: 'Unified marketing platform for your brand.', icon: 'marketing-plus.png', tag: 'Premium' }
  ],
  finance: [
    { name: 'Books', desc: 'Powerful accounting for growing businesses.', icon: 'books.png', tag: 'Finance' },
    { name: 'Invoice', desc: 'Get paid faster with professional invoices.', icon: 'invoice.png', tag: 'Revenue' },
    { name: 'Expense', desc: 'Streamline your employee expense reporting.', icon: 'expense.png', tag: 'Control' },
    { name: 'Inventory', desc: 'Control your inventory across all channels.', icon: 'inventory.png', tag: 'Ops' }
  ],
  it: [
    { name: 'Assist', desc: 'Remote support and access software.', icon: 'assist.png', tag: 'Support' },
    { name: 'ServiceDesk', desc: 'Unified IT service delivery and assets.', icon: 'servicedesk.png', tag: 'ITSM' },
    { name: 'Site24x7', desc: 'Website and server monitoring solutions.', icon: 'site24x7.png', tag: 'Uptime' },
    { name: 'ManageEngine', desc: 'Full-stack IT governance for enterprises.', icon: 'manageengine.png', tag: 'Governance' }
  ],
  hr: [
    { name: 'People', desc: 'Cloud-based HR management system.', icon: 'people.png', tag: 'Culture' },
    { name: 'Recruit', desc: 'Applicant tracking and recruitment software.', icon: 'recruit.png', tag: 'Talent' },
    { name: 'HR Expense', desc: 'Track employee travel and business spending.', icon: 'hr-expense.png', tag: 'Perks' },
    { name: 'Payroll', desc: 'Automated payroll processing for India.', icon: 'payroll.png', tag: 'Compliance' }
  ],
  collaboration: [
    { name: 'Mail', desc: 'Secure, private ad-free email for teams.', icon: 'mail.png', tag: 'Comm' },
    { name: 'Cliq', desc: 'Business communication and team chat.', icon: 'cliq.png', tag: 'Chat' },
    { name: 'Projects', desc: 'Plan, track, and collaborate on projects.', icon: 'projects.png', tag: 'Projects' },
    { name: 'WorkDrive', desc: 'Online file management for teams.', icon: 'workdrive.png', tag: 'Cloud' }
  ]
};

const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState('sales');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white min-h-screen selection:bg-brand-100">
      {/* 1. DYNAMIC HERO BANNER */}
      <section className="bg-slate-900 relative overflow-hidden py-32 md:py-56 text-center px-4">
        {/* Animated Background Grids */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute inset-0 animate-[pulse_10s_linear_infinite]" 
                style={{ 
                  backgroundImage: `radial-gradient(circle at 50% 50%, #1a73e8 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }}>
           </div>
        </div>
        
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-google-blue/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-google-red/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>

        <div className="max-w-4xl mx-auto relative z-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-google-blue font-bold text-[10px] uppercase tracking-[0.3em] mb-12 font-ui">
            <Sparkles className="w-4 h-4" /> Operational Ecosystem
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium text-white tracking-tight leading-[1.05] mb-12 font-heading">
            The operating system for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-google-blue via-google-yellow to-google-green">
              modern enterprise
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-2xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            A unified software architecture designed to orchestrate every process, from initial lead acquisition to final ledger reconciliation.
          </p>
          
          <div className="relative max-w-2xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-google-blue via-google-red to-google-yellow rounded-[24px] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-[20px] flex items-center p-2 shadow-2xl overflow-hidden group-focus-within:border-google-blue/50 transition-all">
              <Search className="ml-5 text-slate-500 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search SustyDigi's 50+ Specialized Apps" 
                className="w-full px-5 py-5 bg-transparent border-none focus:ring-0 text-white placeholder-slate-500 font-ui text-lg"
              />
              <button className="hidden md:block bg-google-blue hover:bg-[#185abc] text-white px-10 py-5 rounded-[14px] font-bold text-xs tracking-widest transition-all hover:scale-[1.02] active:scale-95 shadow-xl">
                SEARCH
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ARCHITECTURAL EXPLORER WITH GLASS SIDEBAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col lg:flex-row gap-24 relative">
        {/* Sticky Architectural Sidebar */}
        <aside className="lg:w-80 shrink-0 hidden lg:block">
          <div className="sticky top-28 space-y-16">
            <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 shadow-sm">
              <h3 className="text-[11px] font-black text-[#70757a] uppercase tracking-[0.3em] mb-10 font-ui flex items-center gap-2">
                <LayoutGrid className="w-3.5 h-3.5 text-google-blue" /> Stack Architecture
              </h3>
              <nav className="flex flex-col space-y-3">
                {SECTIONS.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`group flex items-center justify-between text-left py-4 px-6 rounded-2xl transition-all duration-500 font-ui text-[14px] relative overflow-hidden ${
                      activeTab === sec.id 
                        ? 'bg-slate-900 text-white shadow-2xl translate-x-3' 
                        : 'text-slate-500 hover:bg-white hover:text-slate-900 hover:shadow-lg border border-transparent hover:border-slate-100'
                    }`}
                  >
                    <span className="font-semibold relative z-10">{sec.title}</span>
                    <ChevronRight className={`w-4 h-4 transition-all duration-500 relative z-10 ${activeTab === sec.id ? 'opacity-100 translate-x-1' : 'opacity-0'}`} />
                    {activeTab === sec.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-white/10 animate-[pulse_4s_ease-in-out_infinite]"></div>
                    )}
                  </button>
                ))}
              </nav>
            </div>
            
            <div className="p-10 bg-slate-900 rounded-[40px] text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-google-blue/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <p className="text-sm text-slate-400 leading-relaxed mb-8 font-light relative z-10">
                Need a bespoke digital architecture review for your specific vertical?
              </p>
              <Link to="/contact" className="text-[11px] font-bold text-google-blue uppercase tracking-[0.2em] flex items-center gap-2 hover:gap-4 transition-all relative z-10">
                Talk to an Architect <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </aside>

        {/* Dynamic Product Canvas */}
        <div className="flex-1 space-y-48">
          {SECTIONS.map((section, sIdx) => (
            <section key={section.id} id={section.id} className="scroll-mt-32 reveal">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                <div className="text-left animate-fade-in-up">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 font-bold text-[9px] uppercase tracking-[0.25em] mb-8 border border-slate-200 shadow-sm">
                     <Workflow className="w-4 h-4 text-google-blue" /> Integrated Domain
                  </div>
                  <h2 className="text-4xl md:text-5xl font-medium text-[#202124] mb-4 tracking-tight font-heading">{section.title}</h2>
                  <p className="text-[#5f6368] text-xl font-light leading-relaxed max-w-xl">{section.subtitle}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {(PRODUCT_LIST as any)[section.id]?.map((product: any, idx: number) => (
                  <div 
                    key={idx} 
                    className="group relative p-12 bg-white border border-slate-200 rounded-[48px] transition-all duration-700 hover:shadow-[0_60px_120px_-30px_rgba(0,0,0,0.1)] hover:-translate-y-4 hover:border-google-blue/30 flex flex-col items-start"
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    {/* Floating Status Tag */}
                    <div className="absolute top-12 right-12 px-4 py-1.5 rounded-full bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest border border-slate-100 group-hover:bg-google-blue/10 group-hover:text-google-blue transition-colors duration-500">
                      {product.tag}
                    </div>
                    
                    {/* Interactive Icon Box */}
                    <div className="mb-12 w-20 h-20 bg-slate-50 rounded-[28px] flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-white group-hover:shadow-2xl overflow-hidden p-4 border border-slate-100 group-hover:border-slate-50">
                      <img 
                        src={`/assets/products/${product.icon}`} 
                        alt={product.name} 
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(product.name)}&background=f8f9fa&color=1a73e8&size=128&bold=true`;
                        }}
                      />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#202124] mb-5 group-hover:text-google-blue transition-colors duration-500 font-ui">
                      {product.name}
                    </h3>
                    
                    <p className="text-lg text-[#5f6368] leading-relaxed mb-12 flex-grow font-light">
                      {product.desc}
                    </p>
                    
                    <div className="w-full pt-10 border-t border-slate-50 flex items-center justify-between">
                       <Link to="/contact" className="text-[12px] font-bold text-google-blue uppercase tracking-[0.25em] flex items-center gap-2 group-hover:gap-4 transition-all duration-500 font-ui">
                         Engineering Specs <ChevronRight className="w-5 h-5" />
                       </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* 3. IMMERSIVE PREMIUM PLATFORM SECTION */}
          <section className="bg-[#0b101b] rounded-[64px] p-12 md:p-24 flex flex-col lg:flex-row items-center justify-between gap-24 relative overflow-hidden shadow-2xl reveal">
             {/* Deep Space Background Effects */}
             <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-google-blue rounded-full blur-[160px] -translate-y-1/2 translate-x-1/2 animate-[pulse_8s_ease-in-out_infinite]"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-google-red rounded-full blur-[140px] translate-y-1/2 -translate-x-1/4"></div>
             </div>
             
             <div className="max-w-xl text-center lg:text-left relative z-10">
                <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-google-blue font-bold text-[11px] uppercase tracking-[0.4em] mb-12 font-ui shadow-2xl">
                   <Sparkles className="w-4 h-4" /> Infinite Scalability
                </div>
                <h2 className="text-5xl md:text-8xl font-medium text-white leading-tight mb-12 font-heading tracking-tighter">
                  SustyDigi <span className="text-transparent bg-clip-text bg-gradient-to-br from-google-blue to-google-green">One</span>
                </h2>
                <p className="text-slate-400 text-xl md:text-2xl leading-relaxed mb-16 font-light">
                  The ultimate unified platform designed to orchestrate your entire digital footprint—from marketing intelligence to hardware security.
                </p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-8">
                  <button className="bg-google-blue hover:bg-[#185abc] text-white px-12 py-6 rounded-2xl font-bold text-sm tracking-widest shadow-[0_20px_40px_rgba(26,115,232,0.3)] transition-all hover:-translate-y-2 hover:scale-105 active:scale-95">
                    START DEPLOYMENT
                  </button>
                  <button className="bg-white/5 hover:bg-white/10 text-white border border-white/20 px-12 py-6 rounded-2xl font-bold text-sm tracking-widest transition-all backdrop-blur-xl hover:border-white/40">
                    ARCHITECTURE SPECS
                  </button>
                </div>
             </div>

             {/* Floating App Modules Illustration */}
             <div className="shrink-0 relative z-10 perspective-1000">
                <div className="grid grid-cols-2 gap-8 transform rotate-y-[-10deg] rotate-x-[10deg]">
                   {[
                     { icon: <Activity className="text-google-blue" />, label: 'BI Analytics', delay: '0s' },
                     { icon: <Mail className="text-google-red" />, label: 'Universal Comms', delay: '0.5s' },
                     { icon: <ShieldCheck className="text-google-green" />, label: 'Threat Defense', delay: '1s' },
                     { icon: <Cpu className="text-google-yellow" />, label: 'Core Automation', delay: '1.5s' }
                   ].map((item, i) => (
                     <div key={i} className={`bg-white/5 backdrop-blur-3xl p-10 rounded-[48px] border border-white/10 flex flex-col items-center justify-center text-center shadow-2xl hover:bg-white/10 transition-all duration-700 group cursor-pointer hover:-translate-y-4 animate-[blob_8s_infinite]`}
                          style={{ animationDelay: item.delay }}>
                        <div className="mb-8 transition-transform group-hover:scale-125 group-hover:rotate-12 duration-700">
                          {React.cloneElement(item.icon, { size: 48, strokeWidth: 1.5 })}
                        </div>
                        <span className="text-[11px] font-black text-white/80 uppercase tracking-widest font-ui leading-tight">{item.label}</span>
                     </div>
                   ))}
                </div>
             </div>
          </section>

          {/* FINAL CTA SECTION */}
          <section className="py-32 text-center border-t border-slate-100 reveal">
            <h2 className="text-4xl md:text-7xl font-medium text-[#202124] mb-12 font-heading tracking-tight">Need a custom <span className="text-google-blue underline decoration-google-blue/20 underline-offset-8">solution?</span></h2>
            <p className="text-[#5f6368] text-xl md:text-3xl mb-16 max-w-4xl mx-auto font-light leading-relaxed">
              Our engineering team specializes in deep multi-stack integrations for regulated global sectors. 
              Let's architect your resilient future.
            </p>
            <Button to="/contact" className="px-16 py-7 text-lg font-bold tracking-[0.25em] shadow-[0_30px_60px_-15px_rgba(26,115,232,0.3)] hover:-translate-y-2 transition-all duration-500 rounded-[24px]">
               SCHEDULE ARCHITECT REVIEW
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Products;
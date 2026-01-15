import React, { useState } from 'react';
import { 
  ShieldCheck, Monitor, Lock, Cpu, Globe, ArrowRight, CheckCircle, 
  Users, BarChart2, HeartPulse, ShoppingBag, Truck, Database, Cloud,
  Zap, Activity, LayoutGrid, Server, Terminal, Code, Infinity, Layers, Box,
  MessageSquare, Settings, Share2, Workflow, Landmark, Factory, Briefcase, Radio
} from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

interface VerticalSolution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  features: string[];
}

const VERTICALS_DATA: VerticalSolution[] = [
  {
    id: 'healthcare',
    title: 'Medical Systems',
    subtitle: 'Resilient Infrastructure',
    description: 'Streamline patient care and operational service with a complete digital toolkit—from cloud access management to encrypted endpoint security.',
    icon: <HeartPulse className="w-6 h-6" />,
    color: '#4285F4', // Blue
    features: ['Adaptive single sign-on', 'HIPAA compliant storage', 'Multi-factor authentication', 'Endpoint health monitoring']
  },
  {
    id: 'finance',
    title: 'Financial Services',
    subtitle: 'Secure Ledger Governance',
    description: 'Establish high-fidelity banking ecosystems with native compliance for digital assets, cross-border settlements, and real-time risk monitoring.',
    icon: <Landmark className="w-6 h-6" />,
    color: '#34A853', // Google Green
    features: ['Real-time ledger sync', 'AML/KYC automation', 'High-frequency auditing', 'Multi-tenant banking']
  },
  {
    id: 'retail',
    title: 'Modern Retail',
    subtitle: 'Commerce Automation',
    description: 'Optimize the customer journey with integrated POS, inventory management, and automated loyalty programs that scale globally.',
    icon: <ShoppingBag className="w-6 h-6" />,
    color: '#EA4335', // Red
    features: ['Real-time inventory sync', 'Omnichannel engagement', 'Automated fraud detection', 'Customer behavior analytics']
  },
  {
    id: 'trading',
    title: 'Global Trading',
    subtitle: 'Logistics Governance',
    description: 'Real-time visibility into supply chains and cross-border distribution channels with automated customs and compliance auditing.',
    icon: <Truck className="w-6 h-6" />,
    color: '#FBBC05', // Yellow
    features: ['Live vendor portals', 'Automated tax reconciliation', 'Smart document processing', 'Multi-currency settlement']
  },
  {
    id: 'manufacturing',
    title: 'Industrial Ops',
    subtitle: 'Smart Factory Edge',
    description: 'Drive operational efficiency with edge computing and IoT telemetry. Monitor production lifecycles and predict maintenance needs at scale.',
    icon: <Factory className="w-6 h-6" />,
    color: '#9333ea', // Purple
    features: ['IoT Sensor Mesh', 'Predictive Maintenance', 'Supply Chain Visibility', 'Edge Computing Nodes']
  },
  {
    id: 'infrastructure',
    title: 'IT Governance',
    subtitle: 'Strategic Operations',
    description: 'Total control over your digital landscape. We implement full-stack governance across your server and endpoint architecture.',
    icon: <Server className="w-6 h-6" />,
    color: '#5f6368', // Slate Grey
    features: ['Network traffic analysis', 'Automated patch management', 'Disaster recovery protocols', 'Active directory sync']
  }
];

const Industries: React.FC = () => {
  const [activeVertical, setActiveVertical] = useState<VerticalSolution>(VERTICALS_DATA[0]);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Interoperable, customisable, and extensible",
    "Faster time to value with quicker implementation",
    "Contextually integrated tech stack"
  ];

  return (
    <div className="bg-white min-h-screen selection:bg-brand-100">
      <section className="relative pt-32 pb-16 overflow-hidden text-center px-4 animate-fade-in">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-google-green/10 text-google-green font-bold mb-10 uppercase tracking-[0.25em] text-[10px] border border-google-green/5 shadow-sm">
            <Zap className="w-4 h-4" /> Engineered Enterprise Software
          </div>
          <h1 className="text-4xl md:text-[72px] font-medium text-[#202124] leading-[1.05] mb-10 tracking-tight font-heading">
            Accelerate growth with <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-google-blue via-google-red to-google-yellow">customizable</span> solutions
          </h1>
          <p className="text-xl md:text-2xl text-[#5f6368] max-w-2xl mx-auto mb-16 leading-relaxed font-light">
            Deliver exceptional experiences, enable seamless collaboration, and automate business intelligence with a robust software platform built for scale.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button to="/contact" className="bg-google-red hover:bg-[#d93025] border-none px-14 py-6 text-sm font-bold shadow-2xl hover:shadow-3xl hover:-translate-y-1.5 transition-all duration-500 rounded-xl uppercase tracking-widest">
              REQUEST STRATEGY AUDIT
            </Button>
            <button className="flex items-center gap-2 px-14 py-6 rounded-xl border border-[#dadce0] text-[#3c4043] font-bold text-sm tracking-widest uppercase hover:bg-slate-50 transition-all duration-500 hover:shadow-xl">
              VIEW ARCHITECTURE
            </button>
          </div>
        </div>

        <div className="mt-20 max-w-6xl mx-auto relative reveal">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 h-48 bottom-0"></div>
          <svg viewBox="0 0 1000 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto transform scale-110 drop-shadow-sm">
            <rect x="350" y="120" width="120" height="180" fill="#f8f9fa" rx="4" />
            <rect x="480" y="40" width="90" height="260" fill="#f1f3f4" rx="4" />
            <rect x="580" y="100" width="100" height="200" fill="#f8f9fa" rx="4" />
            <path d="M0 280H1000" stroke="#f1f3f4" strokeWidth="2" />
          </svg>
        </div>
      </section>

      <div className="bg-[#1a73e8] py-12 relative overflow-hidden shadow-2xl reveal">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-12 lg:gap-24 relative z-10 text-center md:text-left">
            {[
              { provider: 'Gartner', val: 'Magic Quadrant™ Leader 2024' },
              { provider: 'Frost & Sullivan', val: 'Global Best Practices Award' },
              { provider: 'Nucleus Research', val: 'Highest ROI - CRM Systems' },
              { provider: 'ISG Provider Lens', val: 'Leader - Future of Work' }
            ].map((award, i) => (
              <div key={i} className="flex flex-col items-center md:items-start transform transition-transform hover:translate-y-[-3px] duration-300">
                <span className="text-blue-100 text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-60 font-ui">{award.provider}</span>
                <p className="text-white text-[14px] font-bold leading-tight">{award.val}</p>
              </div>
            ))}
        </div>
      </div>

      <section className="py-32 bg-slate-50 relative reveal">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-medium text-[#202124] mb-32 tracking-tight font-heading">Enterprise solutions, <br/><span className="text-google-blue">engineered for agility.</span></h2>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-24 lg:gap-32">
            <div className="relative w-[340px] h-[340px] md:w-[540px] md:h-[540px] flex items-center justify-center group">
               <div className="absolute inset-0 border border-slate-200 rounded-full scale-100 opacity-40 animate-[spin_60s_linear_infinite]"></div>
               <div className="absolute inset-0 border border-slate-200 rounded-full scale-[0.6] opacity-20 animate-[spin_40s_linear_infinite_reverse]"></div>
               {VERTICALS_DATA.map((vert, index) => {
                 const angle = (index * (360 / VERTICALS_DATA.length)) - 90;
                 const radius = 220;
                 const x = Math.cos((angle * Math.PI) / 180) * radius;
                 const y = Math.sin((angle * Math.PI) / 180) * radius;
                 const isActive = activeVertical.id === vert.id;
                 return (
                   <button
                    key={vert.id}
                    onMouseEnter={() => setActiveVertical(vert)}
                    className="absolute z-30 transition-all duration-700 ease-out"
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                   >
                     <div className={`p-5 md:p-8 bg-white border border-[#dadce0] rounded-[32px] shadow-xl transition-all duration-500 transform ${isActive ? 'scale-125 shadow-2xl ring-8' : 'hover:scale-110 hover:shadow-2xl opacity-50 hover:opacity-100'}`}
                     style={{ borderColor: isActive ? vert.color : '#dadce0', color: isActive ? vert.color : '#5f6368', '--tw-ring-color': `${vert.color}15` } as any}>
                       {React.cloneElement(vert.icon as React.ReactElement<any>, { className: 'w-8 h-8' })}
                     </div>
                   </button>
                 );
               })}
               <div className="w-48 h-48 md:w-72 md:h-72 bg-white border border-[#dadce0] rounded-[64px] shadow-2xl flex flex-col items-center justify-center p-10 text-center z-20 overflow-hidden relative transition-all duration-700 transform hover:scale-105">
                  <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ background: activeVertical.color }}></div>
                  <div className="mb-6 transform transition-transform hover:scale-110 duration-500">
                    <img 
                      src="assets/brand/logo-square.png" 
                      alt="SustyDigi Logo" 
                      className="w-18 h-18 rounded-2xl object-cover shadow-xl"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=SD&background=4285f4&color=fff&bold=true";
                      }}
                    />
                  </div>
                  <span className="text-[12px] font-black text-[#5f6368] uppercase tracking-[0.25em] leading-tight mb-2 font-ui">Unified<br/>Governance</span>
               </div>
            </div>
            <div className="flex-1 max-w-xl text-left">
               <div key={activeVertical.id} className="animate-[fadeInUp_0.6s_ease-out] bg-white p-12 lg:p-16 rounded-[48px] border border-[#dadce0] shadow-2xl relative overflow-hidden transition-all duration-500 hover:shadow-[0_80px_160px_-40px_rgba(0,0,0,0.1)]">
                  <div className="inline-flex items-center gap-3 mb-10 text-sm font-bold uppercase tracking-widest font-ui" style={{ color: activeVertical.color }}>
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">{activeVertical.icon}</div> 
                    {activeVertical.subtitle}
                  </div>
                  <h3 className="text-3xl lg:text-5xl font-medium text-[#202124] mb-8 tracking-tight font-heading">{activeVertical.title}</h3>
                  <p className="text-[#5f6368] text-xl leading-relaxed mb-12 font-light">{activeVertical.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-16">
                    {activeVertical.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-4 text-[14px] font-bold text-[#3c4043] group cursor-default">
                        <CheckCircle className="w-5 h-5 shrink-0 transition-transform group-hover:scale-110" style={{ color: activeVertical.color }} /> {feat}
                      </div>
                    ))}
                  </div>
                  <Button to="/products" className="w-full group rounded-2xl py-6 text-base font-bold tracking-widest uppercase shadow-2xl transition-all duration-500 hover:-translate-y-1.5" style={{ background: activeVertical.color }}>
                    EXPLORE PLATFORM <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
                  </Button>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white reveal">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-4xl md:text-5xl font-medium text-[#202124] mb-8 font-heading tracking-tight">Uniquely positioned for enterprises</h2>
           <p className="text-xl text-[#5f6368] mb-16 max-w-3xl mx-auto font-light leading-relaxed">The breadth and depth of the SustyDigi suite empower enterprises to adopt a solution-based approach to growth.</p>
           <div className="flex flex-wrap justify-center border-b border-[#dadce0] mb-20">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-10 py-6 text-[15px] font-bold uppercase tracking-widest transition-all relative ${
                    activeTab === idx ? 'text-brand-600' : 'text-[#5f6368] hover:text-[#202124]'
                  }`}
                >
                  {tab}
                  {activeTab === idx && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-600 rounded-t-full animate-fade-in"></div>
                  )}
                </button>
              ))}
           </div>
           <div className="transition-all duration-700">
             {activeTab === 0 && (
               <div className="grid lg:grid-cols-2 gap-24 items-center text-left animate-fade-in">
                  <div>
                    <h3 className="text-3xl font-medium text-[#202124] mb-8 font-heading">Interoperable, customisable, and extensible</h3>
                    <p className="text-lg text-[#5f6368] leading-relaxed mb-12 font-light">
                      With 2,500+ third-party integrations, pre-built extensions, and native API compatibility, it's easy to extend your SustyDigi deployment with existing cloud and on-prem systems.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                      {[
                        { label: 'APIs', icon: <Terminal className="w-6 h-6 text-google-blue" />, desc: 'Integrate apps across your tech stack.' },
                        { label: 'SDKs', icon: <Code className="w-6 h-6 text-google-green" />, desc: 'Build custom web and mobile apps.' },
                        { label: 'Serverless Functions', icon: <Zap className="w-6 h-6 text-google-yellow" />, desc: 'Automate operations at scale.' },
                        { label: 'Workflow Builder', icon: <Layers className="w-6 h-6 text-google-red" />, desc: 'Connect apps with zero code.' },
                        { label: 'Susty Sigma', icon: <Infinity className="w-6 h-6 text-purple-500" />, desc: 'Develop system extensions.' },
                        { label: 'Vertical Platform', icon: <Box className="w-6 h-6 text-cyan-500" />, desc: 'Build industry solutions.' },
                      ].map((item, i) => (
                        <div key={i} className="p-6 border border-[#dadce0] rounded-3xl hover:bg-slate-50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group">
                          <div className="mb-4 transform transition-transform group-hover:scale-110 duration-300">{item.icon}</div>
                          <div className="text-sm font-bold text-[#202124] mb-2 uppercase tracking-widest font-ui group-hover:text-brand-600 transition-colors">{item.label}</div>
                          <div className="text-[12px] text-[#5f6368] leading-tight font-light">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-slate-50 p-16 rounded-[64px] border border-[#dadce0] relative overflow-hidden transition-all duration-700 hover:shadow-2xl group">
                    <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none transform transition-transform group-hover:scale-110 duration-1000">
                       <Workflow className="w-[400px] h-[400px] -translate-y-12 translate-x-12" />
                    </div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center mb-10 transform group-hover:rotate-6 transition-transform">
                        <Box className="w-8 h-8 text-brand-600" />
                      </div>
                      <h4 className="text-2xl font-medium text-[#202124] mb-6 font-heading">Enterprise Hub Integration</h4>
                      <p className="text-lg text-[#5f6368] leading-relaxed mb-10 font-light">Deploy a centralized governance layer that orchestrates all your disparate systems into one unified operational dashboard.</p>
                      <Button variant="outline" className="rounded-xl px-10 py-4 font-bold text-xs uppercase tracking-widest bg-white">View Ecosystem</Button>
                    </div>
                  </div>
               </div>
             )}
             {activeTab === 1 && (
               <div className="grid lg:grid-cols-2 gap-24 items-center text-left animate-fade-in">
                  <div className="bg-white p-12 lg:p-16 rounded-[48px] border border-[#dadce0] shadow-2xl flex flex-col items-center sm:items-start text-center sm:text-left transform transition-transform hover:scale-[1.02] duration-700">
                     <div className="w-24 h-24 bg-slate-100 rounded-3xl mb-10 overflow-hidden shadow-inner flex items-center justify-center">
                        <div className="w-full h-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold text-3xl font-heading shadow-xl">SR</div>
                     </div>
                     <p className="text-[#202124] italic text-2xl mb-10 leading-relaxed font-light">
                       "A CRM deployment of this magnitude would normally require 18 to 24 months... With SustyDigi's low-code strategy, we achieved full operational parity in under 6 months."
                     </p>
                     <div>
                        <div className="font-bold text-[#202124] text-xl font-ui">Shobhana Rani</div>
                        <div className="text-sm text-[#5f6368] font-bold uppercase tracking-widest mt-1 opacity-60">Chief IT Innovation, Tata Group</div>
                     </div>
                     <Link to="/why-us" className="mt-12 text-google-blue font-bold text-sm tracking-[0.2em] uppercase flex items-center gap-2 hover:gap-4 transition-all">
                        LEARN MORE <ArrowRight className="w-5 h-5" />
                     </Link>
                  </div>
                  <div>
                    <h3 className="text-3xl font-medium text-[#202124] mb-8 font-heading">Faster time to value with quicker implementation</h3>
                    <p className="text-xl text-[#5f6368] leading-relaxed mb-12 font-light">
                      We heavily invest in contextual coding with serverless capabilities to reduce the learning curve and shorten the experimentation cycle while maximising ROI.
                    </p>
                    <div className="space-y-8">
                      {[
                        { title: 'Rapid Prototyping', desc: 'Get functional MVPs in weeks, not months.', color: 'text-google-green bg-google-green/10' },
                        { title: 'Managed Deployment', desc: 'Zero-friction handover with full documentation.', color: 'text-google-blue bg-google-blue/10' }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-6 group">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 ${item.color} shadow-sm group-hover:shadow-md`}>
                            <CheckCircle className="w-7 h-7" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-[#202124] mb-1 font-ui">{item.title}</h4>
                            <p className="text-base text-[#5f6368] font-light">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
               </div>
             )}
             {activeTab === 2 && (
               <div className="grid lg:grid-cols-2 gap-24 items-center text-left animate-fade-in">
                  <div>
                    <h3 className="text-3xl font-medium text-[#202124] mb-8 font-heading">Contextually integrated tech stack</h3>
                    <p className="text-xl text-[#5f6368] leading-relaxed mb-12 font-light">
                      SustyDigi's technology is built on a unified and integrated data layer, enabling enterprises to use our microservices across all their apps seamlessly.
                    </p>
                    <ul className="space-y-8">
                      {[
                        "Get a clearer picture of your entire organisation as you add more apps and integrations.",
                        "SustyDigi supports deep, native integrations with nearly every domain of enterprise software.",
                        "Cut down on the time and costs of building bespoke integrations with custom data-sharing connections."
                      ].map((point, i) => (
                        <li key={i} className="flex gap-6 items-start group">
                          <div className={`w-3 h-3 rounded-full mt-2.5 transition-transform group-hover:scale-150 duration-500 ${i === 0 ? 'bg-google-red' : i === 1 ? 'bg-google-blue' : 'bg-google-yellow'}`}></div>
                          <p className="text-lg text-[#3c4043] font-light leading-relaxed">{point}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-center p-8">
                    <div className="relative w-full max-w-sm flex flex-col gap-4 perspective-1000">
                       <div className="h-24 bg-google-red rounded-2xl shadow-2xl border-b-8 border-red-800 flex items-center justify-center text-white font-black text-xl tracking-widest uppercase transform -skew-x-12 hover:-translate-y-2 transition-transform duration-500">User Interface</div>
                       <div className="h-24 bg-google-blue rounded-2xl shadow-2xl border-b-8 border-blue-800 flex items-center justify-center text-white font-black text-xl tracking-widest uppercase transform -skew-x-12 translate-x-6 hover:-translate-y-2 transition-transform duration-500">Service Layer</div>
                       <div className="h-24 bg-google-yellow rounded-2xl shadow-2xl border-b-8 border-yellow-700 flex items-center justify-center text-white font-black text-xl tracking-widest uppercase transform -skew-x-12 translate-x-12 hover:-translate-y-2 transition-transform duration-500">Logic Engine</div>
                       <div className="h-24 bg-google-green rounded-2xl shadow-2xl border-b-8 border-green-800 flex items-center justify-center text-white font-black text-xl tracking-widest uppercase transform -skew-x-12 translate-x-18 hover:-translate-y-2 transition-transform duration-500">Data Lake</div>
                    </div>
                  </div>
               </div>
             )}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
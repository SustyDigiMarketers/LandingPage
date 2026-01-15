import React from 'react';
import { 
  Code, Cloud, Monitor, Headphones, UserCheck, Activity, 
  ShieldCheck, BarChart, Settings, ArrowRight, MousePointer2, 
  Layers, Lock, Server, Zap, Sparkles, CheckCircle2, Search,
  Compass, Shield, Target, MessageSquare, Globe
} from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

interface ServiceGroup {
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
  bgAccent: string;
  capabilities: string[];
}

const ENHANCED_SERVICES: ServiceGroup[] = [
  {
    title: "Identity and Access Management",
    description: "Fortify your perimeter with zero-trust security frameworks and unified identity governance.",
    icon: <UserCheck className="w-7 h-7" />,
    accent: "text-google-blue",
    bgAccent: "bg-blue-50/50",
    capabilities: ["M365 & Active Directory", "MFA & SSO Deployment", "Privileged Access (PAM)", "Zero Trust Architecture"]
  },
  {
    title: "Unified Service Management",
    description: "Streamline IT and enterprise service delivery with AI-orchestrated helpdesk workflows.",
    icon: <Headphones className="w-7 h-7" />,
    accent: "text-google-green",
    bgAccent: "bg-green-50/50",
    capabilities: ["ITSM / ESM Frameworks", "Asset Lifecycle Mgmt", "Omnichannel Support", "SLA Automation"]
  },
  {
    title: "Endpoint Management & Security",
    description: "Consolidate control over every device—from global server clusters to mobile field hardware.",
    icon: <Monitor className="w-7 h-7" />,
    accent: "text-google-red",
    bgAccent: "bg-red-50/50",
    capabilities: ["Desktop/Laptop Ops", "MDM & Browser Control", "Automated Patching", "Vulnerability Assessment"]
  },
  {
    title: "IT Ops & Infrastructure Observability",
    description: "Full-stack visibility with predictive AIOps to ensure 99.99% uptime across all domains.",
    icon: <Activity className="text-google-yellow w-7 h-7" />,
    accent: "text-google-yellow",
    bgAccent: "bg-yellow-50/50",
    capabilities: ["Real-time Infrastructure Monitoring", "Digital Experience Mgmt", "AIOps & Log Analytics", "Network Traffic Visibility"]
  },
  {
    title: "Security Intelligence & Event Mgmt",
    description: "Advanced threat detection and rapid response capabilities powered by behavioral analytics.",
    icon: <ShieldCheck className="w-7 h-7" />,
    accent: "text-purple-600",
    bgAccent: "bg-purple-50/50",
    capabilities: ["Security Log Auditing", "SIEM/SOAR Integration", "UEBA Threat Detection", "Compliance Reporting"]
  },
  {
    title: "Advanced Strategic Analytics",
    description: "Transform raw IT telemetry into actionable business intelligence with deep data correlation.",
    icon: <BarChart className="w-7 h-7" />,
    accent: "text-cyan-600",
    bgAccent: "bg-cyan-50/50",
    capabilities: ["Unified IT Analytics", "Predictive Forecasting", "Executive Dashboards", "Operational Benchmarking"]
  },
  {
    title: "Low-Code Business Automation",
    description: "Accelerate digital transformation with custom-engineered low-code workflows and apps.",
    icon: <Code className="w-7 h-7" />,
    accent: "text-brand-600",
    bgAccent: "bg-brand-50/50",
    capabilities: ["BPM Orchestration", "Rapid App Development", "RPA & API Connectors", "Custom Logic Engines"]
  },
  {
    title: "IT Management for MSPs",
    description: "Professional services and monitoring platforms designed specifically for managed service scale.",
    icon: <Settings className="w-7 h-7" />,
    accent: "text-slate-600",
    bgAccent: "bg-slate-100/50",
    capabilities: ["RMM & PSA Tooling", "Billing & Helpdesk Ops", "Client Portal Mgmt", "Multi-Tenant Governance"]
  },
  {
    title: "Hybrid Cloud Engineering",
    description: "Architecting resilient, secure, and cost-optimized cloud migrations for modern enterprises.",
    icon: <Cloud className="w-7 h-7" />,
    accent: "text-blue-400",
    bgAccent: "bg-blue-50/40",
    capabilities: ["Cloud-Ready Architecture", "Native Containerization", "Multi-Cloud Governance", "Resource Optimization"]
  }
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#004bb1] relative overflow-hidden py-32 lg:py-56 animate-fade-in">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-white/[0.04] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 animate-pulse"></div>
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-400/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
           <svg width="100%" height="100%" className="absolute inset-0 opacity-10">
              <pattern id="dot-grid-service" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                 <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#dot-grid-service)" />
           </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-[#ffb100] font-bold text-[11px] uppercase tracking-[0.3em] mb-10 font-ui border border-white/5 backdrop-blur-md shadow-sm">
                <Sparkles className="w-4 h-4" /> Enterprise Managed Services
              </div>
              <h1 className="text-4xl lg:text-7xl font-medium text-white mb-10 leading-[1.05] tracking-tight font-heading">
                Take total control of your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Digital Ecosystem.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100/80 mb-14 max-w-xl leading-relaxed font-light">
                SustyDigi provides high-fidelity IT governance, security, and automation frameworks designed for global mission-critical operations.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <Button to="/contact" className="bg-[#ffb100] hover:bg-[#e69f00] text-[#202124] px-12 py-6 font-bold rounded-lg uppercase tracking-widest text-sm shadow-2xl transition-all hover:-translate-y-2">
                  REQUEST AUDIT
                </Button>
                <Button to="/products" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-12 py-6 font-bold rounded-lg uppercase tracking-widest text-sm backdrop-blur-xl transition-all">
                  EXPLORE SOLUTIONS
                </Button>
              </div>
            </div>

            <div className="flex-1 relative hidden lg:flex justify-center">
              <div className="relative w-[500px] h-[500px]">
                 <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_30s_linear_infinite]"></div>
                 <div className="absolute inset-16 border border-white/5 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
                 
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative z-20 group">
                       <div className="absolute -inset-10 bg-white/10 rounded-full blur-3xl group-hover:bg-brand-400/20 transition-all duration-1000"></div>
                       <div className="relative z-10 drop-shadow-2xl transform transition-transform group-hover:scale-105 duration-700 w-48 h-48 rounded-[64px] overflow-hidden bg-white/10 backdrop-blur-3xl border border-white/20 flex items-center justify-center">
                          <img 
                            src="/assets/brand/logo-square.png" 
                            alt="Logo" 
                            className="w-32 h-32 object-contain"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=SD&background=fff&color=1a73e8&bold=true&size=128";
                            }}
                          />
                       </div>
                    </div>
                 </div>

                 <div className="absolute top-0 right-10 p-6 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl animate-[bounce_5s_ease-in-out_infinite] hover:scale-110 transition-transform">
                   <Lock className="w-10 h-10 text-[#ffb100]" />
                 </div>
                 <div className="absolute top-1/2 -left-12 p-6 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl animate-[bounce_6s_ease-in-out_infinite] hover:scale-110 transition-transform">
                   <Server className="w-10 h-10 text-google-green" />
                 </div>
                 <div className="absolute bottom-10 right-0 p-6 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl animate-[bounce_4s_ease-in-out_infinite] hover:scale-110 transition-transform">
                   <MousePointer2 className="w-10 h-10 text-google-red" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white relative reveal">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <div className="max-w-3xl mx-auto mb-24">
              <h2 className="text-4xl md:text-5xl font-medium text-[#202124] mb-8 font-heading tracking-tight">Our Strategic Delivery Model</h2>
              <p className="text-xl text-[#5f6368] font-light leading-relaxed">
                Whether it's securing your business or ensuring high availability, our AI-powered IT management solutions resolve challenges across the entire lifecycle.
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
              <div className="hidden md:block absolute top-14 left-0 w-full h-px bg-slate-100 -z-0"></div>
              
              {[
                { title: "Consult", icon: <Compass className="w-7 h-7" />, desc: "Domain-specific architecture audit and risk mapping." },
                { title: "Architect", icon: <Target className="w-7 h-7" />, desc: "Bespoke solution design with full integration scope." },
                { title: "Deploy", icon: <Zap className="w-7 h-7" />, desc: "High-velocity implementation with zero-downtime protocols." },
                { title: "Govern", icon: <Shield className="w-7 h-7" />, desc: "Continuous 24/7 monitoring and operational management." }
              ].map((step, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center group">
                  <div className="w-28 h-28 rounded-[40px] bg-white border border-slate-100 shadow-xl flex items-center justify-center mb-10 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl group-hover:border-google-blue/20">
                     <div className="text-google-blue transform transition-transform group-hover:scale-125 duration-500">{step.icon}</div>
                  </div>
                  <h4 className="text-xl font-bold text-[#202124] mb-4 font-ui group-hover:text-google-blue transition-colors">{step.title}</h4>
                  <p className="text-sm text-[#5f6368] font-light leading-relaxed max-w-[220px]">{step.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <section className="py-32 bg-slate-50 relative overflow-hidden reveal">
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h1v1H0V0zm40 40h1v1h-1v-1z' fill='%231a73e8' fill-opacity='1'/%3E%3C/svg%3E")` }}>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-google-blue/10 text-google-blue font-bold text-[10px] uppercase tracking-widest mb-8 font-ui border border-google-blue/5">
                <Search className="w-4 h-4" /> Capability Index
             </div>
             <h2 className="text-4xl md:text-6xl font-medium text-[#202124] tracking-tight font-heading leading-tight">Complete Service Portfolio</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {ENHANCED_SERVICES.map((service, idx) => (
              <div 
                key={idx} 
                className="group bg-white p-12 border border-slate-200 rounded-[48px] hover:border-google-blue transition-all duration-700 hover:shadow-[0_60px_100px_-30px_rgba(0,0,0,0.08)] hover:-translate-y-3 flex flex-col h-full relative overflow-hidden"
              >
                <div className={`absolute inset-0 ${service.bgAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
                <div className="relative z-10">
                  <div className={`mb-10 w-16 h-16 ${service.bgAccent} ${service.accent} rounded-3xl flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 shadow-sm border border-slate-50 group-hover:bg-white group-hover:shadow-xl`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#202124] mb-5 font-ui leading-tight group-hover:text-google-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-lg text-[#5f6368] leading-relaxed mb-10 font-light h-24 overflow-hidden">
                    {service.description}
                  </p>
                  <div className="space-y-4 pt-8 border-t border-slate-100 group-hover:border-white transition-colors">
                    {service.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-4 group/item">
                         <CheckCircle2 className={`w-5 h-5 shrink-0 ${service.accent} opacity-40 group-hover/item:opacity-100 transition-opacity`} />
                         <span className="text-[14px] font-medium text-slate-600 group-hover/item:text-slate-900 transition-colors">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-12 pt-8 relative z-10">
                   <Link to="/contact" className={`text-[12px] font-bold ${service.accent} uppercase tracking-[0.25em] flex items-center gap-2 transition-all hover:gap-4 font-ui`}>
                      LEARN MORE <ArrowRight className="w-5 h-5" />
                   </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-32 text-center">
            <Link to="/products">
              <button className="bg-google-red hover:bg-[#d93025] text-white px-16 py-6 font-bold text-base uppercase tracking-widest shadow-2xl rounded-xl transition-all hover:-translate-y-2 hover:scale-105 active:scale-95">
                Explore Product Integration
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-900 text-white relative overflow-hidden reveal">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-medium mb-10 font-heading tracking-tight leading-tight">
             Ready to optimize your <span className="text-google-blue">IT Architecture?</span>
          </h2>
          <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
             Join 500+ enterprises that have consolidated their digital services with SustyDigi. Let's engineer a more resilient future.
          </p>
          <Button to="/contact" className="px-16 py-6 text-lg font-bold shadow-2xl rounded-2xl transition-all hover:scale-110 active:scale-95 bg-google-blue hover:bg-[#185abc] border-none text-white uppercase tracking-[0.2em]">
             Start Strategy Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
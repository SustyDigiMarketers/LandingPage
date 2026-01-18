import React from 'react';
import { 
  Code, 
  Cloud, 
  ShieldCheck, 
  BarChart3, 
  Layers, 
  Smartphone, 
  Globe, 
  Cpu, 
  Lock,
  Monitor,
  Share2,
  Megaphone,
  Palette,
  ShoppingCart
} from 'lucide-react';

export const COLORS = {
  primary: '#1A73E8',
  secondary: '#EA4335',
  accent1: '#FBBC05',
  accent2: '#34A853',
  text: '#3C4043',
  heading: '#202124',
  bg: '#F8F9FA'
};

export const SERVICES_DATA = [
  {
    id: 'website-dev',
    title: 'Website Development',
    description: 'High-performance, responsive websites engineered for speed, SEO, and global accessibility.',
    icon: <Monitor className="w-8 h-8 text-google-blue" />,
    path: '/services/website'
  },
  {
    id: 'app-dev',
    title: 'Application Development',
    description: 'Native and cross-platform mobile applications that provide seamless user experiences across devices.',
    icon: <Smartphone className="w-8 h-8 text-google-red" />,
    path: '/services/apps'
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    description: 'Strategic community building and content management to scale your brand presence across social nodes.',
    icon: <Share2 className="w-8 h-8 text-google-yellow" />,
    path: '/services/social'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud/DevOps',
    description: 'Infrastructure automation and cloud-native architecture on GCP and AWS for zero-downtime operations.',
    icon: <Cloud className="w-8 h-8 text-google-green" />,
    path: '/services/cloud'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Data-driven growth strategies and multi-channel campaigns designed to maximize ROI and acquisition.',
    icon: <Megaphone className="w-8 h-8 text-google-blue" />,
    path: '/services/marketing'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Enterprise-grade security audits, threat detection, and compliance frameworks to protect your digital assets.',
    icon: <ShieldCheck className="w-8 h-8 text-google-red" />,
    path: '/services/security'
  },
  {
    id: 'branding',
    title: 'Branding',
    description: 'Identity systems and visual narratives that distinguish your enterprise in a competitive global landscape.',
    icon: <Palette className="w-8 h-8 text-google-yellow" />,
    path: '/services/branding'
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce Application',
    description: 'Scalable online storefronts with integrated payment gateways and optimized checkout flows for high conversion.',
    icon: <ShoppingCart className="w-8 h-8 text-google-green" />,
    path: '/services/ecommerce'
  }
];

export const PRODUCTS_DATA = [
  {
    id: 'nexus-pro',
    name: 'NexusFlow',
    tagline: 'Operational Efficiency Redefined',
    benefit: 'Automate your enterprise workflow in minutes.',
    price: '$49/mo',
    features: ['Workflow Automation', 'Real-time Analytics', 'Role-based Access', 'API First']
  },
  {
    id: 'secure-vault',
    name: 'GuardianGuard',
    tagline: 'Security at the Edge',
    benefit: 'Next-gen threat detection for SaaS platforms.',
    price: '$199/mo',
    features: ['Endpoint Protection', 'Zero Trust Auth', 'Compliance Logs', '24/7 Monitoring']
  },
  {
    id: 'insight-hub',
    name: 'DataPulse',
    tagline: 'Decision-making with Data',
    benefit: 'Visual insights for non-technical stakeholders.',
    price: '$99/mo',
    features: ['Custom Dashboards', 'AI Predictions', 'Export to PDF/CSV', 'Data Connectors']
  }
];
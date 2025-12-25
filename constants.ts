import { Product, Service, Industry, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Our Stack', path: '/products' },
  { label: 'Core Services', path: '/services' },
  { label: 'Verticals', path: '/industries' },
  { label: 'Our DNA', path: '/why-us' },
  { label: 'Connect', path: '/contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'business-websites',
    name: 'Engineered Web Platforms',
    shortDescription: 'Operational websites designed for enterprise lead capture and conversion.',
    fullDescription: 'We don\'t just build sites; we build high-availability platforms. Integrated directly with your CRM and ERP, our web solutions serve as the primary engine for your digital operations.',
    targetIndustries: ['Healthcare', 'Retail', 'Wholesale', 'Trading'],
    features: [
      'High-Availability Architecture',
      'Operational CRM Integration',
      'Core Web Vitals Optimized',
      'Dynamic Lead Routing',
      'Multi-Layered Security Protocols'
    ],
    workflow: {
      before: 'Static presence with disconnected lead flows.',
      after: 'Unified operational hub with automated conversion tracking.'
    },
    iconName: 'Layout',
    status: 'Available'
  },
  {
    id: 'crm-lead-management',
    name: 'Precision Sales CRM',
    shortDescription: 'Total pipeline governance from inquiry to final settlement.',
    fullDescription: 'A bespoke implementation of world-class CRM tools tailored to the specific friction points of high-volume trading and wholesale distribution.',
    targetIndustries: ['Trading', 'Wholesale', 'Real Estate'],
    features: [
      'Visual Pipeline Governance',
      'Automated Engagement Reminders',
      'Bespoke Sales Dashboards',
      'Full Communication History',
      'Revenue Performance Auditing'
    ],
    workflow: {
      before: 'Fragmented data and missed follow-up windows.',
      after: 'Absolute transparency and automated sales acceleration.'
    },
    iconName: 'Users',
    status: 'Assisted Solution'
  },
  {
    id: 'billing-invoicing',
    name: 'Automated Revenue Ops',
    shortDescription: 'Zero-touch invoicing and financial reconciliation systems.',
    fullDescription: 'Eliminate manual errors and collection delays. Our billing systems automate the entire revenue lifecycle, from quotation to multi-currency settlement.',
    targetIndustries: ['Wholesale', 'Services', 'Retail'],
    features: [
      'Automated Billing Cycles',
      'Global Payment Gateways',
      'Digital Tax Compliance',
      'Instant Reconciliation',
      'Liquidity Forecasting'
    ],
    workflow: {
      before: 'Manual invoice generation and slow payment matching.',
      after: 'Touchless revenue capture and real-time ledger updates.'
    },
    iconName: 'CreditCard',
    status: 'Available'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'website-development',
    name: 'Platform Engineering',
    shortDescription: 'High-performance digital foundations for modern scale.',
    details: {
      scope: ['Architecture Audit', 'Full-Stack Development', 'API Orchestration', 'Vulnerability Testing'],
      timeline: '6-10 Weeks',
      bestFor: 'Organizations requiring mission-critical digital infrastructure.',
      pricing: 'Professional Tier'
    },
    iconName: 'Code'
  },
  {
    id: 'automation-ai',
    name: 'Workflow Orchestration',
    shortDescription: 'Intelligent automation to eliminate operational friction.',
    details: {
      scope: ['Process Mining', 'Integration Engineering', 'AI-Driven Chatbots', 'Workflow Documentation'],
      timeline: '4-8 Weeks',
      bestFor: 'Operations-heavy businesses with manual administrative overhead.',
      pricing: 'Project Based'
    },
    iconName: 'Cpu'
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'healthcare',
    name: 'Medical Systems',
    description: 'Compliant digital workflows designed to enhance patient outcomes and operational security.',
    challenges: [
      'Patient Engagement Gaps',
      'Data Fragmentation',
      'Regulatory Compliance Risks'
    ],
    solutions: [
      'Encrypted Patient Portals',
      'Automated Reminder Protocols',
      'Compliance-First CRM Systems'
    ],
    complianceNote: 'All healthcare implementations adhere to global data protection standards (GDPR/HIPAA).',
    iconName: 'HeartPulse'
  },
  {
    id: 'trading',
    name: 'Global Trading',
    description: 'Real-time infrastructure for supply chains, inventory, and cross-border distribution.',
    challenges: [
      'Supply Chain Volatility',
      'Inventory Discrepancies',
      'Fragmented Communication'
    ],
    solutions: [
      'Live Stock Tracking',
      'Vendor Engagement Portals',
      'Automated Customs Documentation'
    ],
    iconName: 'BarChart2'
  }
];
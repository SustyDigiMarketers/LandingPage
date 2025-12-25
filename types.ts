import { LucideIcon } from "lucide-react";

export interface Feature {
  title: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  targetIndustries: string[];
  features: string[];
  workflow: {
    before: string;
    after: string;
  };
  iconName: string; // Mapping string to icon in component
  status?: "Available" | "Assisted Solution" | "In Development";
}

export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  details: {
    scope: string[];
    timeline: string;
    bestFor: string;
    pricing: string;
  };
  iconName: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  challenges: string[];
  solutions: string[];
  complianceNote?: string;
  iconName: string;
}

export interface NavItem {
  label: string;
  path: string;
}
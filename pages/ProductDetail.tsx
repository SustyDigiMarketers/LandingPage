import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Check, ArrowRight, ArrowLeft } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import { PRODUCTS } from '../constants';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb / Back */}
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/products" className="inline-flex items-center text-sm text-slate-500 hover:text-brand-700">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Products
          </Link>
        </div>
      </div>

      {/* Hero */}
      <Section>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-sm font-medium">
                {product.status || "Product"}
              </span>
              {product.targetIndustries.map(ind => (
                 <span key={ind} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hidden sm:inline-block">
                  {ind}
                </span>
              ))}
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-6">
              {product.name}
            </h1>
            <p className="text-xl text-slate-500 mb-8">
              {product.fullDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact">Request Demo</Button>
              <Button to="/contact" variant="outline">Ask a Question</Button>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Workflow Transformation</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">✕</div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-900 uppercase">Before</h4>
                  <p className="text-slate-600">{product.workflow.before}</p>
                </div>
              </div>
              <div className="flex justify-center">
                <ArrowRight className="text-slate-300 transform rotate-90 sm:rotate-0" />
              </div>
              <div className="flex gap-4">
                 <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">✓</div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-900 uppercase">After</h4>
                  <p className="text-slate-600">{product.workflow.after}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section bgColor="light">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {product.features.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200 flex items-start">
              <Check className="h-6 w-6 text-brand-600 mr-3 flex-shrink-0" />
              <span className="text-slate-700 font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Bottom */}
      <Section>
        <div className="bg-gradient-to-br from-slate-900 to-brand-900 rounded-2xl p-8 md:p-16 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to implement {product.name}?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss how this fits into your current business model.
          </p>
          <Button to="/contact" className="bg-white text-slate-900 hover:bg-slate-100">
            Get Started
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default ProductDetail;
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
  };

  const filteredNavItems = NAV_ITEMS.filter(
    (item) => item.label !== 'Home' && item.label !== 'Our DNA'
  );

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#dadce0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
              <div className="shrink-0">
                <img 
                  src="assets/brand/logo.png" 
                  alt="SustyDigi Logo" 
                  className="w-10 h-10 rounded-xl object-cover shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=SD&background=4285f4&color=fff&bold=true";
                  }}
                />
              </div>
              
              <div className="flex flex-col justify-center leading-none min-w-fit">
                <span className="font-medium text-[20px] text-[#5f6368] tracking-tight whitespace-nowrap">
                  SustyDigi <span className="text-[#3c4043] font-bold">Marketers</span>
                </span>
                <div className="flex justify-between items-center text-[10px] font-bold uppercase mt-1.5 font-ui w-full">
                  <span className="text-google-blue">Innovate</span>
                  <span className="text-google-red text-[13px] leading-none mx-0.5">•</span>
                  <span className="text-google-yellow">Integrate</span>
                  <span className="text-google-green text-[13px] leading-none mx-0.5">•</span>
                  <span className="text-google-blue">Inspire</span>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-1">
            {filteredNavItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`text-sm font-medium transition-colors rounded-md px-4 py-2 ${
                    isActive 
                      ? 'text-brand-600 bg-brand-50' 
                      : 'text-[#5f6368] hover:bg-[#f8f9fa] hover:text-[#202124]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Button to="/contact" variant="primary" className="hidden md:block">
              Get Started
            </Button>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-[#5f6368] hover:bg-[#f8f9fa] rounded-full">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-[#dadce0] overflow-y-auto max-h-screen">
          <div className="px-4 py-6 space-y-1">
            {filteredNavItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={closeMenu}
                className="block px-4 py-4 text-[#5f6368] text-lg font-medium hover:bg-[#f8f9fa] rounded-md transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-6 mt-6 border-t border-[#f1f3f4]">
               <Button to="/contact" className="w-full py-4 text-base" onClick={closeMenu}>Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
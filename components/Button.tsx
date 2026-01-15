
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  // Added style prop to allow custom inline styles for dynamic background colors
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '',
  type = 'button',
  style
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-2.5 border text-sm font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500";
  
  const variants = {
    primary: "border-transparent text-white bg-[#1a73e8] hover:bg-[#185abc] hover:shadow-md",
    outline: "border-[#dadce0] text-[#1a73e8] bg-white hover:bg-brand-50 hover:border-brand-200",
    ghost: "border-transparent text-[#5f6368] hover:text-[#1a73e8] hover:bg-brand-50"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} style={style}>
      {children}
    </button>
  );
};

export default Button;

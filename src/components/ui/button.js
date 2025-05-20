import React from 'react';

export function Button({ 
  children, 
  type = 'button', 
  variant = 'primary', 
  size = 'medium', 
  className = '',
  ...props 
}) {
  // Base styles with improved transitions, focus states, and interaction feedback
  const baseStyles = "font-medium inline-flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 select-none";
  
  // Enhanced variant styles with better shadows and hover effects
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 border border-transparent shadow-md hover:shadow-lg",
    secondary: "bg-white text-blue-700 hover:bg-blue-50 active:bg-blue-100 border border-blue-200 hover:border-blue-300 shadow hover:shadow-md",
    outline: "bg-transparent text-blue-600 hover:bg-blue-50 active:bg-blue-100 border-2 border-blue-300 hover:border-blue-400 hover:shadow",
    ghost: "bg-transparent text-blue-600 hover:bg-blue-50 active:bg-blue-100 border border-transparent hover:shadow-sm",
    danger: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 border border-transparent shadow-md hover:shadow-lg",
    link: "bg-transparent text-blue-600 hover:text-blue-800 underline hover:no-underline p-0 shadow-none hover:shadow-none transform-none hover:scale-100 active:scale-100",
  };
  
  // Improved size styles with better padding and rounded corners
  const sizeStyles = {
    small: "text-sm px-3.5 py-2 rounded-lg font-medium",
    medium: "text-base px-5 py-2.5 rounded-xl font-semibold",
    large: "text-lg px-7 py-3.5 rounded-2xl font-semibold tracking-wide",
  };
  
  // Combine all styles
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  return (
    <button
      type={type}
      className={buttonStyles}
      {...props}
    >
      {children}
    </button>
  );
}

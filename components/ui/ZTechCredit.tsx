"use client";

import React from 'react';

/**
 * Z Tech Lanka Credit Bar Component
 * A minimal, one-line footer credit that provides ethical backlinks
 *
 * Props:
 * - variant: 'gradient' | 'dark' | 'light' | 'accent'
 * - className: Additional Tailwind classes
 */

interface ZTechCreditProps {
  variant?: 'gradient' | 'dark' | 'light' | 'accent';
  className?: string;
}

const ZTechCredit: React.FC<ZTechCreditProps> = ({
  variant = 'gradient',
  className = ''
}) => {
  const variants = {
    gradient: 'bg-gradient-to-r from-brand-900 to-brand-700',
    dark: 'bg-gray-900',
    light: 'bg-gray-100 text-gray-700',
    accent: 'bg-gradient-to-r from-indigo-600 to-purple-600'
  };

  const baseClasses = "w-full py-3 px-5 text-center text-sm transition-all duration-300";
  const variantClasses = variants[variant];
  const textColor = variant === 'light' ? 'text-gray-700' : 'text-gray-200';

  return (
    <div className={`${baseClasses} ${variantClasses} ${className}`}>
      <div className={`${textColor} font-medium tracking-wide`}>
        Built by 🧑‍💻{' '}
        <a
          href="https://ztechlanka.com?utm_source=hijatravels&utm_medium=footer_credit&utm_campaign=client_backlinks"
          target="_blank"
          rel="noopener noreferrer"
          className={`font-semibold hover:underline transition-all duration-300 ${
            variant === 'light' 
              ? 'text-purple-600 hover:text-purple-800' 
              : 'text-white hover:text-yellow-300'
          }`}
          title="Z Tech Lanka - Next-Level Tech for Gen Z"
        >
          Z Tech Lanka
        </a>{' '}
        with 💛
      </div>
    </div>
  );
};

export default ZTechCredit;


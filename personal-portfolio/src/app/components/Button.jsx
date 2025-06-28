import React from 'react'
import Link from 'next/link'

function Button({ 
  children, 
  width = 'w-auto', 
  height = 'h-10', 
  bgColor = 'bg-blue-500', 
  textSize = 'text-lg',
  textColor = 'text-white', 
  borderColor = 'border-transparent', 
  borderWidth = 'border',
  hoverBgColor = 'hover:bg-blue-600',
  hoverTextColor = 'hover:text-white',
  rounded = 'rounded-3xl',
  fontWeight = 'font-bold',
  className = '',
  href = '',
  isExternal = false,
  onClick,
  ...props 
}) {
  const buttonClasses = `
    ${width} 
    ${height} 
    ${bgColor} 
    ${textSize}
    ${textColor} 
    ${borderColor} 
    ${borderWidth}
    ${hoverBgColor} 
    ${hoverTextColor} 
    ${rounded} 
    px-4 
    py-2 
    font-medium 
    transition-colors 
    duration-200 
    cursor-pointer
    text-center
    ${fontWeight}
    ${className}
  `;

  const buttonStyle = {
    fontWeight: fontWeight === 'font-black' ? '900' : 
               fontWeight === 'font-bold' ? '700' : 
               fontWeight === 'font-semibold' ? '600' : '400'
  };

  const handleSectionClick = (e) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (href) {
    if (href.startsWith('#')) {
      return (
        <a 
          href={href}
          className={buttonClasses}
          style={buttonStyle}
          onClick={handleSectionClick}
          {...props}
        >
          {children}
        </a>
      );
    }
    if (isExternal) {
      return (
        <a 
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
          style={buttonStyle}
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link 
        href={href}
        className={buttonClasses}
        style={buttonStyle}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={buttonClasses}
      style={buttonStyle}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button
import React from 'react'

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
  ...props 
}) {
  return (
    <button 
      className={`
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
        ${fontWeight}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
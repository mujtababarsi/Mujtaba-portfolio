import React from 'react';

// CustomCursor component provides a custom cursor effect.
// Currently, it's a simple, non-functional div.
// In a full application, this would include JavaScript logic for cursor movement and styling.
export default function CustomCursor({ isDarkMode }) {
  return (
    <div
      className={`hidden md:block fixed pointer-events-none z-50 rounded-full transition-all duration-100 ease-out
        ${isDarkMode ? 'bg-cyan-400' : 'bg-pink-400'} opacity-50`}
      style={{ width: '20px', height: '20px', transform: 'translate(-50%, -50%)' }}
    ></div>
  );
}

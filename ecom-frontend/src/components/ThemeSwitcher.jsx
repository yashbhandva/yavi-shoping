import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { THEMES } from '../contexts/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const buttonRef = useRef(null);

  // Ensure the button is focusable and clickable immediately
  useEffect(() => {
    if (buttonRef.current) {
      // Force a reflow to ensure styles are applied
      buttonRef.current.style.display = 'none';
      buttonRef.current.offsetHeight; // Trigger reflow
      buttonRef.current.style.display = '';
    }
  }, []);

  const getThemeIcon = () => {
    return THEMES[theme]?.icon || '🌞';
  };

  const getThemeName = () => {
    return THEMES[theme]?.name || 'Theme';
  };

  // Get the current accent color from the theme
  const getButtonStyle = () => {
    const accentColor = THEMES[theme]?.colors?.accent || '#3B82F6';
    return {
      backgroundColor: accentColor,
      '--tw-ring-color': `${accentColor}80`, // 50% opacity for focus ring
    };
  };

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      style={getButtonStyle()}
      className={`
        theme-switcher 
        px-4 py-2 rounded-full 
        transition-all duration-300 ease-in-out
        hover:opacity-85
        text-white
        focus:outline-none focus:ring-2 focus:ring-offset-2
        flex items-center justify-center
        min-w-[120px]
        z-10
        relative
        active:scale-95
      `}
      aria-label={`Toggle theme (Current: ${getThemeName()})`}
    >
      <span className="mr-2" aria-hidden="true">
        {getThemeIcon()}
      </span>
      <span className="capitalize">
        {getThemeName()}
      </span>
    </button>
  );
};

export default ThemeSwitcher;

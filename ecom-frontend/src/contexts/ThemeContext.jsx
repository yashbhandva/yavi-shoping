import { createContext, useContext, useLayoutEffect, useState } from 'react';

const ThemeContext = createContext();

const THEMES = {
  light: {
    name: 'Light',
    bg: '#ffffff',
    text: '#1f2937',
    accent: '#3b82f6'
  },
  dark: {
    name: 'Dark',
    bg: '#1f2937',
    text: '#f9fafb',
    accent: '#60a5fa'
  },
  custom: {
    name: 'Custom',
    bg: '#f3e8ff',
    text: '#581c87',
    accent: '#8b5cf6'
  }
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const getContrastColor = (hexColor) => {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? '#000000' : '#ffffff';
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  
  const [customColor, setCustomColor] = useState(() => {
    return localStorage.getItem('customColor') || '#8b5cf6';
  });

  useLayoutEffect(() => {
    if (theme === 'custom') {
      const textColor = getContrastColor(customColor);
      document.documentElement.style.setProperty('--bg-color', customColor);
      document.documentElement.style.setProperty('--text-color', textColor);
      document.documentElement.style.setProperty('--accent-color', customColor);
    } else {
      const currentTheme = THEMES[theme];
      document.documentElement.style.setProperty('--bg-color', currentTheme.bg);
      document.documentElement.style.setProperty('--text-color', currentTheme.text);
      document.documentElement.style.setProperty('--accent-color', currentTheme.accent);
    }
    localStorage.setItem('theme', theme);
    localStorage.setItem('customColor', customColor);
  }, [theme, customColor]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, customColor, setCustomColor, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};
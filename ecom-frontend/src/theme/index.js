export const lightTheme = {
  background: {
    primary: '#FFFFFF',
    secondary: '#F3F4F6', // light gray
  },
  text: {
    primary: '#111827',   // Dark Gray
    secondary: '#374151', // Medium Gray
  },
  accent: {
    primary: '#2563EB',   // Blue
    hover: '#1D4ED8',     // Darker Blue for hover states
  },
  border: {
    light: '#E5E7EB',     // Light border
    dark: '#D1D5DB',      // Dark border
  },
  state: {
    success: '#10B981',   // Green
    error: '#EF4444',     // Red
    warning: '#F59E0B',   // Yellow
  },
};

export const darkTheme = {
  background: {
    primary: '#111827',   // Dark Gray
    secondary: '#1F2937', // Slightly lighter dark gray
  },
  text: {
    primary: '#F9FAFB',   // Almost White
    secondary: '#D1D5DB', // Light Gray
  },
  accent: {
    primary: '#60A5FA',   // Light Blue
    hover: '#3B82F6',     // Slightly darker blue for hover states
  },
  border: {
    light: '#374151',     // Dark border
    dark: '#4B5563',      // Lighter dark border
  },
  state: {
    success: '#34D399',   // Light Green
    error: '#F87171',     // Light Red
    warning: '#FBBF24',   // Light Yellow
  },
};

export const theme = {
  light: lightTheme,
  dark: darkTheme,
};

// Add theme type to window for debugging
if (typeof window !== 'undefined') {
  window.__THEME__ = theme;
}

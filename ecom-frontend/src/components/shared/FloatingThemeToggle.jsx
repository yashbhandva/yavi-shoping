import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';

const FloatingThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full theme-accent-bg text-white shadow-lg hover:opacity-85 transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <FaSun size={24} /> : <FaMoon size={24} />}
    </button>
  );
};

export default FloatingThemeToggle;
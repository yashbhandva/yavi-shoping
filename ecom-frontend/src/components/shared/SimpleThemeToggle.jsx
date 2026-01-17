import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';

const SimpleThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full theme-accent-bg text-white hover:opacity-85 transition-opacity duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
};

export default SimpleThemeToggle;
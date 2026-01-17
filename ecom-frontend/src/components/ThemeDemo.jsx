import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './shared/ThemeToggle';

const ThemeDemo = () => {
  const { theme, currentTheme, minimalistVariant } = useTheme();

  return (
    <div className="min-h-screen theme-bg-primary transition-all duration-300">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold theme-text-primary">
            Theme System Demo
          </h1>
          <ThemeToggle />
        </div>

        {/* Current Theme Info */}
        <div className="theme-bg-card theme-shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold theme-text-primary mb-4">
            Current Theme: {currentTheme.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-2"
                style={{ backgroundColor: theme === 'minimalist' && minimalistVariant === 'dark' 
                  ? currentTheme.colors.backgroundDark 
                  : currentTheme.colors.background }}
              />
              <p className="theme-text-secondary text-sm">Background</p>
            </div>
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-2"
                style={{ backgroundColor: currentTheme.colors.text }}
              />
              <p className="theme-text-secondary text-sm">Text</p>
            </div>
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-2"
                style={{ backgroundColor: currentTheme.colors.accent }}
              />
              <p className="theme-text-secondary text-sm">Accent</p>
            </div>
          </div>
        </div>

        {/* Sample Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="theme-bg-card theme-shadow theme-shadow-hover rounded-lg p-6 border theme-border">
            <h3 className="text-lg font-semibold theme-text-primary mb-2">
              Sample Card
            </h3>
            <p className="theme-text-secondary mb-4">
              This card demonstrates the theme colors and smooth transitions.
            </p>
            <button className="theme-accent-bg text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
              Action Button
            </button>
          </div>

          {/* Card 2 */}
          <div className="theme-bg-card theme-shadow theme-shadow-hover rounded-lg p-6 border theme-border">
            <h3 className="text-lg font-semibold theme-text-primary mb-2">
              Text Contrast
            </h3>
            <p className="theme-text-primary mb-2">Primary text for high readability</p>
            <p className="theme-text-secondary mb-2">Secondary text for descriptions</p>
            <p className="theme-text-muted">Muted text for less important info</p>
          </div>

          {/* Card 3 */}
          <div className="theme-bg-card theme-shadow theme-shadow-hover rounded-lg p-6 border theme-border">
            <h3 className="text-lg font-semibold theme-text-primary mb-2">
              Interactive Elements
            </h3>
            <div className="space-y-3">
              <a href="#" className="block theme-accent hover:underline">
                Accent colored link
              </a>
              <div className="flex gap-2">
                <button className="px-3 py-1 border theme-border theme-text-primary rounded hover:theme-bg-secondary transition-colors">
                  Secondary
                </button>
                <button className="px-3 py-1 theme-accent-bg text-white rounded hover:opacity-90 transition-opacity">
                  Primary
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Theme Features */}
        <div className="mt-8 theme-bg-secondary rounded-lg p-6">
          <h2 className="text-xl font-semibold theme-text-primary mb-4">
            Theme Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium theme-text-primary mb-2">🌞 Light Mode</h4>
              <p className="theme-text-secondary text-sm">Clean, bright interface with high contrast</p>
            </div>
            <div>
              <h4 className="font-medium theme-text-primary mb-2">🌙 Dark Mode</h4>
              <p className="theme-text-secondary text-sm">Easy on the eyes with cyan accents</p>
            </div>
            <div>
              <h4 className="font-medium theme-text-primary mb-2">🎨 Minimalist Mode</h4>
              <p className="theme-text-secondary text-sm">Clean design with purple accents, light/dark variants</p>
            </div>
            <div>
              <h4 className="font-medium theme-text-primary mb-2">⚡ Smooth Transitions</h4>
              <p className="theme-text-secondary text-sm">No flicker, seamless theme switching</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeDemo;
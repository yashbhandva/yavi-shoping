import { useTheme } from '../contexts/ThemeContext';

const ThemeUsageGuide = () => {
  const { theme } = useTheme();

  const codeExamples = [
    {
      title: "Basic Theme Classes",
      code: `// Background colors
<div className="theme-bg-primary">Primary background</div>
<div className="theme-bg-secondary">Secondary background</div>
<div className="theme-bg-card">Card background</div>

// Text colors
<h1 className="theme-text-primary">Primary text</h1>
<p className="theme-text-secondary">Secondary text</p>
<span className="theme-text-muted">Muted text</span>`
    },
    {
      title: "Accent Colors",
      code: `// Accent colors
<button className="theme-accent-bg text-white">Accent Button</button>
<a href="#" className="theme-accent">Accent Link</a>
<div className="border theme-accent-border">Accent Border</div>`
    },
    {
      title: "Shadows and Effects",
      code: `// Shadows
<div className="theme-shadow">Basic shadow</div>
<div className="theme-shadow-hover">Hover shadow effect</div>

// Borders
<div className="border theme-border">Themed border</div>`
    },
    {
      title: "Using Theme Context",
      code: `import { useTheme } from '../contexts/ThemeContext';

const MyComponent = () => {
  const { theme, setTheme, currentTheme } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme('dark')}>
        Switch to Dark
      </button>
    </div>
  );
};`
    }
  ];

  return (
    <div className="theme-bg-primary min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold theme-text-primary mb-8">
          Theme System Usage Guide
        </h1>
        
        <div className="space-y-8">
          {codeExamples.map((example, index) => (
            <div key={index} className="theme-bg-card theme-shadow rounded-lg p-6 border theme-border">
              <h2 className="text-xl font-semibold theme-text-primary mb-4">
                {example.title}
              </h2>
              <pre className="theme-bg-secondary p-4 rounded-md overflow-x-auto">
                <code className="theme-text-primary text-sm">
                  {example.code}
                </code>
              </pre>
            </div>
          ))}
        </div>

        <div className="mt-8 theme-bg-card theme-shadow rounded-lg p-6 border theme-border">
          <h2 className="text-xl font-semibold theme-text-primary mb-4">
            Available Theme Modes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 theme-bg-secondary rounded-lg">
              <h3 className="font-semibold theme-text-primary mb-2">🌞 Light Mode</h3>
              <ul className="theme-text-secondary text-sm space-y-1">
                <li>Background: #F9FAFB</li>
                <li>Text: #111827</li>
                <li>Accent: #3B82F6 (blue)</li>
              </ul>
            </div>
            <div className="p-4 theme-bg-secondary rounded-lg">
              <h3 className="font-semibold theme-text-primary mb-2">🌙 Dark Mode</h3>
              <ul className="theme-text-secondary text-sm space-y-1">
                <li>Background: #0F172A</li>
                <li>Text: #F9FAFB</li>
                <li>Accent: #06B6D4 (cyan)</li>
              </ul>
            </div>
            <div className="p-4 theme-bg-secondary rounded-lg">
              <h3 className="font-semibold theme-text-primary mb-2">🎨 Minimalist Mode</h3>
              <ul className="theme-text-secondary text-sm space-y-1">
                <li>Background: #FFFFFF/#111827</li>
                <li>Text: #6B7280 (neutral gray)</li>
                <li>Accent: #8B5CF6 (purple)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeUsageGuide;
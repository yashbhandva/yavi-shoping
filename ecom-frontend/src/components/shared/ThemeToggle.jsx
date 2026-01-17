import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme, customColor, setCustomColor, themes } = useTheme();

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleColorChange = (e) => {
    setCustomColor(e.target.value);
  };

  return (
    <div className="flex items-center gap-2">
      <select 
        value={theme} 
        onChange={handleThemeChange}
        className="px-3 py-1 rounded border"
        style={{ 
          backgroundColor: 'var(--bg-color)', 
          color: 'var(--text-color)',
          borderColor: 'var(--accent-color)'
        }}
      >
        {Object.entries(themes).map(([key, themeData]) => (
          <option key={key} value={key}>
            {themeData.name}
          </option>
        ))}
      </select>
      
      {theme === 'custom' && (
        <input
          type="color"
          value={customColor}
          onChange={handleColorChange}
          className="w-8 h-8 rounded border cursor-pointer"
          title="Choose custom color"
        />
      )}
    </div>
  );
};

export default ThemeToggle;
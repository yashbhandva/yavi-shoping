const ThreeScene = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Rotating Cube */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-16 h-16 rotating-cube" style={{ backgroundColor: 'var(--accent-color)' }} />
      </div>
      
      {/* Floating Spheres */}
      <div className="absolute top-1/3 left-1/4">
        <div className="w-12 h-12 rounded-full floating-sphere" style={{ backgroundColor: 'var(--accent-color)', opacity: 0.7 }} />
      </div>
      
      <div className="absolute top-2/3 right-1/4">
        <div className="w-10 h-10 rounded-full floating-sphere-2" style={{ backgroundColor: 'var(--accent-color)', opacity: 0.5 }} />
      </div>
    </div>
  );
};

export default ThreeScene;
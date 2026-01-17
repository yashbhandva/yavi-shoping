import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="relative">
      {/* Transition overlay */}
      <div className={`fixed inset-0 bg-gradient-to-r from-purple-600 to-blue-600 z-50 transition-all duration-500 ${
        isTransitioning ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex items-center justify-center h-full">
          <div className="text-white text-center animate-zoom-in">
            <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-xl font-bold animate-sparkle">✨ Loading Magic ✨</p>
          </div>
        </div>
      </div>

      {/* Page content */}
      <div className={`transition-all duration-500 ${
        isTransitioning ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100 animate-page-slide'
      }`}>
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
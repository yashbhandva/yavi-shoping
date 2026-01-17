import { useEffect, useState } from 'react';
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle, FaTimes } from 'react-icons/fa';

const AnimatedNotification = ({ type = 'success', message, onClose, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success': return <FaCheckCircle className="text-green-500 animate-sparkle" />;
      case 'error': return <FaExclamationTriangle className="text-red-500 animate-shake" />;
      case 'info': return <FaInfoCircle className="text-blue-500 animate-tilt" />;
      default: return <FaCheckCircle className="text-green-500" />;
    }
  };

  const getColors = () => {
    switch (type) {
      case 'success': return 'from-green-500 to-emerald-600';
      case 'error': return 'from-red-500 to-rose-600';
      case 'info': return 'from-blue-500 to-indigo-600';
      default: return 'from-green-500 to-emerald-600';
    }
  };

  return (
    <div className={`fixed top-4 right-4 z-50 transform transition-all duration-500 ${
      isVisible ? 'translate-x-0 opacity-100 animate-fly-in' : 'translate-x-full opacity-0'
    }`}>
      <div className={`bg-gradient-to-r ${getColors()} text-white px-6 py-4 rounded-lg shadow-2xl hover-glow max-w-sm`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {getIcon()}
            <span className="font-medium animate-fade-in">{message}</span>
          </div>
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(onClose, 300);
            }}
            className="ml-4 hover:bg-white/20 rounded-full p-1 transition-all duration-300 hover-scale"
          >
            <FaTimes size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimatedNotification;
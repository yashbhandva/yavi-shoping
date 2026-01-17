import React from 'react';
import { motion } from 'framer-motion';

const SkeletonLoader = ({ count = 1, type = 'card', className = '' }) => {
  const skeletonItems = Array(count).fill(0);
  
  const getSkeletonType = () => {
    switch (type) {
      case 'card':
        return (
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="relative pb-[100%] bg-gray-200 animate-pulse"></div>
            <div className="p-4">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
              <div className="mt-3 h-6 bg-gray-200 rounded w-1/3 animate-pulse"></div>
            </div>
          </div>
        );
      
      case 'text':
        return (
          <div className="w-full">
            {skeletonItems.map((_, index) => (
              <div 
                key={index} 
                className="h-4 bg-gray-200 rounded mb-2 last:mb-0 animate-pulse"
                style={{
                  width: `${Math.random() * 40 + 60}%`,
                  animationDelay: `${index * 0.1}s`
                }}
              ></div>
            ))}
          </div>
        );
      
      case 'image':
        return (
          <div className="relative w-full">
            <div className="pb-[100%] bg-gray-200 animate-pulse rounded-lg"></div>
          </div>
        );
      
      default:
        return (
          <div className="w-full h-full bg-gray-200 rounded animate-pulse"></div>
        );
    }
  };
  
  return (
    <motion.div 
      className={`skeleton-loader ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {skeletonItems.map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          className="w-full h-full"
        >
          {getSkeletonType()}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkeletonLoader;

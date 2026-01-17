import React from 'react';

const TailwindTest = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Tailwind CSS Test</h1>
        <p className="text-gray-600 mb-6">
          If you can see this styled component, Tailwind CSS is working correctly!
        </p>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Primary Button
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            Secondary Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default TailwindTest;

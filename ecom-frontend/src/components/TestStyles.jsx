import React from 'react';

const TestStyles = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-primary mb-4">Test Styles</h1>
      <div className="p-4 bg-card rounded-lg shadow-md">
        <p className="text-foreground">This is a test component to check if styles are working.</p>
        <button className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors">
          Test Button
        </button>
      </div>
    </div>
  );
};

export default TestStyles;

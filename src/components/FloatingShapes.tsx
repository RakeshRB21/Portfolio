import React from 'react';

const FloatingShapes: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Large gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-indigo-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-200/15 to-blue-200/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
      
      {/* Smaller floating elements */}
      <div className="absolute top-32 left-1/4 w-4 h-4 bg-blue-400/40 rounded-full animate-bounce delay-500"></div>
      <div className="absolute bottom-32 right-1/4 w-6 h-6 bg-purple-400/40 rounded-full animate-bounce delay-1500"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-indigo-400/40 rounded-full animate-bounce delay-700"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-gradient-to-br from-blue-300/30 to-purple-300/30 rotate-45 animate-pulse delay-300"></div>
      <div className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-gradient-to-br from-indigo-300/30 to-pink-300/30 rotate-12 animate-pulse delay-1200"></div>
    </div>
  );
};

export default FloatingShapes;
import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="animate-spin h-10 w-10 border-2 rounded-full border-blue-600">
        {/* Optional: Add an inner element for a different visual style */}
      </div>
    </div>
  );
};

export default Loading;

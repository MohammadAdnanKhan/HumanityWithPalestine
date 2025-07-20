import React from 'react';

function NotFound() {
  return (
    <div className="min-h-screen font-mono flex flex-col justify-center items-center text-white text-center px-4">
      <h1 className="text-5xl font-bold text-[#EF5350] mb-4">404</h1>
      <h2 className="text-2xl font-serif font-semibold text-[#5C6BC0] mb-2">Page Not Found</h2>
      <p className="text-sm text-[#90A4AE]">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
    </div>
  );
}

export default NotFound;

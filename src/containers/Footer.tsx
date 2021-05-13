import React from 'react';

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 ">
          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">&copy; Last Palace</div>
        </div>
      </div>
    </footer>
  );
};

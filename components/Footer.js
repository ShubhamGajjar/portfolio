// components/Footer.js
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 mt-auto bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>© {currentYear} Shubham Gajjar. All rights reserved.</p>
        {/* Add social links or other info here later if needed */}
        {/* Example:
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">GitHub</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">LinkedIn</a>
        </div>
        */}
      </div>
    </footer>
  );
};

export default Footer;
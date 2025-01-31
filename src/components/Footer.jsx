import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-6 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 JobPortal. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="/about" className="hover:text-blue-300">About</a>
          <a href="/contact" className="hover:text-blue-300">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
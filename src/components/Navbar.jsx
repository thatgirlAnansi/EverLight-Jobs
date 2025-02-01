
import React from 'react';
import logo from '../Assets/logoehs.png'; // Import the logo

const Navbar = ({ scrollToAbout }) => { // Accept scrollToAbout as a prop
  return (
    <nav className="bg-[#035c67] text-white w-full py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo and Title */}
        <a href="/" className="flex items-center space-x-2">
          <img src={logo} alt="JobPortal Logo" className="h-10 w-15" /> 
          {/* <span className="text-xl font-bold"></span> */}
        </a>

        {/* Navigation Links */}
        <div className="space-x-4">
          {/* Update the About link */}
          <button onClick={scrollToAbout} className="hover:text-blue-300">
            About
          </button>
          {/* <a href="/jobs" className="hover:text-blue-300">Jobs</a>  */}
          <a href="/login" className="hover:text-blue-300">Login</a>
          <a href="/register" className="hover:text-blue-300">Register</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
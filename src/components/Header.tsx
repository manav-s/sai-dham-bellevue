import React from 'react';
import headerImage from "../assets/images/Header.png"; // Import the image
import iconImage from '../assets/images/Icon.png'; // Import the icon

// Currently not in use

function Header() {
  return (
    <div className="relative w-full">
      <img src={headerImage} alt="Header" className="w-full h-auto opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center space-x-4">
          <span className="font-sans font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-500">
            Shirdi Sai Dham — Bellevue, WA
          </span>
          <img src={iconImage} alt="Icon" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
        </div>
      </div>
    </div>
  );
}

export default Header;

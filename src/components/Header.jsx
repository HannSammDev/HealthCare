import React from "react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
          </div>
          <span className="font-display font-bold text-lg text-blue-800">
            HealthFirst
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a
            href="#locations"
            className="hover:text-blue-600 transition-colors"
          >
            Locations
          </a>
          <a href="#services" className="hover:text-blue-600 transition-colors">
            Services
          </a>
          <a href="#about" className="hover:text-blue-600 transition-colors">
            About
          </a>
        </nav>
        <a
          href="#book"
          className=" bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Book appointment
        </a>
      </div>
    </header>
  );
}
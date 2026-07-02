import React from "react";
import { useState } from "react";
import { SupAdminProfile } from "./SupAdminProfile";
import { FiMenu } from "react-icons/fi";
export const Topbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
     const [collapsed, setCollapsed] = useState(false);
    
  const mainML = collapsed ? "md:ml-[60px]" : "md:ml-[200px]";
  const sidebarW = collapsed ? "w-[60px]" : "w-[200px]";
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex bg-white items-center justify-between px-4 h-14 border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSidebarOpen((p) => !p)}
            className="p-2 text-gray-600 rounded-lg md:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <FiMenu className="w-6 h-6" />
            <span className="sr-only">Toggle sidebar</span>
          </button>

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
          <span className="font-display font-bold text-lg text-blue-800 dark:text-white">
            HealthFirst
          </span>
          <span className="hidden md:block text-gray-300 dark:text-gray-600 ml-2">
            |
          </span>
          <span className="hidden md:block text-sm text-gray-500 dark:text-gray-400 ml-2">
            Overview
          </span>
        </div>
        <SupAdminProfile />
      </div>
    </>
  );
};

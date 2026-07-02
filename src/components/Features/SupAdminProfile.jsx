import React from "react";
import { FiMoreVertical } from "react-icons/fi";

export const SupAdminProfile = () => {
  return (
    <div className="w-50 p-3 rounded-xl transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center text-sm font-semibold">
            AD
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              Samm
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Super Admin
            </p>
          </div>
        </div>
        {/* More Button */}
        <button className="p-1  ">
          <FiMoreVertical className="w-5 h-5 text-gray-400 hover:text-blue-500 " />
        </button>
      </div>
    </div>
  );
};

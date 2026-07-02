import React, { useState, useRef, useEffect } from "react";
import { auth } from "./Config/firebase";
import { signOut } from "firebase/auth";
import {
  FiMenu,
  FiHome,
  FiCalendar,
  FiUsers,
  FiArchive,
  FiBell,
  FiChevronLeft,
  FiChevronRight,
  FiActivity,
  FiUserCheck,
  FiGitBranch,
  FiBarChart2,
  FiCpu,
  FiArrowRight,
  FiArrowLeft,
} from "react-icons/fi";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { SupAdminProfile } from "./components/Features/SupAdminProfile";


export const Dash_Board = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setDropdownOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleLogout() {
    await signOut(auth);
    navigate("/");
  }

  const sidebarW = collapsed ? "w-[60px]" : "w-[200px]";
  const mainML = collapsed ? "md:ml-[60px]" : "md:ml-[200px]";

  const navClass = ({ isActive }) =>
    `flex items-center p-2 rounded-lg group transition-colors duration-150 overflow-hidden ${
      isActive
        ? "bg-blue-100 text-blue-700 dark:bg-gray-700 dark:text-white"
        : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    }`;

  const iconClass =
    "w-5 h-5 flex-shrink-0 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white";

  const NavItem = ({ to, icon: Icon, label, badge }) => (
    <li>
      <NavLink
        to={to}
        className={navClass}
        onClick={() => setSidebarOpen(false)}
      >
        <Icon className={iconClass} />
        <span
          className={`ml-3 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
            collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"
          }`}
        >
          {label}
        </span>
        {badge && !collapsed && (
          <span className="bg-red-100 text-red-800 text-xs font-bold ml-auto px-2 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
            {badge}
          </span>
        )}
      </NavLink>
    </li>
  );

  return (
    <>
      {/* ── Top Navbar ── */}
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
        <SupAdminProfile/>
      </div>

      {/* ── Body ── */}
      <div className="flex pt-14">
        {/* ── Sidebar ── */}
        <aside
          className={`fixed top-14 left-0 z-40 h-[calc(100vh-3.5rem)]
            bg-linear-to-r from-blue-100 via-white to-teal-50
            border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700
            transition-all duration-300
            ${sidebarW}
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        >
          <div className="overflow-y-auto overflow-x-hidden py-2 px-2 h-full dark:bg-gray-800">
            <ul className="space-y-1">
              <div className="hidden md:flex justify-end px-2 pb-2">
                <button
                  onClick={() => setCollapsed((p) => !p)}
                  className="p-0.5 rounded-lg text-blue-500 font-bold hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors"
                  title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                  {collapsed ? (
                    <FiChevronRight className="w-4 h-4" />
                    // <FiArrowRight className=" w-4 h-4 rounded-full" />
                  ) : (
                    <FiChevronLeft className="w-4 h-4" />
                    // <FiArrowLeft className=" w-4 h-4 rounded-full" />
                  )}
                </button>
              </div>

              {/* Main nav */}
              <NavItem to="/overview" icon={FiHome} label="Overview" />
              <NavItem to="/test" icon={FiCalendar} label="Appointments" />
              <NavItem to="/kanban" icon={FiUserCheck} label="Patients" />
              <NavItem to="/calendar" icon={FiUsers} label="Physicians" />
              <NavItem to="/workspace" icon={FiCpu} label="Diagnostic" />
            </ul>

            <ul className="pt-4 mt-4 space-y-1 border-t border-gray-200 dark:border-gray-700">
              <NavItem to="/project" icon={FiGitBranch} label="Branches" />
              <NavItem to="/team" icon={FiBarChart2} label="Reports" />
              <NavItem
                to="/notifications"
                icon={FiBell}
                label="Notifications"
                badge="3"
              />
            </ul>
          </div>
        </aside>

        {/* Mobile overlay */}
        <div
          className={`${sidebarOpen ? "block" : "hidden"} fixed inset-0 z-30 bg-black/40 md:hidden`}
          onClick={() => setSidebarOpen(false)}
        />

        {/* ── Main content ── */}
        <main
          className={`flex-1 p-1 pt-3 bg-blue-50 min-h-[calc(100vh-3.5rem)] transition-all duration-300 ${mainML}`}
        >
          <Outlet />
        </main>
      </div>
    </>
  );
};

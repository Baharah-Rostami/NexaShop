import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../context/Auth";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-bold text-fuchsia-700 tracking-tight"
          >
            NEXASHOP
          </NavLink>

          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition font-medium ${isActive
                  ? "text-fuchsia-600 dark:text-fuchsia-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-fuchsia-600 dark:hover:text-white"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `transition font-medium ${isActive
                  ? "text-fuchsia-600 dark:text-fuchsia-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-fuchsia-600 dark:hover:text-white"
                }`
              }
            >
              Cart
            </NavLink>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
          {!user ? (
            <div className="hidden md:flex items-center gap-3">
              <NavLink
                to="/login"
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                Login
              </NavLink>

              <NavLink
                to="/login"
                className="px-4 py-2 rounded-lg bg-fuchsia-600 text-white hover:bg-fuchsia-500 transition shadow-sm"
              >
                Sign Up
              </NavLink>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-4">

              {/* User Info */}
              <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-fuchsia-600 text-white flex items-center justify-center text-sm font-semibold">
                  {user.email[0].toUpperCase()}
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-200 truncate">
                  {user.email}
                </span>
              </div>

              {/* Logout */}
              <button
                onClick={logout}
                className="text-sm px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                Logout
              </button>
            </div>
          )}

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu open={open} setOpen={setOpen} user={user} logout={logout} />
    </nav>
  );
}
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/Auth";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-bold text-fuchsia-700 tracking-tight"
          >
            NEXASHOP
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition font-medium ${
                  isActive
                    ? "text-fuchsia-700"
                    : "text-gray-600 hover:text-fuchsia-700"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `transition font-medium ${
                  isActive
                    ? "text-fuchsia-700"
                    : "text-gray-600 hover:text-fuchsia-700"
                }`
              }
            >
              Cart
            </NavLink>
          </div>

          {/* Right Side */}
          {!user ? (
            <div className="hidden md:flex items-center gap-3">
              <NavLink
                to="/login"
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
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
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-fuchsia-600 text-white flex items-center justify-center text-sm font-semibold">
                  {user.email[0].toUpperCase()}
                </div>
                <span className="text-sm text-gray-700 max-w[120px] truncate">
                  {user.email}
                </span>
              </div>

              {/* Logout */}
              <button
                onClick={logout}
                className="text-sm px-3 py-1.5 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </div>
          )}

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-gray-700"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3 border-t bg-white">
          
          <NavLink
            to="/"
            className="block text-gray-700 py-2"
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/cart"
            className="block text-gray-700 py-2"
            onClick={() => setOpen(false)}
          >
            Cart
          </NavLink>

          {!user ? (
            <>
              <NavLink
                to="/login"
                onClick={() => setOpen(false)}
                className="block text-center border border-gray-300 py-2 rounded-lg text-gray-700"
              >
                Login
              </NavLink>

              <NavLink
                to="/login"
                onClick={() => setOpen(false)}
                className="block text-center bg-fuchsia-600 text-white py-2 rounded-lg"
              >
                Sign Up
              </NavLink>
            </>
          ) : (
            <div className="space-y-3">
              
              {/* User */}
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-fuchsia-600 text-white flex items-center justify-center text-sm font-semibold">
                  {user.email[0].toUpperCase()}
                </div>
                <span className="text-sm text-gray-700 truncate">
                  {user.email}
                </span>
              </div>

              {/* Logout */}
              <button
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
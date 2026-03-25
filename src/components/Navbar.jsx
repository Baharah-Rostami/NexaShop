import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-bold text-fuchsia-800"
          >
            NEXASHOP
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" className="text-gray-600 hover:text-fuchsia-800 transition">
              Home
            </NavLink>
            <NavLink to="/checkout" className="text-gray-600 hover:text-fuchsia-800 transition">
              Cart
            </NavLink>
          </div>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <NavLink
              to="/login"
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
            >
              Login
            </NavLink>
            <NavLink
              to="/login"
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              Sign Up
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-center">
          <NavLink to="/" className="block text-gray-600">
            Home
          </NavLink>
          <NavLink to="/checkout" className="block text-gray-600">
            Cart
          </NavLink>
          <NavLink to="/login" className="block text-gray-600">
            Login
          </NavLink>
          <NavLink to="/login" className="block text-white bg-black px-3 py-2 rounded-lg w-fit">
            Sign Up
          </NavLink>
        </div>
      )}
    </nav>
  );
}
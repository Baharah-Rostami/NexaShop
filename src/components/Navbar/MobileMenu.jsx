import { NavLink } from "react-router-dom";
export default function MobileMenu({ open, setOpen, user, logout }) {
  if (!open) return null;

  return (
    <div className="md:hidden px-4 pb-4 space-y-3 border-t bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
        <NavLink
            to="/"
            className="block text-gray-700 dark:text-gray-300 py-2"
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/cart"
            className="block text-gray-700 dark:text-gray-300 py-2"
            onClick={() => setOpen(false)}
          >
            Cart
          </NavLink>

          {!user ? (
            <>
              <NavLink
                to="/login"
                onClick={() => setOpen(false)}
                className="block text-center border border-gray-300 dark:border-gray-600 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                Login
              </NavLink>

              <NavLink
                to="/login"
                onClick={() => setOpen(false)}
                className="block text-center bg-fuchsia-600 text-white py-2 rounded-lg hover:bg-fuchsia-500 transition"
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
                className="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                Logout
              </button>
            </div>
          )}
    </div>
  );
}
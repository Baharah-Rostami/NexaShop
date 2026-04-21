import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";

export default function ThemeToggle({  theme, toggleTheme}) {
  return (
    <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
      <button
         onClick={toggleTheme}
        className={`p-2 rounded-md transition ${
          theme === "light"
            ? "bg-white shadow text-yellow-500"
            : "text-gray-500 dark:text-gray-300"
        }`}
      >
        <FiSun />
      </button>

      <button
        onClick={toggleTheme}
        className={`p-2 rounded-md transition ${
          theme === "dark"
            ? "bg-gray-800 text-white shadow"
            : "text-gray-500 dark:text-gray-300"
        }`}
      >
        <IoMoonOutline />
      </button>
    </div>
  );
}
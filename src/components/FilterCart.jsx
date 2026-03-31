import { Search } from "lucide-react";
import { useState } from "react";

export default function FilterCart({search, setSearch}) {
  return (
    <div className="w-full flex justify-center px-4 md:px-0">
      <div className="relative w-full max-w-md">

        {/* Icon */}
        <Search 
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300" 
          size={20} 
        />

        {/* Input */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
          className="
            w-full
            pl-10 pr-4 py-3
            rounded-xl
            bg-white dark:bg-gray-800
            text-gray-800 dark:text-gray-100
            placeholder-gray-400 dark:placeholder-gray-500
            border border-gray-300 dark:border-gray-600
            outline-none
            focus:ring-2 focus:ring-fuchsia-500
            focus:border-fuchsia-500
            transition
            sm:text-sm
          "
        />
      </div>
    </div>
  );
}
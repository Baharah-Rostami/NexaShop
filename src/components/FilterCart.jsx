import { Search } from "lucide-react";

export default function FilterCart({search, setSearch}) {
  return (
   <div className="w-full">
  <div className="relative w-full max-w-md">

    <Search 
      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
      size={20} />

    <input
      type="text"
      placeholder="Search products ..."
      value={search}
      onChange={(e)=> setSearch(e.target.value)}
      className="
        w-full
        pl-10 pr-24 py-3
        rounded-full
        bg-white dark:bg-gray-800
        text-gray-800 dark:text-gray-100
        border border-gray-300 dark:border-gray-600
        focus:ring-2 focus:ring-fuchsia-500
        outline-none
      "
    />

    {/* Button */}
    <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-4 py-2 rounded-full text-sm">
      Search
    </button>

  </div>
</div>
  );
}
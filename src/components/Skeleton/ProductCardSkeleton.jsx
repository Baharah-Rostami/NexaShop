export default function ProductCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden animate-pulse">

      {/* Image */}
      <div className="h-48 bg-gray-300 dark:bg-gray-700"></div>

      {/* Content */}
      <div className="p-4 space-y-3">

        {/* Title */}
        <div className="h-5 w-3/4 bg-gray-300 dark:bg-gray-700 rounded"></div>

        {/* Rating */}
        <div className="h-4 w-1/3 bg-gray-300 dark:bg-gray-700 rounded"></div>

        {/* Price */}
        <div className="h-6 w-1/4 bg-gray-300 dark:bg-gray-700 rounded"></div>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-3">
          <div className="h-8 w-24 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
          <div className="h-8 w-28 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
        </div>

      </div>
    </div>
  );
}
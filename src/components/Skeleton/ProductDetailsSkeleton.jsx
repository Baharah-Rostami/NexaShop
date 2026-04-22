export default function ProductDetailsSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 animate-pulse">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-10">

        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* Image Skeleton */}
          <div className="w-full h-80 bg-gray-300 dark:bg-gray-700 rounded-xl"></div>

          {/* Content Skeleton */}
          <div className="space-y-4">

            <div className="w-24 h-6 bg-gray-300 dark:bg-gray-700 rounded-full"></div>

            <div className="w-3/4 h-8 bg-gray-300 dark:bg-gray-700 rounded"></div>

            <div className="space-y-2">
              <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="w-5/6 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="w-2/3 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>

            <div className="w-32 h-8 bg-gray-300 dark:bg-gray-700 rounded"></div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4 flex-col sm:flex-row">
              <div className="flex-1 h-10 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
              <div className="flex-1 h-10 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
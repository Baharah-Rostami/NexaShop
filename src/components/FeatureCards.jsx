
export default function FeatureCards() {
  return (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">

            <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
              <span className="text-fuchsia-600 text-xl">🛡️</span>
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                  Premium Quality
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Best products
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
              <span className="text-fuchsia-600 text-xl">🚚</span>
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                  Fast Delivery
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Quick & reliable
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
              <span className="text-fuchsia-600 text-xl">💳</span>
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                  Secure Payment
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  100% safe checkout
                </p>
              </div>
            </div>
          </div>
  )
}

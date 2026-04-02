import { useFavorite } from "../context/Favorite";
import ProductCard from "../components/ProductCard";

export default function Favorites() {
  const { favorites } = useFavorite();

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 pt-12">
        <div className="flex items-center gap-4">
          <div className="w-1 h-16 bg-fuchsia-600 rounded-full"></div>

          <div>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
              Your <span className="text-fuchsia-600">Favorites</span> ❤️
            </h1>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-fuchsia-300 mt-6"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-10">

        {favorites.length === 0 ? (
          
          /* Empty State */
          <div className="flex flex-col items-center justify-center text-center mt-20">
            <div className="text-6xl mb-4">💔</div>

            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              No favorites yet
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Start adding products you love ❤️
            </p>

          </div>
        ) : (
          /* Grid */
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {favorites.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        )};
        
      </div>
    </div>
  );
}
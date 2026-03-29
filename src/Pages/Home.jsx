import { getProducts } from "../data/products";
import ProductCard from "../components/ProductCard";
import FilterCart from "../components/FilterCart";

export default function Home() {
  const products = getProducts();

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">

      {/* Hero Section */}
      <div className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100">
          Welcome to <span className="text-fuchsia-800 dark:text-fuchsia-500">NEXASHOP</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
          Discover amazing products at great prices
        </p>
      </div>

      {/* Search / Filter */}
      <FilterCart />

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-8">
          Our Products
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
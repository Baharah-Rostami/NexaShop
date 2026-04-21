import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../data/products";
import ProductCard from "../components/ProductCard";
import FilterCart from "../components/FilterCart";
import { useFavorite } from "../context/Favorite";
import FeatureCards from "../components/FeatureCards";
export default function Home() {
  const [search, setSearch] = useState("");

const { data: products = [], isLoading, error } = useQuery({
  queryKey: ["products"],
  queryFn: getProducts,
});

const { favorites } = useFavorite(); // 👈 اینجا

if (isLoading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error loading products</div>;
}


  const filterCards = products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 pt-12">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-start gap-4 max-w-xl">

            <div className="w-1 h-24 bg-fuchsia-600 rounded-full mt-2"></div>

            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100">
                Welcome to{" "}
                <span className="text-fuchsia-700 dark:text-fuchsia-500">
                  NEXASHOP
                </span>
              </h1>

              <p className="text-gray-600 dark:text-gray-300 mt-3 text-lg">
                Discover amazing products at great prices
              </p>

              {/* Search */}
              <div className="mt-6">
                <FilterCart search={search} setSearch={setSearch} />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Feature Cards */}
          <FeatureCards/>
        </div>
        <div className=" border-b-2 border-fuchsia-300 mt-6"></div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16 mt-3">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Our Products
          </h2>

          <Link
            to="/favorites"
            className="flex items-center gap-2 border border-fuchsia-500 text-fuchsia-600 px-4 py-1.5 rounded-full text-sm hover:bg-fuchsia-50 dark:hover:bg-gray-800 transition">
            View Favorites ❤️ ({favorites.length})
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filterCards.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
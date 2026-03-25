import { Link } from "react-router-dom";
import { getProducts } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = getProducts();

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Hero Section */}
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Welcome to <span className="text-fuchsia-800">NEXASHOP</span>
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Discover amazing products at great prices
        </p>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Our Products
        </h2>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          
          {products.map((product) => (
           <ProductCard product={product} key={product.id}/>
          ))}

        </div>
      </div>
    </div>
  );
}
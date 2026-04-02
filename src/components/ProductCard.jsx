import { Link } from "react-router-dom";
import { userCart } from "../context/Cart";
import { ShoppingCart } from "lucide-react";
import { useFavorite } from "../context/Favorite";


export default function ProductCard({ product }) {
  const { addToCart, cartItem } = userCart();
  const { toggleFavorite, isFavorite } = useFavorite()

  const productCard = cartItem.find((item) => item.id === product.id);
  const productQuantityLabel = productCard ? `(${productCard.quantity})` : "";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl dark:shadow-gray-900/40 transition duration-300 overflow-hidden">

      {/* Image + Heart */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"/>

        {/* Heart Icon */}
        <button
          onClick={() => toggleFavorite(product)}
          className="absolute top-3 right-3 bg-white dark:bg-gray-700 p-2 rounded-full shadow">
          <span className={`${isFavorite(product.id) ? "text-red-500" : "text-gray-400"}`}>
            ♥
          </span>
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 text-sm text-yellow-500">
          ⭐⭐⭐⭐☆
          <span className="text-gray-500 dark:text-gray-400 text-xs">
            (4.5)
          </span>
        </div>

        {/* Price */}
        <p className="text-lg font-bold text-gray-900 dark:text-white">
          ${product.price}
        </p>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-3">

          {/* View Details */}
          <Link
            to={`/product/${product.id}`}
            className="text-sm border border-gray-300 dark:border-gray-600 dark:text-white px-3 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            View Details
          </Link>

          {/* Add to Cart */}
          <button
            onClick={() => addToCart(product.id)}
            className="flex items-center gap-1 bg-fuchsia-600 text-white text-sm px-3 py-1.5 rounded-lg hover:bg-fuchsia-700 transition">

            <ShoppingCart className="w-4 h-4" />
            Add to Cart {productQuantityLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
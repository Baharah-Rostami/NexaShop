import { Link } from "react-router-dom"
import { userCart } from "../context/Cart"

export default function ProductCard({product}) {
  const {addToCart, cartItem} = userCart();
  const productCard = cartItem.find((item)=> item.id === product.id);
  const productQuantityLabel = productCard ? `(${productCard.quantity})` : "";
  return (
   <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl dark:shadow-gray-900/40 transition duration-300 overflow-hidden">

  {/* Image */}
  <div className="h-48 overflow-hidden">
    <img
      src={product.image}
      alt={product.title}
      className="w-full h-full object-cover hover:scale-105 transition duration-300"
    />
  </div>

  <div className="p-4 flex flex-col gap-2">
    
    {/* Title */}
    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
      {product.title}
    </h3>

    {/* Price */}
    <p className="text-gray-600 dark:text-gray-300">
      ${product.price}
    </p>

    {/* Buttons */}
    <div className="flex justify-between items-center mt-3">
      
      {/* View Details */}
      <Link
        to={`/product/${product.id}`}
        className="text-sm text-black dark:text-white font-medium hover:underline"
      >
        View Details
      </Link>

      {/* Add to Cart */}
      <button
        onClick={() => addToCart(product.id)}
        className="bg-fuchsia-700 dark:bg-fuchsia-600 text-white text-sm px-3 py-1.5 rounded-lg hover:bg-fuchsia-800 dark:hover:bg-fuchsia-500 transition"
      >
        Add to Cart {productQuantityLabel}
      </button>
    </div>
  </div>
</div>
  )
}

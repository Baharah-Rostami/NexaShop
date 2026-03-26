import { Link } from "react-router-dom"
import { userCart } from "../context/Cart"

export default function ProductCard({product}) {
  const {addToCart, cartItem} = userCart();
  const productCard = cartItem.find((item)=> item.id === product.id);
  const productQuantityLabel = productCard ? `(${productCard.quantity})` : "";
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden" >

              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.title}
                </h3>
                <p className="text-gray-600">${product.price}</p>

                {/* Buttons */}
                <div className="flex justify-between items-center mt-3">
                  <Link
                    to={`/product/${product.id}`}
                    className="text-sm text-black font-medium hover:underline"
                  >
                    View Details
                  </Link>

                  <button className="bg-fuchsia-800 text-white text-sm px-3 py-1.5 rounded-lg hover:bg-gray-800 transition"
                  onClick={()=> addToCart(product.id)}>
                    Add to Cart {productQuantityLabel}
                  </button>
                </div>
              </div>
            </div>
  )
}

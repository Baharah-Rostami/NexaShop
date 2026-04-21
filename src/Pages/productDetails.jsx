import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductsID } from "../data/products";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Store/CartSlice";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  useEffect(() => {
    const foundProduct = getProductsID(Number(id));
    if (!foundProduct) {
      navigate("/");
      return;
    }
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 dark:text-gray-300">
        Loading...
      </div>
    );
  }
  const productCard = cartItems.find((item) => item.id === product.id);
  const productQuantityLabel = productCard ? `(${productCard.quantity})` : "";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-10">

        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* Product Image */}
          <div className="w-full">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-75 md:h-100 object-contain rounded-xl bg-gray-100 dark:bg-gray-700 p-4"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-4">

            <span className="inline-block text-xs bg-fuchsia-100 dark:bg-fuchsia-900 text-fuchsia-700 dark:text-fuchsia-300 px-3 py-1 rounded-full font-medium">
              {product.category}
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
              {product.title}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {product.description}
            </p>

            <p className="text-2xl font-semibold text-fuchsia-600 dark:text-fuchsia-400">
              ${product.price}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 pt-4 flex-col sm:flex-row">
              <button
                className="flex-1 bg-fuchsia-600 text-white py-2 rounded-lg hover:bg-fuchsia-500 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-400 transition shadow-md"
                onClick={() => dispatch(addToCart(product.id))}
              >
                Add to Cart {productQuantityLabel}
              </button>

              <button
                onClick={() => navigate(-1)}
                className="flex-1 border border-gray-300 dark:border-gray-600 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                Go Back
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
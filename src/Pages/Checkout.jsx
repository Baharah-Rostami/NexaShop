import { userCart } from "../context/Cart";

export default function Checkout() {
  const { getCartItemWithProducts, increaseQuantity, decreaseQuantity, removeItem } = userCart();
  const cartItems = getCartItemWithProducts();

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* LEFT SIDE - ITEMS */}
        <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
            Checkout
          </h1>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row md:items-center gap-4 border-b border-gray-200 dark:border-gray-700 pb-4"
              >
                {/* IMAGE */}
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="w-full md:w-20 h-40 md:h-20 object-cover rounded-lg"
                />

                {/* TEXT */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                    {item.product.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    ${item.product.price} × {item.quantity}
                  </p>
                </div>

                {/* CONTROLS */}
                <div className="flex flex-col items-center md:items-end gap-2 w-full md:w-auto">
                  {/* Quantity */}
                  <div className="flex items-center border rounded-lg overflow-hidden border-gray-300 dark:border-gray-600">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-white transition"
                    >
                      -
                    </button>

                    <span className="px-4 text-gray-800 dark:text-gray-100">{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-white transition"
                    >
                      +
                    </button>
                  </div>

                  {/* Price */}
                  <p className="font-semibold text-gray-800 dark:text-gray-100">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-sm text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-500 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - SUMMARY */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Order Summary
          </h2>

          <div className="flex justify-between text-gray-600 dark:text-gray-300 mb-2">
            <span>Items</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="flex justify-between text-gray-600 dark:text-gray-300 mb-4">
            <span>Total</span>
            <span className="font-semibold text-gray-800 dark:text-gray-100">
              ${total.toFixed(2)}
            </span>
          </div>

          <button className="w-full bg-fuchsia-600 text-white py-3 rounded-xl hover:bg-fuchsia-500 transition shadow-md">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
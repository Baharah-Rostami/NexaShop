import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductsID } from "../data/products";
import { userCart } from "../context/Cart";
function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
    const {addToCart, cartItem} = userCart();

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
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading...
      </div>
    );
  }
  const productCard = cartItem.find((item)=> item.id === product.id);
  const productQuantityLabel = productCard ? `(${productCard.quantity})` : "";
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          <div className="w-full">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-75 md:h-100 object-contain rounded-xl bg-gray-100 p-4"
            />
          </div>

          <div className="space-y-4">
          
            <span className="inline-block text-xs bg-fuchsia-100 text-fuchsia-700 px-3 py-1 rounded-full font-medium">
              {product.category}
            </span>

             <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              {product.title}
            </h2>

            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            <p className="text-2xl font-semibold text-fuchsia-600">
              ${product.price}
            </p>

            <div className="flex gap-4 pt-4">
              <button className="flex-1 bg-fuchsia-600 text-white py-2 rounded-lg hover:bg-fuchsia-500 transition shadow-md"
              onClick={()=> addToCart(product.id)}>
                Add to Cart {productQuantityLabel}
              </button>

              <button
                onClick={() => navigate(-1)}
                className="flex-1 border border-gray-300 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
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
import { createContext, useContext, useState } from "react";
import { getProductsID } from "../data/products";
export const CartContext = createContext(null);

export default function CartProvider({children}) {
const [cartItem, setCartItem] = useState([]);

function addToCart(productId) {
  setCartItem((prevCart) => {
    const existing = prevCart.find((item) => item.id === productId);

    if (existing) {
      return prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      return [...prevCart, { id: productId, quantity: 1 }];
    }
  });
}

function getCartItemWithProducts(){
    return cartItem.map(item => ({...item, product: getProductsID(item.id)})).filter(item => item.product);
}
function increaseQuantity(productId) {
  setCartItem((prev) =>
    prev.map((item) =>
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
}

function decreaseQuantity(productId) {
  setCartItem((prev) =>
    prev
      .map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
}

function removeItem(productId) {
  setCartItem((prev) =>
    prev.filter((item) => item.id !== productId)
  );
}
  return (
   <CartContext.Provider value={{cartItem, addToCart, getCartItemWithProducts,  increaseQuantity,
    decreaseQuantity,
    removeItem,}}>
    {children}
   </CartContext.Provider>
  )
}
export function userCart(){
    const context = useContext(CartContext);
    return context;
}
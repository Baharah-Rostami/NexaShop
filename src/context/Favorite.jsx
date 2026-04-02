import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(product) {
    const exists = favorites.find((item) => item.id === product.id);

    if (exists) {
      setFavorites(favorites.filter((item) => item.id !== product.id));
    } else {
      setFavorites([...favorites, product]);
    }
  }

  function isFavorite(id) {
    return favorites.some((item) => item.id === id);
  }

  return (
    <FavoriteContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite() {
  return useContext(FavoriteContext);
}
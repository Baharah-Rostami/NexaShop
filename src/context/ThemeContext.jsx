import { createContext, useReducer, useContext, useEffect, Children, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: ()=> {},
});
export const ThemeProvider = ({children}) =>{
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  };

  useEffect(() => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [theme]);

  return(
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
export function useTheme() {
  return useContext(ThemeContext);
}
import React, { createContext, useState, useEffect } from "react";
import { handelApi } from "../JS/handelApi"; // Adjust import path if needed

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartBtn, setCartBtn] = useState(false);
  const [cat, setCat] = useState("");
  const [catBtn, setCatBtn] = useState(false);
  const [skips, setSkips] = useState(0);
  const [menuIconTrigger, setMenuIconTrigger] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [iconTrigger, setIconTrigger] = useState(false)

  const handelCart = async (productId) => {
    try {
      const tempCart = [...cart];
      const existingProductIndex = tempCart.findIndex(
        (item) => item.id === productId
      );

      if (existingProductIndex !== -1) {
        const existingProduct = tempCart[existingProductIndex];
        existingProduct.quantity += 1;
        existingProduct.total =
          existingProduct.quantity * (existingProduct.price || 0);

        setCart(tempCart);
      } else {
        const product = await handelApi.getallData(`products/${productId}`);

        if (product) {
          const updatedProduct = {
            ...product,
            quantity: 1,
            total: 0,
          };

          updatedProduct.total =
            updatedProduct.quantity * (updatedProduct.price || 0);

          tempCart.push(updatedProduct);

          setCart(tempCart);
        } else {
          console.error("Product not found or could not be added to cart.");
        }
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  const handelProjectsApiCall = () => {
    handelApi.getallData(
      "products",
      setProjects,
      setError,
      () => setLoading(true),
      () => setLoading(false),
      `?limit=12&skip=${12 * skips}`
    );
  };

  useEffect(() => {
    handelProjectsApiCall();
  }, [skips]);

  useEffect(() => {
    if (cat) {
      handelApi.getallData(
        `products/category/${cat.slug}`,
        setProjects,
        setError,
        () => setLoading(true),
        () => setLoading(false)
      );
    }
  }, [cat]);

  return (
    <AppContext.Provider
      value={{
        projects,
        setProjects,
        cart,
        setCart,
        cartBtn,
        setCartBtn,
        cat,
        setCat,
        catBtn,
        setCatBtn,
        skips,
        setSkips,
        menuIconTrigger,
        setMenuIconTrigger,
        loading,
        setLoading,
        error,
        setError,
        handelCart,
        handelProjectsApiCall,
        setIconTrigger,
        iconTrigger
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

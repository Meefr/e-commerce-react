import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ProjectsManger from "./Components/ProjectsManger/ProjectsManger";
import { handelApi } from "./JS/handelApi";
import Loading from "./Components/Loading/Loading";
import Categories from "./Components/Categories/Categories";
import Cart from "./Components/Cart/Cart";

function App() {
  const [projects, setProjects] = useState([]);
  const [cat, setCat] = useState();
  const [cart, setCart] = useState([]);
  const [cartBtn, setCartBtn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    handelApi.getallData(
      "products",
      setProjects,
      setError,
      () => setLoading(true),
      () => setLoading(false)
    );
  }, []);
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
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar
            cat={cat}
            cart={cart}
            cartBtn={cartBtn}
            setCartBtn={setCartBtn}
          />
          {cartBtn && (
            <div className={`cart-container ${cartBtn ? "show" : ""}`}>
              <Cart trigger={setCartBtn} cart={cart} setCart={setCart} />
            </div>
          )}
          <div className="grid grid-cols-12 gap-4">
            <Categories setCat={setCat} />
            <ProjectsManger
              products={projects}
              setProducts={setProjects}
              addItem={handelCart}
            />
          </div>
        </>
      )}
      {error && <p>Error: {error.message}</p>}
    </>
  );
}

export default App;

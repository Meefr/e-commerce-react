import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ProjectsManger from "./Components/ProjectsManger/ProjectsManger";
import { handelApi } from "./JS/handelApi";
import Loading from "./Components/Loading/Loading";
import Categories from "./Components/Categories/Categories";
import Cart from "./Components/Cart/Cart";
import Slider from "./Components/Slider/Slider";
import Pagintaion from "./Components/Pagination/Pagintaion";
import { BrowserRouter as Router, Route, Routes, HashRouter, BrowserRouter } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Project from "./Components/Project/Project";
import AnimatedPage from "./Components/AnimatedPage/AnimatedPage";
import Options from "./Components/Options/Options";
import useLocalStorage from "./JS/handelLocalStorage";
import ErrorPage from "./pages/ErrorPage";
import Posts from "./pages/Posts";

function App() {
  const [projects, setProjects] = useState([]);
  const [cat, setCat] = useState();
  const [cart, setCart] = useState([]);
  const [cartBtn, setCartBtn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [catBtn, setCatBtn] = useState(false);
  const [skips, setSkips] = useState(0);
  const [menuIconTrigger,setMenuIconTrigger] = useState(true);

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
    <Router basename="/e-commerce-react">
      <Options />
      <Navbar
        cat={cat}
        cart={cart}
        setCartBtn={setCartBtn}
        catBtn={catBtn}
        setCatBtn={setCatBtn}
        iconTrigger={menuIconTrigger}
        setIconTrigger={setMenuIconTrigger}
      />
      <Cart
        trigger={cartBtn}
        setTrigger={setCartBtn}
        cart={cart}
        setCart={setCart}
      />
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <AnimatedPage>
                <Pagintaion skip={skips} setSkip={setSkips} />
                <Categories
                  setCat={setCat}
                  trigger={catBtn}
                  setTrigger={setCatBtn}
                />
                <div className="grid p-0">
                  <ProjectsManger
                    products={projects}
                    setProducts={setProjects}
                    addItem={handelCart}
                  />
                </div>
                <Pagintaion skip={skips} setSkip={setSkips} />
              </AnimatedPage>
            }
          />
          <Route
            path="/:productId"
            element={
              <ProductDetails
                setCarts={setCart}
                iconTrigger={setMenuIconTrigger}
              />
            }
          />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      )}
      {error && <p>Error: {error.message}</p>}
    </Router>
  );
}

export default App;

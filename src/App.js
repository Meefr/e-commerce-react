import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ProjectsManger from "./Components/ProjectsManger/ProjectsManger";
import Loading from "./Components/Loading/Loading";
import Categories from "./Components/Categories/Categories";
import Cart from "./Components/Cart/Cart";
import Slider from "./Components/Slider/Slider";
import Pagintaion from "./Components/Pagination/Pagintaion";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Project from "./Components/Project/Project";
import AnimatedPage from "./Components/AnimatedPage/AnimatedPage";
import Options from "./Components/Options/Options";
import ErrorPage from "./pages/ErrorPage";
import Posts from "./pages/Posts";
import Products from "./pages/Products";
import Home from "./pages/Home";
import { AppContext, AppProvider } from "./Providers/AppProvider";
import Auth from "./pages/Auth/Auth";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";

function App() {
  const { isLogin, setIsLogin } = useContext(AppContext);
  return (
    <Router basename="/e-commerce-react">
      {isLogin ? (
        <>
          <Options />
          <Navbar />
          <Cart />
          <AnimatedPage>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/:productId" element={<ProductDetails />} />
              <Route path="/products" element={<Products />}></Route>
              <Route path="/products/:productId" element={<ProductDetails />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="/posts" element={<Posts />} />
            </Routes>
          </AnimatedPage>
        </>
      ) : (
        <AnimatedPage>
          <Routes>
            <Route path="/auth" element={<Auth />}>
              <Route path="" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
            </Route>
          </Routes>
        </AnimatedPage>
      )}
    </Router>
  );
}

export default App;

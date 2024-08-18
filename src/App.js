import React from "react";
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
import { AppProvider } from "./Providers/AppProvider";

function App() {
  return (
    <AppProvider>
      <Router basename="/e-commerce-react">
        <Options />
        <Navbar />
        <Cart />
        <AnimatedPage>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:productId" element={<ProductDetails />} />
            <Route path="/products" element={<Products />}></Route>
            <Route path="/:productId" element={<ProductDetails />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </AnimatedPage>
      </Router>
    </AppProvider>
  );
}

export default App;

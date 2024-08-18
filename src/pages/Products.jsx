import React, { useContext, useEffect } from "react";
import AnimatedPage from "../Components/AnimatedPage/AnimatedPage";
import Pagination from "../Components/Pagination/Pagintaion";
import Cart from "../Components/Cart/Cart";
import Categories from "../Components/Categories/Categories";
import ProjectsManger from "../Components/ProjectsManger/ProjectsManger";
import Loading from "../Components/Loading/Loading";
import { handelApi } from "../JS/handelApi";
import { AppContext } from "../Providers/AppProvider";

function Products() {
  const {
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
    handelCart,
    loading,
    setLoading,
    error,
    setError,
  } = useContext(AppContext);

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
    <AnimatedPage>
      <Pagination />
      <Cart/>
      <Categories setCat={setCat} trigger={catBtn} setTrigger={setCatBtn} />
      <div className="grid p-0">
        <ProjectsManger
          products={projects}
          setProducts={setProjects}
          addItem={handelCart}
        />
      </div>
      <Pagination />
      {loading && <Loading />}
      {error && <p>Error: {error.message}</p>}
    </AnimatedPage>
  );
}

export default Products;

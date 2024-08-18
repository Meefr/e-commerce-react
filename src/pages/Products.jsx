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
    setIconTrigger,
    iconTrigger,
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
  useEffect(() => {
    setIconTrigger(true);
    return () => {
      setIconTrigger(false);
    };
  }, [setIconTrigger]);
  return (
    <AnimatedPage>
      <Pagination setSkips={setSkips} skips={skips} />
      <Cart />
      <Categories setCat={setCat} trigger={catBtn} setTrigger={setCatBtn} />
      <div className="grid p-0">
        <ProjectsManger
          products={projects}
          setProducts={setProjects}
          addItem={handelCart}
        />
      </div>
      <Pagination setSkips={setSkips} skips={skips} />
      {loading && <Loading />}
      {error && <p>Error: {error.message}</p>}
    </AnimatedPage>
  );
}

export default Products;

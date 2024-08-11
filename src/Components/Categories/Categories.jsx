import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { handelApi } from "../../JS/handelApi";

function Categories({ setCat }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    handelApi.getallData("products/categories", setCategories);
  }, []);

  return (
    <aside class="col-span-3" id="side-bar">
      <div class="border shadow rounded p-3 relative" id="sidebar">
        <div class="bg-danger p-2 " id="slider">
          <i class="fa-solid fa-icons" aria-hidden="true"></i>
        </div>
        <div class="">
          <h3 className="text-2xl py-5">Categories</h3>

          <ul
            id="categories"
            class="relative list-unstyle px-0 cursor-pointer h-screen overflow-auto scrollbar-custom"
          >
            {categories.length > 0 ? (
              categories.map((c, i) => {
                return (
                  <li
                    class="py-2 px-1 text-lg content-hover rounded"
                    id={c.slug}
                    key={c.slug}
                    onClick={()=>setCat(c)}
                  >
                    {c.name}
                  </li>
                );
              })
            ) : (
              <Loading />
            )}
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Categories;

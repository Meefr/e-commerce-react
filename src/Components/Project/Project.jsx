import React, { useState } from 'react'

function Project({ product, addItem }) {

  const handleClick = () => {
  };
  
  return (
    <div className="" onClick={handleClick}>
      <div className="border rounded cursor-pointer" data-id={2}>
        <img src={product.thumbnail} className="w-full mb-2 img-btn" />
        <div className="px-2">
          <div className="">
            <h3 className="text-lg second-color">{product.title}</h3>
            <p>{product.description}</p>
          </div>
          <div className="flex flex-nowrap items-center gap-1 px-3 py-2">
            <i
              className="fa fa-star"
              style={{ color: "#F7C600" }}
              aria-hidden="true"
            />
            <p className="m-0 bg-danger bg-opacity-50 p-1 rounded-2">
              {product.rating}
            </p>
          </div>
          <div className="flex justify-around items-center flex-nowrap gap-1 py-2">
            <p className="m-0 fw-bold fs-3">{product.price}</p>

            <button
              className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              data-product='{"id":2,"title":"Eyeshadow Palette with Mirror","image":"https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png","price":19.99,"stock":44}'
              onClick={() => addItem(product.id)}
            >
              Add To Chart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project
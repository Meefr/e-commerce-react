import React from "react";

function ProjectsManger({ projects }) {
    
  return projects.map((project, index) => {
    return (
      <div className="col-12 col-sm-6 col-md-4">
        <div className="border rounded-2 cursor-pointer" data-id={2}>
          <img
            src="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
            className="w-100 mb-2 img-btn"
          />
          <div className="px-2">
            <div className>
              <h3>Eyeshadow Palette with Mirror</h3>
              <p>
                The Eyeshadow Palette with Mirror offers a versatile range of
                eyeshadow shades for creating stunning eye looks. With a
                built-in mirror, it's convenient for on-the-go makeup
                application.
              </p>
            </div>
            <div className="d-flex flex-nowrap align-items-center gap-1 px-3 py-2">
              <i
                className="fa fa-star"
                style={{ color: "#F7C600" }}
                aria-hidden="true"
              />
              <p className="m-0 bg-danger bg-opacity-50 p-1 rounded-2">3.28</p>
            </div>
            <div className="d-flex justify-content-around align-items-center flex-nowrap gap-1 py-2">
              <p className="m-0 fw-bold fs-3">$19.99</p>
              <button
                className="btn btn-primary btn-bg-danger add-btn"
                data-product='{"id":2,"title":"Eyeshadow Palette with Mirror","image":"https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png","price":19.99,"stock":44}'
              >
                Add To Chart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default ProjectsManger;

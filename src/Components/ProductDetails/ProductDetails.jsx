import React from 'react'

function ProductDetails({product, setCart}) {
  return (
    <div className="container">
  <div className="row" id="movie-page">
    <div className="col-12 col-md-4 d-flex flex-column justify-content-center">
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" id="movie-imgs">
          <div className="carousel-item active">
            <img src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png" className="d-block w-100" alt="Product Image" />
          </div>
        </div>
        <button className="carousel-control-prev slider-button" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon slider-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next slider-button" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon slider-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div className="col-12 col-md-8 d-flex justify-content-center flex-column gap-1">
      <h1>Essence Mascara Lash Princess</h1>
      <p>The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.</p>
      <div className="d-flex gap-1 mb-3 align-items-center gap-5">
        <div className="d-flex justify-content-between align-items-center gap-0">
          <span>★</span>
          <div className="px-2 bg-danger bg-opacity-75 rounded-2">4.94</div>
        </div>
        <div className="d-flex justify-content-between align-items-center gap-2">
          <p className="fw-bold mb-0 fs-3">$9.27 <small className="text-muted"><del>$9.99</del> (7.17% off)</small></p>
          <button className="btn btn-primary btn-bg-danger " data-product="{&quot;id&quot;:1,&quot;title&quot;:&quot;Essence Mascara Lash Princess&quot;,&quot;image&quot;:&quot;https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png&quot;,&quot;price&quot;:9.99,&quot;stock&quot;:5}">Add To Cart</button>
        </div>
      </div>
      <p><strong>Brand:</strong> Essence</p>
      <p><strong>SKU:</strong> RCH45Q1A</p>
      <p><strong>Weight:</strong> 2g</p>
      <p><strong>Dimensions:</strong> 23.17 x 14.43 x 28.01 cm</p>
      <p><strong>Warranty Information:</strong> 1 month warranty</p>
      <p><strong>Shipping Information:</strong> Ships in 1 month</p>
      <p><strong>Availability Status:</strong> Low Stock</p>
      <p><strong>Return Policy:</strong> 30 days return policy</p>
      <p><strong>Tags:</strong> beauty, mascara</p>
      <div>
        <h3>Reviews</h3>
        <ol className="list-group list-group-numbered">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">John Doe</div>
              <p>Very unhappy with my purchase!</p>
            </div>
            <span className="badge text-bg-primary rounded-pill">2★</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Nolan Gonzalez</div>
              <p>Not as described!</p>
            </div>
            <span className="badge text-bg-primary rounded-pill">2★</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Scarlett Wright</div>
              <p>Very satisfied!</p>
            </div>
            <span className="badge text-bg-primary rounded-pill">5★</span>
          </li>
        </ol>
      </div>
    </div>
  </div>
</div>

  )
}

export default ProductDetails
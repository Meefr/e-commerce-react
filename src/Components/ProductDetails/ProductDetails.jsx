import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { handelApi } from "../../JS/handelApi";

function ProductDetails({ setCarts }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productDetails, setProductDetails] = useState(null);

  const { productId } = useParams();

  useEffect(() => {
    handelApi.getallData(
      `products/${productId}`,
      setProductDetails,
      setError,
      () => setLoading(true),
      () => setLoading(false)
    );
  }, [productId]);

  const addToCart = (productItem) => {
    setCarts((prevCarts) => [...prevCarts, productItem]); // Update cart state
  };

  if (loading) {
    return (
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <h3>Loading...</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  if (!productDetails) return null;

  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    tags,
    brand,
    sku,
    weight,
    dimensions,
    warrantyInformation,
    shippingInformation,
    availabilityStatus,
    reviews,
    returnPolicy,
    images,
  } = productDetails;

  const discountedPrice = (price * (1 - discountPercentage / 100)).toFixed(2);

  const loadImgs = (images) => {
    return images.map((image, index) => (
      <div
        className={`carousel-item ${index === 0 ? "active" : ""}`}
        key={index}
      >
        <img src={image} className="d-block w-100" alt="Product" />
      </div>
    ));
  };

  const loadReviews = (reviews) => {
    return reviews.map((review, index) => (
      <li
        className="list-group-item d-flex justify-content-between align-items-start"
        key={index}
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{review.reviewerName}</div>
          <p>{review.comment}</p>
        </div>
        <span className="badge text-bg-primary rounded-pill">
          {review.rating}★
        </span>
      </li>
    ));
  };

  return (
    <div className="row">
      <div className="col-12 col-md-4 d-flex flex-column justify-content-center">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner" id="movie-imgs">
            {loadImgs(images)}
          </div>
          <button
            className="carousel-control-prev slider-button"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon slider-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next slider-button"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon slider-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="col-12 col-md-8 d-flex justify-content-center flex-column gap-1">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="d-flex gap-1 mb-3 align-items-center gap-5">
          <div className="d-flex justify-content-between align-items-center gap-0">
            <span>★</span>
            <div className="px-2 bg-danger bg-opacity-75 rounded-2">
              {rating}
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center gap-2">
            <p className="fw-bold mb-0 fs-3">
              ${discountedPrice}{" "}
              <small className="text-muted">
                <del>${price}</del> ({discountPercentage}% off)
              </small>
            </p>
            <button
              className="btn btn-primary btn-bg-danger"
              onClick={() =>
                addToCart({
                  id: Number(productId),
                  title,
                  image: images[0],
                  price,
                  stock,
                })
              }
            >
              Add To Cart
            </button>
          </div>
        </div>
        <p>
          <strong>Brand:</strong> {brand}
        </p>
        <p>
          <strong>SKU:</strong> {sku}
        </p>
        <p>
          <strong>Weight:</strong> {weight}g
        </p>
        <p>
          <strong>Dimensions:</strong> {dimensions.width} x {dimensions.height}{" "}
          x {dimensions.depth} cm
        </p>
        <p>
          <strong>Warranty Information:</strong> {warrantyInformation}
        </p>
        <p>
          <strong>Shipping Information:</strong> {shippingInformation}
        </p>
        <p>
          <strong>Availability Status:</strong> {availabilityStatus}
        </p>
        <p>
          <strong>Return Policy:</strong> {returnPolicy}
        </p>
        <p>
          <strong>Tags:</strong> {tags.join(", ")}
        </p>
        <div>
          <h3>Reviews</h3>
          <ol className="list-group list-group-numbered">
            {loadReviews(reviews)}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

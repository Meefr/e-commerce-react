import React from "react";
import "./Navbar.css"
function Navbar() {
  return (
    <div class="flex py-4 bg-rare-color text-gray-50 text-2xl justify-between px-10">
      <a class="mx-4 mx-md-5" href="#">
        <i class="fa-solid fa-shop second-color " aria-hidden="true"></i>
        E-Shop
      </a>
      <div class="flex justify-end px-4 ">
        <ul class="">
          <li class="">
            <i
              class="fa-solid fa-cart-shopping relative"
              id="cart-btn"
              aria-hidden="true"
            >
              <span
                class=" absolute -top-2 -right-3 start-50 text-sm second-color"
                id="cart-number"
              >
                0
              </span>
            </i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

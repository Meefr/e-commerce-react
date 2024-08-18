import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import PlayOnce from "../Notifications/AnimatedIcons";
import { AppContext } from "../../Providers/AppProvider";

function Navbar() {
  const {
    cat,
    cart,
    setCartBtn,
    catBtn,
    setCatBtn,
    iconTrigger,
    setIconTrigger,
  } = useContext(AppContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex py-4 bg-rare-color align-baseline text-gray-50 text-2xl justify-between px-6 sm:px-10 fixed w-screen z-30">
      <div className="flex items-center">
        {iconTrigger ? (
          <i
            className="fa-solid fa-bars pr-5"
            onClick={() => setCatBtn(!catBtn)}
          ></i>
        ) : (
          ""
        )}
        <Link to={`/`}>
          <span
            onClick={() => setIconTrigger(true)}
            className="flex items-center gap-2"
          >
            <PlayOnce imgname={"wired-outline-1459-old-shop.json"} />
            Meefr-Shop
          </span>
        </Link>
      </div>

      <div className="hidden md:flex space-x-4 justify-center align-baseline h-full">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link to="/products" className="hover:text-gray-300">
          Products
        </Link>
        <Link to="/posts" className="hover:text-gray-300">
          Posts
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <div className="md:hidden">
          <button
            className="text-gray-50 hover:text-gray-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <PlayOnce imgname={"wired-outline-56-document.json"} />
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-900 rounded-md shadow-lg">
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-200"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="block px-4 py-2 hover:bg-gray-200"
                onClick={() => setMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/posts"
                className="block px-4 py-2 hover:bg-gray-200"
                onClick={() => setMenuOpen(false)}
              >
                Posts
              </Link>
            </div>
          )}
        </div>

        <ul className="">
          <li onClick={() => setCartBtn(true)}>
            <div className="relative">
              <PlayOnce imgname={"wired-flat-146-trolley.json"} />
              <span
                className="absolute -top-2 -right-3 text-sm second-color font-bold"
                id="cart-number"
              >
                {cart ? cart.length : 0}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

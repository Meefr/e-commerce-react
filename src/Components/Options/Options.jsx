import React, { useEffect, useState } from "react";
import AnimatedPage from "../AnimatedPage/AnimatedPage";

function Options() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (dark) {
      document.documentElement.style.setProperty("--main-color", "black");
      document.documentElement.style.setProperty("--text-color", "white");
    } else {
      document.documentElement.style.setProperty("--main-color", "white");
      document.documentElement.style.setProperty("--text-color", "#212529");
    }
  }, [dark]);
  return (
    <div className="fixed right-0 md:right-20  top-20 z-40 cursor-pointer">
      <i
        className={
          dark
            ? "fa-solid fa-sun rounded-md bg-second-color p-3"
            : "fa-solid fa-moon rounded-md bg-second-color p-3"
        }
        onClick={() => {
          setDark(!dark);
        }}
      ></i>
    </div>
  );
}

export default Options;

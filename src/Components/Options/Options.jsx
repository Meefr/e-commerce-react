import React, { useEffect, useState } from "react";
import AnimatedPage from "../AnimatedPage/AnimatedPage";
import useLocalStorage from "../../JS/handelLocalStorage";

function Options() {
  const [dark, setDark] = useState(false);
  const data =  useLocalStorage("darkMode",dark);
  useEffect(() => {
    if (dark) {
      document.documentElement.style.setProperty("--main-color", "black");
      document.documentElement.style.setProperty("--text-color", "white");
    } else {
      document.documentElement.style.setProperty("--main-color", "white");
      document.documentElement.style.setProperty("--text-color", "#212529");
    }
  }, [dark]);
  useEffect(() => {
    if (data) {
      setDark(data);
    }
  }, []);
  return (
    <div className="fixed right-0 top-[25vh] z-40 cursor-pointer">
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

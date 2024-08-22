import React from "react";
import { Outlet } from "react-router-dom";
import AnimatedPage from "../../Components/AnimatedPage/AnimatedPage";

function Auth() {
  return (
    <>
        <Outlet />
    </>
  );
}

export default Auth;

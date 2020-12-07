import React from "react";

const NavBar = ({ inCartCount }) => (
  <div className="bg-blue-500 p-1 w-100 text-white">
    I am navbar
    <div className="bg-red-500 p-1 text-white">
        Incart Items {inCartCount}
    </div>
  </div>
);

export default NavBar;

import React from "react";

const Navbar = () => {
  return (
    <nav className="container font-sans flex  text-center sm:text-left justify-between py-4 px-6 bg-white sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <a
          href="/home"
          className="font-semibold text-2xl no-underline text-grey-darkest hover:text-blue-dark"
        >
          Logo
        </a>
      </div>
      <img
        style={{ maxWidth: "70px" }}
        className="flex align-end sm:hidden"
        src="./images/menu.svg"
        alt="menu"
      />

      <div className="hidden sm:block">
        <a
          href="/one"
          className="text-lg p-6 no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          Register
        </a>
        <a
          href="/two"
          className="text-lg p-6 no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

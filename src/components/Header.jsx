import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Main from "./Main";

// Reusable IconButton
const IconButton = ({ onClick, icon }) => (
  <button
    onClick={onClick}
    className="w-7 h-7 text-white hover:text-red-400 transition-colors"
  >
    {icon}
  </button>
);

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <header className="w-full h-20 flex justify-between items-center px-3 top-0">
        {/* Logo */}
        <h1
          className="text-2xl md:text-3xl font-bold z-50 
          bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 
          bg-clip-text text-transparent"
        >
          Noman
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map(({ path, label }, idx) => (
            <NavLink
              key={idx}
              to={path}
              className="relative group md:text-xl font-semibold text-white"
            >
              {label}
              <span
                className="absolute left-0 -bottom-1 w-0 h-0.5 
                bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 
                transition-all duration-500 group-hover:w-full"
              ></span>
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden z-50">
          {toggle ? (
            <IconButton
              onClick={() => setToggle(false)}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              }
            />
          ) : (
            <IconButton
              onClick={() => setToggle(true)}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              }
            />
          )}
        </div>
      </header>

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-2/3 
          bg-gradient-to-b from-gray-900 via-gray-800 to-black 
          backdrop-blur-lg shadow-xl text-white 
          flex flex-col text-[18px] md:hidden transform transition-transform 
          duration-500 ease-in-out z-[999]
          ${toggle ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="w-full flex justify-end p-4">
          <IconButton
            onClick={() => setToggle(false)}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            }
          />
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col items-center gap-2 mt-10">
          {navLinks.map(({ path, label }, idx) => (
            <NavLink
              key={idx}
              to={path}
              onClick={() => setToggle(false)}
              className="font-semibold w-full text-center py-3 transition-all 
              duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 
              hover:text-black rounded-md"
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <Main />
    </>
  );
};

export default Header;

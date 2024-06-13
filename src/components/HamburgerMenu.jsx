import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mx-auto block md:hidden w-fit relative">
      <button onClick={toggleMenu} className="block md:hiddens text-white">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block mt-4 absolute right-0`}
      >
        <a
          href="/"
          className="block px-2 py-1 bg-slate-600 text-base text-white"
        >
          Home
        </a>
        <a
          href="/about"
          className="block px-2 py-1 bg-slate-600 text-base text-white"
        >
          About
        </a>
        <div
          onClick={() => {
            const pdfUrl =
              "https://drive.google.com/file/d/1exxL5ke3vikNP2TMVwfK3Vy_OIBpiSGY/view"; // Replace with your PDF URL
            window.open(pdfUrl, "_blank");
          }}
          className="block px-2 py-1 bg-slate-600 text-base text-white"
        >
          Resume
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;

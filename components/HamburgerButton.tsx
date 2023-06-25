import React from "react";

const HamburgerButton = ({
  buttonRef,
  handleClick,
  isOpen,
  className = "",
}) => {
  return (
    <button
      ref={buttonRef}
      className={`flex-col justify-center items-center flex ${className}`}
      onClick={handleClick}
    >
      <span
        className={`bg-dark block transition-all duration-200 ease h-0.5 w-5 rounded-sm ${
          isOpen ? "rotate-45 translate-y-1 " : "-translate-y-0.5"
        }`}
      ></span>
      <span
        className={`bg-dark block transition-all duration-200 ease h-0.5 w-5 rounded-sm my-0.5 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`bg-dark block transition-all duration-200 ease h-0.5 w-5 rounded-sm ${
          isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
        }`}
      ></span>
    </button>
  );
};

export default HamburgerButton;

"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import MobileNavMenu from "./MobileNavMenu";

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`font-mont ${className} ${
        pathname === href
          ? "text-primary"
          : "hover:text-primary  ease duration-200"
      }`}
    >
      {title}
    </Link>
  );
};

const NavBar = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const node = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e) => {
    if (
      node.current?.contains(e.target) ||
      buttonRef.current?.contains(e.target)
    ) {
      // inside click
      return;
    }
    // outside click
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header
      className="fixed w-[95%] mx-[2.5%] h-16 top-3 bg-Light/90 dark:bg-Dark/80 shadow-xl dark:shadow-gray-500 dark:shadow rounded-lg
    flex items-center justify-between px-10 z-30 max-lg:px-4"
    >
      <Link href={"/"} className="h-full flex items-center relative">
        <Image
          src={"/DDD.svg"}
          alt={"DDDLogo"}
          width={100}
          height={100}
          className="h-[150%] w-auto shadow-white"
        />
        {/* <div className="h-full w-full bg-Light absolute -z-10 opacity-80 rounded-full" /> */}
      </Link>
      {/* <DDDLogo className="w-16" /> */}
      <nav className="max-md:hidden">
        <CustomLink href={"/"} title={"Home"} className="mr-4" />
        <CustomLink href={"/news"} title={"News"} className="mx-4" />
        <CustomLink href={"/works"} title={"Works"} className="mx-4" />
        <CustomLink href={"/contact"} title={"Contact"} className="ml-4" />
      </nav>

      <button
        ref={buttonRef}
        className="flex-col justify-center items-center flex md:hidden"
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

      {isOpen ? (
        <MobileNavMenu setIsOpen={setIsOpen} isOpen={isOpen} node={node} />
      ) : null}
    </header>
  );
};

export default NavBar;

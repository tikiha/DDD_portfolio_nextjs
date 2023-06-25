"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import MobileNavMenu from "./MobileNavMenu";
import HamburgerMenu from "./HamburgerButton";
import { DDDLogo } from "./Icons";
import ThemeSwitcher from "./ThemeSwitch/ThemeSwitcher";

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
      className="fixed w-[95%] mx-[2.5%] h-16 top-3 bg-light shadow-xl dark:shadow-gray-500 dark:shadow rounded-lg
    flex items-center justify-between px-10 z-30 max-lg:px-4"
    >
      <Link href={"/"} className="h-full flex items-center relative">
        <Image
          src={"/DDD.svg"}
          alt={"DDDLogo"}
          width={100}
          height={100}
          className="h-[150%] w-auto"
        />
      </Link>
      {/* <DDDLogo className="" /> */}
      <nav className="max-md:hidden flex items-center">
        <CustomLink href={"/"} title={"Home"} className="mr-4" />
        <CustomLink href={"/news"} title={"News"} className="mx-4" />
        <CustomLink href={"/works"} title={"Works"} className="mx-4" />
        <CustomLink href={"/contact"} title={"Contact"} className="mx-4" />
        <ThemeSwitcher className="ml-4" />
      </nav>

      <HamburgerMenu
        buttonRef={buttonRef}
        handleClick={handleClick}
        isOpen={isOpen}
        className="md:hidden"
      />

      {isOpen ? (
        <MobileNavMenu setIsOpen={setIsOpen} isOpen={isOpen} node={node} />
      ) : null}
    </header>
  );
};

export default NavBar;

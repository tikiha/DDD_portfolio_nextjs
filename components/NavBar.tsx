"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import DDDLogo from "../public/DDD.svg";

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`${className} ${
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
  return (
    <nav
      className="fixed w-[95%] mx-[2.5%] h-16 top-3 bg-light/90 shadow-xl rounded-lg
    flex items-center justify-between px-10 z-30"
    >
      <Link href={"/"} className="h-full flex items-center">
        <Image src={DDDLogo} alt={"DDDLogo"} className="h-[160%] w-auto" />
      </Link>
      {/* <DDDLogo className="w-16" /> */}
      <div className="">
        <CustomLink href={"/"} title={"Home"} className="mr-4" />
        <CustomLink href={"/news"} title={"News"} className="mx-4" />
        <CustomLink href={"/works"} title={"Works"} className="mx-4" />
        <CustomLink href={"/contact"} title={"Contact"} className="ml-4" />
      </div>
    </nav>
  );
};

export default NavBar;

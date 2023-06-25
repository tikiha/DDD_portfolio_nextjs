"use client";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { Mail, ChevronsUp } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavFooter = () => {
  const { scrollY } = useScroll();
  const [scroll, setScroll] = useState<number>(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScroll(latest);
  });

  return (
    <div
      className={`fixed bottom-0 w-full z-30 md:hidden duration-1000 ${
        scroll < 300 ? "translate-y-[110%]" : ""
      }`}
    >
      <Link
        className="flex flex-col items-center bg-light py-1"
        href={"/contact"}
      >
        <span className="text-dark text-sm">お問い合わせ</span>
        <Mail className="w-5 fill-dark stroke-light py-0" />
      </Link>
      <button
        className={`absolute -z-10 top-0 right-0 bg-primary flex items-center justify-center rounded-tl-lg py-8 px-3 duration-[1200ms]
      ${scroll < 300 ? "" : "-translate-y-[100%]"}`}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <ChevronsUp className="stroke-dark" />
      </button>
    </div>
  );
};

export default NavFooter;

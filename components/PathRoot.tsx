"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";
import Link from "next/link";

const PathRoot = () => {
  const pathname = usePathname();
  const pathParts = pathname?.split("/").filter((path) => path !== "");
  const pathRoot = pathParts?.map((val, idx, array) => {
    return array.slice(0, idx + 1).join("/");
  });
  console.log(pathRoot);
  console.log(pathParts);
  return (
    <div
      className="flex-shrink-0 flex items-center py-6 text-dark mx-auto xl:w-[1280px] w-full px-4 text-body
max-md:py-3"
    >
      <Link href={"/"} className="">
        <Home size={16} className="max-md:w-3" />
      </Link>
      {pathParts?.map((path, idx) => (
        <>
          <span className="mx-2">{">"}</span>

          <Link
            href={`/${pathname}`}
            key={path}
            className="font-mont text-primary underline uppercase"
          >
            {path}
          </Link>
        </>
      ))}
    </div>
  );
};

export default PathRoot;

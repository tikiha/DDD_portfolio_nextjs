"use client";
import { ChevronUp } from "lucide-react";
import React from "react";

const FooterY = () => {
  return (
    <div className="mt-16 h-full w-full ">
      <div className="py-6 flex items-center justify-center border border-collapse">
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <ChevronUp size={36} strokeWidth={1} className="opacity-80" />
        </button>
      </div>
      <div className="py-6 flex items-center justify-center">
        &copy; DDD 2023
      </div>
    </div>
  );
};

export default FooterY;

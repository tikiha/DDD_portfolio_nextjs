"use client";
import React, { useEffect, useRef } from "react";

const Page = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (scrollRef.current) {
        if (e.deltaY > 0) scrollRef.current.scrollBy(100, 0);
        if (e.deltaY < 0) scrollRef.current.scrollBy(-100, 0);
      }
    };
    window.addEventListener("wheel", handleWheel);
    // Cleanup on unmount
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
  return (
    <main
      ref={scrollRef}
      className="h-full pt-16 flex flex-row overflow-x-scroll"
    >
      <div className="w-2/3 h-full flex-shrink-0 bg-white flex flex-col items-center justify-center">
        <div className="text-red-500 text-6xl font-bold">
          gridレイアウトテンプレート（コーポレート）
        </div>
      </div>
      <div className="flex-shrink-0 h-full w-2/3 flex items-center justify-center bg-blue-100 ml-[30%]">
        その1
      </div>
      <div className="flex-shrink-0 h-full w-1/3 flex items-center justify-center bg-red-100">
        その2
      </div>
    </main>
  );
};

export default Page;

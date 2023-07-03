"use client";
import React, { useEffect, useRef, useState } from "react";

const RowSlide = ({ children, className = "" }) => {
  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 0) window.scrollBy(100, 0);
      if (e.deltaY < 0) window.scrollBy(-100, 0);
    };
    window.addEventListener("wheel", handleWheel);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // マウスドラッグに関するイベントリスナーを設定（適切な要素またはwindowに設定すること）

  return (
    <main
      className={`h-[calc(100vh-14px)] w-full flex pt-16 max-lg:flex-col max-lg:h-full ${className}`}
    >
      {children}
    </main>
  );
};

export default RowSlide;

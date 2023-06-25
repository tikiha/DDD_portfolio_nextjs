"use client";
import React, { useEffect, useRef } from "react";

const RowSlide = ({ children, className = "" }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

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
      className={`scroll-bar h-screen w-full flex pt-16 max-lg:flex-col max-lg:h-full ${className}`}
    >
      {children}
    </main>
  );
};

export default RowSlide;

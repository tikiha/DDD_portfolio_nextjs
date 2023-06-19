"use client";
import React, { useEffect, useRef } from "react";

const RowSlide = ({ children }) => {
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
    <div ref={scrollRef} className="h-full w-full overflow-auto flex">
      {children}
    </div>
  );
};

export default RowSlide;

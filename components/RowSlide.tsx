"use client";
import React, { useEffect, useRef, useState } from "react";

const RowSlide = ({ children, className = "" }) => {
  // const scrollRef = useRef<HTMLDivElement>(null!);
  // const [isDragging, setIsDragging] = useState(false);
  // const [startX, setStartX] = useState(0);
  // const [scrollLeft, setScrollLeft] = useState(0);

  // const startDrag = (e) => {
  //   setIsDragging(true);
  //   setStartX(e.pageX - scrollRef.current.offsetLeft);
  //   setScrollLeft(scrollRef.current.scrollLeft);
  // };

  // const stopDrag = () => {
  //   setIsDragging(false);
  // };

  // const doDrag = (e) => {
  //   if (!isDragging) return;
  //   e.preventDefault();
  //   const x = e.pageX - scrollRef.current.offsetLeft;
  //   const scroll = x - startX;
  //   scrollRef.current.scrollLeft = scrollLeft - scroll;
  // };

  // useEffect(() => {
  //   const handleWheel = (e) => {
  //     if (scrollRef.current) {
  //       if (e.deltaY > 0) scrollRef.current.scrollBy(100, 0);
  //       if (e.deltaY < 0) scrollRef.current.scrollBy(-100, 0);
  //     }
  //   };
  //   window.addEventListener("wheel", handleWheel);
  //   // Cleanup on unmount
  //   return () => {
  //     window.removeEventListener("wheel", handleWheel);
  //   };
  // }, []);

  return (
    <main
      // ref={scrollRef}
      // onMouseDown={startDrag}
      // onMouseLeave={stopDrag}
      // onMouseUp={stopDrag}
      // onMouseMove={doDrag}
      // className={`scroll-bar h-screen w-full flex pt-16 max-lg:flex-col max-lg:h-full ${className}`}
      className={`w-full flex pt-16 flex-col h-full ${className}`}
    >
      {children}
    </main>
  );
};

export default RowSlide;

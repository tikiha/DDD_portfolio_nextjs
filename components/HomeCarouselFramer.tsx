"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";

const images = [
  "/officePic1.png",
  "/officePic2.png",
  "/officePic3.png",
  "/officePic4.png",
]; // ここに表示したい画像のURLを設定
const captions = ["Caption 1", "Caption 2", "Caption 3", "Caption 4"]; // ここに画像に対応するキャプションを設定

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

function Indicator({ index, length }) {
  return (
    <div className="absolute left-1/2 bottom-10 -translate-x-1/2">
      {Array(length)
        .fill(1)
        .map((_, i) => (
          <span key={i} style={{ color: i === index ? "red" : "black" }}>
            •
          </span>
        ))}
    </div>
  );
}
export const HomeCarouselFramer = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  console.log(imageIndex);
  return (
    <div className="w-2/3 h-full flex-shrink-0 relative bg-black -z-10">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <button
        className="next z-100 bg-white cursor-pointer"
        onClick={() => paginate(1)}
      >
        {"‣"}
      </button>
      <button
        className="z-100 bg-white cursor-pointer"
        onClick={() => paginate(-1)}
      >
        {"‣"}
      </button>
    </div>
  );
};

// export default HomeCarousel;

"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

const images = [
  "/OfficePic/officePic1.png",
  "/OfficePic/officePic2.png",
  "/OfficePic/officePic3.png",
  "/OfficePic/officePic4.png",
]; // ここに表示したい画像のURLを設定
const captions = ["Caption 1", "Caption 2", "Caption 3", "Caption 4"]; // ここに画像に対応するキャプションを設定

function SlideArrow({ direction, clickFunction, className = "" }) {
  return (
    <button
      className={`text-light cursor-pointer z-20 ${className}`}
      onClick={clickFunction}
    >
      {direction === "left" ? (
        <ChevronLeft
          size={48}
          className="stroke-slate-50/80 hover:scale-110 hover:stroke-slate-50 max-lg:w-10"
        />
      ) : (
        <ChevronRight
          size={48}
          className="stroke-slate-50/80 hover:scale-110 hover:stroke-slate-50 max-lg:w-10"
        />
      )}
    </button>
  );
}

function Indicator({ index, length }) {
  return (
    <div className="absolute left-1/2 bottom-10 -translate-x-1/2 z-20 flex space-x-4 max-lg:bottom-2">
      {Array(length)
        .fill(1)
        .map((_, i) => (
          <svg
            key={`indicator ${i}`}
            viewBox="0 0 100 100"
            width={12}
            height={12}
            xmlns="http://www.w3.org/2000/svg"
            className={`cursor-pointer max-lg:w-2 ${
              i === index
                ? "fill-light opacity-80"
                : i + 1 === index || i - 1 === index
                ? "fill-light opacity-60"
                : "fill-light opacity-40"
            }`}
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
        ))}
    </div>
  );
}

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const [showCaption, setShowCaption] = useState(false);

  const intervalId = useRef<NodeJS.Timeout | null>(null);

  const setSlideInterval = () => {
    intervalId.current = setInterval(() => {
      setShowCaption(false);
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);
  };

  const clearSlideInterval = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
  };

  useEffect(() => {
    setSlideInterval();
    return clearSlideInterval;
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => setShowCaption(true), 2000);
  //   return () => clearTimeout(timer);
  // }, [index]);

  const slideLeft = () => {
    setShowCaption(false);
    clearSlideInterval();
    setIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
    setSlideInterval();
  };

  const slideRight = () => {
    setShowCaption(false);
    clearSlideInterval();
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
    setSlideInterval();
  };

  return (
    <div className="w-2/3 h-full text-Light flex-shrink-0 relative max-lg:w-full max-lg:h-[70vh]">
      <div className="w-full h-full absolute bg-Dark/30 z-10 " />
      <div className="flex items-center h-full">
        <SlideArrow
          direction="left"
          clickFunction={slideLeft}
          className="hover:animate-bounceLeft"
        />
        <AnimatePresence>
          <motion.img
            key={index}
            src={images[index]}
            width={500}
            height={500}
            alt=""
            className="w-full h-full absolute"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 2 }}
            className={` z-20 w-full px-8`}
          >
            <h1 className="text-4xl/relaxed font-bold text-center mb-4">
              グッとくる
              <br />
              HPお任せください。
            </h1>
            <p className="text-base/loose">
              元ラガーマンのWebデザイナー二人組です。あなたの要望に全力で”トライ”します。
              組織名にある「Driven」はラグビー由来の熱意のある献身的な姿勢のこと。
              HP制作など、サービス詳細は以下のボタンからご覧ください。
            </p>
          </motion.div>
        </AnimatePresence>

        <SlideArrow
          direction="right"
          clickFunction={slideRight}
          className="right-10 hover:animate-bounceRight max-lg:right-2"
        />
      </div>
      <Indicator index={index} length={images.length} />
    </div>
  );
}

export default HomeCarousel;

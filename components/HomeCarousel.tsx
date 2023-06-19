"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  "/officePic1.png",
  "/officePic2.png",
  "/officePic3.png",
  "/officePic4.png",
]; // ここに表示したい画像のURLを設定
const captions = ["Caption 1", "Caption 2", "Caption 3", "Caption 4"]; // ここに画像に対応するキャプションを設定

function SlideArrow({ direction, clickFunction, className = "" }) {
  const symbol = direction === "left" ? "<" : ">";
  return (
    <button
      className={`text-light absolute top-1/2 cursor-pointer text-4xl z-20 ${className}`}
      onClick={clickFunction}
    >
      {symbol}
    </button>
  );
}

function Indicator({ index, length }) {
  return (
    <div className="absolute left-1/2 bottom-10 -translate-x-1/2 z-20">
      {Array(length)
        .fill(1)
        .map((_, i) => (
          <span
            key={i}
            className={` ${i === index ? "text-light" : "text-dark"}`}
          >
            •
          </span>
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
    <div className="w-2/3 h-full flex-shrink-0 relative">
      {/* <div key={index}> */}
      <div className="w-full h-full absolute bg-dark opacity-30 z-10" />
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
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20`}
        >
          <h1>{captions[index]}</h1>
          <h1 className="text-4xl text-light font-bold text-center mb-4">
            グッとくる
            <br />
            HPお任せください。
          </h1>
          <p className="text-base text-light">
            元ラガーマンのWebデザイナー二人組です。あなたの要望に全力で”トライ”します。
            組織名にある「Driven」はラグビー由来の熱意のある献身的な姿勢のこと。
            HP制作など、サービス詳細は以下のボタンからご覧ください。
          </p>
        </motion.div>
      </AnimatePresence>

      <SlideArrow
        direction="left"
        clickFunction={slideLeft}
        className="left-10"
      />

      <SlideArrow
        direction="right"
        clickFunction={slideRight}
        className="right-10"
      />
      <Indicator index={index} length={images.length} />
    </div>
  );
}

export default HomeCarousel;

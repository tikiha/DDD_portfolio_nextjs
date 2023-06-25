"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { ChevronRight, ChevronLeft } from "lucide-react";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper";
import "./swiper.scss";
import "./pagination.scss";

const images = [
  "/OfficePic/officePic1.png",
  "/OfficePic/officePic2.png",
  "/OfficePic/officePic3.png",
  "/OfficePic/officePic4.png",
];

function HomeSwiper() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowText(true);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [activeSlide]);
  return (
    <div className="w-2/3 h-full text-Light flex-shrink-0 max-lg:w-full max-lg:h-[70vh] relative">
      <Swiper
        className="w-full h-full bg-light"
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.realIndex);
          setShowText(false);
        }}
        slidesPerView={1}
        spaceBetween={0}
        speed={3000}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        autoplay={{ delay: 9000, disableOnInteraction: false }}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
          depth: 200,
        }}
        loop
        centeredSlides={true}
        modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={`image ${index}`}
            className="relative w-full h-full"
          >
            {showText && activeSlide === index ? (
              <motion.div
                className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 p-4 cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 100, transition: { duration: 1.5 } }}
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
            ) : (
              false
            )}
            <Image
              src={image}
              alt={"image"}
              fill
              priority
              sizes="100vh"
              className="object-cover object-center brightness-[0.6]"
            ></Image>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="slider-controler">
        <ChevronLeft
          size={50}
          className="absolute top-[calc(50vh-50px)] left-10 z-20
            button-prev cursor-pointer stroke-slate-300 hover:animate-bounceLeft"
        />
        <ChevronRight
          size={50}
          className="absolute top-[calc(50vh-50px)] right-10 z-20
            button-next cursor-pointer stroke-slate-300 hover:animate-bounceRight"
        />
        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal absolute z-20"></div>
      </div>
    </div>
  );
}

export default HomeSwiper;

"use client";
import "../styles/swiper.css";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/OfficePic/officePic1.png",
  "/OfficePic/officePic2.png",
  "/OfficePic/officePic3.png",
  "/OfficePic/officePic4.png",
]; // ここに表示したい画像のURLを設定
const captions = ["Caption 1", "Caption 2", "Caption 3", "Caption 4"]; // ここに画像に対応するキャプションを設定

function HomeSwiper() {
  return (
    <div className="w-2/3 h-full text-Light flex-shrink-0 max-lg:w-full max-lg:h-[70vh] relative">
      {/* <div className="w-full h-full absolute bg-Dark/30 z-10 " /> */}
      <Swiper
        className="w-full h-full absolute"
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        navigation
        pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, Pagination]}
        creativeEffect={{
          prev: {
            translate: [0, 0, 50],
          },
        }}
      >
        {images.map((image, idx) => (
          <SwiperSlide key={`image ${idx}`} className="w-[1000px] h-[100px]">
            <Image
              src={image}
              alt={""}
              fill
              className="object-center object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomeSwiper;

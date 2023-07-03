"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { ChevronRight, ChevronLeft } from "lucide-react";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper";
import "./swiper.scss";
import "./pagination.scss";
import Link from "next/link";

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
    <div className="w-2/3 h-full text-Light flex-shrink-0 max-lg:w-full max-lg:h-[80vh] relative">
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
        allowTouchMove={false}
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
                className="absolute flex flex-col items-center top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 w-full px-24 max-md:px-14"
                initial={{ opacity: 0 }}
                animate={{ opacity: 100, transition: { duration: 1.5 } }}
              >
                <h1 className="text-8xl max-md:text-7xl font-bold text-center tracking-tighter">
                  DDD
                </h1>
                <span className="">Driven Design Duo</span>

                <p className="text-h6 text-center mt-4">
                  熱意と創造力で <br />
                  ご要望をカタチに
                </p>
                <Link
                  className="mt-10 rounded-lg py-4 px-20 relative border border-primary text-primary 
              hover:text-light overflow-hidden group
              max-lg:mt-6 max-lg:px-12 max-lg:py-3"
                  href={"/contact"}
                >
                  <div className="w-full h-full bg-primary absolute -left-[100%] top-0 group-hover:translate-x-full duration-500" />
                  <span className="z-10 relative delay-100">
                    お問い合わせへ
                  </span>
                </Link>
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
          className="absolute top-1/2 left-10 z-20
            button-prev cursor-pointer stroke-slate-300 hover:animate-bounceLeft max-md:w-10 max-md:left-3"
        />
        <ChevronRight
          size={50}
          className="absolute top-1/2 right-10 z-20
            button-next cursor-pointer stroke-slate-300 hover:animate-bounceRight max-md:w-10 max-md:right-3"
        />
        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal absolute z-20"></div>
      </div>
    </div>
  );
}

export default HomeSwiper;

"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/autoplay";
import { Calendar } from "lucide-react";
import Link from "next/link";
import FormatDate from "@/lib/formatDate";

const NewsCarousel = ({ articles }) => {
  let Articles;
  if (articles.contents.length < 6) {
    Articles = [
      ...articles.contents,
      ...articles.contents,
      ...articles.contents,
    ];
  } else {
    Articles = [...articles.contents];
  }
  return (
    <div className="h-full w-full bg-white py-20">
      <h1 className="font-mont font-bold text-2xl flex items-center justify-center mb-10">
        Latest news
      </h1>
      <Swiper
        className="w-full h-fit"
        spaceBetween={50}
        slidesPerView={4}
        centeredSlides={true}
        mousewheel={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Mousewheel, Autoplay]}
      >
        {Articles.map((article) => {
          return (
            <SwiperSlide key={`image ${article.id}`} className="mb-10">
              <div className="w-full flex items-center text-sm text-mute">
                <Calendar size={14} className="stroke-mute" />
                <span>&nbsp;{FormatDate(article.publishedAt)}</span>
              </div>
              <div className="h-full w-full flex flex-col items-center justify-between">
                <Link
                  href={`news/${article.id}`}
                  className="w-full overflow-hidden aspect-[16/9] relative my-4"
                >
                  {article.eyecatch ? (
                    <Image
                      src={article.eyecatch.url}
                      alt={"eyecatch"}
                      fill
                      className="hover:scale-110 duration-150 object-cover object-center"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-300 flex items-center justify-center">
                      No Image
                    </div>
                  )}
                </Link>
                <Link
                  href={`news/${article.id}`}
                  className="text-lg hover:text-primary duration-300"
                >
                  {article.title}
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default NewsCarousel;

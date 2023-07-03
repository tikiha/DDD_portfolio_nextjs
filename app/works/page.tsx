import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Portfolios from "@/components/portfolios";
import RowSlide from "@/components/RowSlide";

const Page = () => {
  return (
    <RowSlide className="">
      <div className="flex-shrink-0 h-full w-1/3 flex items-center justify-center px-10 bg-light max-lg:w-full max-lg:py-40">
        <p className="text-body/loose">
          私たちの制作実績です。テーマのカスタマイズからオリジナルテーマの開発まで幅広く対応いたします。
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-2/3 flex items-center justify-center relative max-lg:w-full max-lg:h-[50lvh]">
        <h1 className="font-mont z-10 text-h2 text-Light font-bold ">Works</h1>
        <Image
          src="/Pic/Works.png"
          fill
          alt={"Works Pic"}
          className="h-full object-cover object-left"
          priority
        />
      </div>
      <Portfolios />
      <div className="flex-shrink-0 h-full w-1/3 relative max-lg:w-full max-lg:h-[50lvh]">
        <Image
          src="/Pic/Happy.png"
          fill
          alt={"Happy Pic"}
          sizes="100vh"
          className="h-full object-cover object-center"
          priority
        />
      </div>
      <div className="flex-shrink-0 h-full w-1/3 bg-light flex items-center justify-center px-10 max-lg:w-full max-lg:py-40">
        <p className="text-body/loose">
          ご予算に合わせた提案、カスタマイズを行います。些細なご質問でも構いません。お気軽にご相談ください。
        </p>
      </div>
      <Footer />
    </RowSlide>
  );
};

export default Page;

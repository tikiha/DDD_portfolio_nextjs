import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Portfolios from "@/components/portfolios";

const Page = () => {
  return (
    <main className="flex w-full h-[calc(100vh-12px)] pt-16">
      <div className="flex-shrink-0 h-full w-1/3 flex items-center justify-center px-10 bg-light">
        <p className="text-base">
          私たちの制作実績です。テーマのカスタマイズからオリジナルテーマの開発まで幅広く対応いたします。
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-2/3 flex items-center justify-center relative">
        <h1 className="z-10 text-4xl text-light font-semibold ">Works</h1>
        <Image
          src="/Pic/Works.png"
          fill
          alt={"Works Pic"}
          className="h-full object-cover object-left"
        />
      </div>
      <Portfolios />
      <div className="flex-shrink-0 h-full w-1/3 relative">
        <Image
          src="/Pic/Happy.png"
          fill
          alt={"Happy Pic"}
          className="h-full object-cover object-center"
        />
      </div>
      <div className="flex-shrink-0 h-full w-1/3 bg-light flex items-center justify-center px-10">
        <p className="text-base">
          ご予算に合わせた提案、カスタマイズを行います。些細なご質問でも構いません。お気軽にご相談ください。
        </p>
      </div>
      <Footer />
    </main>
  );
};

export default Page;

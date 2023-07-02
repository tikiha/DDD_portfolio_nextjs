/* eslint-disable @next/next/no-img-element */
import React from "react";
import { microcms } from "../../lib/microcmsClient";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";
import FormatDate from "@/lib/formatDate";
import RowSlide from "@/components/RowSlide";

async function Page() {
  const articles = await microcms.get({ endpoint: "blogs" });

  return (
    <RowSlide className="text-Light">
      <div className="bg-gradient-original w-full h-full fixed -z-10" />
      <div className="w-full h-16 bg-light fixed -translate-y-[100%] z-10" />
      <div
        className="flex-shrink-0 flex items-center justify-center lg:border-r border-slate-400
      border-b"
      >
        <h1 className="font-mont font-bold text-h1 ">NEWS</h1>
      </div>
      {articles.contents.map((article) => (
        <div
          key={article.id}
          className="flex-shrink-0 lg:border-r border-slate-400 lg:px-6 lg:py-10 flex flex-col items-center justify-between 
          border-b"
        >
          <div className="w-full flex items-center text-body">
            <Calendar size={16} className="stroke-Light max-md:w-3" />
            <span>&nbsp;{FormatDate(article.publishedAt)}</span>
          </div>
          <div className="h-full w-full flex flex-col items-center justify-center py-10">
            <Link
              href={`news/${article.id}`}
              className="text-h5 font-semibold line-clamp-2 h-14 hover:text-primary duration-300"
            >
              {article.title}
            </Link>
            <Link
              href={`news/${article.id}`}
              className="w-full overflow-hidden aspect-[16/9] relative mb-2 mt-1"
            >
              {article.eyecatch ? (
                <img
                  srcSet={article.eyecatch.url}
                  alt={"eyecatch"}
                  fetchPriority="high"
                  decoding="async"
                  data-nimg="fill"
                  sizes="100vw"
                  className="hover:scale-110 duration-150 object-cover object-center"
                />
              ) : (
                <div className="w-full h-full bg-slate-300 flex items-center justify-center transition-all hover:scale-110 max-lg:text-3xl max-md:text-h4">
                  No Image
                </div>
              )}
            </Link>
            <div className="w-full text-body/loose line-clamp-2">
              {article.content}
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </RowSlide>
  );
}

export default Page;

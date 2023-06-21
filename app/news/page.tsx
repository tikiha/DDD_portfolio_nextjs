import React from "react";
import { microcms } from "../../lib/microcmsClient";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";
import FormatDate from "@/lib/formatDate";

async function Page() {
  const articles = await microcms.get({ endpoint: "blogs" });

  return (
    <div className="flex w-full h-[calc(100vh-12px)] pt-16 text-light max-lg:flex-col max-lg:h-full">
      <div className="bg-gradient-original w-full h-full fixed -z-10" />
      <div
        className="flex-shrink-0 w-1/3 h-full flex items-center justify-center border-r border-slate-400
      max-lg:w-full max-lg:h-[33vh] max-lg:border-b"
      >
        <h1 className="font-mont font-bold text-4xl text-light ">NEWS</h1>
      </div>
      {articles.contents.map((article) => (
        <div
          key={article.id}
          className="flex-shrink-0 w-1/4 h-full border-r border-slate-400 px-6 py-10 
          max-lg:w-full max-lg:h-fit max-lg:border-b max-lg:p-4"
        >
          <div className="w-full flex items-center">
            <Calendar size={16} className="stroke-light" />
            <span>&nbsp;{FormatDate(article.publishedAt)}</span>
          </div>
          <div className="h-full w-full flex flex-col items-center justify-between py-32 max-lg:py-10">
            <Link
              href={`news/${article.id}`}
              className="text-xl font-semibold h-14 hover:text-primary duration-300"
            >
              {article.title}
            </Link>
            <Link
              href={`news/${article.id}`}
              className="w-full overflow-hidden aspect-[16/9] relative"
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
            <div className="w-full text-base/loose line-clamp-3">
              {article.content}
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default Page;

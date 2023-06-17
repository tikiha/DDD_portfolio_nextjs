import React from "react";
import { microcms } from "../../lib/microcmsClient";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getUTCFullYear();
  const monthNum = date.getUTCMonth() + 1;
  const dayNum = date.getUTCDate();

  const month = monthNum < 10 ? `0${monthNum}` : monthNum;
  const day = dayNum < 10 ? `0${dayNum}` : dayNum;

  return `${year}.${month}.${day}`;
};

async function Page() {
  const articles = await microcms.get({ endpoint: "blogs" });

  return (
    <div className="flex w-full h-[calc(100vh-12px)] pt-16 text-light">
      <div className="bg-gradient-original w-full h-full fixed -z-10" />
      <div className="flex-shrink-0 w-1/3 h-full flex items-center justify-center border-r border-slate-400">
        <h1 className="text-4xl text-light ">NEWS</h1>
      </div>
      {articles.contents.map((article) => (
        <div
          key={article.id}
          className="flex-shrink-0 w-1/4 h-full border-r border-slate-400 px-6 py-10"
        >
          <span className="w-full">{formatDate(article.revisedAt)}</span>
          <div className="h-full w-full flex flex-col items-center justify-between py-32">
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
            <div className="h-20 w-full overflow-hidden leading-relaxed">
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

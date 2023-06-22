import classes from "./styles.module.scss";
import { microcms } from "@/lib/microcmsClient";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  RefreshCcw,
  Home,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import React from "react";
import NewsCarousel from "./NewsCarousel";
import FooterY from "@/components/FooterY";
import FormatDate from "@/lib/formatDate";

export async function generateStaticParams() {
  const articles = await microcms.get({ endpoint: "blogs" });
  return articles.contents.map((article) => ({
    id: article.id,
  }));
}

export default async function Page({ params }) {
  const { id: articleId } = params;

  const articles = await microcms.get({
    endpoint: "blogs",
  });
  const targetIndex = articles.contents.findIndex(
    (article) => article.id === articleId
  );
  const targetArticle = articles.contents[targetIndex];
  const nextArticle =
    targetIndex > 0 ? articles.contents[targetIndex - 1] : null;
  const prevArticle =
    targetIndex < articles.contents.length - 1
      ? articles.contents[targetIndex + 1]
      : null;

  const publishedAt = FormatDate(targetArticle.publishedAt);
  const revisedAt = FormatDate(targetArticle.revisedAt);

  return (
    <main className="w-[calc(100vw-12px)] h-full bg-light">
      <div className="h-full px-4 mx-auto mt-16 w-full xl:w-[1280px]">
        <div className="w-2/3 lg:w-[1024px] mx-auto pt-6 pb-4 flex items-center text-base">
          <Link href={"/"}>
            <Home size={16} className="max-md:w-3" />
          </Link>
          <span className="mx-2">{">"}</span>
          <Link className="font-mont" href={"/news"}>
            News
          </Link>
          <span className="mx-2">{">"}</span>
          <span className="underline text-primary">{targetArticle.title}</span>
        </div>
        <span className="border w-[calc(100vw-12px)] absolute left-0" />
        <div
          className="px-12 py-10 absolute left-1/2 top-36 -translate-x-1/2 z-10 bg-light 
        max-md:px-6 max-md:py-5"
        >
          <div className="text-sm flex items-center">
            <Calendar size={16} className="stroke-dark max-md:w-3" />
            <span>&nbsp;{publishedAt}</span>
            {publishedAt === revisedAt ? null : (
              <>
                <RefreshCcw size={16} className="ml-3 stroke-dark" />
                <span>&nbsp;{revisedAt}</span>
              </>
            )}
          </div>
          <h1 className="text-2xl font-bold mt-2 text-center lg:w-[1024px] max-md:w-[300px]">
            {targetArticle.title}
          </h1>
        </div>
        <div className="w-full overflow-hidden mt-24 aspect-[16/9] relative ">
          <Image
            src={targetArticle.eyecatch?.url}
            alt={"eyecatch"}
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="mt-16 w-full lg:w-[1000px] flex flex-col mx-auto mb-20">
          <div
            dangerouslySetInnerHTML={{ __html: `${targetArticle.content}` }}
            className={classes.html}
          />
          <ul className="flex mt-16 space-x-2">
            <li>tweet</li>
            <li>share</li>
          </ul>

          <div className="mt-16 flex w-full h-full outline outline-1 outline-mute">
            {prevArticle ? (
              <div className="w-1/2 h-full border-r border-mute flex items-center justify-center">
                <Link
                  href={`news/${prevArticle.id}`}
                  className="w-full h-full p-10 hover:text-dark/60 text-base max-md:p-3 flex items-center"
                >
                  <ChevronLeft size={16} className="max-md:w-3 mr-2" />
                  {prevArticle.title}
                </Link>
              </div>
            ) : (
              <div className="w-1/2 border-r border-mute" />
            )}
            {nextArticle ? (
              <div className="w-1/2 h-full my-auto flex items-center justify-center">
                <Link
                  href={`news/${nextArticle.id}`}
                  className="w-full h-full p-10 text-center hover:text-dark/60 text-base max-md:p-3 flex items-center justify-end"
                >
                  {nextArticle.title}
                  <ChevronRight size={16} className="max-md:w-3 ml-2" />
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <NewsCarousel articles={articles} />
      <FooterY />
    </main>
  );
}

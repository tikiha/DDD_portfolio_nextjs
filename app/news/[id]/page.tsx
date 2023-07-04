/* eslint-disable @next/next/no-img-element */
import classes from "./styles.module.scss";
import { microcms } from "@/lib/microcmsClient";
// import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  RefreshCcw,
  Home,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import React from "react";
import NewsCarousel from "./(components)/NewsCarousel";
import FooterY from "@/components/FooterY";
import FormatDate from "@/lib/formatDate";
import Image from "next/image";

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
    <main className="w-full h-full ">
      <div className="h-full px-4 mx-auto mt-16 w-full xl:w-[1280px]">
        <div className="mx-auto w-full px-4 pt-8 pb-6 flex items-center">
          <Link href={"/"}>
            <Home size={16} className="max-md:w-3" />
          </Link>
          <span className="mx-2">{">"}</span>
          <Link className="font-mont" href={"/news"}>
            News
          </Link>
          <span className="mx-2">{">"}</span>
          <span className="underline text-secondary">
            {targetArticle.title}
          </span>
        </div>
        <span className="border w-full absolute left-0" />
        <div
          className="w-fit min-w-[80%] h-full border border-mute rounded-lg mt-6 mx-auto md:translate-y-1/4 bg-light py-6 px-20
        max-md:w-full max-md:px-4 max-md:py-3
        "
        >
          <div className="text-sm max-md:text-xs flex items-center font-light">
            <Calendar
              size={16}
              className="stroke-dark max-md:w-3 stroke-[0.8px]"
            />
            <span>&nbsp;{publishedAt}</span>
            {publishedAt === revisedAt ? null : (
              <>
                <RefreshCcw
                  size={16}
                  className="ml-3 stroke-dark stroke-[0.8px]"
                />
                <span>&nbsp;{revisedAt}</span>
              </>
            )}
          </div>
          <h1 className="text-h3 font-semibold mt-2 text-center w-full">
            {targetArticle.title}
          </h1>
        </div>
        {targetArticle.eyecatch ? (
          <div className="w-full overflow-hidden aspect-[16/9] relative -z-10 max-md:mt-4">
            <Image
              src={targetArticle.eyecatch.url}
              alt={"eyecatch"}
              priority
              fill
              sizes="100vw"
              className=" object-cover object-center"
            />
          </div>
        ) : (
          <div className="mt-56 bg-white w-full " />
        )}

        <div className="mt-16 w-full lg:w-[900px] flex flex-col mx-auto mb-20">
          <div
            dangerouslySetInnerHTML={{ __html: `${targetArticle.content}` }}
            className={classes.html}
          />

          <div className="mt-16 flex w-full h-full rounded-lg outline outline-1 outline-mute">
            {prevArticle ? (
              <div className="w-1/2 h-full border-r border-mute flex items-center justify-center">
                <Link
                  href={`news/${prevArticle.id}`}
                  className="w-full h-full p-10 hover:text-dark/60 text-body max-md:p-3 flex items-center"
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
                  className="w-full h-full p-10 text-center hover:text-dark/60 text-body max-md:p-3 flex items-center justify-end"
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

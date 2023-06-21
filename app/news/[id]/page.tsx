import classes from "./styles.module.scss";
import { microcms } from "@/lib/microcmsClient";
import Image from "next/image";
import Link from "next/link";
import { Calendar, RefreshCcw, Home } from "lucide-react";

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
        <div className="w-2/3 lg:w-[1024px] mx-auto pt-6 pb-4 flex items-center">
          <Home size={16} />
          <span className="font-mont">
            &nbsp;{">"} News {">"}&nbsp;
          </span>
          <span className="underline text-primary">{targetArticle.title}</span>
        </div>
        <span className="border w-[calc(100vw-12px)] absolute left-0" />
        <div className="px-12 py-10 absolute left-1/2 top-36 -translate-x-1/2 z-10 bg-light">
          <div className="text-sm flex items-center">
            <Calendar size={16} className="stroke-dark" />
            <span>&nbsp;{publishedAt}</span>
            {publishedAt === revisedAt ? null : (
              <>
                <RefreshCcw size={16} className="ml-3 stroke-dark" />
                <span>&nbsp;{revisedAt}</span>
              </>
            )}
          </div>
          <h1 className="text-3xl font-bold mt-2 text-center w-2/3 lg:w-[1024px]">
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

        <div className="mt-16 w-2/3 lg:w-[1000px] flex flex-col mx-auto mb-20">
          <div
            dangerouslySetInnerHTML={{ __html: `${targetArticle.content}` }}
            className={classes.html}
          />
          <ul className="flex mt-16 space-x-2">
            <li>tweet</li>
            <li>share</li>
          </ul>

          <div className="mt-16 flex w-full h-full">
            {prevArticle ? (
              <div className="w-1/2 outline outline-1 outline-mute flex items-center justify-center bg-white">
                <Link
                  href={`news/${prevArticle.id}`}
                  className="w-full h-full p-10 hover:text-dark/60"
                >
                  <span>{"<"}</span>
                  {prevArticle.title}
                </Link>
              </div>
            ) : (
              <div className="w-1/2" />
            )}
            {nextArticle ? (
              <div className="w-1/2 outline outline-1 outline-mute flex items-center justify-center bg-white">
                <Link
                  href={`news/${nextArticle.id}`}
                  className="w-full h-full p-10 text-center hover:text-dark/60"
                >
                  {nextArticle.title}
                  <span>{">"}</span>
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

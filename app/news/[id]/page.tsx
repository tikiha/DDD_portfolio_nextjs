import classes from "./styles.module.scss";
import { microcms } from "@/lib/microcmsClient";
import Image from "next/image";

import React from "react";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getUTCFullYear();
  const monthNum = date.getUTCMonth() + 1;
  const dayNum = date.getUTCDate();

  const month = monthNum < 10 ? `0${monthNum}` : monthNum;
  const day = dayNum < 10 ? `0${dayNum}` : dayNum;

  return `${year}.${month}.${day}`;
};

export async function generateStaticParams() {
  const articles = await microcms.get({ endpoint: "blogs" });
  return articles.contents.map((article) => ({
    id: article.id,
  }));
}

export default async function Page({ params }) {
  const { id: articleId } = params;
  const article = await microcms.get({
    endpoint: "blogs",
    contentId: articleId,
  });

  return (
    <main className="w-[calc(100vw-12px)] h-full bg-light">
      <div className="h-full mx-auto px-4 mt-16 w-full lg:w-[1280px]">
        <div className="pt-6 pb-4">
          Home {">"} News {">"} {article.title}
        </div>
        <span className="border w-screen absolute left-0" />
        <div>
          <div>
            <span>{formatDate(article.publishedAt)}</span>
            <span>{formatDate(article.revisedAt)}</span>
          </div>
          <div className={classes.title}>{article.title}</div>
          <div className="w-full overflow-hidden aspect-[16/9] relative">
            <Image
              src={article.eyecatch.url}
              alt={"eyecatch"}
              fill
              className="object-cover object-center"
            />
          </div>

          <div
            className={classes.html}
            dangerouslySetInnerHTML={{ __html: `${article.content}` }}
          />
        </div>
      </div>
    </main>
  );
}

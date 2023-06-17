import React from "react";
import { microcms } from "../../lib/microcmsClient";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

async function Page() {
  const articles = await microcms.get({ endpoint: "blogs" });
  // console.log(articles.contents);

  return (
    <div className="flex w-full h-[calc(100vh-12px)] pt-16">
      <Image src={""} alt={""} />
      <div className="w-1/3 h-full flex items-center justify-center border-r">
        <h1 className="text-4xl text-light ">NEWS</h1>
      </div>
      {articles.contents.map((article) => (
        <div
          key={article.id}
          className="w-1/3 h-full flex flex-col items-center border-collapse border-r border-solid"
        >
          <Link
            href={`blog/${article.id}`}
            className="bg-slate-400 rounded-xl p-3"
          >
            {article.title}
          </Link>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default Page;

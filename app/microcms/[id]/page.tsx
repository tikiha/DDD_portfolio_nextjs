import classes from "./styles.module.scss";
import { microcms } from "@/lib/microcmsClient";

import { log } from "console";
import React from "react";

export async function generateStaticParams() {
  const blogs = await microcms.get({ endpoint: "blogs" });
  return blogs.contents.map((blog) => ({
    id: blog.id,
  }));
}

export default async function Page({ params }) {
  const { id: blog_id } = params;
  const blog_content = await microcms.get({
    endpoint: "blogs",
    contentId: blog_id,
  });

  return (
    <div>
      <div className={classes.title}>{blog_content.title}</div>
      <p className={classes.createdAt}>{blog_content.createdAt}</p>
      <div
        className={classes.html}
        dangerouslySetInnerHTML={{ __html: `${blog_content.content}` }}
      ></div>
    </div>
  );
}

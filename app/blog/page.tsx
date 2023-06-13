import Link from "next/link";
import React from "react";
import { supabase } from "../../lib/supabaseClient";
import { microcms } from "../../lib/microcmsClient";
import classes from "./styles.module.scss";

async function Page() {
  let { data: countries } = await supabase.from("countries").select();
  const blog_datas = await microcms.get({ endpoint: "blogs" });
  return (
    <div>
      <ul>
        {countries.map((country) => (
          <li className={classes.countries} key={country.id}>
            {country.name}
          </li>
        ))}
      </ul>
      <div className="flex flex-col mt-10 gap-y-10 w-fit">
        {blog_datas.contents.map((blog_data) => (
          <Link
            key={blog_data.id}
            href={`blog/${blog_data.id}`}
            className="bg-slate-400 rounded-xl p-3"
          >
            {blog_data.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Page;

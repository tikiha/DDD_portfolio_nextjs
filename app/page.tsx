import { supabase } from "./../lib/supabaseClient";
import { microcms } from "./../lib/microcmsClient";
import classes from "../styles/home.module.scss";
import Link from "next/link";

async function Page() {
  let { data: countries } = await supabase.from("countries").select();
  const blog_datas = await microcms.get({ endpoint: "blogs" });
  return (
    <ul>
      {countries.map((country) => (
        <li className={classes.countries} key={country.id}>
          {country.name}
        </li>
      ))}
      {blog_datas.contents.map((blog_data) => (
        <Link href={`blog/${blog_data.id}`} key={blog_data.id}>
          {blog_data.title}
        </Link>
      ))}
    </ul>
  );
}

export default Page;

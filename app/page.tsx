import classes from "../styles/home.module.scss";
import Link from "next/link";

async function Page() {
  return (
    <div className="w-screen flex flex-col">
      <Link
        href={"/microcms"}
        className="mt-10 bg-slate-500 p-2 rounded-lg w-fit"
      >
        microcms blog test→
      </Link>

      <Link href={"/svg"} className="mt-10 bg-slate-500 p-2 rounded-lg w-fit">
        svg カスタマイズ→
      </Link>

      <Link
        href={"/grid/12column"}
        className="mt-10 bg-slate-500 p-2 rounded-lg w-fit"
      >
        grid 12columnレイアウト→
      </Link>

      <Link
        href={"/rowSlide"}
        className="mt-10 bg-slate-500 p-2 rounded-lg w-fit"
      >
        grid 12rowレイアウト→
      </Link>
    </div>
  );
}

export default Page;

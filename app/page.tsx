import Footer from "@/components/Footer";
import Image from "next/image";
import officePic from "./../public/OfficePic/officePic.jpg";
import HomeCarousel from "@/components/HomeCarousel";
import Works from "@/components/Works";
import Link from "next/link";

const Page = () => {
  return (
    <main className="flex w-full h-[calc(100vh-12px)] pt-16 max-lg:flex-col max-lg:h-full">
      <HomeCarousel />

      <div className="flex-shrink-0 h-full w-1/3 flex items-center justify-center px-10 bg-light max-lg:w-full max-lg:h-[33vh]">
        <p className="text-base/loose">
          静的サイトからCMS導入どの後の運用まで。 Webに関する知識がない方に
          「優しい」Webサイトをお届けいたします。
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-1/2 flex items-center justify-center relative max-lg:w-full max-lg:h-[33vh]">
        <h1 className="font-mont z-10 text-4xl text-Light font-bold ">
          About US
        </h1>
        <Image
          src="/Pic/About.png"
          fill
          alt={"About Pic"}
          className="h-full object-cover object-left"
          priority
        />
      </div>
      <div className="flex-shrink-0 h-full w-1/2 flex flex-col items-center justify-center px-10 bg-light max-lg:w-full max-lg:h-[50vh]">
        <p className="text-2xl/relaxed font-bold">
          「優しい」を届ける。
          <br />
          それが私たちの使命です。
        </p>
        <p className="mt-6 text-base/loose">
          小さな組織だからできる、細やかで迅速なサポート
          <br />
          お客様へ寄り添い、不安や悩みの解決をお手伝いいたします。
        </p>
      </div>
      <Works
        title={"LP制作"}
        src={"/Pic/LP.png"}
        paragraph={
          "一枚簡潔の広告・宣伝に特化したWebページ制作です。お問い合わせに繋がる設計をいたします。ご希望に沿って、ランディングページへの流入手段からご案内もいたします。"
        }
        button={"1ページ完結:300,000円～"}
        ps={
          "どのような構成にするか一緒に確認できたらと思いますので、お気軽にご相談ください。"
        }
      />
      <Works
        title={"ホームページ制作"}
        src={"/Pic/HP.png"}
        paragraph={
          "会社・店舗の顔となるホームページ制作です。制作目的・ご予算・ご希望のデザインなど、ヒアリングを行ったうえで、最善のご提案をいたします。"
        }
        button={"5ページ～:500,000円～"}
        ps={
          "どのようなページ構成にするか一緒に確認できたらと思いますので、お気軽にご相談ください。"
        }
      />
      <Works
        title={"ECサイト構築"}
        src={"/Pic/EC.png"}
        paragraph={
          "自社商品を販売できるECサイトをShopifyにて構築いたします。構築するだけでなく、実際にどのような発送手続きを行うのか等の運用の部分までお手伝いいたします。"
        }
        button={"5ページ～:500,000円～"}
        ps={
          "アプリ導入やページ構成について一緒に確認出来たらと思いますので、お気軽にご相談ください。"
        }
      />

      <div
        className="flex-shrink-0 h-full w-1/3 flex flex-col items-center justify-center bg-blue-400 text-Light p-10
      max-lg:w-full max-lg:h-[50vh]"
      >
        <h1 className="font-mont text-4xl font-bold mb-10">Works</h1>
        <p className="text-base/loose">
          Webサイトに訪れたユーザー目線で、ユーザビリティの高いサイト制作を行います。ブログ投稿機能、プラグインを用いてご希望に応じたカスタマイズをいたします。
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-1/3" />

      <div
        className="flex-shrink-0 h-full w-1/3 flex items-center justify-center px-10 bg-light
      max-lg:w-full max-lg:h-[33vh]"
      >
        <p className="text-base/loose">
          静的サイトからCMS導入どの後の運用まで。 Webに関する知識がない方に
          「優しい」Webサイトをお届けいたします。
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-1/2 flex items-center justify-center relative max-lg:w-full max-lg:h-[33vh]">
        <h1 className="font-mont z-10 text-4xl text-Light font-bold">
          Contact
        </h1>
        <Image
          src="/Pic/Contact.png"
          fill
          alt={"Contact Pic"}
          className="h-full object-cover object-center"
          priority
        />
      </div>

      <div className="flex-shrink-0 flex flex-col h-full w-1/2 bg-light max-lg:w-full max-lg:h-fit">
        <div className="h-1/2 flex flex-col justify-between p-10 px-24 max-lg:p-10">
          <h2 className="text-2xl font-bold">ご意見をお聞かせください</h2>
          <p className="mt-10 text-base/loose max-lg:mt-5">
            ホームページ制作やリニューアルのご依頼・ご相談はこちらからお問い合わせください。些細なことでも構いません。お気軽にご相談ください。
          </p>
          <div className="flex justify-center">
            <Link
              className="mt-10 rounded-lg py-4 px-10 relative border border-primary text-primary 
              hover:text-light overflow-hidden group
              max-lg:mt-5 max-lg:px-4 max-lg:py-2"
              href={"/contact"}
            >
              <div className="w-full h-full bg-primary absolute -left-60 top-0 group-hover:translate-x-60 duration-500" />
              <span className="z-10 relative delay-100">お問い合わせへ</span>
            </Link>
          </div>
        </div>
        <div className="h-1/2 w-full relative max-lg:h-[33vh]">
          <Image
            src="/Pic/Consul.png"
            fill
            alt={"Consul Pic"}
            className="w-full object-cover object-center"
            priority
          />
        </div>
      </div>
      <Footer />
      <Image
        src={officePic}
        alt={"office"}
        className="fixed w-screen h-full -z-50"
        priority
      />
    </main>
  );
};

export default Page;

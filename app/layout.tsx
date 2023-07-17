import "../styles/globals.css";
import "../styles/colors.scss";
import "../styles/buttons.scss";
import "../styles/ScrollBar.scss";
import NavBar from "@/components/NavBar/NavBar";
import NavFooter from "@/components/NavFooter";
import { Noto_Sans_JP, Montserrat } from "next/font/google";
import { Metadata } from "next";
import LPAnimation from "@/components/LPAnimation";

const notojp = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-notojp",
});

const mont = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata: Metadata = {
  title: {
    template: "%s | DDD",
    default: "DDD",
  },
  description:
    "専門的な技術と独自の視点でホームページ制作を手掛けるDDDです。顧客のビジネスを理解し、ユニークで効果的なウェブサイトをデザインします。コストパフォーマンスに優れ高品質なサポートで、ビジネス成長をサポートします。あなたのホームページ制作、私たちにお任せください。",
  openGraph: {
    title: "DDD",
    description:
      "専門的な技術と独自の視点でホームページ制作を手掛けるDDDです。顧客のビジネスを理解し、ユニークで効果的なウェブサイトをデザインします。コストパフォーマンスに優れ高品質なサポートで、ビジネス成長をサポートします。あなたのホームページ制作、私たちにお任せください。",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <meta
          name="google-site-verification"
          content="kr2yKh7Lr3PR09CtNgAJ2Hcd1YKqMJKGlVhzIOnmJT0"
        />
      </head>

      <body
        className={`min-h-[calc(100vh-14px)] text-dark bg-light ${mont.variable} ${notojp.variable} font-notojp `}
      >
        <LPAnimation />
        <NavBar />
        {children}
        <NavFooter />
      </body>
    </html>
  );
}

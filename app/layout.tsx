import "../styles/globals.css";
import "../styles/colors.scss";
import "../styles/buttons.scss";
import "../styles/ScrollBar.scss";
import NavBar from "@/components/NavBar/NavBar";
import NavFooter from "@/components/NavFooter";
import { Noto_Sans_JP, Montserrat } from "next/font/google";

const notojp = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-notojp",
});

const mont = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata = {
  title: "DDD",
  description: "Driven Design Duo web creator",
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
        <NavBar />
        {children}
        <NavFooter />
      </body>
    </html>
  );
}

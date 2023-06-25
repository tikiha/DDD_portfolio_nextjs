import "../styles/globals.css";
import "../styles/ScrollBar.css";
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
  title: "DDD HP",
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
        className={`min-h-screen text-dark bg-light ${mont.variable} ${notojp.variable} font-notojp `}
      >
        <NavBar />
        {children}
        <NavFooter />
      </body>
    </html>
  );
}

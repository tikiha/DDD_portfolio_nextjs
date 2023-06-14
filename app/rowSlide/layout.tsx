import Image from "next/image";
import officePic from "../../../public/officePic.jpg";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen overflow-y-hidden">
      <nav className="fixed w-[95%] mx-[2.5%] h-16 top-4 bg-blue-900 bg-opacity-90 shadow-lg rounded-lg">
        navigation
      </nav>
      <Image
        src={officePic}
        alt={"office"}
        className="fixed mt-16 w-screen h-full -z-10"
      />

      {children}
    </div>
  );
}

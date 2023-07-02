"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Inspect } from "lucide-react";
import ImacPic from "@/public/Pic/IMac.png";

const IMacCustom = ({ src }) => {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      className="h-full mx-auto relative max-md:px-7 max-md:py-6 flex items-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <Link href={"/"} className="cursor-pointer">
        <Image
          src={ImacPic}
          alt={"IMac"}
          className="h-auto w-full max-w-[280px]"
          priority
        />
        {hover && (
          <motion.div
            initial={{ clipPath: "circle(0% at 20% 20%)" }}
            animate={{ clipPath: "circle(150% at 20% 20%)" }}
            transition={{ duration: 0.7 }}
            className="absolute bottom-1/4 -translate-x-1/4 bg-primary px-4 py-2 rounded-lg w-fit flex items-center 
            max-md:hidden max-lg:px-2 max-lg:py-1 max-lg:text-body"
          >
            三菱商事
            <Inspect size={16} className="ml-4" />
          </motion.div>
        )}
      </Link>
    </motion.div>
  );
};

const Portfolios = () => {
  return (
    <div
      className="flex-shrink-0 h-full w-full px-32 py-10 gap-x-20 gap-y-14 mx-auto bg-light grid grid-cols-3 text-Light
      max-lg:px-12 max-lg:py-8 max-lg:gap-x-16 max-lg:gap-y-20
    max-md:grid-cols-2 max-md:p-0 max-md:gap-0"
    >
      <IMacCustom src={"/Pic/IMac.png"} />
      <IMacCustom src={"/Pic/IMac.png"} />
      <span className="w-full bg-primary h-fit px-8 text-body md:hidden font-semibold py-2 text-center">
        三菱商事
      </span>
      <span className="w-full bg-primary h-fit px-8 text-body md:hidden font-semibold py-2 text-center">
        三菱商事
      </span>
      <IMacCustom src={"/Pic/IMac.png"} />
      <IMacCustom src={"/Pic/IMac.png"} />

      <span className="w-full bg-primary h-fit px-8 text-body md:hidden font-semibold py-2 text-center">
        三菱商事
      </span>
      <span className="w-full bg-primary h-fit px-8 text-body md:hidden font-semibold py-2 text-center">
        三菱商事
      </span>
      <IMacCustom src={"/Pic/IMac.png"} />
      <IMacCustom src={"/Pic/IMac.png"} />

      <span className="w-full bg-primary h-fit px-8 text-body md:hidden font-semibold py-2 text-center">
        三菱商事
      </span>
      <span className="w-full bg-primary h-fit px-8 text-body md:hidden font-semibold py-2 text-center">
        三菱商事
      </span>
    </div>
  );
};

export default Portfolios;

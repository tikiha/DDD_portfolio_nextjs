"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Inspect } from "lucide-react";

const IMacCustom = ({ src }) => {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      className="h-full mx-auto relative"
      whileHover={{ scale: 1.1, opacity: 1 }}
      whileTap={{ scale: 0.9 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <Link href={"/"} className="cursor-pointer">
        <Image
          src={src}
          alt={"IMac"}
          width={100}
          height={100}
          className="h-full w-auto"
          priority
        />
        {hover && (
          <motion.div
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={{ clipPath: "circle(150% at 50% 50%)" }}
            transition={{ duration: 0.7 }}
            className="absolute bottom-5 -left-5 bg-primary px-4 py-2 text-light rounded-lg w-fit flex items-center"
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
    <div className="flex-shrink-0 h-full w-screen p-32 bg-light grid grid-cols-3 gap-28">
      <IMacCustom src={"/Pic/IMac.png"} />
      <IMacCustom src={"/Pic/IMac.png"} />
      <IMacCustom src={"/Pic/IMac.png"} />
      <IMacCustom src={"/Pic/IMac.png"} />
      <IMacCustom src={"/Pic/IMac.png"} />
      <IMacCustom src={"/Pic/IMac.png"} />
    </div>
  );
};

export default Portfolios;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Inspect } from "lucide-react";

const IMacCustom = ({ src, title, href }) => {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      className="h-full w-full max-md:px-7 max-md:mt-16 max-md:mb-8 max-md:h-fit flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <Link
        href={href}
        className="cursor-pointer h-full w-full max-md:aspect-square relative"
      >
        <Image
          src={src}
          fill
          alt={"IMac"}
          className="object-contain object-center"
          priority
        />
        {hover && (
          <motion.div
            initial={{ clipPath: "circle(0% at 20% 20%)" }}
            animate={{ clipPath: "circle(150% at 20% 20%)" }}
            transition={{ duration: 0.7 }}
            className="absolute bottom-1/4 left-0 -translate-x-1/4 bg-primary px-4 py-2 rounded-lg w-fit flex items-center 
            max-md:hidden max-lg:px-2 max-lg:py-1 max-lg:text-body"
          >
            {title}
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
      className="flex-shrink-0 w-full lg:h-full lg:min-w-[1500px] lg:px-32 lg:py-10 lg:gap-x-20 lg:gap-y-14 mx-auto bg-light grid grid-cols-3 text-Light
      max-lg:px-12 max-lg:py-8 max-lg:gap-x-8 max-lg:gap-y-20 max-lg:aspect-[2/1]
    max-md:grid-cols-2 max-md:p-0 max-md:gap-0"
    >
      <IMacCustom
        src={"/Portfolio/CorporatePortfolio_1/imac.png"}
        title={"コーポレートサイト"}
        href={"/works/CorporatePortfolio_1"}
      />
      <IMacCustom
        src={"/Portfolio/CorporatePortfolio_1/imac.png"}
        title={"コーポレートサイト"}
        href={"/works/CorporatePortfolio_1"}
      />
      <span className="w-full bg-primary h-fit px-8 text-body md:hidden font-semibold py-2 text-center">
        コーポレートサイト
      </span>
      <span className="w-full bg-primary h-fit px-8 text-body md:hidden font-semibold py-2 text-center">
        コーポレートサイト
      </span>
      <IMacCustom
        src={"/Portfolio/CoffeePortfolio/imac.png"}
        title={"珈琲店"}
        href={"/works/CoffeePortfolio"}
      />
      <IMacCustom
        src={"/Portfolio/CoffeePortfolio/imac.png"}
        title={"珈琲店"}
        href={"/works/CoffeePortfolio"}
      />

      <span className="w-full bg-primary h-fit px-8 text-body md:hidden font-semibold py-2 text-center">
        珈琲店
      </span>
      <span className="w-full bg-primary h-fit px-8 text-body md:hidden font-semibold py-2 text-center">
        珈琲店
      </span>

      <IMacCustom
        src={"/Portfolio/IzakayaPortfolio/imac.png"}
        title={"居酒屋"}
        href={"/works/IzakayaPortfolio"}
      />
      <IMacCustom
        src={"/Portfolio/IzakayaPortfolio/imac.png"}
        title={"居酒屋"}
        href={"/works/IzakayaPortfolio"}
      />

      <span className="w-full bg-primary h-fit px-8 text-body md:hidden font-semibold py-2 text-center">
        居酒屋
      </span>
      <span className="w-full bg-primary h-fit px-8 text-body md:hidden font-semibold py-2 text-center">
        居酒屋
      </span>
    </div>
  );
};

export default Portfolios;

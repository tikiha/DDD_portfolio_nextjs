"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ddd from "../public/DDD.svg";
import Image from "next/image";

const LPAnimation = () => {
  const [islayout, setislayout] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("hasVisited")) {
      setIsFirstVisit(true);
      sessionStorage.setItem("hasVisited", "true");
    }
    setTimeout(() => {
      setislayout(false);
    }, 4000);
  }, []);

  if (!isFirstVisit) {
    return null;
  }

  return (
    <>
      {islayout && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 3 }}
          className="fixed w-full h-full bg-Primary z-50 flex items-center justify-center "
        >
          <Image src={ddd} alt={"Driven Design Duo"} width={400} height={400} />
        </motion.div>
      )}
    </>
  );
};

export default LPAnimation;

"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LPAnimation = () => {
  const [islayout, setislayout] = useState(false);
  useEffect(() => {
    setislayout(true);
    setTimeout(() => {
      setislayout(false);
    }, 2000);
  }, []);
  return (
    <AnimatePresence>
      {islayout && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed w-full h-full bg-dark z-50"
        >
          <div className="absolute top-0 left-0 w-full h-full text-light">
            animation
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LPAnimation;

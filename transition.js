"use client";

import { motion, AnimatePresence } from "framer-motion";

const transition = (component) => {
  return () => (
    <>
      <component />
      <motion.div
        className="slide-in fixed top-0 left-0 w-[100%] h-[100vh] bg-[#0f0f0f] origin-right"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out fixed top-0 left-0 w-[100%] h-[100vh] bg-[#0f0f0f] origin-right"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default transition;

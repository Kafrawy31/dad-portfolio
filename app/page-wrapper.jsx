"use client";
import { motion, AnimatePresence } from "framer-motion";

const PageWrapper = ({ children }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          key="overlay-1" // Add a unique key here
          className="absolute top-0 left-0 w-[100%] h-[100vh] bg-[#0f0f0f] origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ zIndex: 10000 }}
        />
        <motion.div
          key="overlay-2" // Add a unique key here
          className="absolute top-0 left-0 w-[100%] h-[100vh] bg-[#14ff72cb] origin-left"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ zIndex: 10000 }}
        />

        <div>{children}</div>
      </AnimatePresence>
    </>
  );
};

export default PageWrapper;

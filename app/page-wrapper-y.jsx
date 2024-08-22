"use client";
import { motion, AnimatePresence } from "framer-motion";

const PageWrapperUp = ({ children }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          key="overlay-1" // Add a unique key here
          className="absolute top-0 left-0 w-[100%] h-[100vh] bg-[#0f0f0f] origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ zIndex: 10000 }}
        />
        <motion.div
          key="overlay-2" // Add a unique key here
          className="absolute top-0 left-0 w-[100%] h-[100vh] bg-[#0f0f0f] origin-bottom"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ zIndex: 10000 }}
        />

        <div>{children}</div>
      </AnimatePresence>
    </>
  );
};

export default PageWrapperUp;

import { motion, useAnimationControls, useScroll } from "framer-motion";
import { useEffect } from "react";

import { Variants } from "framer-motion";
import clsx from "clsx";
import { FaArrowUp } from "react-icons/fa";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

export const ScrollToTopContainerVariants: Variants = {
  hide: { opacity: 0, y: 40  },
  show: { opacity: 1, y: 0 },
};

export function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function ScrollToTopButton() {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      if (latestValue > 0.5) {
        controls.start("show");
      } else {
        controls.start("hide");
      }
    });
  });

  return (
    <motion.button
      className={clsx(
        "fixed bottom-0 right-0",
        "text-xs p-2 m-2 bg-dsOrange rounded-full",
        "xl:text-xl xl:m-10"
      )}
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </motion.button>
  );
}

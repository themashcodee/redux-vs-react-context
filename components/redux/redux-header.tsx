import { RenderAnimation } from "animation";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

export const Header = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate");
    setTimeout(() => controls.start("initial"), 1000);
  });

  return (
    <motion.header
      initial="initial"
      animate={controls}
      variants={RenderAnimation}
      className="w-full h-12 bg-gray-100 items-center flex px-3"
    >
      <span className="sm:text-2xl text-xl font-semibold">
        Redux (Redux toolkit)
      </span>
    </motion.header>
  );
};

import { RenderAnimation } from "animation";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

export const Description = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate");
    setTimeout(() => controls.start("initial"), 1000);
  });

  return (
    <motion.div
      initial="initial"
      animate={controls}
      variants={RenderAnimation}
      className="grow"
    >
      <ol className="list-disc pl-4">
        <li>Good for small projects</li>
        <li>
          Re-renders the entire application because of the state is defined in
          the main(App) component. This can be fixed with the help of
          React.memo()
        </li>
        <li>Good for read not for write</li>
        <li>Super easy to setup</li>
      </ol>
    </motion.div>
  );
};

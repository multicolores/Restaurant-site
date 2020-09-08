import React from "react";
import "./App.scss";

import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    y: "-1%",
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "1%",
  },
};
const pageTransition = {
  duration: 1,
  ease: "anticipate",
};

function About() {
  return (
    <>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <h1>About page</h1>
      </motion.div>
    </>
  );
}

export default About;

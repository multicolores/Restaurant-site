import React from "react";
import "./App.scss";
import Home from "./home";
import Footer from "./footer";
import About from "./about";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import image_pates from "./photo/pates.jpg";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};
const pageTransition = {
  duration: 1,
  ease: "anticipate",
};

function Visit() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const scale3 = useTransform(scrollYProgress, [0.5, 1], [1, 1.1]);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="eat-container"
    >
      <section className="section-header">
        <Home />
      </section>
      <About />

      <Footer />
      <section className="section-invi"></section>
    </motion.div>
  );
}

export default Visit;

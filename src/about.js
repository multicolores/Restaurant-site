import React from "react";
import "./App.scss";
import image from "./photo/home_image.jpg";
import { motion, useTransform, useViewportScroll } from "framer-motion";

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

function About() {
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [-0.001, 0.05], [1, 0]); // [ du haut de la page (0), jusque en bas (1)], [scale passe de 1 ( en haut ), a 1.25 ( en bas )]
  const y = useTransform(scrollYProgress, [-0.001, 0.05], [0, -100]);

  return (
    <>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="about_container"
      >
        <div className="header">
          <img src={image} alt="" />
          <motion.div style={{ opacity: opacity }} className="h1">
            <motion.h1 style={{ y: y }}>About</motion.h1>
          </motion.div>
        </div>
        <h2>text</h2>
        <p>
          test deploy avec netlify et git hub : ca marche : la ca marche peut
          etre mieux. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo quisquam magnam iusto, consequuntur autem suscipit maiores
          est facilis labore quibusdam excepturi necessitatibus repellendus
          tempora, nam iure perspiciatis, corporis nesciunt neque?
        </p>
      </motion.div>
    </>
  );
}

export default About;

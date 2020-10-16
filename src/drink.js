import React from "react";
import "./App.scss";
import Home from "./home";
import Footer from "./footer";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import image_mojoti from "./photo/mojito.jpg";
import image_cafe from "./photo/cafe.jpg";
import image_drinks from "./photo/drinks.jpg";


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

function Drink() {
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
      <div className="container_all">
        <h2></h2>
        <h1>Boissons chaudes</h1>
        <div className="item-container">
          <div className="plat-item-container">
            <p>— nom d'entré —</p>
            <p>exemple, ingrédient, exemple</p>
            <p>7€</p>
          </div>
          <div className="plat-item-container">
            <p>— nom d'entré —</p>
            <p>exemple, ingrédient, exemple</p>
            <p>7€</p>
          </div>
          <div className="plat-item-container">
            <p>— nom d'entré —</p>
            <p>exemple, ingrédient, exemple</p>
            <p>7€</p>
          </div>
          <div className="plat-item-container">
            <p>— nom d'entré —</p>
            <p>exemple, ingrédient, exemple</p>
            <p>7€</p>
          </div>
          <div className="plat-item-container">
            <p>— nom d'entré —</p>
            <p>exemple, ingrédient, exemple</p>
            <p>7€</p>
          </div>
          <div className="plat-item-container">
            <p>— nom d'entré —</p>
            <p>exemple, ingrédient, exemple</p>
            <p>7€</p>
          </div>
          <div className="plat-item-container">
            <p>— nom d'entré —</p>
            <p>exemple, ingrédient, exemple</p>
            <p>7€</p>
          </div>
          <div className="plat-item-container">
            <p>— nom d'entré —</p>
            <p>exemple, ingrédient, exemple</p>
            <p>7€</p>
          </div>
          <div className="plat-item-container">
            <p>— nom d'entré —</p>
            <p>exemple, ingrédient, exemple</p>
            <p>7€</p>
          </div>
        </div>

        <div className="image-container-entre">
          <motion.img
            src={image_mojoti}
            alt=""
            style={{ scale: scale, y: "-20%" }}
          />
        </div>

        <div className="plats">
          <h1>Boissons froides</h1>
        </div>
        <div className="item-container">
          <div className="plat-item-container">
            <p>— nom d'entré —</p>
            <p>exemple, ingrédient, exemple</p>
            <p>7€</p>
          </div>
          <div className="plat-item-container">
            <p>— nom d'entré —</p>
            <p>exemple, ingrédient, exemple</p>
            <p>7€</p>
          </div>
          <div className="plat-item-container">
            <p>— nom d'entré —</p>
            <p>exemple, ingrédient, exemple</p>
            <p>7€</p>
          </div>
          <div className="plat-item-container">
            <p>— nom d'entré —</p>
            <p>exemple, ingrédient, exemple</p>
            <p>7€</p>
          </div>
          <div className="plat-item-container">
            <p>— nom d'entré —</p>
            <p>exemple, ingrédient, exemple</p>
            <p>7€</p>
          </div>
          <div className="plat-item-container">
            <p>— nom d'entré —</p>
            <p>exemple, ingrédient, exemple</p>
            <p>7€</p>
          </div>
          <div className="plat-item-container">
            <p>— nom d'entré —</p>
            <p>exemple, ingrédient, exemple</p>
            <p>7€</p>
          </div>
          <div className="plat-item-container">
            <p>— nom d'entré —</p>
            <p>exemple, ingrédient, exemple</p>
            <p>7€</p>
          </div>
          <div className="plat-item-container">
            <p>— nom d'entré —</p>
            <p>exemple, ingrédient, exemple</p>
            <p>7€</p>
          </div>
        </div>

        <div className="image-container-entre">
          <motion.img
            src={image_cafe}
            alt=""
            style={{ scale: scale, y: "-20%" }}
          />
        </div>

        <div className="desserts">
          <h1>Vins</h1>
        </div>
        <div className="item-container-2">
          <div className="plat-item-container">
            <p>— nom d'entré —</p>
            <p>exemple, ingrédient, exemple</p>
            <p>7€</p>
          </div>
          <div className="plat-item-container">
            <p>— nom d'entré —</p>
            <p>exemple, ingrédient, exemple</p>
            <p>7€</p>
          </div>
          <div className="plat-item-container">
            <p>— nom d'entré —</p>
            <p>exemple, ingrédient, exemple</p>
            <p>7€</p>
          </div>
          <div className="plat-item-container">
            <p>— nom d'entré —</p>
            <p>exemple, ingrédient, exemple</p>
            <p>7€</p>
          </div>
          <div className="plat-item-container">
            <p>— nom d'entré —</p>
            <p>exemple, ingrédient, exemple</p>
            <p>7€</p>
          </div>
        </div>

        <div className="image-container-entre">
          <motion.img
            src={image_drinks}
            alt=""
            style={{ scale: scale3, y: "-20%" }}
          />
        </div>
      </div>

      <Footer />
      <section className="section-invi"></section>
    </motion.div>
  );
}

export default Drink;

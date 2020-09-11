import React from "react";
import "./App.scss";
import Home from "./home";
import Footer from "./footer";
import { motion } from "framer-motion";

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

function Eat() {
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
        <h1>Nos Entrés</h1>
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

        <div className="plats">
          <h1>Nos Plats</h1>
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

        <div className="desserts">
          <h1>Nos Desserts</h1>
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
      </div>
      <Footer />
      <section className="section-invi"></section>
    </motion.div>
  );
}

export default Eat;

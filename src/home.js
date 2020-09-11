import React, { useState } from "react";
import "./App.scss";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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

// importer toutes les images d'un coup et tous les affichers
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./photo", false, /\.(png|jpe?g|svg)$/)
);

function Home() {
  const [revealImage, setRevealImage] = useState({
    show: true,
    image: "home_image.jpg",
    key: "0",
  });
  return (
    <>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <header>
          <div className="container-nav-header">
            <div className="adresse">
              <p>32 rue du Maréchale a Laville</p>
            </div>
            <div className="nav-header-items">
              <Link to="/eat">
                <a href="">
                  <motion.span
                    onHoverStart={() =>
                      setRevealImage({
                        show: true,
                        image: "home_eat.jpg",
                        key: "1",
                      })
                    }
                    onHoverEnd={() =>
                      setRevealImage({
                        show: false,
                        image: "home_image.jpg",
                        key: "0",
                      })
                    }
                  >
                    Eat
                  </motion.span>
                </a>
              </Link>
              <a href="">
                <motion.span
                  onHoverStart={() =>
                    setRevealImage({
                      show: true,
                      image: "home_drink.jpg",
                      key: "2",
                    })
                  }
                  onHoverEnd={() =>
                    setRevealImage({
                      show: true,
                      image: "home_image.jpg",
                      key: "0",
                    })
                  }
                >
                  Drink
                </motion.span>
              </a>
              <a href="">
                <motion.span
                  onHoverStart={() =>
                    setRevealImage({
                      show: true,
                      image: "home_visit.jpg",
                      key: "2",
                    })
                  }
                  onHoverEnd={() =>
                    setRevealImage({
                      show: true,
                      image: "home_image.jpg",
                      key: "0",
                    })
                  }
                >
                  Visit
                </motion.span>
              </a>
            </div>
          </div>
          <AnimatePresence initial={false}>
            <motion.img
              key={revealImage.key}
              src={images[revealImage.image]}
              alt=""
              className="background_image"
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.3,
              }}
            />
          </AnimatePresence>
        </header>
      </motion.div>
    </>
  );
}

export default Home;

/* <motion.div
          className="images-container"
          drag={"x"}
          dragConstraints={{ left: "100%", right: 0 }}
        >
          <img src={images["image1.jpg"]} alt="" />
          <img src={images["2.jpg"]} alt="" id="Guéridon_Rossi" />
          <img src={images["3.jpg"]} alt="" />
          <img src={images["plan1.jpg"]} alt="" />
          <img src={images["plan2.jpg"]} alt="" />
          <img src={images["plan3.jpg"]} alt="" />
          <img src={images["kujten.jpg"]} alt="" />
          <img src={images["vueprincipale1.jpg"]} alt="" />
          <img src={images["vueprincipale2.jpg"]} alt="" />
          <img src={images["vueprincipale3.jpg"]} alt="" />
          <img src={images["vueprincipale4.jpg"]} alt="" />
          <img src={images["table.jpg"]} alt="" />
          <img src={images["table2.jpg"]} alt="" />
          <img src={images["detaille.jpg"]} alt="" />
          <img src={images["detaille2.jpg"]} alt="" />
        </motion.div> */

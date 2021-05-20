import React, { useState, useEffect } from "react";
import "./App.scss";
import { motion, useViewportScroll } from "framer-motion";

import { Link } from "react-router-dom";

function Nav() {
  // pour le nav qui apparait quand on scroll vers le top
  const [shouldShowAction, setSouldShowAction] = React.useState(true);
  const [lastYpos, setLastYPos] = React.useState(0);
  const scroll_bottom = useViewportScroll();

  React.useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYpos;

      setSouldShowAction(isScrollingUp);
      setLastYPos(yPos);
    }
    window.addEventListener("scroll", handleScroll, false);

    if (scroll_bottom.scrollYProgress.current > 1.2) {
      setSouldShowAction(true);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYpos]);
  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: shouldShowAction ? 1 : 0 }}
      >
        <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Restaurant</span>
        </Link>
        </div>


        {/* <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Home</li>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <li>About</li>
          </Link>
        </ul> */}
      </motion.nav>
    </>
  );
}

export default Nav;

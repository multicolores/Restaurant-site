import React, { useState, useEffect } from "react";
import "./App.scss";
import Nav from "./nav";
import Home from "./home";
import About from "./about";
import Eat from "./eat";
import Drink from "./drink";
import Visit from "./visit";
import ScrollToTop from "./scrollToTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise((resolve) => setTimeout(() => resolve(), 1));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route
          render={({ location }) => (
            <AnimatePresence initial={false} exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/eat" exact component={Eat} />
                <Route path="/drink" exact component={Drink} />
                <Route path="/visit" exact component={Visit} />
              </Switch>
            </AnimatePresence>
          )}
        />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;

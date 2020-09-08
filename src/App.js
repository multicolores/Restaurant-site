import React from "react";
import "./App.scss";
import Nav from "./nav";
import Home from "./home";
import About from "./about";
import Eat from "./eat";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function App() {
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
              </Switch>
            </AnimatePresence>
          )}
        />
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import "./App.scss";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="contact">
            <h3>contact</h3>
            <p>adresse</p>
            <p>numéro</p>
            <p>adresemail@gmail.com</p>
            <p>Lorem, ipsum dolor.</p>
          </div>

          <h1>restaurant</h1>
          <div className="horaire">
            <h3>horaire</h3>
            <p>lundi - vendredi 12 - 15</p>
            <p>lundi - vendredi 12 - 15</p>
            <p>vendredi 12 - 15</p>
            <p>reserve</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

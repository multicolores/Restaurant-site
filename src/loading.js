import React from "react";
import ReactLoading from "react-loading";

function test() {
  const loader = document.querySelector(".loading");
  console.log("test");

  window.addEventListener("load", () => {
    loader.classList.add("loading_out");
    console.log("test");
  });
}

const Loading = () => (
  <div className="loading" onLoadStart={test()}>
    <ReactLoading type="spinningBubbles" color="black" />
  </div>
);
export default Loading;

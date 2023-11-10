import React from "react";
import "./parallax.scss";

const Parallax = ({ type }) => {
  return (
    <div
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg,#111132,#505064",
      }}
    >
      <h1>{type === "services" ? "what we Do?" : "what we Did?"}</h1>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Parallax;

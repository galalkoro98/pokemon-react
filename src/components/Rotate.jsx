import React from "react";

import "../styles/Rotate.css";

import background from "../assets/images/background.png";
import evo from "../assets/images/evolution.png";

export const Rotate = () => {
  return (
    <div className="pokemon__rotate__container">
      <div className="pokemon__rotate__content">
        <img
          className="pokemon__background__rotate__image"
          src={background}
          alt="rotate background"
        />
        <img
          className="pokemon__rotate__image__evolution"
          src={evo}
          alt="evolution img"
        />
      </div>
    </div>
  );
};

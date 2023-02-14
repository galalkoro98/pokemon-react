import React from "react";

import icon from "../assets/images/icon.png";

import "../styles/Evolution.css";

export const Evolution = () => {
  return (
    <div className="pokemon__evolution__container">
      <div className="pokemon__evolution__content">
        <h3 className="pokemon__evolution__name"> </h3>
        <img className="pokemon__evolution__image" src={icon} alt="evolution" />
      </div>
    </div>
  );
};

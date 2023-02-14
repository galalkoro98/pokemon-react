import React from "react";

import "../styles/Type.css"

export const Type = () => {
  return (
    <div className="pokemon__type__container">
      <h2 className="pokemon__type__title">Type</h2>
      <div className="pokemon__type__list__container">
        <ul className="pokemon__type__list">
          <li className="type__item">Grass</li>
          <li className="type__item">Poison</li>
        </ul>
      </div>
    </div>
  );
};

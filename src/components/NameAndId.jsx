import React from "react";

import { GetPokemon } from "../scripts/GetPokemon";

import "../styles/NameAndId.css";

export const NameAndId = () => {
  const { pokemon } = GetPokemon();
  return (
    <div className="pokemon__id__name__container">
      <h3 className="pokemon__number__header">
        <span className="pokemon__id__number">44</span>
      </h3>

      {pokemon && (
        <h2 className="pokemon__name">
          {pokemon.name}
          Ash
        </h2>
      )}
    </div>
  );
};

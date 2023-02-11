import React from "react";
import background from "./images/background.png";
import icon from "./images/icon.png";
import evo from "./images/evolution.png";
import "./styles/sectionPokemon.css";
import { Article } from "./Article";

import { usePokemon } from "../Pokemon";

export const SectionPokemon = () => {
  const { pokemonData } = usePokemon();
  return (
    <section className="section__pokemon">
      <div className="article__type__container">
        <div className="type__container">
          <div className="type__pokemon__content">
            <h2 className="type__title">Type</h2>
            <div className="type__list__content">
              <ul className="type"></ul>
            </div>
          </div>
          <div className="evolution__container">
            <div className="evolution__pokemon__content">
              <h3 className="evolution"> </h3>
              <img className="evolution__image" src={icon} alt="evolution" />
            </div>
          </div>
        </div>
      </div>

      <div className="pokemon__image__container">
        <div className="pokemon__image__content">
          <h3 className="pokemon__id__number">
            {pokemonData && (
              <span className="pokemon__id">`${" #" + pokemonData.id}`</span>
            )}
          </h3>
          {pokemonData && (
            <h2 className="pokemon__name"> {pokemonData.name} Ash</h2>
          )}
        </div>
        <div className="pokemon__display__container">
          <div className="pokemon__display__content">
            <img
              className="pokemon__background__image"
              src={background}
              alt="rotate background"
            />
            <img
              className="pokemon__evolution__image"
              src={evo}
              alt="evolution img"
            />
          </div>
        </div>
      </div>

      <Article />
    </section>
  );
};

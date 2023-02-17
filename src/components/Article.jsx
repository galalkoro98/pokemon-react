import React from "react";

import "../styles/Article.css";

export const Article = (props) => {
  return (
    <article className="pokemon__article">
      <div className="pokemon__info__container">
        <div className="pokemon__info__content">
          <h2 className="pokemon__info__title">Abilities</h2>
          <ul className="pokemon__info__list">
            {props.pokemon.abilities &&
              props.pokemon.abilities.map((ability) => {
                return (
                  <li className="pokemon__info__item" key1={ability.slot}>
                    {ability.ability.name}
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="pokemon__movies__container">
          <div className="pokemon__movies__content">
            <h3 className="pokemon__movies__title">Movies</h3>
            {props.pokemon.game_indices &&
              props.pokemon.game_indices.length > 0 && (
                <ul className="pokemon__movies__list">
                  {props.pokemon.game_indices.map((game, index) => {
                    if (index > 3) {
                      return null;
                    }
                    return (
                      <li
                        className="pokemon__movies__item"
                        key2={game.game_index}
                      >
                        {game.version.name}
                      </li>
                    );
                  })}
                </ul>
              )}
          </div>
        </div>
        <div className="pokemon__evolution__chain"></div>
      </div>
    </article>
  );
};

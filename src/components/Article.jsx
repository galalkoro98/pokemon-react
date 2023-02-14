import React from "react";

import "../styles/Article.css";

export const Article = () => (
  <article className="pokemon__article">
    <div className="pokemon__info__container">
      <div className="pokemon__info__content">
        <h2 className="pokemon__info__title">Abilities</h2>
        <ul className="pokemon__info__list"></ul>
      </div>
      <div className="pokemon__movies__container">
        <div className="pokemon__movies__content">
          <h3 className="pokemon__movies__title">Movies</h3>
          <ul className="pokemon__movies__list"></ul>
        </div>
      </div>
      <div className="pokemon__evolution__chain"></div>
    </div>
  </article>
);

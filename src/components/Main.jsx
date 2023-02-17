import React, { useState } from "react";

import "../styles/Main.css";
import "../styles/Section.css";
import "../styles/NameAndId.css";
import "../styles/Type.css";
import "../styles/Evolution.css";

import icon from "../assets/images/icon.png";

import { Article } from "./Article";
import { Rotate } from "./Rotate";
import { Form } from "./Form";

export const Main = () => {
  const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [pokemonEvolution, setPokemonEvolution] = useState({});

  const getPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    const data = await response.json();
    setPokemon(data);
  };

  const getPokemonEvolution = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/evolution-chain/${input}`
    );
    const data = await response.json();
    setPokemonEvolution(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
    getPokemonEvolution();
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <main className="main">
      <section className="section__pokemon">
        <div className="type__and__evolution__container">
          <div className="type__and__evolution__content">
            <div className="pokemon__type__container">
              <h2 className="pokemon__type__title">Type</h2>
              <div className="pokemon__type__list__container">
                <ul className="pokemon__type__list">
                  {pokemon.types &&
                    pokemon.types.map((type) => {
                      return (
                        <li className="pokemon__type__item" key={type.slot}>
                          {type.type.name}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <div className="pokemon__evolution__container">
              <div className="pokemon__evolution__content">
                <h3 className="pokemon__evolution__name">
                  {pokemonEvolution.name}
                </h3>
                <img
                  className="pokemon__evolution__image"
                  src={icon}
                  alt="evolution"
                  {...(pokemonEvolution.image
                    ? {
                        src: pokemonEvolution.image,
                      }
                    : {
                        src: icon,
                      })}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container__NameAndId__and__Rotate">
          <div className="pokemon__id__name__container">
            <h3 className="pokemon__number__header">
              {pokemon && (
                <span className="pokemon__id__number">ID:{pokemon.id}</span>
              )}
            </h3>
            <h2 className="pokemon__name">
              Name:
              {pokemon.name}
            </h2>
          </div>
          <Rotate pokemon={pokemon} />
        </div>
        <Article pokemon={pokemon} />
      </section>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        input={input}
      />
    </main>
  );
};

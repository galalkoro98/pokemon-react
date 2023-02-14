import { useState } from "react";
import { ToHandleInput } from "./ToHandleInput";

export const GetPokemon = () => {
  const { input, setInput } = ToHandleInput();
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    const data = await response.json();
    setPokemon(data.results);
    
    // console.log(data);
  };

  return { pokemon, getPokemon, input, setInput };
};

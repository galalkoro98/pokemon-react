import { useState, useEffect, useRef } from "react";

export const usePokemon = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [inputField, setInputField] = useState("");
  const inputRef = useRef(null);

  const handleInput = (event) => {
    setInputField(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    fetchData();
  };

  const apiUrl = `https://pokeapi.co/api/v2/pokemon/`;
  const fetchData = async () => {
    const pokemonApi = await fetch(`${apiUrl}${inputField}`);
    const data = await pokemonApi.json();
    setPokemonData(data);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData, inputField]);

  return {
    pokemonData,
    inputField,
    inputRef,
    handleInput,
    handleClick,
    setPokemonData,
    setInputField,
  };
};

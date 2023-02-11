import React from "react";

import { Input } from "./Input";
import { usePokemon } from "../Pokemon";

export const Button = () => {
  const { handleClick } = usePokemon();
  return (
    <div className="pokemon__button__container">
      <Input />
      <button className="pokemon__button" type="submit" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

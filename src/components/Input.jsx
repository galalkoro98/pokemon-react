import React from "react";

import { usePokemon } from "../Pokemon";

export const Input = () => {
  const { inputField, handleInput, inputRef } = usePokemon();
  return (
    <input
      className="search__field"
      placeholder="search name or ID"
      type="text"
      value={inputField}
      onChange={handleInput}
      ref={inputRef}
    />
  );
};

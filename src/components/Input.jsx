import React from "react";

import { ToHandleInput } from "../scripts/ToHandleInput";

import "../styles/Input.css";

export const Input = () => {
  const { input, handleInput } = ToHandleInput();
  return (
    <input
      value={input}
      onChange={handleInput}
      className="search__field"
      placeholder="search name or ID"
      type="text"
    />
  );
};

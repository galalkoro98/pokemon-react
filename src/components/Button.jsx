import React from "react";

import { Input } from "./Input";

export const Button = () => (
  <div className="pokemon__button__container">
    <Input />
    <button className="pokemon__button">Search</button>
  </div>
);

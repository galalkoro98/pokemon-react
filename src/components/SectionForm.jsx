import React from "react";

import "./styles/sectionForm.css";
import { Button } from "./Button";

import { usePokemon } from "../Pokemon";

export const SectionForm = () => {
  const { handleInput } = usePokemon();
  return (
    <section className="search__section">
      <div className="pokemon__search__container">
        <form className="pokemon__form" onSubmit={handleInput}>
  
          <Button />
        </form>
      </div>
    </section>
  );
};

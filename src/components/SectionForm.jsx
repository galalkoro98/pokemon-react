import React from "react";

import './styles/sectionForm.css';
import { Button } from "./Button";

export const SectionForm = () => (
  <section className="search__section">
    <div className="pokemon__search__container">
      <form className="pokemon__form">
        <Button />
      </form>
    </div>
  </section>
);

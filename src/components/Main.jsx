import React from "react";

import { SectionPokemon } from "./SectionPokemon";
import { SectionForm } from "./SectionForm";
import './styles/Main.css'

export const Main = () => (
  <main className="main">
    <SectionPokemon />
    <SectionForm />
  </main>
);

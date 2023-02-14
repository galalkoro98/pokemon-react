import React from "react";

import "../styles/App.css";

import { Main } from "./Main";

export const App = () => (
  <>
    <header>
      <div className="header__content">
        <h1>Pokemon</h1>
      </div>
    </header>
    <Main />
  </>
);

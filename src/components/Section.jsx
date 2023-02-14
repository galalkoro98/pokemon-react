import React from "react";

import "../styles/Section.css";

import { Article } from "./Article";
import { Type } from "./Type";
import { Evolution } from "./Evolution";
import { NameAndId } from "./NameAndId";
import { Rotate } from "./Rotate";

export const Section = () => {
  return (
    <section className="section__pokemon">
      <div className="type__and__evolution__container">
        <div className="type__and__evolution__content">
          <Type />
          <Evolution />
        </div>
      </div>
      <div className="container__NameAndId__and__Rotate">
        <NameAndId />
        <Rotate />
      </div>
      <Article />
    </section>
  );
};

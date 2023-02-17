import React from "react";

import "../styles/Form.css";
import "../styles/Input.css";

import { Button } from "./Button";

export const Form = (props) => {
  return (
    <>
      <section className="pokemon__from__container">
        <div className="pokemon__form__content">
          <form className="pokemon__form" onSubmit={props.handleSubmit}>
            <input
              onChange={props.handleChange}
              value={props.input}
              className="search__field"
              placeholder="search name or ID"
              type="text"
            />
            <Button />
          </form>
        </div>
      </section>
    </>
  );
};
